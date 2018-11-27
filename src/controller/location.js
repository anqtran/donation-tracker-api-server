import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import Location from '../model/location';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
	let api = Router();
	// '/v1/location/add'
	api.post('/add', (req, res) => {
    let newLocation = new Location();
    newLocation.name = req.body.name;
    newLocation.latitude = req.body.latitude;
    newLocation.longitude = req.body.longitude;
    newLocation.streetAddress = req.body.streetAddress;
    newLocation.city = req.body.city;
    newLocation.state = req.body.state;
    newLocation.zip = req.body.zip;
    newLocation.type = req.body.type;
    newLocation.phone = req.body.phone;
    newLocation.website = req.body.website;
   
    newLocation.save(err => {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ location: 'location saved successfully' })
    });
  });

	return api;
}