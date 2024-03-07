import React, { useState, useEffect } from 'react';
import { data } from './Data'

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll]);

  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
         
          {data.map((slide, index) => {
            const { client, name, review } = slide;
            return (
              <div key={index} className='card'>
                {index === currentSlide && (
                  <>
                  <div className='card__wrapper'>
                    <div className='client_image'>
                      <img src={client} alt={name} />
                    </div>
                    <div className='text'>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                    </div>
                  </div>
                  </>
                )}
              </div>
            );
          })}
    </section>
  );
};

export default Testimonial;




// import React, { useState, useEffect } from 'react';
// import { data } from './Data'

// const Testimonial = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = data.length;

//   const autoScroll = true;
//   let slideInterval;
//   const intervalTime = 5000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       slideInterval = setInterval(nextSlide, intervalTime);
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide, autoScroll]);

//   return (
//     <section id='testimonials'>
//       <h5>Review from Client</h5>
//       <h2>Testimonials</h2>
//       <div className='swiper container testimonials_container'>
        
//           {data.map((slide, index) => {
//             const { client, name, review } = slide;
//             return (
//               <div key={index} className='swiper_slide testimonial'>
//                 {index === currentSlide && (
//                   <>
//                     <div className='client_image'>
//                       <img src={client} alt={name} />
//                     </div>
//                     <div className='text'>
//                     <h5 className='client_name'>{name}</h5>
//                     <small className='client_review'>{review}</small>
//                     </div>
                    
//                   </>
//                 )}
//               </div>
//             );
//           })}
        
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
