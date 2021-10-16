import React from 'react';
import Bar from "./Bar";
const Signup = () => {
    return (
        <>
        <div className="box">
        <div className="para">
        <h1>School</h1>
        <p>Nirmala Higher Secondary School Aluva, established in 1962 is owned and managed by the congregation, Sisters of the Destitute (SD Sisters), St.Mary’s Province, Chunangamvely. Nirmala HSS aims at imparting quality education to the budding youngsters of our society by providing value based education that creates confident, competent and morally mature individuals who will always be a credit to the society at large.</p>

        </div>
        <div className="container">
        <Bar/>
            <form>
                <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label ">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label ">Email</label>
  <input type="email" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
         <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label c">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label c">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label c">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label c">Confirm password</label>
  <input type="password"  className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
    <div class="mb-3">
    <button class="btn btn-dark">Submit</button>
    </div>
                <div className="f2">
                    <p></p>Not a member Yet<a href="./Login.jsx">Login</a>
                </div>
            </form>
        </div>
        </div>
            
        </>
    );
};

export default Signup;
