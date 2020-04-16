import { createReducer } from '../../utils/reduxUtils';
import { AccountRoleType } from '../../constants/RoleTypes'
import {LOGIN_ADMIN_SUCCESS, LOGIN_EMPLOYEE_SUCCESS} from '../actions/ActionTypes'


export interface LoginState {
    isLogin: boolean;
    accountId: string;
    email: string;
    familyName: string;
    givenName: string;
    role: AccountRoleType;
    error: any;
};

const initialState: LoginState = {
	isLogin: false,
	accountId: '',
	email: '',
	familyName: '',
	givenName: '',
	role: AccountRoleType.None,
	error: ''
};

function loginAdminSuccess(state): LoginState {
    return {
        ...state,
		isLogin: true,
		role: AccountRoleType.Admin
    };
}

function loginEmployeeSuccess(state): LoginState {
    return {
        ...state,
		isLogin: true,
		role: AccountRoleType.Employee
    };
}

export default createReducer(initialState, {
	[LOGIN_ADMIN_SUCCESS]: loginAdminSuccess,
	[LOGIN_EMPLOYEE_SUCCESS]: loginEmployeeSuccess,
});
