import { createReducer } from '../../../utils/reduxUtils';
import {Get_EMPLOYEE_DATA_SUCCESS} from '../../actions/ActionTypes'
import {EmployeeModel} from '../../models/EmployeeModel'

export interface EmployesState {
    employees: EmployeeModel[],
};

const initialState: EmployesState = {
	employees: []
};

function GetEmployeesDataSuccess(state, actions): EmployesState {
    return {
        ...state,
		employees:actions.employees
    };
}

export default createReducer(initialState, {
	[Get_EMPLOYEE_DATA_SUCCESS]: GetEmployeesDataSuccess,
});
