import './List-Item.style.css';


const ListItem = ({listItem , setTheCurrentEmail}) => {
    return ( 
        <li className={`${listItem.isRead === 0 ? 'list-item' : 'dark-list-item'} `} onClick={()=>setTheCurrentEmail(listItem,'email')}>
            <h4 className='title'>{listItem.author}</h4>
            <span className='unread'>{listItem.title}</span>
            <p className='Sub-content'>{listItem.content.substring(0, 47).trimEnd()}...</p>
        </li>
     );
}
 
export default ListItem;


