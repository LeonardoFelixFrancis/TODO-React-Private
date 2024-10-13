import Input from "../components/input/input"
import Button from "../components/button/button"
import logo from "../assets/logo.svg"
import { ButtomTypes } from "../enums/style_enums"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleEmailChange = (value:string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value:string) => {
        setPassword(value)
    }

    const loginHandle = () => {
        navigate('/home')
    }

    return <div className="login-wrapper">

        <div className="img-container">
            <img className="logo" src={logo} alt="" />
        </div>

        <div className="login-container">

            <h2>Entrar</h2>
            <Input label={'E-mail'} type="email" external_value={email} onChange={handleEmailChange} validationFunction={(value:string) => {return null}}></Input>
            <Input label={'Senha'} type="password" external_value={password} onChange={handlePasswordChange} validationFunction={(value:string) => {return null}}></Input>

            <div className="buttons">
                <Button type={ButtomTypes.extend} text="Entrar" action={loginHandle}></Button>
            </div>

        </div>


    </div>

}

export default LoginPage