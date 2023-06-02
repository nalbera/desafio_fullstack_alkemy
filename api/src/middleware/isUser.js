
const jwt = require('jsonwebtoken');

const isUser = async (req,res,next) => {
    try {
        
        const {authorization} = req.headers;

        if(!authorization) return res.status(401).send('Missing authorization header');

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization,process.env.SECRET);
        } catch (error) {
            return res.status(401).send('Invalid token');
        }
     
        req.userInfo = tokenInfo;        
        
        next();

    } catch (error) {
        
    }
}

module.exports = isUser;