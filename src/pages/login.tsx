import Input from "../components/input/input"
import Button from "../components/button/button"
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

    return <div>

        <img src="" alt="" />

        <div className="login-container">

            <h2>Entrar</h2>
            <Input label={null} type="email" external_value={email} onChange={handleEmailChange}></Input>
            <Input label={null} type="password" external_value={password} onChange={handlePasswordChange}></Input>

            <Button type={ButtomTypes.extend} text="Entrar" action={loginHandle}></Button>

        </div>


    </div>

}

export default LoginPage