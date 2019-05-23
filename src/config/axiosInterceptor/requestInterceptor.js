const requestInterceptor = config => {
  const upstreamRequest = {
    method: config.method.toUpperCase(),
    url: config.url,
    headers: config.headers
  };

  config.metadata = {
    upstreamRequest,
    logLevel: 'upstream',
    ...config.metadata
  };

  return config;
};

export default requestInterceptor;
