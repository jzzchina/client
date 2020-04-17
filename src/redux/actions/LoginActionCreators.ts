
import axiosUtils from '../../utils/axiosUtils'
import { LOGIN_ADMIN_SUCCESS, LOGIN_EMPLOYEE_SUCCESS } from './ActionTypes'
import {AccountRoleType} from '../../constants/RoleTypes'

export function Login(username: string, password: string){
    return (dispatch)=>{

        //TODO
        if(username === 'admin' && password === 'admin'){
            dispatch({
                type:LOGIN_ADMIN_SUCCESS,
                isLogin: true,
                role: AccountRoleType.Admin,
                loginId: username
            });
        }
        if(username === 'employee' && password === 'employee'){
            dispatch({
                type:LOGIN_EMPLOYEE_SUCCESS,
                isLogin: true,
                role: AccountRoleType.Admin,
                loginId: username
            });
        }

        // axiosUtils.get("/login",{})
        // .then((data)=>{
        //     console.log(data)
        //     // dispatch({
        //     //     type:GET_MSG,
        //     //     msg:data.data.msg
        //     // })
        // })
    };
}