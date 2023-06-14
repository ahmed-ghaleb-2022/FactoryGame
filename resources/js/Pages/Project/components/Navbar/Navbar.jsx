const Navbar = ({balance}) => {
    
    return ( <>
    <div className="bg-blue-400 bor  p-4 ">
        
    <h3 className=" text-right text-amber-400 text-xl font-extrabold">$ {balance}</h3>
    </div>
    </> );
}

export default Navbar;