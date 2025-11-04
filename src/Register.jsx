import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function Register() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/Register', values)
        .then(res => {
            if(res.data.Status === "success"){
                navigate('/login')
            }else{
                alert("error");
            }
        })
        .then(err => console.log(err));

    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder="enter name"  onChange={e => setValues({...values,name: e.target.value})} className="form-control rounded-0" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="enter email"  onChange={e => setValues({...values,email: e.target.value})} className="form-control rounded-0" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="enter password"  onChange={e => setValues({...values,password: e.target.value})} className="form-control rounded-0" name="password" />
                    </div>
                    <div className="mb-3 ">
                         <input type="checkbox" />
                        <label htmlFor="" >You agree to our terms and policy</label>
                    </div>

                    <div className="mb-3">
                    <button type="submit" className="btn btn-success w-100 rounded-0">signup</button>
                    </div>

                    
                    <p >Already have an account? </p>
                    
                    <Link  to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                </form>
                
                    
                
            </div>
        </div>
    )
}

export default Register