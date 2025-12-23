import React from "react";
import axios from "axios";

export default class RepositoriesList extends React.Component {
    state = {
        repositories: [],
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/mavhawk64`).then((res) => {
            this.setState({ repositories: res.data });
        });
    }

    render() {
        return (
            <>
                <i className="bi bi-laptop"></i>
                <h2 className="mavericks-h2">{this.state.repositories.public_repos}</h2>
                <p>
                    <strong>Public Repositories</strong> uploaded to GitHub
                </p>
                <p style={{ fontSize: 8 + "px" }}>Number fetched using Axios with React</p>
            </>
        );
    }
}
