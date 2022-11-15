/* CSS Footer
*   @Author KhanhHN9
*   @Date 2.11.2022
*/

import './css/Commont.css';
import './css/Footer.css';
import React from 'react';
import { FaFacebookF, FaDev, FaGithub } from "react-icons/fa";

export default function ThisFooter() {
    const ThisFooter = React.createElement('footer', {
        id: 'ThisFooter',
        className: 'disFlex'
    }, (
        <table id='contactFooter'>
            <thead>
                <tr>
                    <td><h3>Product</h3></td>
                    <td><h3>Resource</h3></td>
                    <td><h3>Company</h3></td>
                    <td><h3>Get it touch</h3></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href='./'>Listing</a></td>
                    <td><a href='./'>Out homes</a></td>
                    <td><a href='./'>patnerships</a></td>
                    <td>you'll find your next home, in any style you prefer.</td>
                </tr>
                <tr>
                    <td><a href='./'>Agents</a></td>
                    <td><a href='./'>Videos</a></td>
                    <td><a href='./'>Privacy</a></td>
                    <td className="link__Dev">
                        <FaDev></FaDev> <a href="./">Hồ Ngọc Khánh</a>
                    </td>
                </tr>
                <tr>
                    <td><a href='./'>Property</a></td>
                    <td><a href='./'>member stories</a></td>
                    <td><a href='./'>terms of use</a></td>
                    <td className="link__Facebook">
                        <FaFacebookF></FaFacebookF> <a href="https://www.facebook.com/liin.1406/" target="_BLANK">Hồ Ngọc Khánh</a>
                    </td>
                </tr>
                <tr>
                    <td><a href='./'>Blog</a></td>
                    <td><a href='./'>Free trial</a></td>
                    <td><a href='./'>Sitemap</a></td>
                    <td className="link__Github">
                        <FaGithub></FaGithub> <a href="https://github.com/isLiin" target="BLANK">Hồ Ngọc Khánh</a>
                    </td>
                </tr>
            </tbody>
        </table>
    ));


    return ThisFooter;
}
