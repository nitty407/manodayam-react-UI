import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function Home() {
    return (
       <>

<Login />
<div className="web-banner-slider">
        <div className="web-banner web-banner3 mb-50">
            <div className="container">
                <div className="web-banner-content">
                    <h1>Manodayam addresses various mental health issues.</h1>
                    <button className="btn-web"><a href="">register for assessment</a></button>
                    <button className="btn-web"> <Link to="/support">your support network</Link></button>
                </div>
            </div>
        </div>
        <div className="web-banner web-banner1 mb-50">
            <div className="container">
                <div className="web-banner-content">
                    <h1>privacy and data security is paramount, we understand your concern.</h1>
                    <button className="btn-web"><a href="">register for assessment</a></button>
                    <button className="btn-web"> <Link to="/support">your support network</Link></button>
                </div>
            </div>
        </div>
        <div className="web-banner web-banner2 mb-50">
            <div className="container">
                <div className="web-banner-content">
                    <h1>continual research and development , we are research driven mental health organisation.</h1>
                    <button className="btn-web"><a href="">register for assessment</a></button>
                    <button className="btn-web"> <Link to="/support">your support network</Link></button>
                </div>
            </div>
        </div>
        <div className="web-banner mb-50">
            <div className="container">
                <div className="web-banner-content">
                    <h1>your support network, manage yourself with us.</h1>
                    <button className="btn-web"><a href="">register for assessment</a></button>
                    <button className="btn-web"> <Link to="/support">your support network</Link></button>
                </div>
            </div>
        </div>
    
    </div>

    <div className="video-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="video-heading">
                        <h2>Mental Health Counseling</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="video-card">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/BVJkf8IuRjE"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="video-card">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/xsEJ6GeAGb0"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="video-card">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/lhlw44iN-LA"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="video-heading mt-30">
                        <h2>Mental Health Counseling</h2>
                    </div>
                    <div className="video-question">
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

    <div id="about" className="about-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-img">
                        <img src="assets/image/about-img.png" alt=""/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="about-content">
                        <h5>about Us</h5>
                        <h2>Mental Health Counseling</h2>
                        <p>Manodayam is a Mental Health and Wellnessorganization providing Holistic solutions. It has
                            Unique Value proposition integrating continual mental health assessment and support networks
                            including Neuromodulation with Vedic methodology and latest scientific techniques through
                            mobile app.</p>
                        <p>These Solutions are driven by Artificial Intelligence (AI) centric algorithms. and group of
                            leading medical fraternity in mental health space</p>
                        <p>Solutions to 17 Mental Health Conditions such as Depression, Panic, Stress, PSTD, Alcoholism,
                            Substance Abuse, Schizophrenia, Bipolar, ADHD, Dementia, Alzheimer’s, Parkinson’s, Juvenile
                            Delinquency, Autism, Sexual Disorders, Sleeplessness </p>
                        <p>Manodayam has Comprehensive team of Clinical Psychologist, Psychiatrists, Care-givers

                            Also we have Expertise in Mathematical Modeling, Business Management, Big Data Management,
                            Statistical Analytics
                        </p>
                        <p>Manodayam is in the process of Compliances to Clinical Trials, Validationsand Data Protection
                        </p>
                        <img src="assets/image/rose.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="service-section mb-50">
        <div className="container">
            <div className="col-lg-12">
                <div className="service-heading">
                    <h5>Advantages</h5>
                    <h2>We Can Help You With</h2>
                    <p>Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae justo
                        congue amet malesuada.</p>
                </div>
            </div>

            <div className="service-slide">
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/depression.png" alt=""/>
                        <img src="assets/image/depression.png" className="img-bfr" alt=""/>
                        <h3>Depression</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                        <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/anxiety.png" alt=""/>
                        <img src="assets/image/anxiety.png" className="img-bfr" alt=""/>
                        <h3>Anxiety</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/attention.png" alt=""/>
                        <img src="assets/image/attention.png" className="img-bfr" alt=""/>
                        <h3>Attention Disorder</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/psychosis.png" alt=""/>
                        <img src="assets/image/psychosis.png" className="img-bfr" alt=""/>
                        <h3>Psychosis</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/alcohol.png" alt=""/>
                        <img src="assets/image/alcohol.png" className="img-bfr" alt=""/>
                        <h3>Alcohol Abuse</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/sd.png" alt=""/>
                        <img src="assets/image/sd.png" className="img-bfr" alt=""/>
                        <h3>sexual Dysfunction</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/depression.png" alt=""/>
                        <img src="assets/image/depression.png" className="img-bfr" alt=""/>
                        <h3>Dementia</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/bipolar.png" alt=""/>
                        <img src="assets/image/bipolar.png" className="img-bfr" alt=""/>
                        <h3>Bipolar</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/ocd.png" alt=""/>
                        <img src="assets/image/ocd.png" className="img-bfr" alt=""/>
                        <h3>Obsessive Compulsive Disorder</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/drug-abuse.png" alt=""/>
                        <img src="assets/image/drug-abuse.png" className="img-bfr" alt=""/>
                        <h3>Drug Abuse</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card hvr-float-shadow">
                        <img src="assets/image/schizophrenia.png" alt=""/>
                        <img src="assets/image/schizophrenia.png" className="img-bfr" alt=""/>
                        <h3>Schizophrenia</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="btn-web hvr-float-shadow"><Link to="/healthheal">get solution</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="doctor-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="doctor-heading">
                        <h2>Consult With Experts.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad repellendus laboriosam ea,
                            dolorem odio culpa.</p>

                        <div className="expert-details">
                            <span>01</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nostrum et
                                quisquam aliquid ipsa ad necessitatibus.</p>
                        </div>
                        <div className="expert-details">
                            <span>02</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nostrum et
                                quisquam aliquid ipsa ad necessitatibus.</p>
                        </div>
                        <div className="expert-details">
                            <span>03</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nostrum et
                                quisquam aliquid ipsa ad necessitatibus.</p>
                        </div>



                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="doctor-form">
                        <h3>Search Doctors Here</h3>
                        <form action="">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Country"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <select name="" id="">
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <select name="" id="">
                                        <option value="">Depression</option>
                                        <option value="">Anxiety</option>
                                        <option value="">Attention Disorder</option>
                                        <option value="">Psychosis</option>
                                        <option value="">Alcohol Abuse</option>
                                        <option value="">Sexual Dysfunction</option>
                                        <option value="">Dementia</option>
                                        <option value="">Bipolar</option>
                                        <option value="">Obsessive Compulsive Disorder</option>
                                        <option value="">Drug Abuse</option>
                                        <option value="">schizophrenia</option>
                                    </select>
                                </div>
                            </div>
                           
                            <div className="col-lg-12">
                                <buttton className="btn hvr-float-shadow"><Link to="/consultvideo" style={{color: "#23adba",}} >Submit</Link></buttton>
                            </div>

                          

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>

   <div className="zoom-consult mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="doctor-form">
                        <h3>Consult With Us</h3>
                        <form action="">
                           <div className="row">
                           <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" name="" id="" placeholder="Full name"/>
                            </div>
                           </div>
                           <div className="col-lg-6">
                            <div className="form-group">
                                <input type="email" name="" id="" placeholder="Email"/>
                            </div>
                           </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Mobile no."/>
                                </div>
                            </div>
                           <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" name="" id="" placeholder="Scheduling date and time"/>
                            </div>
                           </div>
                           <div className="col-lg-6">
                            <div className="form-group">
                                <select name="" id="">
                                    <option value="">Depression</option>
                                    <option value="">Anxiety</option>
                                    <option value="">Attention Disorder</option>
                                    <option value="">Psychosis</option>
                                    <option value="">Obsessive Compulsive Disorder</option>
                                    <option value="">Drug Abuse</option>
                                    <option value="">Alcohol Abuse</option>
                                    <option value="">Sexual Dysfunction</option>
                                    <option value="">Dementia</option>
                                    <option value="">Bipolar</option>
                                    <option value="">schizophrenia </option>
                                </select>
                            </div>
                           </div>
                           <div className="col-lg-6">
                            <div className="form-group schedule-msg">
                                <textarea name="" id="" cols="30" rows="1" placeholder="Enter your message here"></textarea>
                            </div>
                           </div>
                           

                            <div className="col-lg-12">
                                <buttton className="btn hvr-float-shadow"><Link to="/counsultvideo">Book appointment</Link></buttton>
                            </div>
                           </div>

                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="doctor-heading mt-25 mt-30">
                        <h2>Schedule your appointment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad repellendus laboriosam ea,
                            dolorem odio culpa.</p>

                        <div className="expert-details">
                            <span>01</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nostrum et
                                quisquam aliquid ipsa ad necessitatibus.</p>
                        </div>
                        <div className="expert-details">
                            <span>02</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate nostrum et
                                quisquam aliquid ipsa ad necessitatibus.</p>
                        </div>



                    </div>
                </div>

               

            </div>
        </div>
    </div>
    

    <div className="product-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-heading">
                        <h5>Products</h5>
                        <h2>Get Our Amazing Products</h2>
                        <p>Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae
                            justo
                            congue amet malesuada.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="product-card">
                        <img src="assets/image/pr.png" alt=""/>
                        <h3>Fidget Cube</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span><i className="fa fa-inr"></i> 399/-</span>
                        <buttton className="btn-web cart-btn"><Link to="/cart">add to cart</Link></buttton>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-card">
                        <img src="assets/image/pr.png" alt=""/>
                        <h3>Fidget Cube</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span><i className="fa fa-inr"></i> 399/-</span>
                        <buttton className="btn-web cart-btn"><Link to="/cart">add to cart</Link></buttton>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-card">
                        <img src="assets/image/pr.png" alt=""/>
                        <h3>Fidget Cube</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span><i className="fa fa-inr"></i> 399/-</span>
                        <buttton className="btn-web cart-btn"><Link to="/cart">add to cart</Link></buttton>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-card">
                        <img src="assets/image/pr.png" alt=""/>
                        <h3>Fidget Cube</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span><i className="fa fa-inr"></i> 399/-</span>
                        <buttton className="btn-web cart-btn"><Link to="/cart">add to cart</Link></buttton>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="service-section mb-50">
        <div className="container">
            <div className="col-lg-12">
                <div className="service-heading">
                    <h5>Sprituality</h5>
                    <h2>What Are We All So Afraid Of?</h2>
                    <p>Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae justo
                        congue amet malesuada.</p>
                </div>
            </div>

            <div className="service-slide">
                <div className="col-lg-12">
                    <div className="service-card spritual-card">
                        <img src="assets/image//vedic.png" alt=""/>
                        <img src="assets/image//vedic.png" className="img-bfr" alt=""/>
                        <h3>Vedic Mantras</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                        <button className="qst-show btn-web hvr-float-shadow"><Link to="/spirituality">
            Get your solution</Link></button>
                    </div>

                </div>
                <div className="col-lg-12">
                    <div className="service-card spritual-card">
                        <img src="assets/image/dua-hands.png" alt=""/>
                        <img src="assets/image/dua-hands.png" className="img-bfr" alt=""/>
                        <h3>Islamic Verses</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="qst-show btn-web hvr-float-shadow"><Link to="/spirituality">
            Get your solution</Link></button>                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card spritual-card">
                        <img src="assets/image/music-note.png" alt=""/>
                        <img src="assets/image/music-note.png" className="img-bfr" alt=""/>
                        <h3>Music</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="qst-show btn-web hvr-float-shadow"><Link to="/spirituality">
            Get your solution</Link></button>                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card spritual-card">
                        <img src="assets/image/meditation.png" alt=""/>
                        <img src="assets/image/meditation.png" className="img-bfr" alt=""/>
                        <h3>Meditation</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="qst-show btn-web hvr-float-shadow"><Link to="/spirituality">
            Get your solution</Link></button>                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="service-card spritual-card">
                        <img src="assets/image/bodyandmind.png" alt=""/>
                        <img src="assets/image/bodyandmind.png" className="img-bfr" alt=""/>
                        <h3>Body & Mind Balance</h3>
                        <p>Depression (major depressive disorder) is a common and serious medical illness that
                            negatively affects how you feel.</p>
                            <button className="qst-show btn-web hvr-float-shadow"><Link to="/spirituality">
            Get your solution</Link></button>                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about-section mb-50">
        <div className="container">
            <div className="row">
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
                       <button className="btn-web hvr-float-shadow"><Link to="/support">know more</Link></button>
                    </div>
                </div>
                <div className="col-lg-5 mt-25">
                    <div className="about-img mt-30">
                        <img src="assets/image/support.jpg" alt=""/>
                    </div>
                </div>

        
            </div>
        </div>
    </div>

    <div className="library-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-heading">
                        <h5>Library</h5>
                        <h2>Digital Human Library</h2>
                        <p>Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae justo
                            congue amet malesuada.</p>
                    </div>
                </div>

                <div className="col-lg-10 offset-1">
                    <div className="library-card">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="library-video">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/sHO5bL02fOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-1">
                                <div className="library-person">
                                   <div className="row">
                                       <div className="col-3">
                                        <img src="assets/image/doctor-img.jpg" alt=""/>
                                     
                                       </div>
                                       <div className="col-9">
                                        <h3>Jim Rohn</h3>
                                        <h5>Motivational Speaker</h5>
                                       </div>
                                   </div>
                                    <p>Emanuel James "Jim" Rohn was born in Yakima, Washington, to Emmanuel and Clara Rohn. The Rohns owned and worked a farm in Caldwell, Idaho, where Jim grew up, being the only child. </p>
                                    <p>Rohn left college after just one year and started his professional life.</p>
                                    <button className="btn-web hvr-float-shadow" data-toggle="modal" data-target="#library-modal">Talk With him</button>
                                    <button className="btn-web hvr-float-shadow"><Link to="/library">view more</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                                    </div>
            </div>
        </div>
    </div>

       </>
    )
}
