import { useEffect } from "react"
import Menu from "../components/menu/menu"
import { useNavigate } from "react-router-dom"

function Home(){

    const navigate = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token == null){
            navigate('/')
        }

    }, [])

    return <div className="home-container">

        <div className="home_wrapper">
            <Menu></Menu>

            <div className="task-list"></div>

        </div>

    </div>

}

export default Home