# Развертывание лендинга StepDream Academy

## Варианты развертывания

### 1. Vercel (Рекомендуется - самый простой)

Vercel создан командой Next.js и идеально подходит для развертывания.

**Шаги:**
1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий `Tips95/Dubai_lending`
5. Vercel автоматически определит Next.js и настроит всё
6. Нажмите "Deploy"

**Преимущества:**
- ✅ Автоматический CI/CD при каждом push
- ✅ Бесплатный SSL сертификат
- ✅ CDN по всему миру
- ✅ Автоматические превью для PR
- ✅ Бесплатный тариф для небольших проектов

---

### 2. Docker (Для любого хостинга)

#### Локальная сборка и запуск:

```bash
# Сборка образа
docker build -t stepdream-landing .

# Запуск контейнера
docker run -p 3000:3000 stepdream-landing
```

#### С Docker Compose:

```bash
docker-compose up -d
```

#### Развертывание на сервере:

1. Скопируйте файлы на сервер
2. Установите Docker и Docker Compose
3. Запустите: `docker-compose up -d`

**Хостинги с поддержкой Docker:**
- DigitalOcean App Platform
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- Railway
- Render

---

### 3. Статический экспорт (Для простых хостингов)

Если не нужен серверный рендеринг:

```bash
# В package.json добавьте:
"export": "next build && next export"

# Затем:
npm run export

# Файлы будут в папке /out
# Можно загрузить на любой статический хостинг:
# - GitHub Pages
# - Netlify
# - Cloudflare Pages
# - AWS S3 + CloudFront
```

---

### 4. Традиционный VPS (Node.js)

На сервере с Node.js:

```bash
# Установка зависимостей
npm install --production

# Сборка проекта
npm run build

# Запуск (с PM2 для production)
npm install -g pm2
pm2 start npm --name "stepdream-landing" -- start
pm2 save
pm2 startup
```

---

## Переменные окружения

Если понадобятся переменные окружения, создайте файл `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Рекомендация

Для лендинга лучше всего подходит **Vercel**:
- Настройка за 2 минуты
- Автоматические обновления
- Отличная производительность
- Бесплатный тариф достаточен

Если нужен Docker для корпоративного развертывания - используйте Dockerfile из репозитория.

