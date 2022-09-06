import React, { useState } from "react";
import LoginSignUpHeader from "./LoginSignUpHeader";

export default function Registration() {

    const [displayLogin, setDisplayLogin] = useState(false);

    const toggleLogin = () => {
        
    }

    return (
        <div>
            <LoginSignUpHeader displayLogin={displayLogin} handleClick={toggleLogin} />
            
        </div>
    )
}