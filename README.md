# simple-rest-api
## 1. Setup NodeJS project:

```bash
npm init -y
```

Install necessary dependancies:
```bash
    npm install express mongoose body-parser
```

## 2. MongoDB Installation and Setup:

```bash
npm install mongodb
```
Set Up a MongoDB Instance:

You have two options for running MongoDB:

### a) Local Installation (for development purposes):

Download the MongoDB Community Server from the official website: https://www.mongodb.com/docs/manual/installation/
Follow the installation instructions for your operating system.
Start the MongoDB server using the appropriate command (refer to the installation guide).
### b) MongoDB Atlas (cloud-based option):

Create a free MongoDB Atlas account: https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/
Deploy a free cluster and create a database user.
Note down the connection string provided by Atlas, which includes your cluster URL, database name, and username/password.

## 3. Create Your Express Server:

Create a file named server.js and set up your express server.

## 4. Define Your Product Model:

Create a directory named models and within that directory, create a file named Product.js

## 5. Create Routes For Products:

Create a directory named routes and within that directory, create a file named products.js

## 6. Run Your Server:

Now, you can run your server by executing this command:
```bash
node server.js
```
Your RESTful API for products will be accessible at http://localhost:3000/products.

You can test your API using tools like Postman or by sending HTTP requests using curl or any programming language's HTTP client library. 
Make sure to have MongoDB running in the background for the database operations to work properly.

