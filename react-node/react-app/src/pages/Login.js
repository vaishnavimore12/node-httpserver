
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post("http://127.0.0.1:4000/login", { email, password })
            if(result.data)
                {
                    navigate("/profiles")
                }
                else
                {
                    alert("Tu bekaar Hai.....")
                }
        } catch (err) {
            console.log(err)
        }
    }


    return (<>
        <div className="container">
            <div className="alert alert-info w-50 mx-auto my-3">

                <form onSubmit={handleSubmit}>
                <div className="my-3">
                        <label className="form-label" htmlFor="email">Email-id:</label>
                        <input className="form-control" type="email" id="email"   value={email} onChange={(event)=>setEmail(event.target.value)}  name="email" placeholder="Enter email-id" />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" type="password" id="password"   value={password} onChange={(event)=>setPassword(event.target.value)}  name="password"
                            placeholder="Enter password" />
                    </div>
                    <hr />
                    <button className="btn btn-danger" type="submit">Login</button>
                    <button className="btn btn-warning" type="reset">Clear</button>

                </form>
            </div>

        </div>

    </>)
}


