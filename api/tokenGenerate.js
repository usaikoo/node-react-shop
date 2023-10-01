const jwt = require('jsonwebtoken');

const generateToekn = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRECT,{
        expiresIn:"30d"
    })
}

module.exports = generateToekn;