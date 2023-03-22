import { HeaderCSS } from "./style";
import logo from '../../assets/images/logo.png'
import SearchBar from "./SearchBar";
import { SlArrowDown } from 'react-icons/sl'
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate()

    return (

        <HeaderCSS>
            <div onClick={() => navigate('/Home')}>
                <img src={logo} alt={logo} />
                <h1>NoticeMe</h1>
            </div>
            <div>
                <SearchBar />
                <nav>
                    <SlArrowDown onClick={() => navigate('/adminprofile')}/>
                    <RxPerson onClick={() => navigate('/profile')} />
                </nav>
            </div>
        </HeaderCSS>
    );
}