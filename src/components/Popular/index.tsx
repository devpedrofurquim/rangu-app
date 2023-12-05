import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MdRestaurant } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState<any[]>([]);  

    useEffect(() => {
        const fetchData = async () => {
            const check = localStorage.getItem('popular');
            if (check) {
                setPopular(JSON.parse(check));
            } else {
                try {
                    const data = await getPopular();
                    localStorage.setItem('popular', JSON.stringify(data));
                    console.log(data);
                    setPopular(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
    
        fetchData();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_KEY}&number=12`);
        const data = await api.json();
        return data.recipes;
    };
    
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-left mb-[40px]">RECEITAS POPULARES</h3>
            <div className="grid grid-cols-1 text-center">
            <Splide options={{
                perPage: 1,
                arrows: false,
                pagination: false,
                gap: "0rem",
                lazyLoad: 'nearby'

            }}
            >
            {popular.map((recipe) => {
                return (
                    <SplideSlide>
                    <Link to={`/recipe/${recipe.id}`}>
                        <div className="flex flex-col p-5 h-[400px] mx-3 text-center items-center justify-between rounded-md bg-black cursor-pointer relative" key={`${recipe.title}-${recipe.id}`}>
                            <p className="uppercase text-center justify-center z-[2] text-white items-center font-semibold text-2xl mt-[1rem]">{recipe.title}</p>
                            <img src={`${recipe.image}`} alt={`Image of ${recipe.title}`} className="hover:opacity-80 rounded-md opacity-60 absolute top-0 w-[100%] h-[100%] object-cover shadow-lg"/>
                            <div className="flex gap-2 text-xl text-white z-[2] place-content-end">
                            <GrRestaurant/>
                            <MdRestaurant/>
                            </div>
                        </div>
                    </Link>
                    </SplideSlide>
                );
            })}
            </Splide>
            </div>
        </div>
    );
};

export default Popular;