const { body } = require('express-validator');

const validator = () => {
    return [
        body('date').trim().notEmpty().withMessage('Date is required')
            .isISO8601().withMessage('Invalid date (YYYY-MM-DD)'),
    ]
}

module.exports = validator;