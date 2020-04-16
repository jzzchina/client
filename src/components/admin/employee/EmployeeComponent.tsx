import React from 'react';
import {EmployeeModel} from '../../../redux/models/EmployeeModel'
import { Link, NavLink } from 'react-router-dom';

interface Props {
    employees: EmployeeModel[];
    getEmployeesData(): void;
}

export default class LoginComponent extends React.Component<Props, {}> {
    componentWillMount() {

        var {getEmployeesData} = this.props;
        getEmployeesData();
    }

    // onAddClick(){

    // }

    renderTable(){
        const {employees} = this.props;
        if(employees.length === 0)
            return null;


        return employees.map((item) => {
            return ([
              <tr key={'Row_' + item.Uid}>
                <td>{item.AccountId}</td>
                <td>{item.Name}</td>
                <td>{item.Role}</td>
                <td><button type="button" className="btn btn-link">Edit</button>|<button type="button" className="btn btn-link">Delete</button></td>
              </tr>
            ]);
          });
    }

    render() {
        return(
            <div>
               <p><NavLink to="/employees/add"> Create new employee </NavLink></p>
               <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    <tbody>
                     {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );

    }
}