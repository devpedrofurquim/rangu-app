import { LiaInstagram } from "react-icons/lia";
import { LiaFacebook } from "react-icons/lia";
import { CgMail } from "react-icons/cg";

const Social = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-[40px]">
            <h1>Follow Us</h1>
            <ul className="flex gap-2 text-4xl">
                <li><a href="#"><LiaInstagram/></a></li>
                <li><a href="#"><LiaFacebook/></a></li>
                <li><a href="#"><CgMail/></a></li>
            </ul>
        </div>
    )
}

export default Social;