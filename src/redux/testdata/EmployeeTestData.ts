import {EmployeeModel} from '../models/EmployeeModel';

export default function createEntities(): EmployeeModel[] {
    return [
        { Uid: 1, Name: 'Test Name1', Address: 'Address1' },
        { Uid: 2, Name: 'Test Name2', Address: 'Address2' },
        { Uid: 3, Name: 'Test Name3', Address: 'Address3' },        
    ];
}
