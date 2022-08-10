import React from "react";
import "./Testimonials.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Testimonials = () => {
    const testimonals = [
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Tejas Baid",
            section: "J",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Akshay",
            section: "D",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Aditi",
            section: "B",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Tejas Baid",
            section: "J",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Akshay",
            section: "D",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Aditi",
            section: "B",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        }
    ];
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="subheader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga blanditiis ea reiciendis quae facilis?</div>
            <div className="testimonial-container">
            <Carousel
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        
        
        {testimonals.map((i) => {
            console.log(i);
            return (
            <div>
            <img src={i.photo} />
            <div className="myCarousel">
              <h3>{i.name}</h3>
              <h4>10th {i.section}</h4>
              <p>
                {i.content}
              </p>
            </div>
          </div>
        )})}
      </Carousel>
            </div>
        </div>
    );
}
// #09ce7e