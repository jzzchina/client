
import axiosUtils from '../../utils/axiosUtils'
import { Get_EMPLOYEE_DATA_SUCCESS } from './ActionTypes'
import EmployeeTestData from '../testdata/EmployeeTestData'

export function getEmployeesData(){
    return (dispatch)=>{
        const test = EmployeeTestData();

        dispatch({
            type: Get_EMPLOYEE_DATA_SUCCESS,
            employees: test
        });
        // axiosUtils.get("/employees",{})
        // .then((data)=>{
        //     console.log(data)
        //     // dispatch({
        //     //     type:GET_MSG,
        //     //     msg:data.data.msg
        //     // }) 
        // })
        // .catch(err => {
        //     dispatch({
        //         type:Get_EMPLOYEE_DATA_SUCCESS,
        //         employees: EmployeeTestData
        //     });
        // });
    };
}

export function addEmployee(){
    return (dispatch)=>{
        const test = EmployeeTestData();

        dispatch({
            type: Get_EMPLOYEE_DATA_SUCCESS,
            employees: test
        });
        // axiosUtils.get("/employees",{})
        // .then((data)=>{
        //     console.log(data)
        //     // dispatch({
        //     //     type:GET_MSG,
        //     //     msg:data.data.msg
        //     // }) 
        // })
        // .catch(err => {
        //     dispatch({
        //         type:Get_EMPLOYEE_DATA_SUCCESS,
        //         employees: EmployeeTestData
        //     });
        // });
    };
}