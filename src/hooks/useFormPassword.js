import { useEffect, useState } from "react"

/**
 *  #### useFormPassword
 * @param {import("../../types/login").InitialRecoverFormI} initialForm 
 * @returns {import("../../types/login").RecoverPasswordI}  Regresa el Email, Password, Confirmar Password
 */
export const useFormPassword = ( initialForm = {
  Email:            '',
  Contras:         '',
  ConfirmPassword:  '',
 }
 ) => {

  
  const [NewCredentials, setNewCredentials] = useState( initialForm );
  const [Passadvice, setPassadvice] = useState('');

  useEffect(() => {
  /*  const {Password, ConfirmPassword} = NewCredentials;
    if ( Password.length === 0){
      setPassadvice('');
      if ( Password.length < 9) {
        setPassadvice('La contraseña tiene que contener por lo menos 10 caracteres');
      }
      else{
        setPassadvice('');
      }
    }
    if ( Password.length > 0){
      setPassadvice('');
      if (Password != ConfirmPassword) {
        setPassadvice('Las Contraseñas no coincide');
      }
      if( Password === ConfirmPassword ) {
        setPassadvice('Las Contraseñas coinciden')
      }
    }*/
  }, [NewCredentials])
  


  const onInputChange = ( { target } ) => {
    const { name , value } = target;
    setNewCredentials ( {
      ...NewCredentials,
      [ name ] : value
    } );
  }

  return {
    NewCredentials,
    onInputChange,
    Passadvice,
  }

  
}
/*



*/