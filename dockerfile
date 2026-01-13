FROM node:20-alpine

WORKDIR /app

# Dependências
COPY package*.json ./
RUN npm install

# Cópia do resto do projeto 
COPY . .

# Prisma
RUN npx prisma generate

# Build do Next
RUN npx next build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm start"]