# Инструкции по развертыванию на GitHub Pages

## Шаг 1: Создание репозитория на GitHub

1. Перейдите на https://github.com
2. Нажмите "New repository"
3. Назовите репозиторий `safari-debug-project`
4. Сделайте его публичным
5. НЕ инициализируйте с README (у нас уже есть файлы)

## Шаг 2: Настройка локального репозитория

```bash
# Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваше имя пользователя)
git remote add origin https://github.com/YOUR_USERNAME/safari-debug-project.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

## Шаг 3: Обновление package.json

Замените `your-username` в файле `package.json` на ваше имя пользователя GitHub:

```json
"homepage": "https://YOUR_USERNAME.github.io/safari-debug-project"
```

## Шаг 4: Установка gh-pages

```bash
npm install --save-dev gh-pages
```

## Шаг 5: Развертывание

```bash
# Соберите проект
npm run build

# Разверните на GitHub Pages
npm run deploy
```

## Шаг 6: Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub
2. Найдите раздел "Pages"
3. В "Source" выберите "Deploy from a branch"
4. Выберите ветку "gh-pages" и папку "/ (root)"
5. Нажмите "Save"

## Шаг 7: Тестирование

Через несколько минут ваш проект будет доступен по адресу:
`https://YOUR_USERNAME.github.io/safari-debug-project`

## Тестирование на iPhone

1. Откройте ссылку на iPhone
2. Изучите отладочную информацию
3. Проверьте, какое сообщение показывается
4. Сделайте скриншоты для анализа

## Обновление проекта

После внесения изменений:

```bash
git add .
git commit -m "Update: описание изменений"
git push origin main
npm run deploy
``` 