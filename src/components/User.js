import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <form>
        <li>isim     : {this.props.isim}</li>
        <li>departman: {this.props.departman}</li>
        <li>ünvan    : {this.props.unvan}</li>
                </form>
            </div>
        )
    }
}
export default User;
