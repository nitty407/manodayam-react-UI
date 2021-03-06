import React from 'react'
import { Link } from 'react-router-dom'
export default function Cart() {
    return (
       <>

<div className="contact-banner mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-breadcrumb">
                        <h3>Add To Cart</h3>
                        <ol className="breadcrumb">
                        <li><Link to="/home">Home / &nbsp;</Link></li>
                            <li>Add To Cart</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="cart-section mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-heading">
                        <h2>Products In Your Cart</h2>
                        <br/>
                    </div>
                </div>
                <br/>
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
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="assets/image/pr.png" alt=""/></td>
                        <td>Fidget Cube</td>
                        <td><i className="fa fa-inr"></i> 399</td>
                        <td><input type="number" name="" id=""/></td>
                        <td><i className="fa fa-inr"></i> 500</td>
                        <td><button className="del-btn"><i className="fa fa-trash-o" aria-hidden="true"></i></button></td>

                      </tr>
                      <tr>
                        <td><img src="assets/image/pr.png" alt=""/></td>
                        <td>Fidget Cube</td>
                        <td><i className="fa fa-inr"></i> 399</td>
                        <td><input type="number" name="" id=""/></td>
                        <td><i className="fa fa-inr"></i> 500</td>
                        <td><button className="del-btn"><i className="fa fa-trash-o" aria-hidden="true"></i></button></td>

                      </tr>
                      <tr>
                        <td><img src="assets/image/pr.png" alt=""/></td>
                        <td>Fidget Cube</td>
                        <td><i className="fa fa-inr"></i> 399</td>
                        <td><input type="number" name="" id=""/></td>
                        <td><i className="fa fa-inr"></i> 500</td>
                        <td><button className="del-btn"><i className="fa fa-trash-o" aria-hidden="true"></i></button></td>

                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td ><button class="btn-web hvr-float-shadow"> <Link to="/checkout">Checkout</Link></button></td>
                          </tr>
                    </tbody>
                  </table>
              </div>
              </div>
            </div>
        </div>
    </div>
       </>
    )
}
