import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { useAuth } from '@/app/context/AuthContext';
import { LogOut, User, ClipboardCheck, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';

export function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#161b22',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Barra de navegación superior */}
      <nav
        style={{
          backgroundColor: '#1b263b',
          borderBottom: '1px solid #3e3e42',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo y navegación */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#252526',
                border: '1px solid #3e3e42',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ClipboardCheck size={18} style={{ color: '#4a9eff' }} />
            </div>
            <span style={{ color: '#ccc', fontSize: '18px', fontWeight: 600 }}>
              Sistema de Gestión
            </span>
          </div>

          {/* Tabs de navegación */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <Link
              to="/calidad"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                color: location.pathname === '/calidad' || location.pathname === '/' ? '#ccc' : '#858585',
                backgroundColor: location.pathname === '/calidad' || location.pathname === '/' ? '#252526' : 'transparent',
                border: location.pathname === '/calidad' || location.pathname === '/' ? '1px solid #3e3e42' : '1px solid transparent',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#252526';
                e.currentTarget.style.borderColor = '#3e3e42';
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/calidad' && location.pathname !== '/') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <ClipboardCheck size={16} />
              Gestión de Calidad
            </Link>

            <Link
              to="/compras"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                color: location.pathname === '/compras' ? '#ccc' : '#858585',
                backgroundColor: location.pathname === '/compras' ? '#252526' : 'transparent',
                border: location.pathname === '/compras' ? '1px solid #3e3e42' : '1px solid transparent',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#252526';
                e.currentTarget.style.borderColor = '#3e3e42';
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/compras') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <ShoppingCart size={16} />
              Gestión de Compras
            </Link>
          </div>
        </div>

        {/* Usuario y logout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 12px',
              backgroundColor: '#252526',
              border: '1px solid #3e3e42',
              borderRadius: '4px',
            }}
          >
            <User size={16} style={{ color: '#858585' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#ccc', fontSize: '14px' }}>{user.name}</span>
              <span style={{ color: '#858585', fontSize: '11px', textTransform: 'capitalize' }}>
                {user.role}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#252526',
              border: '1px solid #3e3e42',
              borderRadius: '4px',
              color: '#ccc',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#4a1616';
              e.currentTarget.style.borderColor = '#8b2020';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#252526';
              e.currentTarget.style.borderColor = '#3e3e42';
            }}
          >
            <LogOut size={16} />
            Cerrar Sesión
          </button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main
        style={{
          flex: 1,
          overflow: 'auto',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}