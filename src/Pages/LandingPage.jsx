import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
   <Col> </Col>
   <Col lg={4}>
    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque molestias labore ipsa delectus laborum incidunt et consectetur porro. Excepturi modi ex praesentium commodi autem totam architecto aliquid reiciendis sunt in? </p>
    <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started</button>
   </Col>
   <Col lg={6}>
    <img className='img-fluid' src='https://i.gifer.com/CH7i.gif' alt='player'/>
   </Col>
   <Col></Col>
    </Row>
     
     <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/e6/80/fc/e680fc8d1708ee1a5f9358ecb11b6e9c.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'}  variant="top" src="https://giffiles.alphacoders.com/173/173926.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'}  variant="top" src="https://i.pinimg.com/originals/e6/80/fc/e680fc8d1708ee1a5f9358ecb11b6e9c.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

     </div>
     <div className="container border rounded p-5 border-secondary mt-5  d-flex align-items-center justify-content-between w-100">
      <div className='col-lg-5'> 
        <h3 className='mb-5 text-warning'>simple,powerful & fast</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos architecto temporibus quia vero eveniet tempora ea ullam facilis consectetur exercitationem hic perspiciatis, dignissimos magni assumenda aliquid sequi tenetur, iusto eaque?</h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos architecto temporibus quia vero eveniet tempora ea ullam facilis consectetur exercitationem hic perspiciatis, dignissimos magni assumenda aliquid sequi tenetur, iusto eaque?</h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos architecto temporibus quia vero eveniet tempora ea ullam facilis consectetur exercitationem hic perspiciatis, dignissimos magni assumenda aliquid sequi tenetur, iusto eaque?</h6>
      </div>
         <div className='video col-lg-5'>
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/xenOE1Tma0A?si=t6pwzb1eLz_xgyEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

         </div>
     </div>
    </>
  )
}

export default LandingPage