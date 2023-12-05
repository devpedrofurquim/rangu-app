import { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import Category from "../../components/Shared/Category";
import Popular from "../../components/Popular";
import Veggie from "../../components/Veggie";
import Comments from "../../components/Comments";
import Social from "../../components/Social";
import Form from "../../components/Shared/Form";
import { motion } from "framer-motion";




const Home = () => {

 useEffect(() => {
 }, [])
    
    return (
        <>
            <Navbar/>
            <motion.div 
             animate={{opacity: 1}}
             initial={{opacity: 0}}
             exit={{opacity: 0}}
             transition={{duration: 0.5}}
            className="text-center mx-[30px] lg:mx-[60px]">
                <div className="flex-col">
                <Form/>
                <Category/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                <Popular/>
                <Comments/>
                </div>
                <div>
                <Veggie/>
                <Social/>
                </div>
                </div>
            </motion.div>
            <Footer/>
        </>        
    )
}

export default Home;