# 🎮 PIXI-APP

> Игровое приложение на Vue 3 с использованием Pixi.js для рендеринга графики

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Pixi.js](https://img.shields.io/badge/Pixi.js-7.x-FFA700?style=for-the-badge&logo=pixijs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[![Demo](https://img.shields.io/badge/🚀_Demo-009D91?style=for-the-badge)](https://tatymusya.github.io/PIXI-APP)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Описание

Интерактивное игровое приложение с использованием **Pixi.js** для высокопроизводительного 2D-рендеринга. 
Проект демонстрирует возможности интеграции WebGL-графики с Vue 3 Composition API.

### Особенности:
- 🎨 Высокая производительность (60 FPS)
- 🎮 Интерактивная анимация
- 📱 Адаптивный дизайн
- 🔄 Реактивное состояние через Vue 3

---

## 🖼️ Превью

![Preview](./assets/preview.png)

---

## 🚀 Быстрый старт

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/Tatymusya/PIXI-APP.git

# Переход в директорию проекта
cd PIXI-APP

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшен-сборки
npm run preview
```

---

## 📦 Структура проекта

```
PIXI-APP/
├── src/
│   ├── components/       # Vue компоненты
│   ├── composables/      # Composition API хуки
│   ├── assets/           # Изображения, спрайты
│   ├── styles/           # SCSS/CSS стили
│   ├── App.vue           # Корневой компонент
│   └── main.ts           # Точка входа
├── public/               # Статические файлы
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠 Технологии

| Frontend | Graphics | Build |
|----------|----------|-------|
| Vue 3 | Pixi.js 7 | Vite 5 |
| TypeScript 5 | WebGL | Rollup |
| SCSS | Canvas API | esbuild |

---

## 🎯 Ключевые функции

### 1. Интеграция Pixi.js с Vue 3

```typescript
// composables/usePixiApp.ts
import { onMounted, onUnmounted, ref } from 'vue';
import * as PIXI from 'pixi.js';

export function usePixiApp(containerRef: Ref<HTMLElement | null>) {
  const app = ref<PIXI.Application | null>(null);

  onMounted(() => {
    if (containerRef.value) {
      app.value = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x009D91,
        antialias: true,
      });
      containerRef.value.appendChild(app.value.view as HTMLCanvasElement);
    }
  });

  onUnmounted(() => {
    app.value?.destroy(true);
  });

  return { app };
}
```

### 2. Анимация спрайтов

```typescript
// Анимация персонажа
app.value.ticker.add((delta) => {
  sprite.x += 5 * delta;
  sprite.rotation += 0.01 * delta;
});
```

---

## 🎨 Цветовая палитра

| Цвет | Hex | Использование |
|------|-----|---------------|
| Primary | `#009D91` | Основной фон, UI |
| Accent | `#FFA700` | Акценты, частицы |
| Secondary | `#FF6F00` | Детали, эффекты |
| Highlight | `#FFD700` | Блеск, искры |

---

## 📱 Демонстрация

### Локально
```bash
npm run dev
# Откройте http://localhost:5173
```

### Онлайн
[🚀 Живое демо](https://tatymusya.github.io/PIXI-APP)

---

## 🔧 Конфигурация

### Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/PIXI-APP/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

---

## 🧪 Тесты

```bash
# Запуск unit-тестов
npm run test:unit

# Запуск e2e-тестов
npm run test:e2e

# Проверка типов
npm run type-check
```

---

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE)

---

## 👤 Автор

**Татьяна Мусаева**

[![GitHub](https://img.shields.io/badge/GitHub-Tatymusya-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Tatymusya)
[![Telegram](https://img.shields.io/badge/Telegram-@tatyamusya-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/tatyamusya)

---

## 🤝 Вклад

Pull Request приветствуются! Для серьёзных изменений сначала откройте Issue.

---

## 📬 Контакты

- **Email:** tatykolcova1234@yandex.ru
- **Telegram:** [@tatyamusya](https://t.me/tatyamusya)

---

<div align="center">

**Made with ❤️ by Tatymusya**

[⬆ Вернуться к началу](#-pixi-app)

</div>
