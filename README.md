# Modusin API & Data Specification

> Modusin is a publishing network for learners

The goal of this app is to clone a [Medium](https://medium.com) web app, called [Modusin](https://modusin.com).

![Screenshot](./screenshot.png)

## Tech Stack

- Node.js
- Express.js / Sails.js
- MongoDB & Mongoose
- PostgreSQL & Sequelize
- Heroku / Now.sh

--------------------------------------------------------------------------------

## Development

### Application

Install `yarn` with `npm`

```sh
npm install -g yarn
```

### Running

```sh
yarn install
yarn dev
```

--------------------------------------------------------------------------------

## Deployment

### Infrastructure

GitHub => Heroku => CloudFlare => api.modusin.com

### Application

`node` => `pm2`

### Running

```sh
yarn deploy
```

--------------------------------------------------------------------------------

## Data Models

### Posts

```json
{
  "_id": ObjectId,
  "id": Number,
  "title": String,
  "image_name": String,
  "image_url": String,
  "content": String,
  "author": {
    "name": String,
    "bio": String
  },
  "read_time": Number,
  "created_at": Date,
  "updated_at": Date
}
```

### Accounts

```json
{
  "_id": ObjectId,
  "id": Number,
  "name": String,
  "bio": Number
  "email": String,
  "password": String,
  "reset_token": "",
  "following": [],
  "followers": [],
  "created_at": Date,
  "updated_at": Date
}
```

--------------------------------------------------------------------------------

## API Endpoints

Root URL: `http://localhost:3000`

### Posts

| Endpoint     | HTTP | Description |
|--------------|------|-------------|
| `/posts`     | GET  | Get all posts
| `/posts/:id` | GET  | Get thing by id
| `/posts`     | POST | Create a new post
| `/posts`     | DEL  | Delete all posts
| `/posts/:id` | DEL  | Delete thing by id
| `/posts/:id` | PUT  | Update thing by id

### Accounts

| Endpoint        | HTTP | Description |
|-----------------|------|-------------|
| `/register`     | POST | Sign up for a new user
| `/login`        | POST | Sign in with existed user
| `/logout`       | POST | Sign in with existed user
| `/accounts`     | GET  | Get all accounts
| `/accounts`     | DEL  | Delete all accounts
| `/accounts/:id` | GET  | Get one user profile by id
| `/accounts/:id` | DEL  | Delete one user profile by id
| `/accounts/:id` | PUT  | Update one user profile by id

--------------------------------------------------------------------------------

## License

[MIT License](./LICENSE)
