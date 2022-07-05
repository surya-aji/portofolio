import { Link } from "react-router-dom";
import MainLayout from "./mainLayout";
import SubLayout from "./subLayout";
import {useState, useEffect} from "react";
import DataKategori from "../data-lokal/kategori.json";

function Portfolio(){
    const [data, setData] = useState(DataKategori);
    return(
        <MainLayout>
            <SubLayout>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row" data-aos="fade-up">
                    <h3>Kategori</h3>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            {
                                data.map((ktgr) => ( 
                                    <Link to= {"kategori/" + ktgr}>  <li data-filter=".filter-app">{ktgr}</li></Link>
                                ))
                            }

                        </ul>
                    </div>
                    </div>
                </div>
                </section>{/* End Portfolio Section */}
            </SubLayout>
        </MainLayout>
    );
}
export default Portfolio;