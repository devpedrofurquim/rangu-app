import { BiSolidDrink, BiSolidPizza  } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';



const Category = () => {
    return (
        <div className="flex flex-col text-center text-2xl items-center justify-center my-[40px] gap-[40px]">
            <Link to="/cuisine/drinks" className="flex gap-3 items-center justify-center text-center bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]">
                <BiSolidDrink/>
                <h3>DRINKS</h3>
            </Link>
            <Link to="/cuisine/hamburger" className="flex gap-3 text-2xl items-center justify-center text-center bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]">
                <MdFastfood/>
                <h3>HAMBURGER</h3>
            </Link>
            <Link to="/cuisine/pizza" className="flex gap-3 text-2xl items-center justify-center text-center bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]">
                <BiSolidPizza/>                
                <h3>PIZZA</h3>
            </Link>
            <Link to="/cuisine/dessert" className="flex gap-3 text-2xl items-center justify-center text-center bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]">
                <LuDessert/>
                <h3>DESSERT</h3>
            </Link>
        </div>
    )
}

export default Category;