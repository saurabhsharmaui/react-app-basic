import React from 'react';
export default class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <h1>{this.props.text.text}</h1>

            </div>
        );
    }
}