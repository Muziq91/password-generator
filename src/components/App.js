import React, { Component } from 'react';
import TextBlockRow from './TextBlockRow'

class App extends Component {

    ontextBlockSelected() {

    }

    initializeBlockRows() {
        var rows = [];
        for (var i = 0; i < 4; i++) {
            rows.push(<TextBlockRow key={`row${i}`}
                textBlockSelected={this.ontextBlockSelected.bind(this)} />);
        }

        return (<div className="content"> {rows}</div>);
    }

    render() {
        return (
            <div className="content">
                <div className="ms-Grid">
                    {this.initializeBlockRows()}
                </div>
            </div>
        )
    }
}

export default App;