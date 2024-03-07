import React from 'react'
import image1 from '../assets/img2.jpeg'


const About = () => {
  return (
    
<section id="about">
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className="container about_container">
<div className="about_me">
<div className="about_me-image">
  <img src={image1} alt="About Image"/>

</div>
</div>
<div class="about_content">
<div class="about_cards">
<article class="about_card">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="about_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg>
<h5>Experience</h5>
<small> 1 year working experience</small>
</article>
<article class="about_card">
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="about_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<h5>Clients</h5>
<small>5 Worldwide</small>
</article>
<article class="about_card">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="about_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 9v4.904c0 .892.446 1.724 1.187 2.219L12 17.998l2.813-1.875A2.667 2.667 0 0 0 16 13.904V9H8zm2 4.904V11h4v2.904a.667.667 0 0 1-.297.555L12 15.594l-1.703-1.135a.667.667 0 0 1-.297-.555z"></path></g></svg>
<h5>Projects</h5>
<small> 13+ completed</small>
</article>
</div>
<p>Hey There!, I'm a front-end Developer, I build Applications &amp; websites, still playing around &amp; my favorite tool is React!!</p>
<a href="#contact" class=" btn btn-primary">Lets Talk</a>
</div></div>
</section>

  )
}

export default About