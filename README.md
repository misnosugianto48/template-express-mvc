# 🤖 Express Template MVC 🤖

## Overview

This project is a template built using Express.js. The application is structured representation Model-View-Controller to maintain a clean separation of concerns, with dedicated folders for different aspects of the project, such as controllers, services, middlewares, and more. This organization helps in managing and scaling the application efficiently.

## Project Structure

The project is organized as follows:

├── docs/ </br>
├── prisma/ </br>
├── src/ </br>
│   ├── apps/ </br>
│   │   └── web.js </br>
│   ├── controllers/ </br>
│   ├── exceptions/ </br>
│   ├── middlewares/ </br>
│   ├── routes/ </br>
│   ├── services/ </br>
│   ├── utils/ </br>
│   └── validators/ </br>
├── app.js </br>
└── tests/ </br>

## Folder and File Descriptions

- docs/

  This folder contains OpenAPI Swagger documentation files, which are used to define the API contracts. This helps in maintaining consistent communication between different services and ensuring that the API adheres to its intended design.

- prisma/

  This folder is intended for Prisma ORM configurations, including your schema files and migration scripts. It is used to manage your database schema and interact with your database.

- src

  The src folder contains the core application code, divided into several subfolders:

  - apps/

    Contains the main application setup and configuration files. The web.js file is used to set up and configure the Express.js server, including middleware and route registrations.

  - controllers/

    This folder contains the controllers, which handle incoming HTTP requests and delegate tasks to the appropriate services. Controllers act as intermediaries between the routes and services

  - exceptions/

    This folder is dedicated to handling custom exceptions and error management. It provides a centralized way to manage and respond to errors across the application

  - middlewares/

    Middleware functions are stored here. They process requests before they reach the route handlers or controllers, performing tasks such as authentication, logging, or error handling.

  - routes/

    The route definitions are stored in this folder. Routes map HTTP requests to controller methods, ensuring that each request is handled by the correct controller.

  - services/

    Business logic and database interaction are encapsulated in services. This keeps the controllers lightweight and focused on handling HTTP requests.

  - utils/

    Utility functions and configurations that are used across the application are stored here. This might include configuration files, helper functions, and more.

  - validators

    This folder is used to store validation logic, ensuring that incoming requests have the correct structure and data before being processed by the controllers.

- app.js

  The entry point of the application. It imports the web server from web.js and starts listening on the specified port.

## Installation

1. Clone the Repository

    ```bash
    git clone https://github.com/misnosugianto48/template-express-mvc.git

    cd template-express-mvc
    ```

2. Install Dependencies

    `npm install`

3. Setup Prisma

    ```bash
    npm run prisma

    npx prisma generate
    ```

4. Set up your environment variables:

    Create a `.env` file in the root directory.
    Add your environment variables to the file. You can refer to the `.env.example` file for a list of required variables.

## Running App

Start the development server with:

`npm run dev`

## Migrate

`npm run migrate:up`. If you want to check the shcema before migrating table run `npm run migrate:create-only`, this command will genarate file to check manually.

## How to check error and fix

  ```bash
    npm run lint

    npm run lint:fix
  ```

## Contributing

If you want to contribute to this project, please fork the repository, create a new branch, make your changes, and submit a pull request.

<hr>

Feel free to adjust the details to fit your specific project needs.
