const { Budget, Type } = require('../database/config/db');
const {validationResult} = require('express-validator');

const {setBudget, getAllInfo, modifyBudget, getByStatus,destroy} = require('../database/service');

const newBudget = async (req,res) => {
    
    const {
        date,
        description,
        amount,
        type
    } = req.body;

    try {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({
                status: 'ERROR',
                errors: errors.array()
            });
        }
        
        let newBudget = await setBudget(date,description,amount,type);
        
        res.status(200).send({
             status: 'OK',
             data: newBudget
        });
    } catch (error) {
        res.status(400);
        console.log(error);
    }
};

const currentBalance = async (_req, res) => {
    try {
        const budgets = await getAllInfo();
        const income = budgets.filter((elem)=>elem.type==1).reduce((ac,cv) => parseFloat(ac)+parseFloat(cv.amount),0);
        const bills = budgets.filter((elem)=>elem.type==2).reduce((a,v) => parseFloat(a)+parseFloat(v.amount),0);
        res.status(200).json({total: (income - bills)})
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}

const last10 = async (req,res) => {
    try {
        const budgets = await getAllInfo();
        if(budgets.length > 10){
            const last = budgets.slice(budgets.length - 10);
            return res.status(200).json({cant: budgets.length ,data: last});
        }
        res.json({cant: budgets.length ,data: budgets});
    } catch (error) {
        res.status(400);
        console.log(error);
    }
};

const modify = async (req, res) => {
    const { id } = req.params;
    const {
        date,
        description,
        amount,
    } = req.body;
    try {
        const budget = await modifyBudget(id, date, description, amount)
        res.status(200).json({budget, message: 'The registration was correctly modified.'});
    } catch (error) {
        res.status(400);
        console.log(error);
    }
};

const listOff = async (req, res) => {
    const { status } = req.query;
    //res.send(status);
    try {
        const budgets = await getByStatus(parseInt(status));
        const info = budgets[0].budgets.map((elem) => {
            return{
                id: elem.id,
                date: elem.date,
                description: elem.description,
                amount: elem.amount
            }
        });
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json({Message: 'Not Found'});
        console.log(error);
    }
};

const deleteBudget = async (req, res) => {
    const { id } = req.params;
    try {
        await destroy(id);
        res.status(200).json({Message: 'Record deleted successfully'})
    } catch (error) {
        console.log(error);
        res.status(400).json({Message: error});
    }
};

const allRegister = async (req,res) => {
    const registers = await getAllInfo();
    res.json({cant: registers.length, data: registers});
}

module.exports = {
    newBudget,
    currentBalance,
    last10,
    modify,
    listOff,
    deleteBudget,
    allRegister
}