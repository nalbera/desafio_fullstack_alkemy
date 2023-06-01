const { Router } = require('express');
const validator = require('../middleware/validator');

const {
    newBudget,
    currentBalance,
    last10,
    modify,
    listOff,
    deleteBudget,
    allRegister,
    userRegister,
    loginUser
} = require('../controllers');

const router = Router();


router.get('/current-balance', currentBalance);
router.get('/last-ten', last10);
router.get('/list-status', listOff);
router.post('/budget',validator(),newBudget);
router.patch('/budget/:id', modify);
router.delete('/budget/:id',deleteBudget);

router.get('/all',allRegister);

router.post('/user/register',userRegister);
router.post('/user/login', loginUser);

router.get('/', (req,res) => {
    res.send("<h3>I'm here </h3>");
});

module.exports = router;