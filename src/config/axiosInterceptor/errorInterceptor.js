import { logger } from '../../utils';

const errorInterceptor = error => {
  const axiosError = error.response
    ? {
        statusCode: error.response.status,
        headers: error.response.headers,
        body: error.response.data
      }
    : { message: error.message };

  logger.error({
    upstreamRequest: error.config.metadata.upstreamRequest,
    logLevel: error.config.metadata.logLevel,
    axiosError,
    receivedResponse: error.response !== undefined,
    msg: `upstream request errored`
  });

  return Promise.reject(error);
};

export default errorInterceptor;
