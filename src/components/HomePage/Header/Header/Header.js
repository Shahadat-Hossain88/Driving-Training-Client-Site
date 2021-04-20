import React from 'react';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
        </div>
    );
};

export default Header;