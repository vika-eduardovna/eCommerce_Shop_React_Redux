import React from 'react'
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
import { useDispatch } from 'react-redux'
import { increase_count_action, decrease_count_action } from '../../store/reducer/cartReducer';

export default function CartItem({ id, title, price, count, image }) {
  const dispatch = useDispatch();
  return (
    <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
      <MDBCol md="2" lg="2" xl="2">
        <MDBCardImage
          src={image}
          fluid className="rounded-3" alt="Cotton T-shirt" />
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3">
        <MDBTypography tag="h6" className="text-muted">
          {title}
        </MDBTypography>
        <MDBTypography tag="h6" className="text-black mb-0">
          {title}
        </MDBTypography>
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
        <MDBBtn color="link" className="px-2" onClick={() => dispatch(decrease_count_action(id))}>
          <MDBIcon fas icon="minus" />
        </MDBBtn>

        <MDBInput type="number" min="0" value={count} size="sm" />

        <MDBBtn color="link" className="px-2" onClick={() => dispatch(increase_count_action(id))}>
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </MDBCol>
      <MDBCol md="3" lg="2" xl="2" className="text-end">
        <MDBTypography tag="h6" className="mb-0">
          {price}€
        </MDBTypography>
      </MDBCol>
      <MDBCol md="1" lg="1" xl="1" className="text-end">
        <a href="#!" className="text-muted">
          <MDBIcon fas icon="times" />
        </a>
      </MDBCol>
    </MDBRow>
  )
}
