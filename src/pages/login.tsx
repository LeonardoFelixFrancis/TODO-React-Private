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

    const authHandle = async (authFn: typeof login | typeof register) => {

        validateEmail()
        validatePassword()

        if (emailError != null || passwordError != null){
            return null;
        }

        const response = await authFn({
            id:null,
            email : email,
            password : password,
            username : null
        });

        if (apiResponse != null){
            setApiResponse(null)
        }
        
        console.log(response)

        setApiResponse({
            message:response.message,
            data:response.data,
            status_code:response.status_code,
        });
        
        if (response.status_code != 200){
            return;
        }

        if (authFn === register){
            changeRegisteringState();
        }

        if (authFn === login){
            const token = response.token;
            const user = response.data
            
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)

            navigate('home')
        }
        
    }

    const validateEmail = () => {
        if (email == null || email.length == 0){
            setEmailError('O E-mail é um campo obrigatório');
            return null;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)){
            setEmailError('Favor informar um e-mail em um formato válido!')
            return null;
        }

        setEmailError(null);
    }

    const validatePassword = () => {
        if (password == null || password.length == 0){
            setPasswordError('A Senha um campo obrigatório.');
            return null;
        }

        if (password.length < 8){
            setPasswordError('A Senha precisa ter pelo menos 8 caracteres.');
            return null;
        }

        setPasswordError(null);
    }

    const changeRegisteringState = () => {
        setRegistering(!registering)
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
                   is_text_area={false} 
                   external_error={emailError} ></Input>

            <Input label={'Senha'} 
                   type="password" 
                   external_value={password} 
                   onChange={handlePasswordChange} 
                   is_text_area={false} 
                   external_error={passwordError} ></Input>

            

            <div className="buttons">
                {registering ? <p className="changeState" onClick={changeRegisteringState}>Voltar</p> : <p className="changeState" onClick={changeRegisteringState}>Cadastrar-se</p>}
                <Button type={ButtomTypes.extend} text={registering ? 'Fazer Registro' : 'Entrar'} action={() => authHandle(registering ? register : login)}></Button>
            </div>

        </div>

        {apiResponse != null && <ResponseCard message={apiResponse.message} status={apiResponse.status_code} dismis={setApiResponse}></ResponseCard>}

    </div>

}

export default LoginPage