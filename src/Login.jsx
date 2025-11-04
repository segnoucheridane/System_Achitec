import React, {useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function Login(){
     const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/Login', values)
        .then(res => {
            if(res.data.Status === "success"){
                navigate('/')
            }else{
                alert("res.data.error")
            }
        })
        .then(err => console.log(err));

    }


    return(
  <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email;"><strong>Email</strong></label>
                        <input type="email" placeholder="enter email" onChange={e => setValues({...values,email: e.target.value})} className="form-control rounded-0" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="enter password" onChange={e => setValues({...values, password: e.target.value})} className="form-control rounded-0" name="password" />
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100 rounded-0" >login</button>
                    
                </form>
                <p>Do not have an account? </p>
                    <Link to="/Register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create an Account</Link>
                
                    
                
            </div>
        </div>
    )
}

export default Login