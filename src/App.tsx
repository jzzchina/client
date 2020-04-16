// App.tsx
import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import RouteWrapper from "./redux/RouteWrapper";
// import 'bootstrap/dist/css/bootstrap.min.css';

import history from './utils/history';
import Layout from './containers/Layout';
import Login from './containers/LoginContainer';
import Employees from './containers/admin/EmployeesContainer';
import EmployeesEdit from './containers/admin/EmployeesEditContainer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <RouteWrapper exact path="/employees" component={Employees} layout={Layout} />
                    <RouteWrapper exact path="/employees/add" component={EmployeesEdit} layout={Layout} />
                    <RouteWrapper exact path="/employees/edit/:id" component={EmployeesEdit} layout={Layout} />
                    <RouteWrapper exact path="/employees/delete/:id" component={EmployeesEdit} layout={Layout} />
                    <RouteWrapper exact path="/view" component={Employees} layout={Layout} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
