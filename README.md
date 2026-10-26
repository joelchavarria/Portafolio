# Portafolio de Joel Chavarría

Portafolio profesional de Joel Chavarría, enfocado en desarrollo de software, infraestructura y automatización.

## Tecnologías

- React 19, TypeScript y Vite
- ESLint para calidad estática
- Vercel para despliegue
- Enlaces directos a WhatsApp para contacto y solicitudes de casos de estudio

## Ejecutar localmente

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Comandos

```bash
npm run lint    # revisa el código
npm run build   # valida TypeScript y genera dist/
npm run preview # previsualiza el build de producción
```

## Actualizar contenido

El contenido del perfil, experiencia, proyectos, tecnologías y datos de contacto está centralizado en `src/data/portfolioData.ts`.

El formulario no almacena ni envía datos por correo: valida los campos y abre WhatsApp con un mensaje prellenado para que la persona visitante revise y confirme el envío.

## Despliegue

El proyecto está preparado para Vercel. Cada cambio en `main` puede desplegarse desde la integración de Vercel. La validación de GitHub Actions ejecuta lint y build en pushes y pull requests.
