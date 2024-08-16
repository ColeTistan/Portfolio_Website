import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn hover:shadow-lg btn-primary text-slate-50 px-7 rounded-md text-base">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
