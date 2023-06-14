import SupplierMail from "../Supplier.Mail";
import CustomerMail from "../Customer.Mail";

import { useState, useEffect } from "react";




const SidetabContainer = ({allEmails , setTheCurrentEmail}) => {
    
    const [tabToggle, setTabToggle] = useState({
        supplier : 'z-10',
        customer :'closed',
        sidetab : 'closed'
    });
    
    const [supplierEmails , setSupplierEmails] = useState([]);
    const [customerEmails , setCustomerEmails] = useState([]);

    const filteringEmail = ()=>{
        setSupplierEmails(allEmails.filter(email => email.type === 0));
        setCustomerEmails(allEmails.filter(email => email.type === 1));
    }

    useEffect(()=>{
        filteringEmail();
    },[allEmails]);
    


    
    return ( <>
    
    <div className={`absolute w-80 ${tabToggle.sidetab}`}>

    <SupplierMail tabToggle={tabToggle} setTabToggle={setTabToggle} EMailLists ={supplierEmails} setTheCurrentEmail={setTheCurrentEmail} ></SupplierMail>
    <CustomerMail tabToggle={tabToggle} setTabToggle={setTabToggle} EMailLists ={customerEmails} setTheCurrentEmail={setTheCurrentEmail} ></CustomerMail>
    
    
    </div>

    </> );
}
 
export default SidetabContainer;