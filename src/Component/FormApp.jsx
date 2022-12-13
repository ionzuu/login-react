import { useForm } from '../hooks/useForm'

export const FormApp = () => {
    
    const { Email , Password , onInputChange } = useForm({ Email: '', Password: ''});
    
    return (
    <>        
        <form action="" method="post">
            <label htmlFor="Email" className='label'>Correo electrónico:</label>
            <input
                type="Email"
                name="Email"
                id="Email"
                placeholder='correo@correo.mx'
                className='input ipnutlogin'
                value={ Email }
                onChange={ onInputChange }
                required
            />
                        
            <label htmlFor="Password" className='label labelcontra'>Contraseña:</label>
            <input
                type="password"
                name="Password"
                id="Password"
                placeholder='Contraseña'
                className='input'
                value={ Password }
                onChange={ onInputChange }
                required
            />

        </form>
        <div className='buttonposition'>
            <button type="submit" className='buttonlogin'>Iniciar</button>
        </div>
    </>
  )
}