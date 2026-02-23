import { createBrowserRouter, Navigate } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/Layout';
import { QualityManagement } from './components/QualityManagement';
import { PurchaseManagement } from './pages/PurchaseManagementNew';

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Navigate to="/calidad" replace />,
      },
      {
        path: 'calidad',
        Component: QualityManagement,
      },
      {
        path: 'compras',
        Component: PurchaseManagement,
      },
    ],
  },
]);