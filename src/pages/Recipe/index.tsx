import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Category from "../../components/Shared/Category";
import Footer from "../../components/Shared/Footer";
import Form from "../../components/Shared/Form";
import Navbar from "../../components/Shared/Navbar";

const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState<any>({});
    const [activeTab, setActiveTab] = useState<string>('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_APP_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.id])
    
    return (
        <>
        <Navbar/>
        <section className="text-center mx-[30px] lg:mx-[60px]">
        <Form/>
        <Category/>
        <div className="mt-[5rem] mb-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-5 fs-[1.2rem] leading-[1.5rem]">
            <div className="w-100 flex flex-col gap-[40px] text-center justify-start items-center">
                <h2 className="text-[1.9rem] text-left">{details.title}</h2>
                <img className="w-[50%]" src={details.image} alt={`image of ${details.title}`} />
            </div>
            <div className="flex flex-col gap-4 w-100">
                <div className="flex gap-3 justify-center text-center items-start">
                <Link to="" onClick={() => setActiveTab('instructions')} className={activeTab === 'instructions' ? 'bg-[#1A6984] shadow-lg text-white rounded-full py-[10px] px-[20px]' : 'bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]'}>
                    INSTRUCTIONS
                </Link>
                <Link to="" onClick={() => setActiveTab('ingredients')} className={activeTab === 'ingredients' ? 'bg-[#1A6984] shadow-lg text-white rounded-full py-[10px] px-[20px]' : 'bg-[#009ca3] shadow-lg text-white rounded-full py-[10px] px-[20px]'}>
                    INGREDIENTS
                </Link>
                </div>
                { activeTab === 'instructions' ? (
                <div className="text-left">
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                    <br/>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
                ) : (
                <ol>
                    {details.extendedIngredients.map((ingredient : any) => <li key={ingredient.id}>{ingredient.original}</li>)}
                </ol>
                )}
            </div>
        </div>
        </section>
        <Footer/>
        </>
    )
}

export default Recipe;