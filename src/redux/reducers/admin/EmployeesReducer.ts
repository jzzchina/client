import { createReducer } from '../../../utils/reduxUtils';
import {Get_EMPLOYEE_DATA_SUCCESS} from '../../actions/ActionTypes'
import {EmployeeModel} from '../../models/EmployeeModel'

export interface EmployeesState {
    employees: EmployeeModel[],
};

const initialState: EmployeesState = {
	employees: []
};

function GetEmployeesDataSuccess(state, actions): EmployeesState {
    return {
        ...state,
		employees:actions.employees
    };
}

export default createReducer(initialState, {
	[Get_EMPLOYEE_DATA_SUCCESS]: GetEmployeesDataSuccess,
});
