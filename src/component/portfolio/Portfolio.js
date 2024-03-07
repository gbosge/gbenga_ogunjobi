import React from 'react'
import architecture from '../assets/achitechture.jpg'
import chat from '../assets/chat.jpg'
import webapps from '../assets/webapps.jpg'
import portfolio from '../assets/portfolio.jpg'
import sport from '../assets/default-bets-fb-predictions.jpg'
import eCommerce from '../assets/eCommerce-Website-Features.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={architecture} alt="Architecture Gallary website"/>
                </div>
                <h3>Architecture Gallery website</h3>
                <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" class="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={portfolio} alt="Personal portfolio website"/>
                </div>
                <h3>Personal portfolio website</h3>
                <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={webapps} alt="Money Chat Web Application"/>
                </div>
                <h3>Money Chat Web Application</h3>
                <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={eCommerce} alt="E-commerce Web Application"/>
                </div>
                <h3>E-commerce Web Application</h3>
                <div className="portfolio_item-cta">
                    <a href="https://github.com/Sahar009/nolongecommerce" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={sport} alt="Sport Prediction website"/>
                </div>
                <h3>Sport Prediction website</h3>
                <div className="portfolio_item-cta">
                    <a href="https://github.com/Sahar009/reactsport" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={chat} alt="Chat web Application"/>
                </div>
                <h3>Chat web Application</h3>  
                <div className="portfolio_item-cta">
                    <a href="https://github.com/Sahar009/blogsite" className="btn" target="_blank">Github</a>
                    <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio