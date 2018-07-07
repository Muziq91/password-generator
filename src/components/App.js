import React, { Component } from 'react';
import TextBlockRow from './TextBlockRow'

class App extends Component {

    ontextBlockSelected(){

    }

    render() {
        return (
            <div className="content">
                <div className="ms-Grid">
                    <TextBlockRow textBlockSelected={this.ontextBlockSelected.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default App;