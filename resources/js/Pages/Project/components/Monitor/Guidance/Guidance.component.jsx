import './Guidance.style.css';
import { useState } from "react";





const Guidance = ( {showOrHide , closeWindow}) => {
    
    const allImages = ['https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp',
    'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg',
    'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg'];

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