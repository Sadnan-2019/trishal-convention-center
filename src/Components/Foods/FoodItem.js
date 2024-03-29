import React from 'react';
// import { useNavigate } from 'react-router-dom';

const FoodItem = ({item}) => {
    // const history = useNavigate()
    const {image, title, description, price, type} = item;
    // console.log(item.title)
    // const navigate = useNavigate()
    // const handleRoute = () => {
    //     history.push(`/foods/${title}`);
    // }
    return (
        <div className="   border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-black text-sm poppins px-4 py-1 inline-block mb-4 ">{type}</span>
            <img className=" mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-white poppins text-lg">{title}</h1>
                {/* <p className="text-white poppins text-sm text-center">{description.slice(0,50)}</p> */}
                {/* <h2 className="text-white poppins text-2xl font-bold">${price}</h2> */}
                {/* <span className="bg-yellow-400 border border-red-900 p rounded-full text-black text-sm poppins px-8 py-1 inline-block mb-4 ">{type}</span> */}

                {/* <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" >Order Now</button> */}
            </div>
        </div>
    )
}

export default FoodItem
