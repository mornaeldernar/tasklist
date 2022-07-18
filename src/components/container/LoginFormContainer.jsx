import React from 'react'
import { connect } from 'react-redux'
import LoginFormAsyncRedux from '../pure/forms/loginFormAsyncRedux'
import { httpRequest } from '../../store/actions/asyncActions';



const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email : email,
                password: password
            }
            const url = 'https://reqres.in/api/login';
            dispatch(httpRequest('post',url, data))
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormAsyncRedux)

export default LoginFormContainer