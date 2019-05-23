'use strict';

import 'dotenv/config';
import app from './app';
import { logger } from './utils';

const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`Listening on port ${port}...`));
