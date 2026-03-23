# Dmytro Kotykhin — Portfolio

![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

A personal portfolio website for Dmytro Kotykhin, Senior Full Stack Developer. Built with Vue 3, TypeScript, and Tailwind CSS. Features multi-language support (English & Ukrainian), a validated contact form, and sections for skills, experience, background, and certifications.

## Tech Stack

- **Vue 3** + TypeScript
- **Vite** — build tool
- **Vue Router** — client-side routing with locale param
- **Tailwind CSS v4** — utility-first styling
- **Vue I18n** — English / Ukrainian translations
- **Vee Validate** + **Zod** — form validation
- **EmailJS** — contact form email delivery
- **Vue Toast** — toast notifications

## Sections

- **Hero** — animated intro with call-to-action
- **About** — bio, photo, CV download, social links
- **Skills** — categorized tech icons (Frontend, Backend, Database, Other)
- **Experience** — job history with tech stacks and recommendation letters
- **Background** — certifications, education, languages, hobbies
- **Contact** — validated contact form with EmailJS

## Project Setup

```sh
npm install
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Type Check

```sh
npm run type-check
```

### Lint

```sh
npm run lint
```

### Format

```sh
npm run format
```

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
