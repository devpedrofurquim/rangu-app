import { useRouteError } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";
import Button from "../../components/Shared/Button";


interface RouterError {
    status: number;
    statusText: string;
    data: string;
    internal: boolean;
    error: Error;
}

const Error = () => {
    const error = useRouteError() as RouterError;    
    console.error(error);

    return (
      <>
        <Navbar/>
        <div id="error-page" className="text-center mt-[50px]">
          <h1 className="text-4xl my-[20px]">Oops!</h1>
          <p className="text-2xl mb-[20px]">Sorry, an unexpected error has occurred.</p>
          <div className="text-2xl flex flex-col gap-[40px]">
            <p>{`Status: ${error.status} ${error.statusText}`}</p>
            <Button/>
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default Error;