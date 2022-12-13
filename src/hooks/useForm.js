import { useState } from "react";

/**
 * 
 * @param {import("../../types/login").InitialFormI} initialForm 
 * @returns {import("../../types/login").useFormI} Retorna el Email, la Contraseña y una función
 */
export const useForm = ( initialForm = { Email: '', Password: '' }) => {
 
    const [Credentials, setCredentials] = useState( initialForm )
    
    const onInputChange = ( { target } ) => {
        const { name , value } = target;
        setCredentials({
            ...Credentials,
            [ name ] : value
        });
    }

    return {
        Credentials,
        onInputChange,
    }
}