import React from 'react';
import { Redirect } from 'react-router-dom';
import {EmployeeModel} from '../../../redux/models/EmployeeModel'

interface Props {
    updateSuccess: boolean;
    addEmployee(employee: EmployeeModel): void;
}

interface State {
    AccountId: string;
    Password: string;
    Name: string;
    Role: string;
}


export default class LoginComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            AccountId: '',
            Password: '',
            Name: '',
            Role: 'Admin'
        };
    }

    componentWillMount() {
        // var {getEmployeesData} = this.props;
        // getEmployeesData();
    }

    onCreateClick(){
        const {AccountId,Password, Name, Role } = this.state;
        const {addEmployee} = this.props;

        const employee: EmployeeModel = {
            AccountId: AccountId,
            Password: Password,
            Name: Name,
            Role: Role,
            Uid: -1
        };

        addEmployee(employee);

    }

    render() {
        const {updateSuccess} = this.props;
        if(updateSuccess){
            return <Redirect to = '/employees' />;
        }

        const {AccountId,Password, Name, Role } = this.state;

        return(
            <div>
                <div className="col-md-6 col-md-offset-3">
                <h2>Create new employee</h2>
                {/* <form name="form"> */}
                    <div className='form-group'>
                        <label >ID </label>
                        <input type="text" className="form-control" value={AccountId}
                            onChange={e => this.setState({AccountId: e.currentTarget.value}) }/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className="form-control" value={Password}
                           onChange={e => this.setState({Password: e.currentTarget.value}) }/>
                    </div>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className="form-control" value={Name}
                           onChange={e => this.setState({Name: e.currentTarget.value}) }/>
                    </div>
                    <div className='form-group'>
                        <label>Role</label>
                        <select  className="form-control" value={Role} onChange={e => this.setState({Role: e.currentTarget.value})}>
                            <option key="Admin" value="Admin">Admin</option>
                            <option key="Employee" value="Employee">Employee</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(e) => this.onCreateClick()}>Create</button>
                    </div>
                {/* </form> */}
            </div>
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