import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact_container'>
            <div className='contact_options'>
                <article className='contact_option'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="contact_option-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5 8-5v2l-8 5z"></path><path d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 00-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"></path></svg>
                
                <h4>Email</h4>
                <h5>gbenga_ogunjoi@yahoo.com</h5>
                <a href='mailto:gbenga_ogunjobi@yahoo.com' target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="contact_option-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg>
                <h4>Whatsapp</h4>
                <h5> +234(8074916531)</h5>
                <a href="https://api.whatsapp.com/send?phone=23408074916531" target="_blank"> Send a message</a>
                </article>            
            </div>
            <form action=''>
            <input type='text' name='name' placeholder='Please enter your full name' required/>
            <input type='email' name='email' placeholder='Please provide your Email' required/>
            <textarea name='message' rows='7' placeholder='Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>

            </form>
        </div>
    </section>
  )
}

export default Contact