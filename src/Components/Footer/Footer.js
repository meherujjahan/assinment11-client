import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <>
        <div className='footer'>
            <ul>
                <ol>
                <h2>Tourist Plaza</h2>
                <p>Mirpur, Dhaka-1216, Bangladesh</p>
                <p>+88 09666911463 / 4003</p>
                <p>tourist plaza@gmail.com</p>
                </ol>
            </ul>
            
            <div>
            <i className="fab fa-facebook-square icon"></i><i className="fab fa-twitter-square icon"></i><i className="fab fa-instagram-square icon"></i><i className="fab fa-whatsapp-square icon"></i><i className="fab fa-google icon"></i>
            </div>
        </div>
        <p className='copyright'> copyright&copy; 2022 Tourist plaza</p>

        </>
    );
};

export default Footer;