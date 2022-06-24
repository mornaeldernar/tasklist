/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */
import React, { Component } from 'react';

class LifeCicleExample extends Component {
    constructor(props){
        super(props);
        console.log('CONSTRUCTOR Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');

    }
    componentDidMount(){
        console.log('DIDMOUNT: Justo al montaje del componete, antes de renderizarlo');

    }
    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: si va a recibir nuevas props');
    }
    shouldComponentUpdate(nextProps,nextState){
        
        console.log('shouldComponentUpdate: si el componente debe o no actualizarse');
    }
    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: justo antes de actualizarse');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: justo despues de actualizarse');

    }
    componentWillUnmount() {
        console.log('WillUnmount: justo antes de desaparecer');
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCicleExample;
