import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



function Login() {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const placeholderStyles = `
    ::placeholder {
      color: black;
    }
  `;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if(result.data === "Success") {
                    navigate("/Home");
                } else {
                    navigate("/register");
                    alert("You are not registered to this service");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundImage: "linear-gradient(to bottom right, #de6262, #ffb88c, #dbbb92)",
            margin:0,padding:0
          }}>
         <style>{placeholderStyles}</style>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "1500px"}}>
            <div style={{ width: "300px", padding: "40px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff", marginLeft: "170px"}}>
                <h2 style={{ textAlign: "center", color: "black" }}>Login</h2>
                <form>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            autoComplete="off" 
                            name="email" 
                            style={{ width: "275px", padding: "10px", border: "1px solid #ccc", borderRadius: "3px",backgroundColor: "grey" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            style={{ width: "275px", padding: "10px", border: "1px solid #ccc", borderRadius: "3px",backgroundColor: "grey"}}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ width: "297px", padding: "10px", border: "none", borderRadius: "3px", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" }}><Link to="/Home" style={{textDecorationColor:"white"}}>Login</Link></button>
                </form>
                <p style={{ textAlign: "center", marginTop: "10px", color: "black" }}>Dont have an account? <Link to="/Signup">Register</Link></p>
            </div>
        </div>
        </div>
    );
}

export default Login;
