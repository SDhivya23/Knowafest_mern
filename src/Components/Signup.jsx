
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", { name, email, password })
            .then(result => {
                console.log(result);
                navigate("/home");
            })
            .catch(err => console.log(err));
    }

    const styles = `
        .signup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: linear-gradient(to bottom right, #ec6f66, #eac086, #f3a183);
        }

        .signup-form {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
        }

        .signup-heading {
            text-align: center;
            color: black;
        }

        .signup-input {
            width: 275px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            margin-bottom: 20px;
        }

        .signup-button {
            width: 297px;
            padding: 10px;
            border: none;
            border-radius: 3px;
            background-color: #28a745;
            color: #fff;
            cursor: pointer;
        }

        .signup-link {
            text-align: center;
            margin-top: 10px;
            color: black;
        }

        .signup-input::placeholder {
         color: black; 
        }

    `;

    return (
        <div>
            <style>{styles}</style>
            <div className="signup-container" style={{width:"1344px",paddingLeft:"150px"}}> 
                <div className="signup-form" style={{paddingleft:"80px"}}>
                    <h2 className="signup-heading">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Name" 
                                autoComplete="off" 
                                name="name" 
                                className="signup-input" 
                                style={{ backgroundColor: 'grey'}}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter Email" 
                                autoComplete="off" 
                                name="email" 
                                className="signup-input" 
                                style={{ backgroundColor: 'grey'}}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter Password" 
                                name="password" 
                                className="signup-input" 
                                style={{ backgroundColor: 'grey'}}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>
                    <p className="signup-link">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;