import { useState } from 'react';
import bg from'../../../../../images/python.png';
import './EmailBrowser.style.css';
import { router } from '@inertiajs/react'

const EmailBrowser = ({value , showOrHide , closeWindow, openGoogleHandler}) => {
    
    const [showMoreDetails , setShowMoreDetails] = useState(false);
    const toggleShowMoreDetails = ()=>{
        setShowMoreDetails(!showMoreDetails);
    }

    


    const sendResponse = (response)=>{

        console.log(response)

        router.post('/game/response', {
            id: value.email_id,
            response
        } );

        closeWindow();
    }

    return ( <>
    
    <div className={`browser-page ${showOrHide === 'email' ? '': 'hide-monitor'}`}>
        <div className="browser-top-bar ">
            <div className='browser-logo'><img src={bg} alt="" /></div>
            <div className="browser-top-title">{value.title}</div>
            <button className="close-btn" onClick={closeWindow}>X</button>
        </div>
        <div className="browser-link-section">
            
        </div>
        
        <div className="browser-content-section ">

            <div>
                <span className='email-author'>{value.author}</span> <span> {value.email} </span>
            </div>

            <div className='relative'>
                <span className='to-me'>to me</span><button className='show-more-details-btn' onClick={toggleShowMoreDetails}><i className="fa-solid fa-caret-down"></i></button>
                <div className={` ${showMoreDetails ? 'show' : 'hidden'} absolute show-more-details`} >
                <p> from:	LinkedIn Job Alerts  </p>
                <p> to:	Ahmed Tareq Ali Ghaleb </p>
                <p> date:	Apr 22, 2023, 2:51 PM </p>
                <p> mailed-by:	bounce.linkedin.com </p>
                <p> signed-by:	linkedin.com </p>
                <p> security:	Standard encryption (TLS) Learn more </p>
                </div>
            </div>
            
            <div className='display-linebreak'>
                {value.content}
                <span className='goto-link'>{value.goto}</span>
                <br />
                <button onClick={openGoogleHandler}>go to google</button>
                {
                    value.response !== null ? '':(
                    <div className=' text-center'>
                        <button className='ok-button' onClick={()=>sendResponse(1)}>Accept</button>
                        <button className='cancel-button' onClick={()=>sendResponse(0)}>cancel</button>
                    </div> 
                    )
                }
   
                
            </div>
            
        </div>
    </div>
    </> );
}
 
export default EmailBrowser;