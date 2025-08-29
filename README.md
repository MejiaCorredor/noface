# NOFACE Closet App

Aplicación de closet offline desarrollada con **React** y **Vite**.

## Funcionalidades principales

- **Autenticación local:** login simple y persistencia de usuario en localStorage.
- **Home:** página principal con categorías y prendas destacadas.
- **Closet:** visualización, subida, edición y eliminación de prendas (con soporte para imágenes locales).
- **Carrusel y combinador:** para crear combinaciones de ropa.
- **Recomendaciones:** sugerencias de outfits según clima (selección manual).
- **Seguimiento de uso:** registro de la última vez que se usó cada prenda.
- **Persistencia offline:** toda la información se guarda en localStorage, sin backend.
- **Navegación tipo app móvil:** interfaz optimizada para dispositivos móviles.

## Tecnologías y librerías utilizadas

- [React 19](https://react.dev/) + [React DOM](https://react.dev/learn/react-dom)
- [Vite](https://vitejs.dev/) (dev server y build)
- [CSS Modules](https://github.com/css-modules/css-modules) para estilos locales
- [Sass](https://sass-lang.com/) para estilos avanzados
- [ESLint](https://eslint.org/) para linting

## Instalación y uso

1. Clona el repositorio:
	```bash
	git clone <URL-del-repo>
	cd noface
	npm install
	npm run dev
	```
2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

- `src/components/` — Componentes reutilizables (Login, Closet, Navbar, Home, Carrusel, Recomendaciones, Footer, etc.)
- `src/pages/` — Páginas principales y ruteo (`MainRouter.jsx`)
- `src/assets/` — Recursos gráficos y estilos globales
- `public/` — Archivos estáticos

## Notas

- El proyecto es **100% offline**: no requiere conexión a internet para funcionar después de la instalación.
- Todas las imágenes y datos se almacenan localmente en el navegador.

---

## Créditos y recursos

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Sass](https://sass-lang.com/)
