'use strict';

import path from 'path';
import express from 'express';
import { Server } from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routeWeb from './routes/web';
import NotFoundPage from './components/NotFoundPage';

// (async () => {

  const app = new express();
  const server = new Server(app);

  //configure support for ejs templates
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  //define the folder that will be used for static assets
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    match(
      { routes: routeWeb, location: req.url },
      (err, redirectLocation, renderProps) => {
        if(err) return res.status(500).send(err.message);

        if(redirectLocation) return res.redirect(302, redirectLocation.pathName + redirectLocaton.search);

        let markup;

        if(renderProps) {
          markup = renderToString(<RouterContext {...renderProps} />);
        } else {
          markup = renderToString(<NotFoundPage />);
          res.status(404);
        }

        return res.render('index', { markup });
      }
    );
  });

  //start the server
  const port = process.env.PORT || 3000;
  const env = process.env.NODE_ENV || 'production';

  server.listen(port, err => {
    if(err) return console.error(err);

    console.log(`Server running on http://localhost:${port} [${env}]`);
  });
// });
