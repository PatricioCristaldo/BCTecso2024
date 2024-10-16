import './NavigationBar.css'
import profilePic from '../../assets/profile-icon.png'
import barChart from '../../assets/Icons/bar-chart.png'
import { useUser } from '../../context/userProvider'
import { getMascoteroById } from '../../services/mascoteroService'
import { useEffect, useState } from 'react'

export const NavigationBar = () => {
    const {user, setUser} = useUser();
    const [mascotero, setMascotero] = useState(null);

    async function getMascotero() {
        const response = await getMascoteroById(1)
        setMascotero(response.data)
    }

    // useEffect(() => {
    //     getMascotero();
    //   }, [])

    //console.log("info de user",mascotero);
    return (
        <header className="d-flex">
             <button>
                <img src={barChart} alt="" />
            </button> 
            <div className='d-flex user'>
                <p className='desktop'>Nombre Apellido</p>
                <picture className='user-picture'>
                    <img src={profilePic} alt="" />
                </picture>          
            </div>
           
        </header>
    );
}

export default NavigationBar;
