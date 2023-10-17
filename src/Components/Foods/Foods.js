import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import FoodItem from "./FoodItem";
import useFetch from "../hooks/useFetch";
// import useFetch from '../../hooks/useFetch';
// import FoodItem from './FoodItem';
// import Skeleton from './Skeleton';
import pic from "../../"

const Foods = () => {
  const [menuTab, setMenuTab] = useState("Wedding");
  const [loading, setLoading] = useState(false);
  const [foods] = useFetch();
//   console.log(foods)
//   const [foods, setFoods] = useState([]);

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //food menu tab
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

//    

  return (
  <div className=" bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94]">
      <section className="my-12 py-12 max-w-screen-xl mx-auto px-6 ">
      {/* food Menu tab  */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            menuTab === "Wedding"
              ? "active_menu_tab poppins cursor-pointer text-blue-900  bg-red-100 font-bold  rounded-full px-4 py-2   select-none"
              : "menu_tab poppins cursor-pointer font-bold text-white"
          }
          onClick={() => handleMenuTabs("Wedding")}
        >
          Wedding
        </p>
        <p
          className={
            menuTab === "Birthday"
              ? "active_menu_tab poppins cursor-pointer text-blue-900  bg-red-100 font-bold rounded-full px-4 py-2 select-none"
              : "menu_tab poppins cursor-pointer font-bold text-white"
          }
          onClick={() => handleMenuTabs("Birthday")}
        >
          Birthday
        </p>
        <p
          className={
            menuTab === "Holud"
              ? "active_menu_tab poppins cursor-pointer   bg-red-100 font-bold  rounded-full px-4 py-2 text-blue-900 select-none"
              : "menu_tab poppins cursor-pointer font-bold text-white"
          }
          onClick={() => handleMenuTabs("Holud")}
        >
          Holud
        </p>
      </div>

      {/* all foods  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12  ">
        {foods
          .filter((item) => menuTab === item.type)
          .map((item) =>
            loading ? (
              <Skeleton key={item._id} />
            ) : (
              <FoodItem key={item._id} item={item} {...item} />
            )
          )}
      </div>
    </section>
  </div>
  );
};

export default Foods;
