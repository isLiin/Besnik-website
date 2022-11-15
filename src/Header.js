/*  Container Header
*   @Author KhanhHN9
*   @Date 31.10.2022
*/

import './css/Commont.css';
import './css/Header.css';
import React from 'react'
import { ActHeader } from './js/LogicHeader';

import { FaRegUserCircle } from 'react-icons/fa'

export default function ThisHeader() {
    // List link
    const linkList = ['Besniks.', 'Home', 'Contact', 'Service', 'Frature', 'Listed'];

    // Create Conponent link
    const links = (
        <ul className='container-link-header disFlex'>
            {/*index la bien cua js*/}
            {linkList.map((titleLink, index) =>
                <li key={index} className={`container-link-header__item header-${titleLink}`} >
                    <span onClick={
                        // Act link of header
                        (e) => ActHeader.link(e)
                    }>{titleLink}</span>
                </li>
            )}
        </ul>
    );

    // Create component button
    const buttons = React.createElement('ul',
        {
            className : `container-button-header disFlex`
        },
        React.createElement('button', {
            className : `btn btn-SignIn`,
            onClick : ActHeader.button.signUp
        }, 'Sign In'),
        React.createElement('button', {
            className : `btn btn-SignUp btn-active`,
            onClick : ActHeader.button.register
        }, 'Sign Up'))

    // Create component button
    const buttons__Mobile = React.createElement('ul',
        {
            className : `container-button-header disNone`,
        },
        React.createElement('div', {}, <FaRegUserCircle></FaRegUserCircle>))

    // Create container HEADER
    const Header = React.createElement('div',
        {
            id: 'Header',
            className: 'disFlex'
        },
        links,
        buttons,
        buttons__Mobile
    );
    return Header;
}
