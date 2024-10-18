import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import tickMascotero from '../assets/Icons/tickMascotero.png';  
import tickProtectora from '../assets/Icons/tickProtectora.png';  
import puntitosMascotero from '../assets/Icons/puntitosMascotero.png';  
import puntitosProtectora from '../assets/Icons/puntitosProtectora.png';  

function Register() {
  const navigate = useNavigate();
  
  return (
    <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
            <div className='w-100'>
                <a onClick={() => handleClick("mascotero")} style={{textDecoration:'none'}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={puntitosMascotero} alt="" className='puntitos-mascotero'/>
                    <div className='d-flex flex-column align-items-center' style={{paddingRight:'8rem'}}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center flex-column tick-mascotero" style={{boxShadow:'3px 5px 10px 3px rgba(0,0,0,0.24)'}}>
                            <img src={tickMascotero} alt="" style={{width:'83px'}}/>
                        </div>
                        <span className='titulo-mascotero'>Mascotero</span>
                    </div>
                </a>
            </div >

        <div className="w-100" onClick={() => navigate("/protective")}>
          <a onClick={() => handleClick("protective")} style={{textDecoration:'none'}} className='d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column align-items-center' style={{paddingLeft:'8rem'}}>
            <div className="rounded-circle d-flex align-items-center justify-content-center tick-protectora" style={{boxShadow:'3px 5px 14px 5px rgba(0,0,0,0.24)'}} >
              <img src={tickProtectora} alt="Tick Protectora" className="tick-icon" style={{width:'83px'}} />
            </div>
              <span className='titulo-protectora'>Protectora</span>
          </div>
            <img src={puntitosProtectora} alt="Puntitos Protectora" className='puntitos-protectora' />
                </a>
        </div>
      
    </div>
  );
}

export default Register;
