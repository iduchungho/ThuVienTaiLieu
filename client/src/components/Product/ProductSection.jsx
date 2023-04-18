import React, { useState } from 'react';
import img1 from '../img/f1.png';

const ProductSection = () => {
  const [images, setImages] = useState({
    img1,
    img2: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    img3: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    img4: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);
  return (
    <div className="flex flex-col justify-between mb-16 bg-sectionBg px-32 py-14 lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeImg} alt="" className=" w-fit h-full aspect-square object-cover rounded-xl" />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-cartNumBg font-semibold">Special Sneaker</span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore, sed dolorem iusto non odio quidem
          eaque iure, officiis est laborum. Aspernatur recusandae at saepe praesentium quo sit ipsam odio, libero illum
          nam nemo soluta, blanditiis a possimus animi minus provident iste quisquam, cum voluptatum distinctio
          consequatur deleniti. Soluta nobis voluptate obcaecati ex excepturi harum saepe labore alias necessitatibus
          tenetur.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-cartNumBg text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-cartNumBg text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className=" bg-cartNumBg text-white font-semibold py-3 px-16 rounded-xl h-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
