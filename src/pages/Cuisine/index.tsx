import Category from "../../components/Shared/Category";
import Footer from "../../components/Shared/Footer";
import Form from "../../components/Shared/Form";
import Navbar from "../../components/Shared/Navbar";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { GrRestaurant } from "react-icons/gr";
import { MdRestaurant } from "react-icons/md";


const Cuisine = () => {

    const [cuisine, setCuisine] = useState<any[]>([]);
    let params : any = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const check = localStorage.getItem(params.type);
            if (check) {
                setCuisine(JSON.parse(check));
            } else {
                try {
                    const data = await getCuisine(params.type);
                    localStorage.setItem(params.type, JSON.stringify(data));
                    console.log(data);
                    setCuisine(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
    
        fetchData();
    },[params.type]);

    const getCuisine = async (typeName : string) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_KEY}&query=${typeName}`)
        const recipes = await data.json()
        console.log(recipes.results);
        return recipes.results
    };

    return (
        <>
            <Navbar/>
            <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className="text-center lg:mx-[60px] mx-[30px]"> 
            <Form/>
            <Category/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[3rem]">
            {cuisine.map((item) => {
                return(
                    <>
                    <Link to={`/recipe/${item.id}`}>
                        <div key={item.id} className="pb-5 flex flex-col h-[300px] text-center items-center justify-between rounded-md bg-black cursor-pointer relative">
                            <p className="uppercase text-center z-[2] relative justify-center text-white items-center font-semibold text-xl mt-[1rem]">{item.title}</p>
                            <img src={`${item.image}`} alt={`image of ${item.title}`} className="rounded-md hover:opacity-80 opacity-60 absolute top-0 w-[100%] h-[100%] object-cover shadow-lg"/>
                            <div className="flex gap-2 text-xl text-white z-[2] place-content-end">
                            <GrRestaurant/>
                            <MdRestaurant/>
                            </div>
                        </div>
                    </Link>
                    </>
                )
            })}
            </div>
            </motion.div>
            <Footer/>
        </>
    )
}

export default Cuisine;