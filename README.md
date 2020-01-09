# donuts!
a handlebars app using node, express, and mysql - with a handmade ORM

[Demo the app on heroku>](https://intense-lowlands-26182.herokuapp.com)

![image](https://user-images.githubusercontent.com/49931992/72041267-50189f80-3268-11ea-8617-c892b49b645e.png)

## Index
1. How it works
2. Instructions
3. Built with

## How it works
The app uses express and mysql to serve data to a handlebars html template. An http POST request and a PUT request (altered by the npm package method-override) are sent to the ORM, Model, and Controller files in the backend to create and 'eat' (respectively) a list of donuts.

## Instructions
Create a list of donuts you'd like to eat, then eat them, in a purely digital sense. No guilt! 

If you'd like to setup a local copy, fork this repo and clone it to your computer; load that entire folder into VS Code (or your preferred editor), and from that directory, run  
```sh
npm install
``` 
to install the packages and dependencies(in this case: mysql, handlebars, express, body-parser and method-override). Then use the schema.sql and seeds.sql files to create your mysql database, and edit the connection.js file with your local database credentials.  


## Built with
* [Node](https://nodejs.org/en/) - Asynchronous, single-threaded js runtime environment
### npm packages
* [express](https://www.npmjs.com/package/express) - API framework
* [mysql](https://www.npmjs.com/package/mysql) - node.js driver for mysql databases
* [handlebars](https://www.npmjs.com/package/express-handlebars) - html templating engine
* [body-parser](https://www.npmjs.com/package/body-parser) - body-parsing middleware for http
* [method-override](https://www.npmjs.com/package/method-override) - create PUT or DELETE requests client-side
