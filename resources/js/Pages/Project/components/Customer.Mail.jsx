import ListItem from "./List-item/List-Item.component";


const CustomerMail = ({tabToggle, setTabToggle , EMailLists , setTheCurrentEmail }) => {
    

    const customerButton =()=>{
        if( tabToggle.sidetab === 'open' && tabToggle.supplier === 'z-30' ){
            setTabToggle({...tabToggle, supplier:'z-10'})    
        }else if(tabToggle.sidetab === 'open' && tabToggle.supplier === 'z-10'){
            setTabToggle({...tabToggle ,  sidetab :'closed'})
        }else{
            setTabToggle({...tabToggle , supplier:'z-10',  sidetab :'open'})
        }
    }


    return ( <>
    <div className="absolute z-20 customer-mail-column w-full ">
        <h2 className="mail-header">Inbox</h2>
        <div className="relative">
            <button className="Customer-mail-btn" onClick={customerButton}>Orders</button>
            <ul className="lists">
            { EMailLists.map(listItem =>(
                    <ListItem key={listItem.email_id} listItem = {listItem} setTheCurrentEmail={setTheCurrentEmail} />
                ))}
            </ul>
        </div>
    </div>
    </> );
}
 
export default CustomerMail;