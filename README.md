# Database Connections

## Overview

This project is all about different Database Connection

## Installation

1. First clone the repository using following command on terminal.
   ```
   git clone https://github.com/mugdho37/db_connections.git
   ```
2. Then fetch the latest code using following command.
   ` cd db_connection git fetch origin `
   Then you need to go every directory and install npm.

3. Install the node modules using following command.
   ```
   cd mysqlConnection
   npm install
   cd ../firebaseConnection
   npm install
   cd ../mongoConnection
   npm install
   ```

## Database Connection

1. For MySql you need to bring following changes database.js file
   You need to create your database first and create an **users** table and
   insert some demo data
   ` const pool = createPool({ host: "localhost", user: "root", //your username password: "", // your password database: "database_test", //your datebase name connectionLimit: 10 }) `
   then command
   ` nodemon database.js `
2. For MongoDB in index.js file you need to bring following changes

   ##### MongoDB Atlas (Cloud Platform)

   ```
   //keep the part after @ as like as atlas provides you
   const url= 'mongodb+srv://userName:password@cluster0.hnrn4.mongodb.net/yourDatabase?retryWrites=true&w=majority';

   ```

   Link: https://www.mongodb.com/docs/atlas/getting-started/

   ##### MongoDB Compass (Lcoal Platform)

   Download MongoDB (check Install MongoDB compass)
   Link: https://www.mongodb.com/try/download/community

   For More Details:-
   Link: https://www.mongodb.com/docs/manual/administration/install-community/

   ```
   //by default this is the configuration
   const url= 'mongodb://localhost:27017/YourDatabase'
   ```

   You need to create a database in the atlas or compass
   Then you need to create a collection name **Project**
   then you need to put some data like:-

   ```
   {
   "_id": {
   "$oid": "627b850725a49cd6312d663d"
   },
       "serial": 3,
       "name": "John",
       "__v": 0
   }

   ```

   then command

   ```
   nodemon database.js
   ```

3. For Firebase in index.js file you need to bring following changes

   ##### Firebase(Cloud Platform)

   ```
   //this part needs to be changed with credentials that you will create by by following the given link below
   const firebaseConfig = {
   apiKey: "AIzaSyC7ZRsipT3l0KuBk2GMhi1GphKLbWH1jy0",
   authDomain: "nodejs-95ecb.firebaseapp.com",
   projectId: "nodejs-95ecb",
   storageBucket: "nodejs-95ecb.appspot.com",
   messagingSenderId: "669432341466",
   appId: "1:669432341466:web:ef659c6c9a3cb71c1896e3",
   measurementId: "G-CL7HWC2Y4S",
   };
   ```

   Link: https://drive.google.com/drive/folders/1nBNeNVQdXnEowNiYP3MJVCqUSeXfFhES?usp=sharing

   then command
   ` nodemon database.js `
