
export const postNewBudget = async ({date, description, amount, type}) => {
    
    const url = 'http://localhost:3001/budget';
    const token = sessionStorage.getItem('token');

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
    //console.log(json, 'json');
    return json;
};

export const modifyBudget = async (id, date, description, amount) => {
    
    
    const url = `http://localhost:3001/budget/${id}`;
    const token = sessionStorage.getItem('token');

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

export const deleteBudget = async (id) => {
    
    try {
        const url = `http://localhost:3001/budget/${id}`;
        const token = sessionStorage.getItem('token');

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