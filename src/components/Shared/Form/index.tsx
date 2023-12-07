import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const [input, setInput] = useState<string>("");
    const navigate = useNavigate();

    const submitHandler = (e:any) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    }

    return (
        <>
        <h1 className="mt-[40px] mb-[20px] text-3xl text-center">Bem-Vindo ao Rangu</h1>
        <form className="mb-[40px] flex justify-center" onSubmit={submitHandler}>
                        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Buscar Estabelecimento" className="shadow-lg w-[80%] mx-[40px] h-[40px] p-3 rounded-full text-black"></input>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
        </form> 
        </>
    )
}

export default Form;