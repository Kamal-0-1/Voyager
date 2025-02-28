import React from 'react'
import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import '../styles/thank-you.css'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/config'

const ThankYou = () => {
    useEffect(()=>{
        const params=new URLSearchParams(window.location.search);
        const userId=params.get("userID");
        const userEmail=params.get("userEmail");
        const tourName=params.get("tourName");
        const fullName=params.get("fullName");
        const phone=Number(params.get("phone"));
        const guestSize=Number(params.get("guestSize"));
        const bookAt=params.get("bookAt");
        const price=params.get("price")
        const data={userId,userEmail,tourName,fullName,phone,guestSize,bookAt,price};
        // console.log(data);
        async function name(params) {
            try {
                    const res = await fetch(`${BASE_URL}/book/save`, {
                        method: 'POST',
                        credentials: 'include', // Include credentials (cookies)
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(data)
                    })
                    const result = await res.json()
        
                    if(!res.ok){
                        return alert(result.message)
                    }
                    // console.log(result);
                    // window.open(result.data);
        
                } catch (err) {
                    alert(err.message)
                }    
        }
        name();
    },[])
   
  return (
   <section>
    <Container>
        <Row>
            <Col lg='12' className="pt-5 text-center">
            <div className="tank__you">
                <span><i class="ri-checkbox-circle-line"></i></span>
                <h1 className="mb-3 fw-semibold">Thank You</h1>
                <h3 className="mb-4">your tour is booked.</h3>

                <Button className='btn primary__btn w-25'>
                    <Link to='/home'>Back to Home</Link>
                </Button>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default ThankYou
