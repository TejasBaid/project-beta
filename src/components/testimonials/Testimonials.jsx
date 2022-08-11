import React from "react";
import "./Testimonials.scss";

export const Testimonials = () => {
    const testimonals = [
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Tejas Baid",
            section: "12-J",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo2.jpeg",
            name: "Aadi Jain",
            section: "12-D",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo3.jpeg",
            name: "Adit Magotra",
            section: "12-H",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo4.jpeg",
            name: "Vidushi Jain",
            section: "10-B",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo5.jpeg",
            name: "Nitish Sehgal",
            section: "10-D",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur. Dolor voluptate labore quasi perferendis, accusantium facere numquam distinctio inventore!"
        },
        {
            photo: "assets/testimonials/photo6.jpeg",
            name: "Gerick Razdan",
            section: "12-B",
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
                            <h4>{testimonial.section}</h4>
                            <p>{testimonial.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
// #09ce7e