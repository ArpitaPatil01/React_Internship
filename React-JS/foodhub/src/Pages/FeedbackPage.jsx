import React from 'react';
import Slider from 'react-slick';
import MainNavbar from "../Components/MainNavbar";
import Footer from '../Components/Footer';
const FeedbackPage = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_112,ar_1:1/v1/gk-static/gk/img/avatar/pop.png",
      text: "I love this mousse!! I have been looking for so long for a good chocolate mousse recipe that did not require eggs and finally my search is over"
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_112,ar_1:1/v1/gk-static/gk/img/avatar/pasta.png",
      text: "So I ate some bacon today. For the first time in several years. Oh, I know it may have looked like fried tofu with some seasonings on it, but no, it was bacon. Seriously though, if you're a vegetarian, you know that there are NO good bacon substitutes. "
    },
    {
      id: 3,
      name: "Mike Johnson",
      image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_112,ar_1:1/v1/gk-static/gk/img/avatar/pop.png",
      text: "This was amazing! I am a new vegetarian, 2 months so far to be exact. I have not had any meat cravings at all but yesterday I had a craving for a big mac. Big Macs were always my guilty pleasure comfort meal"
    }
  ];

  // Carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
  
    <MainNavbar></MainNavbar>
  
    <div className="feedback-page">
      <h1>Customer Feedback</h1>
      <Slider {...settings} className="feedback-carousel">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-item">
            <img src={feedback.image} alt={feedback.name} className="feedback-image" />
            <h3>{feedback.name}</h3>
            <p>{feedback.text}</p>
          </div>
          
        ))}
      </Slider>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default FeedbackPage;