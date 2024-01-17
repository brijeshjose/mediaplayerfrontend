import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const [allVideos,setAllVideos]=useState([])
  const getUploadedVideos= async ()=>{
    const{data}= await getAllVideo()
    console.log(data);
    setAllVideos(data)
  }
  useEffect(()=>{
  getUploadedVideos()
  setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);
  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map((video)=>(
      <Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
        ))
        :<p className='fs-5 fw-5 text-danger'>Nothing to display</p>
}
    </Row>
    
    </>
  )
}

export default View