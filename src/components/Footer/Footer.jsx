import logo from "../../assets/images/Logo.png"
import  { useState } from "react";

function Footer() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="mt-[120px] bg-[#000] h-[70vh]">
        <div className="footer-in w-[1000px] h-[20vh] ml-[350px] flex items-start  gap-[160px]">
            <div className="header">
            <img src={logo} alt="" className="w-[40px] h-[40px] mt-[25px]" />
            <div className="nav text-zinc-500 text-[25px] mt-[30px]">
            <ul>
                <li className="hover:text-white"><a href="#">About Us</a></li>
                <li className="hover:text-white"><a href="#">Services</a></li>
                <li className="hover:text-white"><a href="#">Portfolio</a></li>
                <li className="hover:text-white"><a href="#">Clients</a></li>
                <li className="hover:text-white"><a href="#">Contacts</a></li>
            </ul>
        </div>
            </div>
            <div className="linkss mt-[220px] flex gap-6">
            <i className="bx bxl-instagram border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-facebook border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-google border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-telegram border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
          </div>
        </div>
          <div
            onClick={toggleModal}
            className="navbar-icon w-[250px] border-2 h-[250px] cursor-pointer flex flex-col items-end justify-between p-1 hover:rounded-l-full hover:rounded-b-full bg-[#000] relative bottom-[220px] right-[-1040px]"
          >
            <div className="navbar-icon-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="90"
                viewBox="0 0 90 90"
                className=""
                fill="none"
              >
                <path
                  d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                  fill="#E3E7F2"
                />
              </svg>
            </div>
          <div className="w-[250px] h-[250px] pt-[150px] hover:pl-[70px] mt-[-150px]">
          <p className="text-white text-[30px] relative bottom-2 w-[250px] left-[20px]">
              Order <br /> project
            </p>
          </div>
          </div>
          {isOpen && (
        <div className="modal w-[500px]  bg-black h-[350px] fixed z-10 top-[290px] left-[470px] p-[10px] gap-4  text-white">
          <div className="modal-content flex flex-col gap-7 mt-[30px]">
            <div className="modal-text flex w-[400px] justify-between ml-[35px] ">
              <h2 className="text-[20px]">Back Call</h2>
              <span
                className="close cursor-pointer   text-[20px] text-center ml-[50px] border-2 w-[40px] h-[40px] hover:rounded-l-full hover:rounded-b-full"
                onClick={toggleModal}
              >
                &times;
              </span>
            </div>
            <div className="input flex flex-col gap-4">
              <input
                type="text"
                className="input1 w-[400px] ml-[35px] bg-transparent border-b"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="input1 w-[400px] ml-[35px] bg-transparent border-b"
                placeholder="Phone Number"
              />
            </div>
            <div className="modal-modal">
              <p className="text-zinc-500 mt-[50px] ml-[35px]">Leave a request and we will <br /> contact you</p>
              <div className="modal-icon border w-[120px] cursor-pointer flex flex-col items-end justify-between  hover:rounded-l-full hover:rounded-b-full bg-[#000] relative left-[340px] top-[-100px] ">
                <div className="modal-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="70"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                      fill="#E3E7F2"
                    />
                  </svg>
                </div>
                <div className="modal-icon-text">
                  <h3 className="w-[50px] relative right-[30px] bottom-[10px]">
                    Order Project
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
                <div className="tex absolute text-white flex gap-20 ml-[450px]">
        <h3>+998 (90) 985 64 89</h3>
        <h3>st. Buyuk Ipak Yuli, 154A</h3>
        <h3>info@bloom-arc@gmail.com</h3>
      </div>
      <hr  className="relative top-[50px] w-[930px]  ml-[350px]"/>
      <p className="text-white relative top-[70px] ml-[370px]">© 2024. Bloom Architecture- All rights reserved</p>
    </div>
  )
}

export default Footer