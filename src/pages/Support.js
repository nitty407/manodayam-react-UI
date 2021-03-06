import React from 'react'
import { Link } from 'react-router-dom'
export default function Support() {
    return (
       <>

<div className="contact-banner mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-breadcrumb">
                        <h3>your support network</h3>
                        <ol className="breadcrumb">
                        <li><Link to="/home">Home / &nbsp;</Link></li>
                            <li>Your support Network</li>       
                          </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="about-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="about-img">
                        <img src="assets/image/support.jpg" alt=""/>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="about-content support-content">
                        <h5>support</h5>
                        <h2>Your Support Network</h2>
                        <p>Manodayam presents you a support network which helps in scientifically providing various solutions.The support network provides you latest scientific solutions and scientifically backed age old spiritual  theories. These theories are backed up with scientific research in the field of Neuromodulation and Neuro simulations.</p>
                        
                        <h4>The support network consists of </h4>
                        <ul>
                            <li><i className="fa fa-caret-right"></i> Science and Technology</li>
                            <li><i className="fa fa-caret-right"></i> Vedic Methods</li>
                            <li><i className="fa fa-caret-right"></i> Equine Assisted Psychotherapy</li>
                        </ul>
                        <p>The underlying mathematical algorithm provides you very personalized therapy for your mental health requirements</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

       </>
    )
}
