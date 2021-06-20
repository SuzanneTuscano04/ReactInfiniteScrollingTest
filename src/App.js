import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route exact path='/home' component={HomePage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
