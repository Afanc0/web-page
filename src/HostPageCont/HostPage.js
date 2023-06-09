import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import LiveTimeUpdateFunction from './UpdateTime';
import './HostPage.css';
import FooterSection from './Footer';


function useSelectedMenuAmination() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => { setIsClicked(!isClicked);};
    const changeStyle = isClicked ? 'change' : '';
    return [changeStyle, handleClick, isClicked];
}

function RenderSkeleton() {
    document.body.style.backgroundColor = "white";
    const [changeStyle, handleClick, clicked] = useSelectedMenuAmination();
    return (
        <div className="bgnd">
            <LiveTimeUpdateFunction />
            <div>
                <header>
                    <div className="titleName">
                        <p>
                            Hello From,<br/>
                            <span className="titledesign">Resunnect</span>
                        </p>
                    </div>
                    <div className="menuIcon" onClick={handleClick} >
                        <div className={`iconPart1 ${changeStyle}`}></div>
                        <div className={`iconPart2 ${changeStyle}`}></div>
                        <div className={`iconPart3 ${changeStyle}`}></div>
                    </div>
                </header>

                <section>
                    <div className={clicked ? `menuBody visible` : "menuBody hidden"}>
                        {/* Edit the style of the links/contents and display of the menu */}
                        <div> 
                            <ul className="menuOptions">
                                <li>
                                    <Link to="/GospelReading" className="menu-button--design">
                                        <div className="menu-button">
                                            <p>Gospel Reading</p>
                                        </div>
                                    </Link>
                                    <div className="book-icon"></div>
                                </li>
                                <li>
                                    <Link to="/About" className="menu-button--design">
                                        <div className="menu-button">
                                            <p>About Page</p>
                                        </div>
                                    </Link>
                                    <div className="about-icon"></div>
                                </li>
                            </ul>
                        </div>

                        <Outlet />
                    </div>
                </section>
            </div>

            <FooterSection />
        </div>
    );
}

export default RenderSkeleton;