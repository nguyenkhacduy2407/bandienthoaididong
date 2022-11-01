import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <h2>KD&TT</h2>
                        <li>
                        <a href=''>Email: nguyenkhacduy1910@gmail.com</a>
                        </li>
                        <li><a>SDT: 0989620829</a></li>
                        <li>
                            <a href='https://www.facebook.com/khacduyjjoouyh/'>Facebook</a>
                        </li>

                    </div>
                    
                    
                    <div className="footer-top-sp">
                        <h2>Hỗ trợ</h2>
                        <p>Support 0989620829 (07:00-21:00)</p>
                        <p>Giao hàng tận nơi 19008291 (07:00-21:00)</p>
                       
                    </div>
                    <div className="footer-top-delivery">
                        <h2>Vận chuyển</h2>
                        <ul>
                            <li>
                                <a>Phương thức vận chuyển</a>
                            </li>
                            <li>
                                <a>Thanh toán</a>
                            </li>
                           
                            <li>
                                <a>Phương thức vận chuyển</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer-bot">
                    
                    <p>Bản quyền © 2022 KD&TT. Đã đăng ký Bản quyền.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;