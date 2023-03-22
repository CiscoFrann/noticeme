import { AdminPostCss } from "./style";
import { FiEdit2 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'






export default function AdminPost(){

    return (
        <AdminPostCss>

            <div>
                <h2>Title Post</h2>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te</span>
            </div>
            <div>
                <img src="https://picsum.photos/200" alt="https://picsum.photos/200" />
                <article>
                    <FiEdit2 />
                    <MdOutlineDelete />
                </article>
            </div>
        </AdminPostCss>
    );

}