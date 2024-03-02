import back from "../../assets/images/plan.png"

function Design() {
  return (
    <div className="degin flex flex-col justify-end items-end mt-[-150px] ml-[750px]">
        <div>
            <img src={back} alt="" className="w-[250px] relative right-[100px] top-[230px]" />
        </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
              Architectural Engineering
            </h1>
            <h3 className="text-[#686767]  text-[40px]">01</h3>
          </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
            Interior Design
            </h1>
            <h3 className="text-[#686767]  text-[40px]">02</h3>
          </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
            Urban environment design
            </h1>
            <h3 className="text-[#686767]  text-[40px]">03</h3>
          </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
            Landscape design
            </h1>
            <h3 className="text-[#686767]  text-[40px]">04</h3>
          </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
            Project documentation
            </h1>
            <h3 className="text-[#686767]  text-[40px]">05</h3>
          </div>
        <div className="item w-[950px] border-b flex justify-between pt-[10px] pb-[10px] hover:bg-[#979595] pl-[5px] pr-[5px]">
            <h1 className="text-white font-[900] font-serif text-[40px] ">
            Author's supervision
            </h1>
            <h3 className="text-[#686767]  text-[40px]">06</h3>
          </div>
    </div>
  )
}

export default Design