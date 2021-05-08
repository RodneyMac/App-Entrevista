import React, {useState} from 'react';
import Login from './Login';

function Log() {

    const adminUser = {
        email: "admin",
        password: "123456"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Connect = details => {
        console.log(details);   

        if(details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Connected");
            setUser({
                name: details.name,
                email: details.email
            });
        }else {
            console.log("Details do not match!");
            setError("Details do not match!");
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""});
    }

    return(
        <div>
            <Login Connect={Connect} error={error} />
        </div>
    );
}

export default Log;