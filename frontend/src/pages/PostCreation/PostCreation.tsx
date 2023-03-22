import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";
import { Container, Main, TextBox, TitleCss } from "./style";

function PostCreation() {
    const [form, setForm] = useState({
        title: "",
        text:"",
        image_url:"",
    }); 
    return ( 
        <Main>
            <Header />
            <Container>
                <BiImageAdd />
                <TitleCss placeholder="Título"></TitleCss>
                <TextBox placeholder="Texto"></TextBox>
                <ul>
                    <Tags />
                    <Tags />
                    <Tags />
                </ul>
 
                
            </Container>
        </Main> );
}

export default PostCreation;