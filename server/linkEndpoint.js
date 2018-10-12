import { WebApp } from 'meteor/webapp'
import * as data from '../data.json'

// Listen to incoming HTTP requests (can only be used on the server).
WebApp.connectHandlers.use('/link', (req, res, next) => {
    res.writeHead(200);
    res.end(JSON.stringify(data))
  });

  