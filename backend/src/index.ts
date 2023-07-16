// use express
import express from 'express';
// use body-parser
import bodyParser from 'body-parser';
// use routes
import routes from './routes';

// use express
const app = express();

// use body-parser
app.use(bodyParser.json());

// use routes
app.use(routes);

// use express
console.log('Server started on port 3000');
app.listen(process.env.PORT || 3000);