import { useEffect, useState } from "react"
import { MdArrowOutward } from "react-icons/md";
const categories = ['All','Crypto','Ecommerce','Blog','Dashboard']
const Portfullio = () => {
    const [portfullios,setPortfullios] = useState([]);
    const [selectedCategory,SetSelectedCategory] = useState('All');
    const [lastSlice,setLastSlice] = useState(6)
    const filterData = selectedCategory == "All"?portfullios :  portfullios.filter(portfullio=>portfullio.category == selectedCategory);
    
    useEffect(()=>{
        fetch("Portfullio.json")
        .then(res=>res.json())
        .then(data=>setPortfullios(()=>data))
    },[])

    return (
        <section className=" py-8 max-w-[1800px] mx-auto">
        <div className=" text-center  bg-secoundary pt-10 pb-32">
          <div className=" max-w-3xl space-y-3 mx-auto">
            <h2 className=" font-bold leading-[150%] text-4xl">My Portfolio</h2>
            <p className=" font-normal text-base leading-[150%] text-[#1F1F1F]">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
          </div>
          <div className=" my-5 space-x-2 space-y-2 md:space-y-0 flex items-center justify-center flex-wrap">
            {
              categories.map(category=>
                <button onClick={()=>SetSelectedCategory(category)} className={` py-2 px-5 rounded-full cursor-pointer text-lg font-semibold ${selectedCategory==category?'bg-primary text-white':'bg-[#eec2bd]'}`} key={category}>{category}</button>
              )
            }
          </div>
        </div>
        {/* portfullio Wrapper Start */}
        <div className="container mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-6 gap-12 -mt-20">
            {
              filterData.slice(0,lastSlice).map((portfullio)=>
                    <div key={portfullio.id} className=" space-y-6 shadow p-4 bg-white rounded transition">
                <img className=" w-full" src={portfullio.image} alt="" />
                <div className=" flex items-end justify-between">
                  <div className=" space-y-2">
                    <h2 className=" text-xl font-bold leading-[150%]">{portfullio.title}</h2>
                    <p className=" text-sm leading-[150%]">{portfullio.category}</p>
                  </div>
                  <div className=" h-9 w-9 bg-primary flex items-center justify-center rounded-full">
                    <span className=" text-white text-xl font-semibold cursor-pointer"><MdArrowOutward /></span>
                  </div>
                </div>
              </div>
                )
            }
            
        </div>
        {/* portfullio Wrapper End */}
        {
          (filterData.length>6 && filterData.length>lastSlice)  &&
        <div className=" text-center">
          <button onClick={()=>setLastSlice(prev=>prev+3)} className=" bg-primary font-semibold rounded py-1 px-4 text-white cursor-pointer"> Load more...</button>
        </div>
        }
    
      </section>
    );
};

export default Portfullio;