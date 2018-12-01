import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import Item from '../model/item';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
  let api = Router();

  // '/v1/item/add' - Create
  api.post('/add', (req, res) => {
    let newItem = new Item(req.body);

    newItem.save(err => {
      if (err) {
        res.status(500).json({ message: err });
      }
      newItem.on('es-indexed', function() {
        console.log('document indexed');
      });
      res.status(200).json({ item: 'item saved successfully' })
    });
  });

// '/v1/item/search' - Create
api.post('/search', function(req, res) {
  Item.search({
          "match": {
            "description": {
              "query": req.body.query,
              "fuzziness": "2.0"
            }
          }
        }, function(err, result) {
          console.log('res:', result.hits.hits);
          res.send(result.hits.hits);
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
    // '/v1/item/byCategory'
  api.post('/byCategory', (req, res) => {
    Item
      .find({ 'location' : req.body.location,
              'category' : req.body.category
            }, (err, messages) => {
        if(err) {
          res.status(500).json({ message: err });
        }
        res.status(200).json(messages);
      });
  });

  return api;
}
