import React from 'react';
import {EmployeeModel} from '../../../redux/models/EmployeeModel'

interface Props {
    employees: EmployeeModel[];
    getEmployeesData(): void;
}

export default class LoginComponent extends React.Component<Props, {}> {
    componentWillMount() {
        
        var {getEmployeesData} = this.props;
        getEmployeesData();
    }

    onAddClick(){
        
    }
    
    renderTable(){
        const {employees} = this.props; 

        return employees.map((item) => {
            return ([
              <tr key={'Row_' + item.Uid}>
                <td>{item.Name}</td>
                <td>{item.Address}</td>
                <td><button type="button" className="btn btn-link">Edit</button>|<button type="button" className="btn btn-link">Delete</button></td>
              </tr>
            ]);
          });
    }

    render() {  
        const {employees} = this.props; 
        if(employees.length === 0)
            return null;

        return(
            <div>
               <button type="button" className="btn btn-primary" onClick={(e) => this.onAddClick()}>Create</button>
               <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
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