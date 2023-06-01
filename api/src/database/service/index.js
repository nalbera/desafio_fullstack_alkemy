const { Budget, Type, User } = require('../config/db');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const newUser = async (userName, password) => {
    
    const findUser = await User.findOne({where:{userName}});

    if(findUser) return 1;

    const passEncript = bycrypt.hashSync(password,10);

    const user = await User.create({
        userName,
        password: passEncript,
    });

    return user;
}

const login = async (userName,password) => {
    
    const user = await User.findOne({where:{userName}});

    if(!user) return 0;
        
    const check = bycrypt.compareSync(password,user.password);

    if(check===false) return -1;

    const jwtInfo = {
        id: user.id,
        userName: user.userName
    }

    const token = jwt.sign(jwtInfo, process.env.SECRET, {expiresIn: '1d'});

    return token;
}

module.exports = {
    setBudget,
    getAllInfo,
    modifyBudget,
    getByStatus,
    destroy,
    newUser,
    login
};