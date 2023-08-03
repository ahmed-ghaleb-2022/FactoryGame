import './Guidance.style.css';
import { useState } from "react";





const Guidance = ( {showOrHide , closeWindow}) => {
    
    const allImages = ['https://i.ibb.co/QH463SZ/1.png',
    'https://i.ibb.co/ydD75wh/2.png',
    'https://i.ibb.co/r39Vq43/3.png',
    'https://i.ibb.co/Y0vtBbd/4.png',
    'https://i.ibb.co/ZHmN5K6/5.png',
    'https://i.ibb.co/L91d6Xs/6.png',
    'https://i.ibb.co/qYgSZZF/7.png'];

    const [currentImage , setCurrentImage] = useState(0);

    const selectCurrentImage = ()=>{
        return allImages[currentImage];
    }
    

    const toLeft = ()=>{
        if(currentImage > 0){
            setCurrentImage(currentImage - 1);
        }
    }
    const toright = ()=>{
        if(currentImage < (allImages.length - 1)){
            setCurrentImage(currentImage + 1);
        }
    }
    
    
    return ( <>
        <div className={`Guidance-container ${showOrHide === 'guide' ? '':'hide-monitor'}`}>
            <div className='inner-container'>

                <div className='image-container'>
                    <img className='guide-img'  src={selectCurrentImage()} alt="" />
                </div>
                <div className='close-Guidance' onClick={closeWindow}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='left-arrow' onClick={toLeft} >
                <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className='right-arrow' onClick={toright} >
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </> );
}
 
export default Guidance;