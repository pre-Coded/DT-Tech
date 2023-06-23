const { client } = require('../dbConnection/mongoDb')
const db = client.db('dtTech');

const jsonGenerate = (status , message , data = null) => {
    return { status , message , data };
}

const STATUS_CODE = {
    SUCCESS : 200, 
    UNPROCESSABLE : 202,
}

module.exports = {
    jsonGenerate, 
    STATUS_CODE,
    db,
}