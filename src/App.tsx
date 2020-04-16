// App.tsx
import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import RouteWrapper from "./redux/RouteWrapper";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './containers/Layout';
import Login from './containers/LoginContainer';
import Employees from './containers/admin/EmployeesContainer';
import EmployeesEdit from './containers/admin/EmployeesEditContainer';

const history = createBrowserHistory();

export default class App extends React.Component {
  
    render() {
        return (
            <div>
                <Router history={history}>   
                    <Route exact path="/" component={Login} />                      
                    <Route path="/login" component={Login} />
                    <RouteWrapper path="/employees" component={Employees} layout={Layout} />
                    <RouteWrapper path="/employees/add" component={EmployeesEdit} layout={Layout} />
                    <RouteWrapper path="/employees/edit" component={Employees} layout={Layout} />
                    <RouteWrapper path="/view" component={Employees} layout={Layout} />                    
                </Router>
            </div>
        );
    }
}
