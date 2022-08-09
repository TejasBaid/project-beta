import React from "react";
import "./Testimonials.scss";

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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga blanditiis ea reiciendis quae facilis?</p>
            <div className="testimonial-container">
                { testimonals.map((testimonial, i) => {
                    return (
                        <div key={i} className="testimonial-card">
                            <img src={testimonial.photo} alt={testimonial.name}/>
                            <h3>{testimonial.name}</h3>
                            <h4>12-{testimonial.section}</h4>
                            <p>{testimonial.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
// #09ce7e