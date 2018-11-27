import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initalizeDb from '../db';
import user from '../controller/user';
import account from '../controller/account';
import channel from '../controller/channel';
import message from '../controller/message';
import item from '../controller/item';
import location from '../controller/location';

let router = express();

//connect to db
initalizeDb(db => {

  //internal middleware
  router.use(middleware({ config, db }));

  //api routes v1 (/v1)
  router.use('/user', user({ config, db }));
  router.use('/account', account({ config, db }));
  router.use('/channel', channel({ config, db }));
  router.use('/message', message({ config, db }));
  router.use('/item', item({ config, db }));
  router.use('/location', location({ config, db }));
});

export default router;
