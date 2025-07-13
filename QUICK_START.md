# Быстрый старт

## Локальный запуск

```bash
# Установка зависимостей
npm install --registry https://registry.npmjs.org/

# Запуск
npm start
```

Откройте http://localhost:3000

## Развертывание на GitHub Pages

1. Создайте репозиторий на GitHub: `safari-debug-project`
2. Обновите `package.json` - замените `your-username` на ваше имя пользователя
3. Выполните команды:

```bash
git remote add origin https://github.com/YOUR_USERNAME/safari-debug-project.git
git branch -M main
git push -u origin main
npm install --save-dev gh-pages
npm run deploy
```

4. В настройках репозитория включите GitHub Pages (ветка gh-pages)

## Что искать на iPhone

1. **Browser Name** - должно быть "Safari"
2. **Is Safari** - должно быть "true"
3. **Is Supported Browser** - должно быть "true" или "false"
4. **In Unsupported Safari** - это ключевая переменная для дебага
5. **Message ID** - какое сообщение показывается
6. **Fallback Message Safari** - текст сообщения

## Проблема

Если на iPhone показывается сообщение "Please upgrade your browser to Safari 14 or newer for full support.", то `inUnsupportedSafari` должно быть `true`.

Это означает, что:
- `isSafari = true`
- `isSupportedBrowser = false`

Нужно понять, почему Safari не попадает в список поддерживаемых браузеров. 