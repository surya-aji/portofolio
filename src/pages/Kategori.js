import { Link,
    useParams
 } from "react-router-dom";
import MainLayout from "./mainLayout";
import SubLayout from "./subLayout";

function Kategori(){
    let {slug} = useParams();
    return(
        <MainLayout>
            <SubLayout>
            <div className="container">
                <div className="section-title">
                        <h2>Halaman Kategori {slug}</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
            </div>
            </SubLayout>
        </MainLayout>
    );
}

export default Kategori;