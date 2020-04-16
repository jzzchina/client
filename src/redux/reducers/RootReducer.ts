
import { combineReducers, Reducer } from 'redux';

import login, { LoginState } from './LoginReducer';
import employees, { EmployeesState, } from './admin/EmployeesReducer';
import employeeEdit, { EmployeeEditState } from './admin/EmployeeEditReducer';


// 全てのStateを集約したStateを定義
export interface RootState {
  login: LoginState;
  employees: EmployeesState;
  employeeEdit: EmployeeEditState;
}

// 全てを集約したReducerを作成
export default combineReducers<RootState>({
  login,
  employees,
  employeeEdit,
});


