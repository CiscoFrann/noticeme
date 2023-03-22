import AdminPost from "../../components/AdminPost/AdminPost";
import Header from "../../components/Header/Header";
import { AdminCss } from "./style";
import { FiEdit2 } from 'react-icons/fi'
import { useAuth } from '../../context/ApiContext';
import { useEffect, useState } from "react";
import { getUserData } from "../../server/conectBack";


function AdminProfile() {
    const { userId, token } = useAuth()
    const [data, setData] = useState({
        birthday: "",
        description: [{text:''}],
        email: "",
        id: 0,
        image_url: "",
        name: "",
        posts: []
    })

    useEffect(() => {

        getUserData(userId, token).then((e) => {
            setData(e.data)
        }).catch((e) => {
            console.log(e.response.data)
        })

    }, [])

    return ( 
        <AdminCss>
            <Header />
            <section>
                <nav>
                    <img src={data.image_url} alt='Imagem do usuário'   />
                    <h1>{data.name}</h1>
                </nav>

                <span>{data.description[0] ? data.description[0].text : ''}</span>

                <div>
                    <FiEdit2 />
                </div>
                
            </section>
            <ul>
            {data.posts[0] ? data.posts.map((e, i) => {
                    return <AdminPost />
                }): <h1>Não tem post</h1>}

            </ul>
        </AdminCss>
     );
}

export default AdminProfile;