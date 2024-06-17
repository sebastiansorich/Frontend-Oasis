const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/productos',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Cambia esto al puerto donde se encuentra tu servidor
      changeOrigin: true,
    })
  );
};
