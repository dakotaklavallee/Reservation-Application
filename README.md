![Logo](https://i.imgur.com/LZQk8KP.png)
# Periodic Tables: A Full-Stack Restaurant Reservation Solution.
This application serves as a full-stack solution to a full-stack problem: managing table reservations at a restaurant!
Built to support CRUDL operations, this is a simple and effective application for corporate usage.
A company can both create reservations for their customers, as well as service tables as need be.
Status updates are provided throughout, and when a table is finished dining, it can be cleared.

This application was built with the following tools:
Front-End: React.js, Bootstrap, HTML, CSS
Back-End: Express.js, Node.js, Knex, PostgreSQL
Deployment & Version Control: Git, GitHub, Heroku

A deployed, testable version can be viewed here:
<a href="https://resv-client.herokuapp.com/dashboard">Try Me</a>

Installation Instructions and Screenshots Included Below:
## Database setup

1. Set up four new ElephantSQL database instances - development, test, preview, and production - by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. After setting up your database instances, connect DBeaver to your new database instances by following the instructions in the "PostgreSQL: Installing DBeaver" checkpoint.

### Knex

Run `npx knex` commands from within the `back-end` folder, which is where the `knexfile.js` file is located.

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

If you have trouble getting the server to run, reach out for assistance.

## Running tests

This project has unit, integration, and end-to-end (e2e) tests. 
Test are split up by user story. You can run the tests for a given user story by running:
`npm run test:X` where `X` is the user story number.
You can aditionally run tests by running
`npm run test:backend` or
`npm run test:frontend`.
These work for the corresponsing user story commands for these extensions as well.

## Screenshots

# Dashboard
![Dashboard](https://i.imgur.com/u9MRJXHm.png)
# Table Creation
![Table Creation](https://i.imgur.com/TpWTjD0m.png)

# Create Reservation
![Create Reservation](https://i.imgur.com/bf0GBJXm.png)

# Search
![Search](https://i.imgur.com/C6pSN7Qm.png)

# Edit Reservation
![Edit Reservation](https://i.imgur.com/i5rhdRZm.png)

# Seat Table
![Seating](https://i.imgur.com/29QXmsjm.png)