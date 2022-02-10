import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='Home'>
            <main>
                <div className="card_alt">
                    <div className="meta">
                        <div className="photo"></div>
                        <ul className="details">
                            <li className="description">Our campus is one of the best in Colombia</li>
                        </ul>
                    </div>
                    <div className="card-body-home">
                        <div className="card-title">
                            <h1>Our mission</h1>
                            <h2>Science, innovation and teamwork!</h2>
                        </div>
                        <div className="card-text">
                            <p> Text about Books & Books mission </p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>    
                    </div>
                </div>
                
                <div className="card_alt">
                    <div className="meta">
                        <div className="photo_alt"></div>
                        <ul className="details">
                            <li className="description">Our transport is very comfortable!</li>
                        </ul>
                    </div>
                    <div className="card-body-home">
                        <div className="card-title">
                            <h1>Our culture</h1>
                            <h2>Learn more about our culture!</h2>
                        </div>
                        <div className="card-text">
                            <p> Text about Books & Books culture </p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>    
                    </div>
                </div>
            </main>
        </div>
    );
    }

export default Home;   