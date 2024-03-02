import Head from "../Head.jsx/Head"
import Navbar from "../Navbar/Navbar"


function Header() {
  return (
    <div className="mx-auto flex ">
        <Navbar />
        <Head />
    </div>
  )
}

export default Header