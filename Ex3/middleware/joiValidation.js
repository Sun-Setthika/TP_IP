// const { json } = require("express");

const joiValidation = (schema) => {
    return async (req, res, next) => {
        // const param = req.body;
        try{
            const body = req.body;
            await schema.validateAsync(body);
        }catch(err){
             return res.json({ success: false, error: err });
        next();
    }
}
}

module.exports = {
    joiValidation
}