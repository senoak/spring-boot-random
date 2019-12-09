import React, { Component } from 'react'
import ApiService from "./ApiService.js";


class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            message: null
        }
        //this.reloadUserList = this.reloadUserList.bind(this);
    }

    // componentDidMount() {
    //     this.reloadUserList();
    // }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({user: res.data.kullanici})
            });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Ölücüler</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{this.state.user}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-danger" onClick={() => this.reloadUserList()}> Random User</button>

            </div>
        );
    }

}

export default Result;
