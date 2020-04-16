import { createReducer } from '../../../utils/reduxUtils';
import {Get_EMPLOYEE_DATA_SUCCESS} from '../../actions/ActionTypes'
import {EmployeeEditModel} from '../../models/EmployeeEditModel'

export interface EmployeeEditState {
    employeeEdit: EmployeeEditModel
};

const initialState: EmployeeEditState = {
    employeeEdit: {
        Mode: '',
        Employee: null
    },
};

function GetEmployeesDataSuccess(state, actions): EmployeeEditState {
    return {
        ...state,
		employees:actions.employees
    };
}

export default createReducer(initialState, {
	[Get_EMPLOYEE_DATA_SUCCESS]: GetEmployeesDataSuccess,
});
