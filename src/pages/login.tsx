import Input from "../components/input/input"
import Button from "../components/button/button"
import logo from "../assets/logo.svg"
import { ButtomTypes } from "../enums/style_enums"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../services/auth_service"
import { login } from "../services/auth_service"
import ResponseCard from "../components/response_card/response_card"
import { Response } from "../models/response"

function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState<string|null>(null)
    const [passwordError, setPasswordError] = useState<string|null>(null)

    const [registering, setRegistering] = useState<boolean>(false)

    const [apiResponse, setApiResponse] = useState<Response|null>(null)

    const navigate = useNavigate();

    const handleEmailChange = (value:string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value:string) => {
        setPassword(value)
    }

    const loginHandle = async () => {
        
        let error = false;

        if (email == null || email.length == 0){
            setEmailError('O E-mail é um campo obrigatório')
            error = true;
        }

        if (password == null || password.length == 0){
            setPasswordError('A Senha um campo obrigatório')
            error = true;
        }
        
        if (!error){
            const response = await login(
                {
                    id:null,
                    email : email,
                    password : password,
                    username : null
                }
            )
            
            if (apiResponse != null){
                setApiResponse(null)
            }

            setApiResponse({
                message:response.message,
                data:response.data,
                status_code:response.status_code,
            })

            if (response.status_code == 200){

                const token = response.token;
                const user = response.data
                
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)

                navigate('home')
            }

        }
    }

    const registerHandle = async () => {
        let error = false;

        if (email == null || email.length == 0){
            setEmailError('O E-mail é um campo obrigatório')
            error = true;
        }

        if (password == null || password.length == 0){
            setPasswordError('A Senha um campo obrigatório');
            error = true;
        }

        if (!error){
            const response = await register({
                id:null,
                email : email,
                password : password,
                username : null
            });

            if (apiResponse != null){
                setApiResponse(null)
            }

            setApiResponse({
                message:response.message,
                data:response.data,
                status_code:response.status_code,
            });
            
            if (response.status_code == 200){
                changeRegisteringState();
            }

        }

    }

    const validateEmail = (value:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)){
            return 'Favor informar um e-mail em um formato válido!';
        }

        return null
    }

    const validatePassword = (value:string) => {

        if (value.length < 8){
            return 'A Senha precisa ter pelo menos 8 caracteres.'
        }
        
        return null;

    }

    const changeRegisteringState = () => {
        setRegistering(!registering)
    }

    let changeStateEllement = <></>

    if (registering){
        changeStateEllement = <p className="changeState" onClick={changeRegisteringState}>Voltar</p>
    }else{
        changeStateEllement = <p className="changeState" onClick={changeRegisteringState}>Cadastrar-se</p>
    }

    let apiResponseEl = <></>

    if (apiResponse != null){
        apiResponseEl = <ResponseCard message={apiResponse.message} status={apiResponse.status_code} dismis={setApiResponse}></ResponseCard>
    }

    return <div className="login-wrapper">

        <div className="img-container">
            <img className="logo" src={logo} alt="" />
        </div>

        <div className="login-container">

            <h2>{registering ? 'Cadastrar-Se' : 'Entrar'}</h2>
            <Input label={'E-mail'} 
                   type="email" 
                   external_value={email} 
                   onChange={handleEmailChange} 
                   validationFunction={validateEmail} 
                   is_text_area={false} 
                   external_error={emailError} 
                   clearExternalError={setEmailError}></Input>

            <Input label={'Senha'} 
                   type="password" 
                   external_value={password} 
                   onChange={handlePasswordChange} 
                   is_text_area={false} 
                   validationFunction={validatePassword} 
                   external_error={passwordError} 
                   clearExternalError={setPasswordError}></Input>

            

            <div className="buttons">
                {changeStateEllement}
                <Button type={ButtomTypes.extend} text={registering ? 'Fazer Registro' : 'Entrar'} action={registering ? registerHandle : loginHandle}></Button>
            </div>

        </div>

        {apiResponseEl}

    </div>

}

export default LoginPage