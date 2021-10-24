const {customError} = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {
    if(err instanceof customError) {
        res.status(err.statusCode).json({msg: err.message})
    }
    res.status(500).json({ msg: `An internal error occurred`})
}

module.exports = errorHandler;