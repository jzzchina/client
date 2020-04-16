
import axiosUtils from '../../utils/axiosUtils'
import { Get_EMPLOYEE_DATA_SUCCESS, UPDATE_EMPLOYEE_SUCCESS } from './ActionTypes'
import EmployeeTestData from '../testdata/EmployeeTestData'
import {EmployeeModel} from '../models/EmployeeModel'
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../redux/reducers/RootReducer';

export function getEmployeesData(){
    return (dispatch)=>{
        // const test = EmployeeTestData();


        axiosUtils.get("/employees",{})
            .then((res)=>{
                const data  = res.data;

                dispatch({
                    type: Get_EMPLOYEE_DATA_SUCCESS,
                    employees: data
                });
            })
            .catch(err => {
                dispatch({
                    type:Get_EMPLOYEE_DATA_SUCCESS,
                    employees: EmployeeTestData
                });
            });
    };
}

export function addEmployee(employee: EmployeeModel){
    return (dispatch)=>{

        // const test = employee;

        axiosUtils.post("/employees/add",employee)
            .then((data)=>{
                dispatch({
                    type: UPDATE_EMPLOYEE_SUCCESS,
                    // employees: data
                });

                // getEmployeesData()
            })
    };
}


// export default {
//     getEmployeesData,
//     addEmployee,
// }