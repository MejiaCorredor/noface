# Noface Closet App

Aplicación híbrida de closet offline hecha con React + Vite.
## Características
- Login y autenticación local
- Home con categorías y prendas destacadas
- Closet: visualización, subida y edición de prendas
- Carrusel para combinar ropa
- Recomendaciones según clima (selección manual)
- Seguimiento de uso de prendas
- Persistencia offline (localStorage)
- Soporte para imágenes locales
- Navegación tipo app móvil

## Guía de instalación y desarrollo colaborativo
### 1. Requisitos previos
- Node.js 18+ (incluye npm y npx)
- Git

### 2. Instalación del proyecto
1. Clona este repositorio:
	```bash
	git clone <URL-del-repo>
	```
2. Entra a la carpeta del proyecto:
	```bash
	cd nofacev2
	```
3. Instala las dependencias:
	```bash
	npm install
	```
4. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```
5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 3. Estructura del proyecto
- `src/components/` — Componentes reutilizables (Login, Closet, Navbar, etc.)
- `src/pages/` — Páginas principales y ruteo
- `src/utils/` — Utilidades y helpers

### 4. Buenas prácticas para colaborar
- Crea una rama por cada feature/bugfix: `git checkout -b feature/nombre`
- Haz commits claros y descriptivos
- Antes de hacer push, ejecuta `npm run dev` para verificar que no hay errores
- Haz pull requests para revisión de código
- Usa el archivo `.github/copilot-instructions.md` para tips de desarrollo asistido

### 5. Recursos útiles
- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Guía de CSS Modules](https://github.com/css-modules/css-modules)

---

## Créditos
Inspirado en wireframes proporcionados por el usuario.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
