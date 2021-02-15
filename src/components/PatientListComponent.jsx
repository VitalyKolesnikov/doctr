import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PatientService from '../services/PatientService';
import { FaEdit } from 'react-icons/fa';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class PatientListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patients: []
        }
        // this.deletePatient = this.deletePatient.bind(this);
    }

    componentDidMount() {
        PatientService.getPatients().then((response) => {
            this.setState({ patients: response.data });
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Patients</h2>
                <div className="row">
                    <Link className="nav-link" to="/add-update-patient/_add" >
                        <button className="btn btn-primary">+ Add</button>
                    </Link>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Birth Date</th>
                                <th>email</th>
                                <th>Phone</th>
                                <th>Info</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.patients.map(
                                    patient =>
                                        <tr key={patient.id}>
                                            <td>{patient.lastName}</td>
                                            <td>{patient.firstName}</td>
                                            <td>{patient.middleName}</td>
                                            <td>{patient.birthDate}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.phone}</td>
                                            <td>{patient.info}</td>
                                            <td>
                                                <Link className="nav-link" to={'/add-update-patient/' + patient.id} >
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                        <FaEdit />
                                                    </OverlayTrigger>
                                                </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default PatientListComponent;