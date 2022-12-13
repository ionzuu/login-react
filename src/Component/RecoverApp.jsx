import { useForm } from 'react-hook-form';
import { useFormPassword } from '../hooks/useFormPassword'
import { useShowPassword } from '../hooks/useShowPassword'
import { validationSchema } from '../validations/userValidation';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';



export const RecoverApp = () => {

    const { onInputChange, Passadvice } = useFormPassword()
    const { onChecked , showpassword , checked } = useShowPassword();
    
    const { register , handleSubmit , formState:{errors} } = useForm( { 
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    } );
    
    const onSubmit = data => console.log(data)

  return (
    <>
        <div className='recoverbody'>
            <form onSubmit={handleSubmit(onSubmit)} className='formrecover'>
                    <label
                        htmlFor="Email"
                        className='label'
                    >
                        Correo electrónico:
                    </label>

                    <input
                        type="Email"
                        name="Email"
                        id="Email2"
                        placeholder='correo@correo.mx'
                        className="input"
                        onChange={ onInputChange }
                        {...register("Email")}
                        //{ ...register("Email") }
                        required
                    />
                    <ErrorMessage errors={errors}  name="Password"   render={({ message }) => <h1>Hola {message}</h1>}       />
                    <p className='errors'>{errors?.Email?.message}</p>

                    <label
                        htmlFor="Contras"
                        className='label'
                    >
                        Contraseña:
                    </label>
                    
                    <input
                        type={ showpassword }
                        name="Contras"
                        id="Password2"
                        className='input'
                        placeholder='Contraseña' 
                        onChange={ onInputChange }
                        { ...register("Contras") }                                               
                        required
                    />
                    
                        
                        <p className='errors'>{errors?.Contras?.message}</p>
                    

                    <label
                        htmlFor="ConfirmPassword"
                        className='label'
                    >
                        Confirmar contraseña:
                    </label>

                    <input
                        type={showpassword}
                        name="ConfirmPassword"
                        id="ConfirmPassword2"
                        className='input'
                        placeholder="Confirmar contraseña"
                        onChange={ onInputChange }
                        { ...register("ConfirmPassword") }
                        required
                    /><br />
                    <p className='errors'>{errors?.ConfirmPassword?.message}</p>


                    <div className="positionshowcontra">
                        <label
                            htmlFor="CheckBox" 
                            className='labelshowpass'
                        >
                                Mostrar contraseña:  
                        </label>

                        <input
                            type="checkbox"
                            name="CheckBox"
                            id="CheckBox" 
                            className='CheckBox'
                            defaultChecked={ checked }
                            onChange={ onChecked }
                        />
                    </div>
            </form>
        </div> 
        <div className="recoverfooter">
            <button type="submit" className='buttonrecover'>Recuperar Contraseña</button>
        </div>
            
    </>
  )
}

/* 

*/