# Healthsimple

Introducing highly-motivational habit tracker Healthsimple, a simple tool to help you develop healthy habits and stay motivated. Whether you want to drink more water, exercise regularly, or maybe quit a bad habit, our tracker provides personalized benefits for keeping up with your habits over time. With the power of OpenAI's GPT API, you'll receive customized insights on the benefits of keeping up with your habit for each day, week, month, and even year, keeping you motivated and on track.

# Status Update

Currently the project is still in the developing mode. To test it, you can click on "Accept the Challenge" or "Log In" each will give you an option to test a different user data that is available in database.

# Features

What you will be able to see/test:

- There are two pages: Home and User Page

If you go to User Page:

- You will see the data for a given user from the database
- You will be able to click on a habit to see the benefits and to update your completion status
- Benefits data for streaks "0" and "1" is already in the database. At this moment, if you try to click "Completed" it will update the streak to "2" and request to openAI will be submitted.

# Next Steps

My next steps after final submission:

- Enable add habit
- Cleanup axios get requests as there are way too many now.. (but it works! and it's all that matters now)
- Enable authorization/authentication
- Fix the streak updates (currently updating if I click completed more than one time or not completed, streak goes +1 -1)
- Add more stats to show progress on a habit and overall progress
- Move back-end to a separate repo

My next Big Steps:

- Achievement system (congratulate the user for doing something … in a row)
- Add rewards that other users can see on other profiles

# Special Note

I would like to thank all the teachers and TA's for helping me during this bootcamp 🫶
​

- [Adam Ginther](https://github.com/GInTher)
- [Paolo Riberio](https://github.com/PCRib)
- [Rajat Bansal](https://github.com/rjtbansal)
- [Roisin O'Neill](https://github.com/RoisOneill)
- [Jason Yang](https://github.com/projectyang)
  ​

* Any feedback on Healthsimple is welcome and will be very much appreciated as its my first true solo development project!
  ​
* Find me on [LinkedIn](https://www.linkedin.com/in/dchernikova)

# API Documentation

All requests that can be made with my project at this time can be found [here](https://www.postman.com/dashalalala/workspace/daria-kiseleva-postman-workspace/collection/25229703-adbfc6cf-4758-4f11-9075-2038959137da?action=share&creator=25229703)

# Local Setup

#### .env

- Copy this file to an .env file in the server folder and replace the values with your own local configuration.
  ​

#### Database Authorization

```
PORT=4000
BACKEND_URL=http://localhost
DB_LOCAL_DBNAME='healthsimple_database'
DB_LOCAL_USER='root'
DB_LOCAL_PASSWORD='your local password'
```

#### OpenAI Authorization

```
organizationKey =  available upon request
openAiApiKey= available upon request
```

#### MySQL Database

- 1.) Turn on SQL server (use SQL notifier from install)
- 2.) Log into SQL (mysql -u USERNAMEFROMINSTALL -p PASSWORDFROM INSTALL)
- 3.) Run CREATE DATABASE healthsimple in mysql
- 4.) Update .env folder with above for DBNAME, USER and PASSWORD
- 5.) Then in terminal in project window, knex migrate:latest and knex seed:run
- 6.) You should then be able to nodemon index.js and the server will be up and running

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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
