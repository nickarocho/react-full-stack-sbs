import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>Hello, World!</div>
        )
    }

    componentDidMount() {
        fetch("/api/beans")
            .then(res => res.json())
            .then(beans => this.setState(beans))
            .catch(err => console.log(err))
    }

}

export default App;