import React, { useState } from "react";
import { FormApp } from "./Component/FormApp";
import { RecoverApp } from "./Component/RecoverApp";

export const LoginApp = () => {

    const [show, setshow] = useState(true)

  return (
        <div className="container">
            <div className="rightcontainer">
                <div className="contianerlogos">
                    <div className="logo1"><img className="logoempresa" src={process.env.REACT_APP_LOGOEMPRESA} alt="" /></div>
                    <div className="logo2"><img className="logopraxia" src={process.env.REACT_APP_LOGOPRAXIA} alt="" /></div>
                </div>
                {show ? true && 
                <div className="backgroundrightcontainer">
                <div className="headerlogin">
                    <h2 className="title"> Iniciar Sesión </h2>
                </div>
                <div className="bodylogin">
                    <FormApp />
                </div>
                <div className='footerlogin'>
                    <button className="buttonsubmit buttonchange" onClick={()=> setshow(false)} >¿Olvidaste tu contraseña?</button>
                </div>
                </div>
                :
                <div className='formContainer'>
                    <div className='recoverheader'>
                        <div className="text_headerrecover">
                            <button className='button_back' onClick={() => setshow(true )}>
                                <svg
                                    class="svg-icon"
                                    viewBox="0 0 20 20"
                                    
                                >
                                    <path 
                                        d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        
                                    </path>
                                </svg>
                            </button>
                            <p>Cambiar contraseña</p>
                        </div>
                    </div>
                    <RecoverApp />
                </div>
                }
            </div>
        </div>
  )
}