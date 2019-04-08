const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

const redis = require("redis");

function log(body, callback = function () {}) {
  const client = redis.createClient({
    host: 'redis'
  });
  const dt = new Date().getTime();

  const data = [JSON.stringify({ type: body.type, dt: dt })];

  client.lpush('logs', data, function (err) {
    callback(err, `Logger: "${body.type}", dt - ${dt}`);

    client.quit();
  });
}

app.post('/action', function ({ body }, res) {
  log(body, (err, data) => {
    if (data) {
      res.status(201).send({});
    } else {
      res.status(404).send({
        error: err
      });
    }
  });
});

app.post('/data', function ({ body }, res) {
  const client = redis.createClient({
    host: 'redis'
  });
  const dt = new Date().getTime();

  const data = [JSON.stringify({ dt, title: body.title, text: body.text })];

  client.lpush('data', data, function(err, data) {
    if (data) {
      res.status(201).send({});

      log({ type: 'addData' });
    } else {
      res.status(404).send({
        error: err
      });
    }

    client.quit();
  });
});

app.get('/logs', function (req, res) {
  const client = redis.createClient({
    host: 'redis'
  });

  client.lrange('logs', 0, -1, function (err, data) {
    if (data) {
      const rslt = data.map(item => {
        return JSON.parse(item);
      });
      res.send(rslt);
    } else {
      res.sendStatus(404).send({
        error: err
      });
    }

    client.quit();
  });
});

app.get('/data', function (req, res) {
  const client = redis.createClient({
    host: 'redis'
  });

  client.lrange('data', 0, -1, function (err, data) {
    if (data) {
      const rslt = data.map(item => {
        return JSON.parse(item);
      });
      res.send(rslt);
    } else {
      res.sendStatus(404).send({
        error: err
      });
    }

    client.quit();
  });
});

app.listen(3001);
