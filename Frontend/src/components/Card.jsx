import React from "react";

function Card({ item }) {
    console.log(item);

  return (
    <>
      <div className="mt-4 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.Image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg hover:bg-pink-600 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;