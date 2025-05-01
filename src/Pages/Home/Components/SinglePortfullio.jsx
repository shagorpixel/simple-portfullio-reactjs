import { MdArrowOutward } from "react-icons/md";
const SinglePortfullio = ({portfullio}) => {
    return (
        <div key={portfullio.id} className=" space-y-6 shadow p-4 bg-white rounded transition">
        <img className=" w-full" src={portfullio.image} alt="" />
        <div className=" flex items-end justify-between">
          <div className=" space-y-2">
            <h2 className=" text-xl font-bold leading-[150%]">{portfullio.title}</h2>
            <p className=" leading-[150%]  font-bold text-primary/75">{portfullio.category}</p>
          </div>
          <div className=" h-9 w-9 bg-primary flex items-center justify-center rounded-full">
            <span className=" text-white text-xl font-semibold cursor-pointer"><MdArrowOutward /></span>
          </div>
        </div>
  </div>
    );
};

export default SinglePortfullio;