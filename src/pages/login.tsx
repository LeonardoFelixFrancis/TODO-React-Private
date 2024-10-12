import Input from "../components/input/input"
import Button from "../components/button/button"
import { ButtomTypes } from "../enums/style_enums"
import { useState } from "react"

function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (value:string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value:string) => {
        setPassword(value)
    }

    const loginHandle = () => {
        return
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