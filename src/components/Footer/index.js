import React from 'react'
import { Link } from "react-router-dom";
import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="item">
                        <Link to=""><img src="assets/img/logo-black.png" alt="logo" className="mb-3 logo" /></Link>
                        <p>
                            Yeşim Sok No:12 Çakmak <br />
                            ÜMRANİYE / İSTANBUL
                        </p>
                        <div className="info mt-3">
                            <p><span className="fa fa-phone"></span><a href="tel:0212 212 2121">0212 212 2121</a></p>

                            <p> <span className="fa fa-et"></span><a href="mailto:info@firma.com">info@firma.com</a></p>
                        </div>
                    </div>
                    <div className="item">
                        <h5 className="link">Corporate</h5>
                            <div className="d-flex">
                                <ul className="footer-menu">
                                    <li><Link to="">Terms of use</Link></li>
                                    <li><Link to="">Processing of Personal Data</Link></li>
                                    <li><Link to="">About</Link></li>
                                    <li><Link to="">Vision</Link></li>
                                </ul>
                            </div>
                    </div>
                    <div className="item">
                        <h5 className="link">Blogs</h5>
                        <div className="d-flex">
                            <ul className="footer-menu">
                                <li><Link to="">NEW RELLIC</Link></li>
                                <li><Link to="">Redis Kurulumu</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="item">
                        <h5 className="link">Products</h5>
                        <div className="d-flex">
                            <ul className="footer-menu">
                                <li><Link to="">BlockChain Ürünleri</Link></li>
                                <li><Link to="">CRM Müsteri Kaynak Yönetimi</Link></li>
                                <li><Link to="">Multitenant ETicaret Platformu</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="item">
                        <ul className="footer-menu-2">
                            <li><Link to="">References</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <div className="container-fluid">
                    <p>Copyright © 2021 ichte | All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
