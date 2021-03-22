import React from 'react';





const Nav = () => {
    return (
        <div className="Nav">
            <div className="container">
                <nav className="navy">
                    <ul className="nav-list nav-list-mobile">
                        <li className="nav-item">
                            <div className="mobile-menu">
                                <span className="line line-top"></span>
                                <span className="line line-bottom"></span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-apple"></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-bag"></a>
                        </li>
                    </ul>
                    <ul className="nav-list nav-list-larger">
                        <li className="nav-item niv-item-hidden">
                            <a href="#" className="nav-link nav-link-apple"></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Mac</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">iPad</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">iPhone</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Watch</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">TV</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Music</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Support</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-search"></a>
                        </li>
                        <li className="nav-item nav-item-hidden">
                            <a href="#" className="nav-link nav-link-bag"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}
export default Nav;
