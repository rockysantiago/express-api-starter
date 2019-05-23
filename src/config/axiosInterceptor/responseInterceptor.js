import { logger } from '../../utils';

const responseInterceptor = response => {
  const upstreamResponse = {
    statusCode: response.status,
    headers: response.headers
  };

  logger.info({
    upstreamRequest: response.config.metadata.upstreamRequest,
    logLevel: response.config.metadata.logLevel,
    upstreamResponse,
    receivedResponse: true,
    msg: `upstream request 200 OK`
  });

  return response;
};

export default responseInterceptor;
