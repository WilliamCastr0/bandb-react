import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className='Header'>
            <section id="folders">
                <article>Our achievements</article>
                <article>Our history</article>
                <article>Contact Us</article>
            </section>

            <main>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=751&amp;q=80"
                        alt="Avatar" />
                    <div className="card-body">
                        <div className="card-title"><h4><b>2020 Prom Party</b></h4> </div>
                        <div className="card-text"><p>Description about 2020 Prom Party.</p>
                            <p>More description.</p> 
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=751&amp;q=80"
                        alt="Avatar" />
                    <div className="card-body">
                        <div className="card-title"><h4><b>2019 Prom Party</b></h4> </div>
                        <div className="card-text"><p>Description about 2019 Prom Party.</p>
                            <p>More description.</p> 
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=751&amp;q=80"
                        alt="Avatar" />
                    <div className="card-body">
                        <div className="card-title"><h4><b>2018 Prom Party</b></h4> </div>
                        <div className="card-text"><p>Description about 2018 Prom Party.</p>
                            <p>More description.</p> 
                        </div>
                    </div>
                </div>
            </main>
        </div>    
    );
    }

export default Header;