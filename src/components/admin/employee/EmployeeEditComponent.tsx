import React from 'react';
import {EmployeeModel} from '../../../redux/models/EmployeeModel'

interface Props {
    // employees: EmployeeModel[];
    //  ployeesData(): void;
    // getEmployeesData(): void;
}

export default class LoginComponent extends React.Component<Props, {}> {
    componentWillMount() {
        
        // var {getEmployeesData} = this.props;
        // getEmployeesData();
    }

    onAddClick(){
        
    }
    
    render() {  
        // const {employees} = this.props; 
        // if(employees.length === 0)
        //     return null;

        return(
            <div>
                <span>edit</span>
               {/* <button type="button" className="btn btn-primary" onClick={(e) => this.onAddClick()}>Add new employee</button>
               <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Account ID</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    
                    <tbody>
                     {this.renderTable()}
                    </tbody>
                </table> */}
            </div>
        );   
        
    }
}