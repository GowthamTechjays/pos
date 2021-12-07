import React from "react";
import App from './App';
import Hub from './Hub';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true };
    }

    componentDidMount() {
        if (window.location.href === 'http://localhost:3000/') {
            this.setState({ change: false })
        }
        console.log("working", window.location.href, window.location.pathname)
    }

    render() {
        return (
            <div>
                { this.state.change  ? (
                    <App />
                ) : (
                    <Hub />
                )}
            </div>
        );
    }
}

export default Test;
