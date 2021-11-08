import React from 'react'
import { Link } from 'react-router-dom'
export default function Consultvideo() {
    return (
       <>

<div className="contact-banner mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-breadcrumb">
                        <h3>Talk With Your Doctor</h3>
                        <ol className="breadcrumb">
                        <li><Link to="/home">Home / &nbsp;</Link></li>
                            <li>Talk With Your Doctor</li>       
                          </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="zoom-consult mb-50">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="service-heading">
                    <h5>Consult</h5>
                    <h2>Talk With Your Doctor</h2>
                    <p>Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae justo
                        congue amet malesuada.</p>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="zoom-video">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/7ePBa90C4ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="video-question zoom-question">
                    <h4>What are your afraid for?</h4>
                    <br/>
                <ul>
                            <li><button className="btn">Social Gathering?</button></li>
                            <li><button className="btn">Having a problem related to study/job?</button></li>
                            <li><button className="btn">Drugs</button></li>
                            <li><button className="btn">Fear of something</button></li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
    </div>


       </>
    )
}
