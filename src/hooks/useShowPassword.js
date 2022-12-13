import { useState } from "react";


/**
 * 
 * #### useShowPassword
 * @returns {import("../../types/login").ShowPasswordI} Retorna una función OnChecked, y dos estados, showpassword y checked
 */
export const useShowPassword = () => {

    const [checked, letchecked] = useState(false);
    const [showpassword, letshowpassword] = useState("password");

    const onChecked = ( { target } ) => {
        const { checked } = target;
        if ( checked === true ) {
            letshowpassword ( 'text' );
            letchecked      ( true );
        }   
        else {
            letshowpassword ( 'password' );
            letchecked      ( false );
        }
    }

    return {
        onChecked,
        showpassword,
        checked,
    }
}
