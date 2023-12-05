import Category from "../../components/Shared/Category";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";
import Form from "../../components/Shared/Form";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { GrRestaurant } from "react-icons/gr";
import { MdRestaurant } from "react-icons/md";




const Search = () => {
    const [search, setSearch] = useState<any[]>([]);
    let params = useParams();


    const getSearch = async (name: any) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearch(recipes.results)
    };

    useEffect(() => {
        getSearch(params.search);
    },[params.search]);

    return (
        <>
            <Navbar/>
            <section className="text-center lg:mx-[60px] mx-[30px]">
            <Form/>
            <Category/>
            <div className="grid lg:grid-cols-4 gap-[3rem]">
            {search.map((item) => {
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
            </section>
            <Footer/>
        </>
    );
};

export default Search;