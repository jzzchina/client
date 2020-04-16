import { createReducer } from '../../../utils/reduxUtils';
import {UPDATE_EMPLOYEE_SUCCESS} from '../../actions/ActionTypes'
import {EmployeeEditModel} from '../../models/EmployeeEditModel'

export interface EmployeeEditState {
    employeeEdit: EmployeeEditModel,
    updateSuccess: boolean,
};

const initialState: EmployeeEditState = {
    employeeEdit: {
        Mode: '',
        Employee: null
    },
    updateSuccess: false,
};

function updateEmployeesSuccess(state, actions): EmployeeEditState {
    return {
        ...state,
		updateSuccess:true,
    };
}

export default createReducer(initialState, {
	[UPDATE_EMPLOYEE_SUCCESS]: updateEmployeesSuccess,
});
