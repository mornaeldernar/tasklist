import React, { useRef } from 'react';

const Hijo = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert("Defalt Text")
    }

    function pressButtonParams(text){
        alert(text);
    }
    
    function submitForm(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'green', padding:'30px;'}}>
            <p onMouseOver={() => {console.log('mouse over')}}>Componente Hijo de {name}</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={() => pressButtonParams("Texto")}>Boton 3</button>
            <input placeholder='Nombre'
                onFocus={()=>console.log("input focus")}
                onChange={(e)=>console.log("input change",e.target.value)}
                onCopy={()=>console.log("copy")}
                ref={messageRef}
            />
            <button className='btn btn-primary' onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitForm}>
                    <input
                        placeholder='Escribe tu nombre'
                        ref={nameRef}
                    />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Hijo;
