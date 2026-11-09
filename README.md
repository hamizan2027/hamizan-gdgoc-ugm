# GDGoC UGM - Frontend Recruitment

This repository contains the frontend implementation for the Google Developer Groups on Campus (GDGoC) UGM open recruitment task. The project is built using a modern technology stack to ensure high performance, modularity, and responsive design.

## Project Links

* Live Deployment: [Cloudflare Pages](https://hamizan-gdgoc-ugm.pages.dev/)

* Video Presentation: [Google Drive Link](https://drive.google.com/drive/folders/1ew5eAWv2i-_smxBB50nAy4-OvSFied5J?usp=sharing)

* Source Code: [GitHub Repository](https://github.com/hamizan2027/hamizan-gdgoc-ugm)

* Social Media: [Instagram](https://www.instagram.com/hmzn_ikh/)

## Tech Stack and Dependencies

This project is built using the Astro Minimal Starter Kit and integrated with several modern web technologies:

* Astro (^7.4.7)

* React (^19.3.1)

* Tailwind CSS (^4.3.5)

* Vite (@tailwindcss/vite ^4.3.5)

* React Responsive (^10.0.1)

## Source Code Architecture

The project strictly follows a clean and modular component architecture. The structure separates server-rendered static components from client-rendered interactive components.

```
/
├── public/               # Static assets (images, SVGs, Rive files)
├── src/
│   ├── components/       # UI Components directory
│   │   ├── astro/        # Static server-rendered components (No JavaScript overhead)
│   │   └── react/        # Interactive client-side components (Hydrated on the browser)
│   ├── layouts/          # Reusable page wrappers (e.g., MainLayout.astro)
│   └── pages/            # Astro file-based routing system (index.astro, /home, /overview)
└── package.json          # Dependencies and scripts configuration


```

## Setup Instructions

All commands must be run from the root of the project using a terminal. Ensure you have Node.js installed before proceeding.

| Command | Action | 
| ----- | ----- | 
| `npm install` | Installs all required dependencies | 
| `npm run dev` | Starts the local development server at `localhost:4321` | 
| `npm run build` | Builds the production-ready site into the `./dist/` folder | 
| `npm run preview` | Previews your production build locally before deployment | 
| `npm run astro -- --help` | Displays help information for the Astro CLI | 

## Additional Documentation

For more information regarding the core framework used in this project, please refer to the official Astro documentation at docs.astro.build.
