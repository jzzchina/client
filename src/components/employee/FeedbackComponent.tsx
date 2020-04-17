import React from 'react';
import {FeedbackModel} from '../../redux/models/FeedbackModel'
import { Link, NavLink } from 'react-router-dom';
// import {EditType} from '../../../constants/EditTypes'
// import history from '../../../utils/history'
import axiosUtils from '../../utils/axiosUtils'

interface Props {
    loginId: string;
    feedbacks: FeedbackModel[],
    getEmployeeFeedbackData(): void;
    // setReviewEditMode(mode: EditType): void;
}


interface State {
    _uid: number;
    _name: string;
    _rank: string;
    _description: string;
}

export default class FeedbackComponent extends React.Component<Props, State> {
    componentWillMount() {
        const { getEmployeeFeedbackData } = this.props;
        getEmployeeFeedbackData();
    }

    updateEmployees(id?: number){
        // var {setEditMode} = this.props;

        // setEditMode(mode);
        // if(mode === EditType.New){
        //     history.push("/employees/add");
        // }else if(mode === EditType.Edit){
        //     history.push("/employees/edit/" + id);
        // }else if(mode === EditType.Delete){
        //     history.push("/employees/delete/" + id);
        // }
    }

    updateReview(){

    }

    renderTable(){
        const {feedbacks} = this.props;
        if(feedbacks.length === 0)
            return null;


        return feedbacks.map((item) => {
            return ([
              <tr key={'Row_' + item.Uid}>
                <td>{item.Name}</td>
                <td>{item.Rank}</td>
                <td>{item.Description}</td>
                <td>
                    <button type="button" className="btn btn-link" onClick={(e) => this.updateEmployees(item.Uid)}>Feedback</button>
                </td>
              </tr>
            ]);
          });
    }

    render() {
        return(
            <div>
               <p><button type="button" className="btn btn-link" onClick={(e) => this.updateReview()}>Create review</button></p>
               <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Description</th>
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