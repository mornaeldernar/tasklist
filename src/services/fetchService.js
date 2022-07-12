export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');

    
    console.log('Response:',response);
    console.log('Status:',response.status);
    console.log('Ok?:',response.ok);


    //regresamos el json 
    return response.json();
    
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);

    
    console.log('Response:',response);
    console.log('Status:',response.status);
    console.log('Ok?:',response.ok);


    //regresamos el json 
    return response.json();
    
}

export const getUserDetail = async(id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);

    
    console.log('Response:',response);
    console.log('Status:',response.status);
    console.log('Ok?:',response.ok);

    //regresamos el json 
    return response.json();

}

export const login = async (email, password) => {
    
    
    console.log('iniciando login:',email);
    console.log('iniciando login:',password);
    let body = {
        "email": email, 
        "password": password
    }

    
    let response = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        mode: 'cors',
        //credentials: 'omit',
        //cache: 'no-cache',
        //headers: {
        //    'Content-type':'application/json'
        //},
        body:(body),
    });

    console.log('Response:',response);
    console.log('Status:',response.status);
    console.log('Ok?:',response.ok);
    return response.json();
}