import React, { useState } from "react";
import SignIng from '../components/SignIng'
import LogIn from '../components/LogIn'
import '../styles/SignInSignUp.css'

export default function SignInSignUpPage() {
    const [isActive, setIsActive] = useState(false);
    const [isForm, setIsForm] =useState(false);


    const toggleOverlay = () => {
        setIsActive(!isActive);
        setIsForm(!isForm);

        




};
    return (
        <div>

            <div className="cointainer-signin">


                <div className="overlay box">

                    <button onClick={toggleOverlay}>
                       {isForm ? 'Registro' : 'Ingresa'}
                        
                          </button>


{isActive ? ( 

<SignIng/>

):(

<LogIn/>
) }


                </div>




            </div>
    
    
    
    
    
        </div>
      )

    

  }

