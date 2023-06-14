import bg from'../../../../../images/python.png';
import googleLogo from'../../../../../images/Google.png';
import { router } from '@inertiajs/react'

const WebBrowser = ({value , showOrHide , closeWindow, backToEmail}) => {


    const sendResponse = (response)=>{


        router.post('/game/response', {
            id: value.email_id,
            response
        } );

        closeWindow();
    }
    
    return ( <>
    
    <div className={`browser-page ${showOrHide === 'web' ? '': 'hide-monitor'}`}>
        <div className="browser-top-bar ">
            <div className='browser-logo'><img src={bg} alt="" /></div>
            <div className="browser-top-title">{value.title}</div>
            <button className="close-btn" onClick={closeWindow}>X</button>
        </div>
        <div className="browser-link-section">
            <button onClick={backToEmail}>back</button>
            <div className="browser-link-input">
                {value.link}
            </div>
        </div>
        <div className="browser-content-section">

                <div className='google-outter-container'>
                    <div className='google-inner-container text-center'>
                        <div className='Google-logo'>
                            <img src={googleLogo} alt="" />
                        </div>
                        <h3 className='Sign-in-title'>Sign in</h3>
                        <p className='Sign-in-sub-title'>to continue to Gmail</p>
                        <input className='input-email' type="text" placeholder='Email or phone'/>
                        <input className='input-password' type="password" placeholder='password'/>
                        <p className='forget-email'>Forget email?</p>
                        <p className='note-guest-mode'>
                        Not your computer? Use Guest mode to sign in privately. <span className='learn-more'>Learn more</span>
                        </p>
                        <div className='google-last-section'>
                            <span className='create-account'>Create account</span>
                            <button className='Sign-in-button' onClick={()=>sendResponse(1)}>Sign in</button>
                        </div>
                    </div>
                </div>





            {/* <div className='display-linebreak'>
                {value.content}
                <span className='goto-link'>{value.goto}</span>    
                
            </div> */}
            
        </div>
    </div>
    </> );
}
 
export default WebBrowser;