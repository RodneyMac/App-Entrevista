import React, {useState} from 'react';
import Login from './Login';

function Log() {

    const adminUser = {
        email: "admin",
        password: "123456"
    }

    const [userAdm, setUserAdm] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Connect = details => {
        console.log(details);   

        if(details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Connected");
            setUserAdm({
                name: details.name,
                email: details.email
            });
        }else {
            console.log("Details do not match!");
            setError("Details do not match!");
            alert("Access denied");
            return {
                Login
            }
        }
    }

    const Logout = () => {
        setUserAdm({name: "", email: ""});
    }

    return(
        <div>{(userAdm.email !== "") ? (
            <div>
                <h4>Welcome</h4>
                <button onClick={Logout}>Logout</button>
            </div>    
        ) : (
            <Login Connect={Connect} error={error} />
        )}
        </div>
    );
}

export default Log;