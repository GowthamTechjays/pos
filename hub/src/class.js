import React from "react";
import App from './App';
import Hub from './Hub';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: '' };
    }

    componentWillMount() {
        // this.setState({ change: true })
        if (window.location.href === 'http://localhost:3000/') {
            this.setState({ change: 'false' })
            console.log("working", this.state)
        }
    }

    render() {
        return (
            <div>
                { this.state.change && this.state.change === 'false' ? (
                    <App />
                ) : (
                    <Hub />
                )}
            </div>
        );
    }
}

export default Test;
