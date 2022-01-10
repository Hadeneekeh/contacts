#Contact-list-backend

## Features
- Create contact
- Edit contact
- List contact
- Delete contact
- Contact's edit history

## Technologies
- Node.js
- Express
- MongoDB
- Mongoose ORM

## Project structure

```sh
  ├── controllers
  ├── models
  ├── routes
  ├── utils
  └── index.js *** The app entry point
```

## Endpoints
[Collection](https://documenter.getpostman.com/view/6540464/UVXgLGif)
## Development

First, clone the repo if you haven't.

  ```
  $ git clone https://github.com/Hadeneekeh/contacts.git
  ```

To start and run the local development server,

1. Go to the project folder:
  ```
  $ cd contacts
  ```

2. Create environment variables according to the `.envSample` file
  ```
    $ touch .env
  ```

3. Install the dependencies:
  ```
  $ yarn install
  ```

3. Run the development server:
  ```
  $ yarn run dev
  ```

4. Navigate to Home page [http://localhost:YOUR_PORT](http://localhost:YOUR_PORT)

## Building
The app is written in ES6+ but run ES5 transpiled code in production. This script transpile to ES5 using babel.
```
npm run build
```
