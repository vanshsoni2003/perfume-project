import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove } from '../Reduc/Cartslice';

const Shoping = () => {
    const cartitem = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [quantities, setQuantities] = useState({});

    const increase = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 1) + 1 });
    };

    const decrease = (id) => {
        setQuantities({ ...quantities, [id]: Math.max((quantities[id] || 1) - 1, 1) });
    };

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    // Calculate total price
    const getTotal = () => {
        return cartitem.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            const price = Number(item.price); // Ensure it's a number
            return total + price * quantity;
        }, 0).toFixed(2);
    };
    

    return (
        <>
          <div className="flex flex-col items-center mt-10 px-4 py-6 shadow-md rounded-lg w-[80%] mx-auto space-y-6">
    {cartitem.map((item, index) => (
        <div
            key={index}
            className="border border-gray-300 w-full max-w-[700px] bg-black text-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-[200px] h-[200px] object-contain rounded-md bg-white"
            />

            <div className="flex-1 w-full">
                <h5 className="text-xl font-semibold">{item.title}</h5>
                <h5 className="text-[#AB572D] font-bold mt-2">${item.price}</h5>

                <div className="flex items-center gap-6 mt-3">
                    <button
                        onClick={() => decrease(item.id)}
                        className="px-4 py-1 bg-white text-black rounded-full hover:text-red-600"
                    >
                        -
                    </button>
                    <span className="text-lg">{quantities[item.id] || 1}</span>
                    <button
                        onClick={() => increase(item.id)}
                        className="px-4 py-1 bg-white text-black rounded-full hover:text-green-600"
                    >
                        +
                    </button>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                    <button
                        onClick={() => handleRemove(item.id)}
                        className="border px-6 py-2 rounded-md hover:text-red-600 hover:cursor-pointer"
                    >
                        Delete Item
                    </button>
                    <button className="border px-6 py-2 rounded-md hover:text-green-600 hover:cursor-pointer">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>


            {/* Total Amount Section */}
            {cartitem.length > 0 && (
                <div className="mt-8 text-center text-xl font-bold text-black">
                    Total Amount: <span className="text-green-600">${getTotal()}</span>
                </div>
            )}
        </>
    );
};

export default Shoping;