const { jsonGenerate, STATUS_CODE, db } = require('../utils/constants');
const { ObjectId } = require('mongodb');
const { json } = require('express');

const uploadEvent = async (req, res) => {
    try{

        const eventPayload = {
            name : req.body.name,
            files : req.file.destination,
            tagline : req.body.tagline, 
            schedule : req.body.schedule,
            moderator : req.body.moderator,
            category : req.body.category,
            sub_category : req.body.sub_category,
            rigor_rank : req.body.rigor_rank,
        }

        const result = await db.collection('events').insertOne(eventPayload);

        if(result){
            return res.json(jsonGenerate(STATUS_CODE.SUCCESS, "Event created Succesfully", { id : result.insertedId }));
        }

        return res.json(jsonGenerate(STATUS_CODE.UNPROCESSABLE, "Unable to delete"));
    }catch(e){
        return res.json({
            error : e
        })
    }
}

module.exports = uploadEvent;