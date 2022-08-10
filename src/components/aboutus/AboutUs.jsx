import React from 'react'
import './AboutUs.scss'

export const AboutUs = () => {
  return (
    <div className="about">
        <div className="about-content">
            <h5>ABOUT US</h5>
            <h1>DPS RK PURAM</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde ratione in, soluta saepe qui, nesciunt, facere culpa enim quaerat nihil natus recusandae? Harum distinctio incidunt numquam velit vitae id aut mollitia ut accusantium dolorum. <br /><br />Error nisi enim sequi dignissimos dicta. Mollitia, impedit voluptate! Repellendus blanditiis illo possimus ab neque quod officia illum <br /><br /> saepe a itaque sequi iste, commodi placeat dicta dolore ipsa excepturi eligendi ipsam officiis? Sequi, atque mollitia minus animi, quisquam provident qui sapiente ratione odit alias veniam! 
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas maiores accusantium explicabo, quisquam laudantium vero dolore aliquam porro. Delectus accusantium iste cum voluptatem quos eos, non itaque praesentium voluptate!
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
