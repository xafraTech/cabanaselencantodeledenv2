

# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar y instalar dependencias (incluir dev dependencies para build)
COPY package*.json ./
RUN npm ci --silent

# Copiar código y construir
COPY . .
RUN npm run build

# Etapa 2: Producción con nginx
FROM nginx:alpine

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run necesita puerto 8080
EXPOSE 8080

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]