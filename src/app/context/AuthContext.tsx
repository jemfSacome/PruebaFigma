import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type UserRole = 'admin' | 'calidad' | 'compras' | 'produccion';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuarios de ejemplo para demostración
const mockUsers: Record<string, { password: string; user: User }> = {
  'admin@empresa.com': {
    password: 'admin123',
    user: {
      id: '1',
      name: 'Administrador',
      email: 'admin@empresa.com',
      role: 'admin',
    },
  },
  'calidad@empresa.com': {
    password: 'calidad123',
    user: {
      id: '2',
      name: 'Usuario Calidad',
      email: 'calidad@empresa.com',
      role: 'calidad',
    },
  },
  'compras@empresa.com': {
    password: 'compras123',
    user: {
      id: '3',
      name: 'Usuario Compras',
      email: 'compras@empresa.com',
      role: 'compras',
    },
  },
  'produccion@empresa.com': {
    password: 'produccion123',
    user: {
      id: '4',
      name: 'Usuario Producción',
      email: 'produccion@empresa.com',
      role: 'produccion',
    },
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de login con usuarios mock
    const mockUser = mockUsers[email];
    
    if (mockUser && mockUser.password === password) {
      setUser(mockUser.user);
      localStorage.setItem('user', JSON.stringify(mockUser.user));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}