# Class 01- Lab01
# Server Deployment Practice
## Deployment Test
### Author: Boshra Jaber
* [tests report](https://github.com/BoshraJaber/server-deployment-practice/actions)
* [Heroku application for main branch](https://boshra-server-deploy-prod.herokuapp.com/)
* [Heroku application for dev branch](https://boshra-server-deploy-dev.herokuapp.com/)

## Setup
- `.env` requirements:
 * PORT - 3000
- Running the app
 * `npm start`
 * Endpoint: `/status`
Returns Object

{
  "domain": "john-api-server.demo.herokuapp.com",
  "status": "running",
  "port": 42123
}


How do I install the app or library?
How do I test the app or library?
For Applications:
How do I run the app?
How do I set up the app?

Libraries: This would allow anyone to do an npm install of your library
Apps: This would allow a user to do an npm install -g of your application and run it from their command line
This requires a new bin section in your package.json