import MainLayout from "./mainLayout";
import SubLayout from "./subLayout";
import {useState, useEffect} from "react";

function About(){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const UserData = async () => {
            fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(json => setUser(json.users));
        }
        UserData();
    },[])
    return(
        <div>
        <MainLayout>
            <SubLayout>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        {
                            user.filter(usr => usr.id === 1).map((usrFilter) => (
                                <h2>About {usrFilter.firstName} {usrFilter.lastName}</h2>
                            ))
                        }
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/assets/img/profile-img.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <div className="row">
                        <div className="col-lg-6">
                            {
                            user.filter(usr => usr.id === 1).map((usrFilter) => (
                                <ul>
                                <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>{usrFilter.birthDate}</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>{usrFilter.domain}</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>{usrFilter.phone}</span></li>
                                <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>{usrFilter.address.address}</span></li>
                                </ul>
                            ))
                        }
                           
                        </div>
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>30</span></li>
                            <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
                            <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                            <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                    </div>
                </div>
                </section>{/* End About Section */}
                <section id="facts" className="facts">
                <div className="container">
                    <div className="section-title">
                    <h2>Facts</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                        <i className="bi bi-emoji-smile" />
                        <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Happy Clients</strong> consequuntur quae</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                        <div className="count-box">
                        <i className="bi bi-journal-richtext" />
                        <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
                        <div className="count-box">
                        <i className="bi bi-headset" />
                        <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
                        <div className="count-box">
                        <i className="bi bi-people" />
                        <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
            </SubLayout>
        </MainLayout>
        </div>
    );
}

export default About;