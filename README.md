# 2023-TPI-GB

Trabajo Práctico integrador - Grupo B

## Alcance

## Levantar el proyecto

Guía rápida para desplegar la aplicación en un entorno local de desarrollo.

Se requiere tener una base de datos MySQL. Nótese la variable de entorno con {user}, {password} y {nombredb}.

1. Clonar el repositorio:
```
git clone https://github.com/FRRe-DS/2023-TPI-GB
```

2. Levantar el servidor de la API REST:
```
cd backend
echo "DATABASE_URL="mysql://{user}:{password}@localhost:3306/{nombredb}"" > .env
npm install
npx prisma migrate dev
npm run dev
```

Por defecto se levanta en el puerto 3001. La variable de entorno `PORT` permite modificarlo.

3. Levantar el servidor frontend:
```
cd ../frontend
echo "REACT_APP_API_BASE_URL="http://localhost:3001"" > .env
npm install
npm run start
```

Por defecto se levanta en el puerto 3000. La app se puede visitar en http://localhost:3000.

## Modelo de datos

## Arquitectura
