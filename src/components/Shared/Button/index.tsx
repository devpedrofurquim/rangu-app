import {Link} from 'react-router-dom';

const Button = () => {
    return (
        <div>
        <Link className="text-xl bg-[#009CA3] p-4 w-[100px] h-[100px] rounded-lg text-center text-white hover:bg-[#3FB4BA] font-semibold" to="/">GO BACK</Link>
        </div>
    )
}

export default Button;