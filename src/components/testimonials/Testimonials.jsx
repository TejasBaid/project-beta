import React from "react";
import "./Testimonials.scss";

export const Testimonials = () => {
    const testimonals = [
        {
            photo: "assets/testimonials/photo1.jpg",
            name: "Keshav Singh",
            section: "12-J",
            content: "The school has supported me and has helped me push my limits and has played a huge part in my achievement."
        },
        {
            photo: "assets/testimonials/photo2.jpeg",
            name: "Aadi Jain",
            section: "12-D",
            content: "I owe a lot to the school and the approachability and the exceptional academic environment in the school has no match."
        },
        {
            photo: "assets/testimonials/photo3.jpeg",
            name: "Adit Magotra",
            section: "12-H",
            content: "Dps Rk Puram gets a lot of the credit for my achievement like it should. It has been a huge help and lives up to its name."
        },
        {
            photo: "assets/testimonials/photo4.jpeg",
            name: "Vidushi Jain",
            section: "10-B",
            content: "The students, the teachers, the academics. At DPS RKP you get the best of all worlds, the quality of education remains unmatched."
        },
        {
            photo: "assets/testimonials/photo5.jpeg",
            name: "Nitish Sehgal",
            section: "10-D",
            content: "A lot of the credit for my academic achievements go to the school which has helped my push my limits both academically and extracurricularly"
        },
        {
            photo: "assets/testimonials/photo6.jpeg",
            name: "Gerick Razdan",
            section: "12-B",
            content: "The faculty and environment at the school is what makes all of its students THE BEST where every student tries to push their limits."
        }
    ];
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <p>Messages from our students who excelled in the board exams...</p>
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