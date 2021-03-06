import React from 'react'
import { Link } from 'react-router-dom'
export default function Profile() {
    return (
       <>

<div className="contact-banner mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-breadcrumb">
                        <h3>Profile</h3>
                        <ol className="breadcrumb">
                        <li><Link to="/home">Home / &nbsp;</Link></li>
                            <li>Profile</li>       
                          </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>


   <div className="profile-section mb-50">
       <div className="container">
           <div className="row">
               <div className="col-lg-12">
                   <div className="profile-head">
                   <div className="row">
                    <div className="col-lg-3 col-sm-3">
                        <div className="profile-img">
                            <img src="assets/image/profile.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-9">
                        <div className="profile-content">
                            <h3>Simran Raturi</h3>
                            <p><i className="fa fa-phone"></i> +91 123245 567</p>
                            <p><i className="fa fa-envelope"></i> abc@gmail.com</p>
                            <p><i className="fa fa-map-marker"></i> G-130, Sector 63, Noida,  Uttar Pradesh</p>
                            <ul className="nav nav-tabs">
                             <li className="nav-item">
                               <a className="nav-link active" data-toggle="tab" href="#home">Edit Profile</a>
                             </li>
                             <li className="nav-item">
                               <a className="nav-link" data-toggle="tab" href="#menu1">My Orders</a>
                             </li>
                             <li className="nav-item">
                               <a className="nav-link" data-toggle="tab" href="#menu2">Address Change</a>
                             </li>
                             <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu3">Appointments</a>
                              </li>
                           </ul>
                        </div>
                    </div>
                   </div>
                   </div>
               </div>

               <div className="col-lg-12">
                   <div className="profile-setting">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="profile-form checkout-form doctor-form">
                                        <h3>Edit Your Profile Here</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">First Name</label>
                                                        <input type="text" name="" id="" placeholder="First name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">Last Name</label>
                                                        <input type="text" name="" id="" placeholder="Last name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">Phone No.</label>
                                                        <input type="text" name="" id="" placeholder="Phone no."/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">Email Address</label>
                                                        <input type="email" name="" id="" placeholder="Email address"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">Old Password</label>
                                                        <input type="password" name="" id="" placeholder="Old password"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">New Password</label>
                                                        <input type="password" name="" id="" placeholder="New password"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label for="">Confirm Password</label>
                                                        <input type="password" name="" id="" placeholder="Confirm password"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button className="btn hvr-float-shadow">Save settings</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart-table table-responsive">
                                      <table className="table table-bordered table-striped table-hover">
                                          <thead>
                                            <tr>
                                                <th>Product</th>
                                              <th>Product name</th>
                                              <th>Price</th>
                                              <th>Quantity</th>
                                              <th>Shipping charges</th>
                                              <th>Status</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td><img src="image/pr.png" alt=""/></td>
                                              <td>Fidget Cube</td>
                                              <td><i className="fa fa-inr"></i> 399</td>
                                              <td>2</td>
                                              <td><i className="fa fa-inr"></i> 500</td>
                                              <td>Success</td>
                      
                                            </tr>
                                            <tr>
                                              <td><img src="image/pr.png" alt=""/></td>
                                              <td>Fidget Cube</td>
                                              <td><i className="fa fa-inr"></i> 399</td>
                                              <td>3</td>
                                              <td><i className="fa fa-inr"></i> 500</td>
                                              <td>Success</td>
                      
                                            </tr>
                                            <tr>
                                              <td><img src="image/pr.png" alt=""/></td>
                                              <td>Fidget Cube</td>
                                              <td><i className="fa fa-inr"></i> 399</td>
                                              <td>3</td>
                                              <td><i className="fa fa-inr"></i> 500</td>
                                              <td>Success</td>
                      
                                            </tr>
                                          </tbody>
                                        </table>
                                    </div>
                                    </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu2">
                          <div className="row">
                            <div className="col-lg-12">
                                <div className="profile-form checkout-form doctor-form">
                                    <h3>Change Your Address</h3>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="">Street Line 1</label>
                                                    <input type="text" name="" id="" placeholder="Street Line 1"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="">Street Line 2</label>
                                                    <input type="text" name="" id="" placeholder="Street Line 2"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="">Country</label>
                                                    <input type="text" name="" id="" placeholder="Country"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="">State</label>
                                                    <input type="email" name="" id="" placeholder="State"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="">Pin Code</label>
                                                    <input type="password" name="" id="" placeholder="Pin code"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn hvr-float-shadow">Save settings</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                          </div>
                    </div>

                    <div className="tab-pane fade" id="menu3">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-table table-responsive">
                                  <table className="table table-bordered table-striped table-hover">
                                      <thead>
                                        <tr>
                                            <th>Product</th>
                                          <th>Product name</th>
                                          <th>Price</th>
                                          <th>Quantity</th>
                                          <th>Shipping charges</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td><img src="image/pr.png" alt=""/></td>
                                          <td>Fidget Cube</td>
                                          <td><i className="fa fa-inr"></i> 399</td>
                                          <td>2</td>
                                          <td><i className="fa fa-inr"></i> 500</td>
                                          <td>Success</td>
                  
                                        </tr>
                                        <tr>
                                          <td><img src="image/pr.png" alt=""/></td>
                                          <td>Fidget Cube</td>
                                          <td><i className="fa fa-inr"></i> 399</td>
                                          <td>3</td>
                                          <td><i className="fa fa-inr"></i> 500</td>
                                          <td>Success</td>
                  
                                        </tr>
                                        <tr>
                                          <td><img src="image/pr.png" alt=""/></td>
                                          <td>Fidget Cube</td>
                                          <td><i className="fa fa-inr"></i> 399</td>
                                          <td>3</td>
                                          <td><i className="fa fa-inr"></i> 500</td>
                                          <td>Success</td>
                  
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                                </div>
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
