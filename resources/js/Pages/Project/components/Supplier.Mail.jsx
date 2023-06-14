import ListItem from "./List-item/List-Item.component";


const SupplierMail = ({tabToggle, setTabToggle, EMailLists , setTheCurrentEmail }) => {
    
    const supplierButton =(e)=>{
        e.stopPropagation();
        if( tabToggle.sidetab === 'open' && tabToggle.supplier === 'z-30' ){
            setTabToggle({...tabToggle, supplier:'z-30', sidetab :'closed'})    
        }else{
            setTabToggle({...tabToggle ,supplier:'z-30' ,  sidetab :'open'})
        }
    }
    
    
    return ( <>
    
    <div className={`absolute supplier-mail-column w-full  ${tabToggle.supplier}`}>
    <h2 className="mail-header">Inbox</h2>
    <div className="relative">
        <button className="Supplier-mail-btn" onClick={supplierButton}>Suppliers</button>
        <ul className="lists">
            { EMailLists.map(listItem =>(
                <ListItem key={listItem.email_id} listItem = {listItem} setTheCurrentEmail={setTheCurrentEmail} />
            ))}
        </ul>
        
    </div>

    </div>
    </> );
}
 
export default SupplierMail;