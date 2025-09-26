import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from "../components/Header";
import "./Testimonials.scss"

export default class Testimonials extends Component {
  render() {
    return (
        <>
        <Header title="Testimonials" subtitle="Wealthy Customers" />
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img style={{width:100}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" />
          <div className="myCarousel">
            <h3>Sneha Giranje</h3>
            <h4>Product Manager at Ittiam</h4>
            <p>
            SPM is a great platform for investment. Interactive and clean User Interface.
             Features like creating your own portfolio are great..I started investing in MF due to SPM only. 
            Very responsive Support team. Always available to help for any query
            </p>
          </div>
        </div>

        <div>
          <img style={{width:100}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" />
          <div className="myCarousel">
            <h3>Nikhil Bindal</h3>
            <h4>Designer</h4>
            <p>
            SPM.in was the platform where I first got onboard to MF and I would 
            have to say, even for a beginner like me it made things quite 
            easier to explore and invest. SPM actually helped me make better-informed decisions.
            </p>
          </div>
        </div>

        <div>
          <img style={{width:100}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
          <div className="myCarousel">
            <h3>Shardul Surve</h3>
            <h4>Technical Product Specialist at Google</h4>
            <p>
            If you are one of those who would like to take control of how you save, use SPM. 
            It is ridiculously easy portal. It took me 5 mins to set 
            up and 10 mins to find the funds that suited my need and invest.
            </p>
          </div>
        </div>

        <div>
          <img style={{width:100}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
          <div className="myCarousel">
            <h3>Kalpesh Lambe</h3>
            <h4>Senior Product Specialist at Adobe</h4>
            <p>
            If you are one of those who would like to take control of how you save, use SPM. 
            It is ridiculously easy portal. It took me 5 mins to set 
            up and 10 mins to find the funds that suited my need and invest.
            </p>
          </div>
        </div>

        <div>
          <img style={{width:100}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
          <div className="myCarousel">
            <h3>Tridev Shashi Kashyap</h3>
            <h4>Technical Manager at Salesforce</h4>
            <p>
            If you are one of those who would like to take control of how you save, use SPM. 
            It is ridiculously easy portal. It took me 5 mins to set 
            up and 10 mins to find the funds that suited my need and invest.
            </p>
          </div>
        </div>
      </Carousel>
        </>
      
    );
  }
}