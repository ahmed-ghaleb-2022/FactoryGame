import { useState } from 'react';
import './MyNoteBook.style.css';
import MyNoteBooklistItem from './MyNoteBookListItem/MyNoteBooklistItem';

const MyNoteBook = ({companies}) => {

    const [isNoteBookOpen , setIsNoteBookOpen] = useState(true);

    const toggleMyNoteBook = ()=>{
        setIsNoteBookOpen(!isNoteBookOpen);
    }


    return ( <>
    <div className={`my-note-book-container ${isNoteBookOpen?'isOpen':'isHide'} `}>
        <h2 className="my-note-book-heading">My NoteBook</h2>
    <div className='my-note-book-inner-container'>

        <ul className="my-note-book-list">
            {
                companies.map(company => (
                    <MyNoteBooklistItem key={company.id} company={company} />
                ))
            }
            

        </ul>
    </div>
        <button className="my-note-book-btn" onClick={toggleMyNoteBook}>NoteBook</button>
        
            
        </div>
  

    
    
    
    </> );
}
 
export default MyNoteBook;