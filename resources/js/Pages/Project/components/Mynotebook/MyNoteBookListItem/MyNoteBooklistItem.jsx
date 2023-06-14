import './MyNoteBooklistItem.style.css';



const MyNoteBooklistItem = ({company}) => {
    
    const {Name , Email , Mailedby } = company

    return ( 
        <li className='my-note-book-list-item'>
                <h3>
                    Company : {Name}
                </h3>
                <p>
                    Email : {Email}
                </p>
                <p> 
                    Mailed-by : {Mailedby}
                </p>
            </li>
     );
}
 
export default MyNoteBooklistItem;