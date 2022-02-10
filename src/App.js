import React from 'react';
import './App.scss';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div id="blurry-filter"></div>
            <header>
                <div>
                    <section id="buttons-user">
                        <button className="btn">
                            <span className="add-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                    <path d="M16 11h6m-3 -3v6"></path>
                                </svg>
                            </span>
                            <span className="create">Create account</span>
                        </button>
                    
                        <button className="btn down">
                            <span className="information-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                </svg>
                            </span>
                            <span className="info">More about us!</span>
                        </button>
                    </section>
                    <article id="title"><span className="parent">High School</span><br /><span className="name">Books & Books</span></article>
                </div>
            </header>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
