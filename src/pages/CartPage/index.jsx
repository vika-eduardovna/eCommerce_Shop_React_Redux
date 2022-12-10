import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import s from './style.module.sass'

export default function CartPage() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const sum = cart.reduce((prev, { price, count }) => prev + price * count, 0);
  const count = cart.reduce((prev, { count }) => prev + count, 0);

  return (
    <section className={['wrapper', "h-100 h-custom bg-white"].join(' ')}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "16px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted fs-5">
                          {count} items
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />
                      <div>
                        {
                          cart.length === 0
                            ? <span>No selected items...</span>
                            : cart.map(product => <CartItem key={product.id} {...product} />)
                        }
                      </div>
                      <hr className="my-4" />
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText className="text-body fs-6">
                            <Link to="/"> <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                              to shop</Link>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-light">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="fs-4">
                          items: {count}
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fs-4">{sum}€</MDBTypography>
                      </div>
                      <MDBTypography tag="h5" className="fs-5 mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Premium Delivery- €9.99</option>
                          <option value="3">Try PRODelievery for free*</option>
                        </select>
                      </div>
                      <MDBTypography tag="h5" className="fs-5 mb-3">
                        Give code
                      </MDBTypography>
                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="fs-4">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fs-4">{sum}€</MDBTypography>
                      </div>
                      <MDBBtn className={s.btn} block size="lg">
                        Buy
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}