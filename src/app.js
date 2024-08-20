import { web } from './apps/web.js';
import { config } from './utils/config.js';

web.get('/', (req, res) => {
  res.send('Hello World');
});

web.listen(config.app.port, () => {
  console.info(`listening on port ${config.app.port}`);
});
