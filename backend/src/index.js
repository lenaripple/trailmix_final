import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middleware';

console.log(constants);

const app = express()

app.listen(constants.PORT, err => {
  if (err) {
    throw err
  } else {
    console.log(`server running on ${constants.PORT}, server running on ${process.env.NODE_ENV}`);
  }
})
