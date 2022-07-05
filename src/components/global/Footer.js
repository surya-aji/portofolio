import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                <div className="container">
                    <div className="copyright">
                    <strong>UAS - Mochamad Surya Aji Sumbaga <br></br> 1121000535 </strong>
                    </div>
                </div>
                </footer>
                <a href="index.html" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
            </div>
        );
    }
}

export default Footer;