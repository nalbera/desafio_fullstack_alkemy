const { Budget, Type } = require('../config/db');

const setBudget = async (date, description, amount, typeId) => {
    
    const newBudget = await Budget.create({date, description, amount, typeId});
        
    return newBudget;
};

const getAllInfo = async () => {
    
    const budgets = await Budget.findAll({
        include:{
            model: Type,
        }
    });

    const info = budgets?.map((elem) => {
        return{
            id: elem.id,
            date: elem.date,
            description: elem.description,
            amount: elem.amount,
            type: elem.type.id,
            typeDescription: elem.type.description
        }
    });
    
    return info;
};

const modifyBudget = async (id, date, description, amount) => {
    const budgetModify = await Budget.update({
        date,
        description,
        amount,
    },
    {
        where: { id }
    }
    )
    return budgetModify;
};

const getByStatus = async (st) => {
    const budgets = await Type.findAll({
        where: {
            id: st,
        },
        include:{
                model: Budget,
            }
    });
    return budgets;
};

const destroy = async (id) => {
   await Budget.destroy({
        where: {
            id: id,
        }
    });
    return;
}

module.exports = {
    setBudget,
    getAllInfo,
    modifyBudget,
    getByStatus,
    destroy,
};