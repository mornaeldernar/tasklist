import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){ 
        return 1;
    }
    
    async function generatePromiseNumber() {
        return Promise.resolve(2);
    }

    function obtainNumber() {
        generateNumber()
            .then((response)=>alert(`Resonpse: ${response}`))
            .catch((error)=> alert(`something went wrong ${error}`));
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response)=>alert(`Resonpse: ${response}`))
            .catch((error)=> alert(`something went wrong ${error}`));
    }

    async function saveSessionStorage(key, value) {

        sessionStorage.setItem(key,value);

        return Promise.resolve(sessionStorage.getItem(key));

    }

    function showStorage() {
        saveSessionStorage('name','Rafael')
            .then((response)=>{
                let value = response;
                alert(`saved name: ${value}`);
            })
            .catch((error)=> alert(`something went wrong ${error}`))
            .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'),2000);
        });

        let message = await promise;

        await alert(`Mensaje recibido: ${message}`);

    }

    const returnError = async() => {
            await Promise.reject(new Error('UPS'));
    }

    const consumeError = () => {
        returnError()
            .then((response)=> alert(`todo OK: ${response}`))
            .catch((error) => alert(`Algo salio mal ${error}`))
            .finally(() => alert('Finally'));
    }

    const urlNotFound = async () => {
        try { 
            let response = await fetch('https://www.google.com');
            alert(`Response ${JSON.stringify(response)}`)
        }catch (error){
            alert(`Algo salio mal con la url ${error}`);
        }
    }

    const multiplePromise = async() => {
        let result = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')

            ]
        ).catch((error)=>alert(`Algo salio mal con los URLS: ${error}`))
    }

    return (
        <div>
            <button onClick={obtainNumber}>Obtener numero</button>
            <button onClick={obtainPromiseNumber}>Obtener promise numero</button>
            <button onClick={showStorage}>Show Storage</button>
            <button onClick={obtainMessage}>Obtener Mensaje</button>
            <button onClick={consumeError}>Obtener Error</button>
            <button onClick={urlNotFound}>Not found</button>
            <button onClick={multiplePromise}>Multipromesas</button>
        </div>
    );
}

export default AsyncExample;
