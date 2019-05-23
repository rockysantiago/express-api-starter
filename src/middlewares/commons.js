import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

export default [
  bodyParser.urlencoded({
    extended: true
  }),
  bodyParser.json(),
  compression(),
  helmet()
];
