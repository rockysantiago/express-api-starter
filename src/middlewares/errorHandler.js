import { RESPONSES } from '../constants';

const errorHandler = (err, req, res, next) => {
  if (err.response) {
    return res.status(err.response.status).json(err.response.data);
  } else if (err.request) {
    return res.status(500).json(RESPONSES.INTERNAL_SERVER_ERROR);
  } else {
    return res.status(500).json(RESPONSES.INTERNAL_SERVER_ERROR);
  }
};

export default errorHandler;
