import React from 'react';
import '../Footer/Footer.css'
import VKlogo from '../../img/Social/PNG 200x200/vk.png'
import TGlogo from '../../img/Social/PNG 200x200/telegram.png'
import FBlogo from '../../img/Social/PNG 200x200/fb.png'
import INSlogo from '../../img/Social/PNG 200x200/instagram.png'


const Footer = () => {
    return (
        <footer>
            <div className='Footer__Container'>
            <ul>
                <li><img className='logo' src={VKlogo} alt="" /></li>
                <li><img className='logo' src={TGlogo} alt="" /></li>
                <li><img className='logo' src={FBlogo} alt="" /></li>
                <li><img className='logo' src={INSlogo} alt="" /></li>
            </ul>

            </div>

        </footer>
    )
}

export default Footer;