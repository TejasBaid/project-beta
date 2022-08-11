import React from 'react'
import './AboutUs.scss'

export const AboutUs = () => {
  return (
    <div className="about">
        <div className="about-content">
            <h1>About Us</h1>
            <p>Our mission  is to nurture our students to realize their own potential and identify and achieve their goals in an environment of rich tutelage, joyful and harmonious learning while keeping alive the spirit of togetherness and ‘Service Before Self’. Our aim is to bring forth responsible citizens of the world who make a difference and who will make the school and nation proud of their achievements and stellar personal qualities 
            <p>Our vision is to prepare our children for life by:-</p>
            <ul>
                <li>broadening their horizons so that their world encompasses the whole of mankind.</li>
                <li>deepening their thoughts so that their learning becomes the means to achieve that perfection of mind in which analytical reasoning goes hand in hand with logical conclusion.</li>
                <li>helping them incorporate the essential values of goodness, honesty, humility and discipline as an integral part of their being.</li>
                <li>guiding them to become contented individuals whose strength lies in their ability to face adversities without fear and overcome challenges with confidence.</li>
                <li>inculcating in them the sense of gender sensitivity so that they learn to treat everyone as equal and rise above the barriers of discrimination of any kind.</li>
            </ul>
            <p>Our focus is to engage students in a healthy environment of learning and self-development where the focus is on a strong value system, mental agility and physical fitness.</p>
            </p>

        </div>
        <div className='abimg'>
            <div className="about-image">
                
            
            </div>
            <svg
              className="about-image-svg"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >

              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
        </div>
    </div>
  )
}
