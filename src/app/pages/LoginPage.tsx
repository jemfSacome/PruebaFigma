import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/app/context/AuthContext';
import { LogIn } from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(email, password);
    
    if (success) {
      navigate('/');
    } else {
      setError('Credenciales incorrectas');
    }
    
    setLoading(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#161b22',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#252526',
            border: '1px solid #3e3e42',
            borderRadius: '8px',
            padding: '32px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#1b263b',
                marginBottom: '16px',
              }}
            >
              <LogIn size={28} style={{ color: '#ccc' }} />
            </div>
            <h1 style={{ fontSize: '24px', color: '#ccc', marginBottom: '8px' }}>
              Sistema de Gestión
            </h1>
            <p style={{ color: '#858585', fontSize: '14px' }}>
              Inicia sesión para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  color: '#ccc',
                  fontSize: '14px',
                  marginBottom: '8px',
                }}
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  backgroundColor: '#161b22',
                  border: '1px solid #3e3e42',
                  borderRadius: '4px',
                  color: '#ccc',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4a9eff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#3e3e42';
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  color: '#ccc',
                  fontSize: '14px',
                  marginBottom: '8px',
                }}
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  backgroundColor: '#161b22',
                  border: '1px solid #3e3e42',
                  borderRadius: '4px',
                  color: '#ccc',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4a9eff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#3e3e42';
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: '12px',
                  backgroundColor: '#4a1616',
                  border: '1px solid #8b2020',
                  borderRadius: '4px',
                  color: '#ff6b6b',
                  fontSize: '14px',
                  marginBottom: '20px',
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1b263b',
                border: '1px solid #3e3e42',
                borderRadius: '4px',
                color: '#ccc',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#243048';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#1b263b';
              }}
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div
            style={{
              marginTop: '24px',
              padding: '16px',
              backgroundColor: '#161b22',
              border: '1px solid #3e3e42',
              borderRadius: '4px',
            }}
          >
            <p style={{ color: '#858585', fontSize: '12px', marginBottom: '8px' }}>
              Usuarios de demostración:
            </p>
            <ul style={{ color: '#858585', fontSize: '12px', paddingLeft: '20px' }}>
              <li>admin@empresa.com / admin123</li>
              <li>calidad@empresa.com / calidad123</li>
              <li>compras@empresa.com / compras123</li>
              <li>produccion@empresa.com / produccion123</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
