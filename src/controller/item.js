import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import Item from '../model/item';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
  let api = Router();

  // '/v1/item/add' - Create
  api.post('/add', (req, res) => {
    let newItem = new Item();
    newItem.category = req.body.category;
    newItem.description = req.body.description;
    newItem.location = req.body.location;
    newItem.longDescription = req.body.longDescription;
    newItem.value = req.body.value;

    newItem.save(err => {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ item: 'item saved successfully' })
    });
  });


  // '/v1/item/byLocation'
  api.post('/byLocation', (req, res) => {
    Item
      .find({ 'location' : req.body.location }, (err, messages) => {
        if(err) {
          res.status(500).json({ message: err });
        }
        res.status(200).json(messages);
      });
  });

  return api;
}
