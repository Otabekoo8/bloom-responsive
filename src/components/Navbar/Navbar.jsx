import logo from "../../assets/images/Logo.png"

function Navbar() {
  return (
    <div className="navbar w-[300px] h-[450px] flex gap-[25px] mt-[50px]">
        <div className="logo">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
        </div>
        <div className="nav text-zinc-500 text-[25px] hidden sm:inline">
            <ul>
                <li className="hover:text-white"><a href="#">About <br /> Us</a></li>
                <li className="hover:text-white"><a href="#">Services</a></li>
                <li className="hover:text-white"><a href="#">Portfolio</a></li>
                <li className="hover:text-white"><a href="#">Clients</a></li>
                <li className="hover:text-white"><a href="#">Contacts</a></li>
            </ul>
            <div className="lang w-[100px] h-[60px]">
                <ul className="flex gap-[15px] text-[20px]">
                    <li className="hover:text-white"><a href="#">EN</a></li>
                    <li className="hover:text-white"><a href="#">RU</a></li>
                    <li className="hover:text-white"><a href="#">UZ</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar