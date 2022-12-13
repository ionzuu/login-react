export interface InitialFormI {
    Email: string,
    Password: string,
}

export interface useFormI {
    Credentials: InitialFormI,
    onInputChange: (target: {name: string, value: string})=>{},
}

export interface InitialRecoverFormI {
    Email:            string,
    Password:         string,
    ConfirmPassword:  string,
}

export interface RecoverPasswordI {
    NewCredentials: InitialRecoverFormI,
    onInputChange:  (target: {name: string, value: string})=>{},
    Passadvice:     string,
}

export interface  ShowPasswordI {
    onChecked: ( {target: { checked: boolean } })=>{},
    showpassword: string,
    checked: boolean,
}