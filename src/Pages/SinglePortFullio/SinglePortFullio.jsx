import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePortFullio = () => {
  const { id } = useParams();
  const [portfullio, setPortfullio] = useState(null);
  useEffect(() => {
    fetch("/Portfullio.json")
      .then((res) => res.json())
      .then((data) => {
        setPortfullio(data.find((portfullio) => portfullio.id == id));
      });
  }, [id]);


  return (
    <div className=" container mx-auto px-3 py-6 text-center">
      {portfullio ?
        <div>
        <h2>{portfullio.title}</h2>
        <h3>{portfullio.category}</h3>
        <img
          className=" w-full max-w-lg mx-auto"
          src={portfullio.image}
          alt=""
        />
        <div>
          {portfullio.description.map((des) => (
            <p className=" mb-2 text-left text-lg italic">{des}</p>
          ))}
        </div>
      </div>:
      <h2 className=" text-2xl bg-gray-50 py-9 rounded-lg">No Product Avilable!!!!</h2>
      }
    </div>
  );
};

export default SinglePortFullio;
