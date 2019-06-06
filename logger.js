'use strict';

const QClient = require('@nmq/q/client');
const events = require('./utils/events.js');

const files = new QClient('files');
files.subscribe(events.files.SAVE, payload => {
  console.log('💾 ', payload);
});
files.subscribe(events.files.ERROR, payload => {
  console.log('😱 ', payload);
});

const database = new QClient('database');
database.subscribe(events.database.CREATE, ({ message }) => {
  console.log('🆕 ', message);
});
database.subscribe(events.database.READ, ({ message }) => {
  console.log('👀 ', message);
});
database.subscribe(events.database.UPDATE, ({ message }) => {
  console.log('✍️ ', message);
});
database.subscribe(events.database.DELETE, ({ message }) => {
  console.log('💣 ', message);
});
