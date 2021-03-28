'use strict';
module.exports = (err,req,res, next)=>{
    res.status(500);
    res.statusMessage = 'Server Error!';
    res.json({
        error:err.message, // this message is coming from the message I send im throw error
        route: req.path,
        message: "Error with the server"
    })
}