START 11.09.2024 
END 25.09.2024


Monorepo Application
Pełnostackowy projekt monorepo, łączący backend i frontend.

Backend: Zbudowany z wykorzystaniem Node.js, Express i Sequelize ORM,
napisany w TypeScript. Zarządza API oraz operacjami na bazie danych,
dostarczając skalowalne usługi RESTful.

Frontend: Rozwijany przy użyciu Next.js z App Router oraz React, również napisany w TypeScript.
Aplikacja dostarcza nowoczesny interfejs użytkownika renderowany po stronie klienta.

Projekt opiera się na najlepszych praktykach TypeScript zarówno po stronie backendu,
jak i frontendu, aby zapewnić bezpieczeństwo typów i łatwość utrzymania.




-------------- USERS ADMIN ---------------
CREATE ADMIN - EMAIL MUST INCLUDE '@admin.example'
WITH CREATE IN REGISTER PAGE SETTING DEVELOPMENT 



-------------- START LOCAL PROJECT---------------

HOW TO START PROJECT LOCALHOST

- YOU MUST HAVE INSTALL node.js and xampp

START XAMPP CONTROL PANEL - APACHE AND MYSQLI

GOTO phpMyAdmin, open sql console and 
paste this command
CREATE DATABASE IF NOT EXIST 'photography_db' CHARACTER SET utf8 COLLATE utf8_general_ci

GOTO APP REPOSITORY FODLER 
USE COMAND IN TERMINAL 
- npm install 
TO INSTALL ALL PACKAGES

PREPERE .env IN packages/server-backend-api

API_PORT = 3010
ALLOWED_ORIGINS="*, http://example.com"
JWT_SECRET=MxlkE8CmlD0cDPG
DATABASE_HOST = "localhost"
DATABASE_PORT = 3306
DATABASE_NAME = "photography_db"
DATABASE_USER = "root"
DATABASE_PASSWORD = ""

PREPARE .env IN packages/frontend-app-nextjs
API_URL = 'http://localhost:3010'
NEXT_PUBLIC_API_URL = 'http://localhost:3010'
API_URL is Your backend server api url.

USE COMMAND BUILD 
npm run project:build

OPEN TWO CMD TERMINALS AND USE COMMANDS
1 cmd terminal - npm run backend:start
2 cmd terminal - npm run frontend: start

OPEN BROWSER AND GO ON http://localhost:3000
