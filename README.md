## Description

This is a project built by combining Laravel and React using RESTful API.
To protect user authentication API in Laravel we will use tymondesigns/jwtauth a third-party jwt-auth library.

## Install Laravel Application

Let us install a brand new laravel project to formulate the Laravel REST API
project using JWT authentication.
Run following command to install a fresh Laravel project.

```
composer create-project laravel/laravel laravel-jwt-auth --prefer-dist
```

## Database Connection

We have created a brand new Laravel application from scratch, now to store the
user registration data, we have to create a database in MySQL.
Our env. File should look like this…

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Laravel-and-react-case
DB_USERNAME=root
DB_PASSWORD=
```

## Add User into MySQL Database

In this step, we will learn how to register a user table in MySQL database. Laravel
fresh installation offers a default user table that we can register into the database
using migration.

```
php artisan migrate
```

The above command has created a users table inside the database. (we can edit the
model, controller and user_table to add and remove login/signup fields for user ).

## Install & Configure JWT Authentication Package

Execute the following command to install tymondesigns/jwt-auth, It is a third-party
JWT package and allows user authentication using JSON Web Token in Laravel &
Lumen securely.

```
composer require tymon/jwt-au
```

Above command installed the jwt-auth package in the vendor folder, now we have
to go to config/app.php file and include the laravel service provider inside
the providers array.
Also include the JWTAuth and JWTFactory facades inside the aliases array.

```
'providers' => [
....
....
Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
],
'aliases' => [
....
'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
....
],
```

In the next step, we have to publish the package’s configuration, following
command copy JWT Auth files from vendor folder to config/jwt.php file.

```
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

For handling the token encryption, generate a secret key by executing the following
command.

```
php artisan jwt:secret
```

## Run the API.

update the .env file with your own database information.

## Run the commands below to run the React application.

```
npm install
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
