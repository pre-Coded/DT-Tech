const { jsonGenerate, STATUS_CODE, db } = require('../utils/constants');
const { ObjectId } = require('mongodb');
const { json } = require('express');

const deleteEvent = async (req, res) => {
    try{
        const eventId = req.params.id;

        const result = await db.collection('events').deleteOne({ _id : new ObjectId(eventId) });

        if(result){
            return res.json(jsonGenerate(STATUS_CODE.SUCCESS, "Event deleted Succesfully"));
        }

        return res.json(jsonGenerate(STATUS_CODE.UNPROCESSABLE, "Unable to delete"));

    }catch(e){
        return res.json({
            error : e
        })
    }
}

module.exports = deleteEvent;