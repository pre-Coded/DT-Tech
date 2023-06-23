const { jsonGenerate, STATUS_CODE, db } = require('../utils/constants');
const { ObjectId } = require('mongodb');
const { json } = require('express');

const fetchEvent = async (req, res) => {
    const eventId = req.query.id;
    if (eventId) {
        try {

            const result = await db.collection('events').findOne({ _id: new ObjectId(eventId) });

            console.log(result);

            if (result) {
                return res.json(jsonGenerate(STATUS_CODE.SUCCESS, "EventPayload fetched Successfully", result));
            }

            return res.json(jsonGenerate(STATUS_CODE.UNPROCESSABLE, "Unable to fetch"));
        } catch (e) {
            console.log(e);
            return res.json({
                errors: e,
            })
        }
    }

    const { type, limit, page } = req.query;

    if (type && limit && page) {
        try {

            const skipAmount = ( Number(page) - 1) * Number(limit);
            const result = await db.collection('events').find({}).sort({ schedule : -1 }).skip(skipAmount).limit(Number(limit)).toArray();

            console.log(result);

            if (result) {
                return res.json(jsonGenerate(STATUS_CODE.SUCCESS, "EventPayload fetched Successfully", result));
            }
            return res.json(jsonGenerate(STATUS_CODE.UNPROCESSABLE, "Unable to fetch"));
        } catch (e) {
            console.log(e);
            return res.json({
                errors: e,
            })
        }
    }
}

module.exports = fetchEvent;