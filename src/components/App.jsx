import React,{useState} from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Signup from './Signup';


import "./style.css"
const App = () => {
    const [state, setState] = useState({token:localStorage.getItem('auth-token')})
    console.log("token : ",state)
    return (
        <>
{   state.token?    
        <Switch>
            <Route   path="/home" component={Home}/>
            
        </Switch>
    :
    <Switch>
            <Route exact path="/" component={Login}/>
            <Route   path="/signup" component={Signup}/>
           
    </Switch>

}
            
        </>
    );
};

export default App;
