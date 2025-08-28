
# NOFACE Closet App

Aplicación de closet offline hecha con React + Vite.

## Funcionalidades principales

- Autenticación local (login)
- Home con categorías y prendas destacadas
- Closet: visualización, subida y edición de prendas
- Carrusel para combinar ropa
- Recomendaciones según clima (selección manual)
- Seguimiento de uso de prendas
- Persistencia offline (localStorage)
- Soporte para imágenes locales
- Navegación tipo app móvil

---

## Instalación rápida

1. Clona el repositorio:
	```bash
	git clone <URL-del-repo>
	cd nofacev2
	npm install
	npm run dev
	```
2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

- `src/components/` — Componentes reutilizables (Login, Closet, Navbar, etc.)
- `src/pages/` — Páginas principales y ruteo
- `src/assets/` — Recursos gráficos

## Colaboración

- Crea una rama por cada feature/bugfix: `git checkout -b feature/nombre`
- Haz commits claros y descriptivos
- Antes de hacer push, ejecuta `npm run dev` para verificar que no hay errores
- Haz pull requests para revisión de código

## Recursos útiles

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

Inspirado en wireframes proporcionados por el usuario.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
