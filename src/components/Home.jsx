import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
   const history = useHistory()
    const clickhandler = (e) =>{
            const token = localStorage.getItem('auth-token')
            if(token){
                localStorage.clear()
            }
            window.location.href = '/';
                          

   


          
    }
    return (
        <React.Fragment>
        <button className="btn btn-primary"onClick={clickhandler} style={{float:'right'}}>Logout</button>
        <h1>Wellcome to Home Page</h1>
        <div className="para">
        <p>token Successfully Stored in localStorage</p>
        </div>
        </React.Fragment>
    );
};

export default Home;