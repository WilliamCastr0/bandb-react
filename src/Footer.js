import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className='Footer'>
            <br/>
            <footer>
                <div className="card-copyrights"> 
                    <div className="card-body">
                        <div className="card-title"><h2>Books & Books High School</h2></div>
                        <div className="card-text">© Copyrights. All rights reserved.</div>
                    </div>
                </div>

                <div className="card-links"> 
                    <div className="card-body">
                        <div className="card-title"><h3>Links</h3></div>
                        <div className="card-text">
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Contact us</a></li>
                                <li><a href='#'>FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card-links"> 
                    <div className="card-body">
                        <div className="card-title"><h3>More Links</h3></div>
                        <div className="card-text">
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Contact us</a></li>
                                <li><a href='#'>FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card-links"> 
                    <div className="card-body">
                        <div className="card-title"><h3>Follow Us</h3></div>
                        <div className="card-text">
                            <ul>
                                <li><a href="#" className='a-youtube'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg></a>
                                </li>
                                <li>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                    </svg></a>
                                </li>
                                <li>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                    </svg></a>
                                </li>
                                <li>
                                    <a href="#" className='a-instagram'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                                    </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </div>

    );
}
export default Footer;  