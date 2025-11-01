# 📝 Notas Rápidas - PWA

Una aplicación web progresiva (PWA) desarrollada con **Nuxt.js 3** y **Tailwind CSS**, que permite crear, editar y gestionar notas de forma local, funcionando completamente offline.

## ✨ Características

- **Crear, editar y eliminar notas** localmente
- **Funciona completamente offline** gracias al Service Worker
- **Instalable** en dispositivos móviles como app nativa
- **Modo oscuro/claro** automático según preferencias del sistema
- **Diseño moderno y profesional** con Tailwind CSS
- **Persistencia local** con localStorage (sin backend requerido)

## 🚀 Tecnologías

- **Nuxt.js 3** - Framework Vue.js
- **Tailwind CSS** - Framework de estilos
- **@vite-pwa/nuxt** - Módulo PWA
- **Workbox** - Service Worker para funcionalidad offline

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

## 📱 Instalación en dispositivo móvil

1. Abre la app en el navegador móvil
2. Si aparece el banner "¿Instalar la app?", pulsa **Instalar**
3. O bien, desde el menú del navegador → **Agregar a pantalla de inicio**

## 🌐 Despliegue

La app puede desplegarse en cualquier servicio de hosting estático:
- **Vercel** (recomendado para Nuxt)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

Hecho usando Nuxt.js y Tailwind CSS
