# Tech-blog

![GitHub licence](https://img.shields.io/badge/licence-MIT-gree.svg)

## Deccription

This is a tech-blog site. It allows developers to publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)

## installation

Clone this repository to your local machine.
Navigate to the root directory of the application in your terminal.
Run npm install to install the necessary dependencies.
Create a .env file at the root directory of the application and add the necessary environment variables. Refer to the .env.EXAMPLE file for a list of required variables.
Set up a MySQL database and update the config.json file in the config directory with your database credentials.
Run npm run seed to seed the database with some initial data.
Run npm start to start the server.

## Usage
Once the server is started, navigate to http://localhost:3001 in your browser to use the application. You can create a new user account, log in, create new blog posts, and comment on existing blog posts.

## Deployed app
The app function images.(work in progress)

## License
This application is licensed under the MIT License. See the LICENSE file for more information.