import ImageOne from '../../assets/starter-screen-01.png';
import ImageSecond from '../../assets/starter-screen-02.png';
import './starter-screens.css';

const renderTitle = ( currentStep ) =>{
    if (currentStep === 2){
        return "Se parte del equipo"
    } else {
        return "Encontrá tu mejor amigo"
    }
}

const renderText = ( currentStep ) => {
    if (currentStep === 2){
        return "Ayudalos a volver a casa difundiendo información y colaborando con las protectoras para encontrarles un hogar."
    } else {
        return "Si estas pensando en sumar un integrante más a tu familia \n ¿Por que no adoptando?"
    }
} 

const StarterScreen = ( { step } )=> {
    return(
        <div className='d-flex flex-column justify-content-center' >
            <div className='d-flex justify-content-center align-items-center mt-5 pb-5'>
                <img src={step === 2? ImageOne : ImageSecond} className='starter-image'/>
            </div>
            <h2 className='text-center fw-700'>
                { renderTitle(step) }
            </h2>
            <p className='text-center text-gray m-0 px-5 fs-7 line-height-20 text-pre-line'>
                { renderText(step) }
            </p>
        </div>
    )
}

export default StarterScreen;