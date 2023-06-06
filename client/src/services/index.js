
export const postNewBudget = async ({date, description, amount, type, token}) => {
    
    const url = 'http://localhost:3001/budget';

    const data = {
        date: date,
        description: description,
        amount: amount,
        type: type
    };
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            authorization: token
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();

    return json;
};

export const modifyBudget = async (id, date, description, amount, token) => {
    
    
    const url = `http://localhost:3001/budget/${id}`;

    const data = {
        id: id,
        date: date,
        description: description,
        amount: amount
    };

    const response = await fetch(url, {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            authorization: token
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();

    return json;
};

export const deleteBudget = async (id, token) => {
    
    try {
        const url = `http://localhost:3001/budget/${id}`;
        
        const response = await fetch(url, {
          method: "DELETE",
          headers:{
              authorization: token
          }
        });
      
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
      
        const data = await response.json();
        return data;
        
      } catch (error) {
        console.log('Error: ' + error);
      }
}

export const login = async (userName,password) => {

    try {
        
        const url = 'http://localhost:3001/user/login';
        
        const data = {
            userName,
            password
        };

        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();

        return json;

    } catch (error) {
        console.log(error);
    }
    
}

export const getUserInfo = async (token) => {
    try {
        const url = 'http://localhost:3001/user';
        
        const response = await fetch(url, {
            method: "GET",
            headers:{
                authorization: token
            }
          });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}