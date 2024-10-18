import './NavigationBar.css'
import profilePic from '../../assets/profile-icon.png'
import barChart from '../../assets/Icons/bar-chart.png'
//import { useUser } from '../../context/userProvider'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { UserContext } from '../../context/userContext'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'


export const NavigationBar = () => {
    // const { logout } = useContext(AuthContext);
    // const { user } = useContext(UserContext);
    // const navigate = useNavigate();
    // const usuario = useSelector((state) => state.usuario);
    // console.log(usuario.token, 'aca esta el token');
    const { user, logout } = useContext(AuthContext);
    const [toggleSidebar, setToggleSidebar] = useState(false);


    const handleLogout = () => {
        logout();
        console.log("sesión cerrada");
      };


    //console.log("info de user",mascotero);
    return (
        <header className="d-flex">
             <button>
                <img src={barChart} alt="" />
            </button> 
            <div className='d-flex user'>
                <button className='toggle' onClick={()=> setToggleSidebar((prev)=>!prev)}>
                    <picture className='user-picture'>
                        <img src={profilePic} alt="" />
                    </picture>  
                </button>
                <p className='desktop'>Nombre: {user?.nombre || "Cargando..."}</p>
                <p className='desktop'>Id: {user?.id || "Cargando..."}</p>
                <button onClick={handleLogout}>Logout</button>       
            </div>
           
        </header>
    );
}

export default NavigationBar;
