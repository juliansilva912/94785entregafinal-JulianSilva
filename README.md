# ⚔️ Valhleales al rock

Sitio web multi-página hecho con HTML, SCSS y Bootstrap. Es un proyecto de desarrollo web: usa un diseño responsive (layout vertical en celular, horizontal desde 1024px), navbar colapsable, carrusel de imágenes y cards.

## 📄 Páginas

| | Página | Contenido |
|:---:|---|---|
| 🏠 | `index.html` | Inicio con tarjetas de personajes y acceso a los jefes |
| 👥 | `pages/sobre-nosotros.html` | Presentación del grupo con cards |
| 🗺️ | `pages/nuestro-mundo.html` | Carrusel de bases y texto en zigzag |
| 💀 | `pages/desterrados.html` | Jefes derrotados con builds de comidas |

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica (`header`, `nav`, `main`, `section`, `figure`, `footer`) |
| SCSS | Estilos modulares con `@use`, mapa de colores `$colores` y mixins |
| Bootstrap 5 | Navbar, carrusel y cards (por CDN) |
| Google Fonts | Tipografía Averia Serif Libre |

## 🎨 Paleta

| Fondo | Contraste | Cards | Bordes | Texto | Detalles |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `#1A3438` | `#0D1F22` | `#2C4A52` | `#8B2E1F` | `#D9C9A8` | `#C9A227` |

## 🚀 Cómo usarlo

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/juliansilva912/94785entregafinal-JulianSilva
   ```

2. Abrí el archivo `index.html` en tu navegador.

## ⚙️ Compilación de Sass

Para trabajar con los estilos en desarrollo y compilar a CSS:

1. Instalá las dependencias:

   ```bash
   npm install
   ```

2. Compilá `main.scss` a `styles.css`:

   ```bash
   sass --watch sass/main.scss:style/styles.css
   ```

## 👤 Autor

**Julian Silva** · 2026
