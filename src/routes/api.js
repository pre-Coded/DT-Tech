const express = require('express')
const uploads = require('../utils/fileImageStorage');

const fetchEvent = require('../controllers/fetchEvent');
const uploadEvent = require('../controllers/uploadEvent');
const deleteEvent = require('../controllers/deleteEvent');
const updateEvent = require('../controllers/updateEvent');

const apiProtected = express.Router();

apiProtected.post('/events', uploads.single(`file`) , uploadEvent);
apiProtected.put("/events/:id" ,uploads.single('file'), updateEvent);
apiProtected.get('/events', fetchEvent);
apiProtected.delete("/events/:id", deleteEvent);

module.exports = {
    apiProtected,
}

