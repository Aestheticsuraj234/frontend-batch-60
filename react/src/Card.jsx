import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center  px-4 py-2 space-y-5 m-4 rounded-xl bg-white shadow-2xl ">
      <img
        src={props.imageUrl}
        alt="thumbnail"
        className="border rounded-xl"
        height={420}
        width={440}
      />
      <h1 className="text-2xl font-bold self-start">{props.title}</h1>
      <p className="text-base font-semibold text-gray-500">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
