# 🏭 Sistema de Gestión de Calidad y Compras

> Sistema completo de gestión con Windows 11 Dark Theme desarrollado con React 18.3.1, TypeScript y Tailwind CSS v4

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.12-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)

## 📋 Descripción

Sistema empresarial completo para la gestión de calidad y compras en líneas de producción. Incluye:

- ✅ **Gestión de Calidad**: Control completo de calidad con inspecciones, planes y seguimiento
- ✅ **Gestión de Compras**: Módulo de compras con revisión de materias primas
- ✅ **Sistema de Autenticación**: Roles de usuario (admin, calidad, compras, producción)
- ✅ **Diseño Responsivo**: Optimizado para móvil, tablet y escritorio
- ✅ **Windows 11 Dark Theme**: Interfaz moderna con paleta oscura profesional

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/jemfSacome/PruebaFigma.git
cd PruebaFigma

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build
```

## 🏗️ Arquitectura

### Stack Tecnológico

- **Frontend**: React 18.3.1 con TypeScript
- **Estilos**: Tailwind CSS v4 + tema personalizado
- **Build**: Vite 6.3.5
- **Routing**: React Router 7.13.0
- **State**: Context API (AuthContext, ThemeContext)
- **Animaciones**: Motion (Framer Motion)
- **Gráficos**: Recharts
- **Icons**: Lucide React
- **Drag & Drop**: React DnD
- **Notificaciones**: Sonner

### Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── components/       # 50+ componentes React
│   │   │   ├── ui/          # 46 componentes UI (shadcn/ui)
│   │   │   ├── QualityManagement.tsx
│   │   │   ├── PurchaseManagementNew.tsx
│   │   │   └── ...
│   │   ├── context/         # Context providers
│   │   ├── pages/           # Páginas principales
│   │   ├── routes.tsx       # Configuración de rutas
│   │   └── App.tsx          # Componente raíz
│   ├── data/                # Mock data para desarrollo
│   ├── styles/              # Estilos globales y temas
│   └── imports/             # Componentes importados
├── docs/                    # Documentación completa (58 archivos)
│   ├── prompts/            # Prompts de Gestión de Compras
│   ├── blueprints/         # Arquitectura del sistema
│   └── guides/             # Guías de implementación
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## 📦 Componentes Principales

### Gestión de Calidad

- **QualityManagement.tsx**: Panel principal de control de calidad
- **OrderLinesTable.tsx**: Tabla de líneas de pedido con filtros avanzados
- **InspectionsTable.tsx**: Gestión completa de inspecciones
- **InspectionCatalogModal.tsx**: Catálogo de inspecciones disponibles

### Gestión de Compras

- **PurchaseManagementNew.tsx**: Módulo completo de gestión de compras
- **Modales**: 5 modales especializados (Lista MP, Lista Completa, Lista de Compra, etc.)

### Sistema UI (46 componentes)

- Accordion, Alert, Avatar, Badge, Button, Card, Checkbox
- Dialog, Dropdown, Form, Input, Select, Table, Tabs
- Toast, Tooltip, Progress, Calendar, Chart, y más...

## 🎨 Diseño

### Paleta de Colores (Windows 11 Dark Theme)

```css
#252526  /* Fondos de tarjetas */
#3e3e42  /* Bordes */
#1b263b  /* Headers */
#161b22  /* Fondos principales */
#cccccc  /* Texto principal */
#858585  /* Texto secundario */
```

### Características de Diseño

- ✅ 100% Responsivo (móvil, tablet, escritorio)
- ✅ Componentes personalizados sin bibliotecas externas
- ✅ Animaciones suaves con Motion
- ✅ Sistema de temas con ThemeContext
- ✅ Accesibilidad (WCAG 2.1)

## 📚 Documentación

El proyecto incluye **58 archivos de documentación** organizados en:

### 1. Prompts de Gestión de Compras (8 archivos)

- `PROMPT_COMPRAS_CUADRO_CONTROL.md` - Panel de control
- `PROMPT_COMPRAS_PANEL_LINEA.md` - Panel de línea
- `PROMPT_COMPRAS_MODAL_MP.md` - Modal de materias primas (16 columnas)
- `PROMPT_COMPRAS_MODAL_LISTA_COMPLETA.md` - Modal lista completa (8 columnas)
- `PROMPT_COMPRAS_MODAL_LISTA_COMPRA.md` - Modal lista de compra (10 columnas)
- `PROMPT_COMPRAS_MODAL_VALIDAR_OF.md` - Modal validar con OF
- `PROMPT_COMPRAS_MODAL_EDITAR_NOTAS.md` - Modal editar notas
- `INDICE_PROMPTS_GESTION_COMPRAS.md` - Índice maestro

### 2. Blueprints Arquitectónicos (8 archivos)

- Arquitectura completa del sistema
- Especificaciones de componentes
- Flujos de datos y estados

### 3. Guías de Implementación (20+ archivos)

- Guías paso a paso de migración
- Implementación en 10 fases
- Especificaciones detalladas
- Sistema de inspecciones completo

### 4. Especificaciones Técnicas

- ~20,000+ líneas de documentación
- ~6,300 líneas de specs de Compras
- ~350 puntos de verificación
- Especificaciones pixel-perfect

## 🔐 Sistema de Autenticación

### Roles de Usuario

- **Admin**: Acceso completo al sistema
- **Calidad**: Gestión de calidad e inspecciones
- **Compras**: Módulo de compras y materias primas
- **Producción**: Vista de producción y órdenes

### Credenciales de Prueba

```
Admin:
- Email: admin@empresa.com
- Password: admin123

Calidad:
- Email: calidad@empresa.com
- Password: calidad123

Compras:
- Email: compras@empresa.com
- Password: compras123

Producción:
- Email: produccion@empresa.com
- Password: produccion123
```

## 📊 Datos Mock

El sistema incluye datos de prueba completos:

- `mockLines.ts` - Líneas de pedido
- `mockInspectionCatalog.ts` - Catálogo de inspecciones
- `mockLineInspections.ts` - Inspecciones por línea
- `mockQualityPlans.ts` - Planes de calidad
- `mockManometers.ts` - Datos de manómetros
- `mockRugosimeters.ts` - Datos de rugosímetros
- `mockRecentActivity.ts` - Actividad reciente

## 🧪 Características Técnicas

- ✅ TypeScript con tipado estricto
- ✅ Context API para gestión de estado
- ✅ React Router con navegación programática
- ✅ Drag & drop con react-dnd
- ✅ Animaciones con Motion
- ✅ Gráficos interactivos con Recharts
- ✅ Componentes reutilizables
- ✅ Código modular y mantenible

## 📈 Estadísticas

- **Archivos totales**: ~170
- **Componentes React**: 50+
- **Componentes UI**: 46
- **Líneas de código**: ~50,000+
- **Líneas de documentación**: ~20,000+
- **Especificaciones de Compras**: ~6,300 líneas
- **Puntos de verificación**: ~350

## 🛠️ Dependencias Principales

```json
{
  "react": "18.3.1",
  "react-router": "7.13.0",
  "tailwindcss": "4.1.12",
  "lucide-react": "0.487.0",
  "recharts": "2.15.2",
  "motion": "12.23.24",
  "react-dnd": "16.0.1",
  "sonner": "2.0.3"
}
```

## 🎯 Funcionalidades

### Módulo de Gestión de Calidad

- 📊 Panel de control con 4 pestañas
- 🔍 Sistema de inspecciones completo
- 📋 Planes de calidad
- 📈 Instrumentación y métricas
- 🎛️ Cuadro de control personalizable

### Módulo de Gestión de Compras

- 📦 Gestión de líneas de pedido
- 🏭 Panel de revisión de materias primas
- 📋 5 modales especializados
- ✅ Validación con órdenes de fabricación
- 📝 Edición de notas y observaciones

## 🚧 Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Build
pnpm build        # Compila para producción

# Preview
pnpm preview      # Vista previa de build de producción
```

### Estructura de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

## 👨‍💻 Push Inicial

### Opción 1: Script Automático (Recomendado)

**Linux/Mac:**
```bash
chmod +x git-init-commit.sh
./git-init-commit.sh
```

**Windows:**
```cmd
git-init-commit.bat
```

### Opción 2: Comandos Manuales

```bash
git init
git remote add origin https://github.com/jemfSacome/PruebaFigma.git
git add -A
git commit -m "feat: Initial commit - Complete Quality & Purchase Management System"
git branch -M main
git push -u origin main
```

## 📝 Licencia

Este proyecto es privado y de uso interno.

## 👥 Autores

Desarrollado para el proyecto de gestión de calidad y compras.

---

**Estado**: ✅ En Desarrollo
**Versión**: 0.0.1
**Última actualización**: Febrero 2026