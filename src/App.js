import React, {Component} from 'react';
import NavBar from './components/navbar';
import Tasks from './components/tasks';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className={'container'}>
                    <Tasks/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
