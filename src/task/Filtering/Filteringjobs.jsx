import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Filteringjobs = () => {
    const [selectedJobtype, setJobtype] = useState('All')
    let jobdata = [
        {
            title: "Streamverse",
            desc: "StreamVerse is a next-gen streaming platform bringing movies, series, and originals together in one seamless experience. Discover personalized content, smooth streaming, and stories that move with you.",
            type: "Web development",
            company: "xyz"
        },
        {
            title: "Firevy",
            desc: "Firevy is an IT company ,we want to make our portfolio website apply if anyone intrested",
            type: "Web development",
            company: "Firevy"
        },
        {
            title: "DailyDrop",
            desc: "Dailydrop is an idea to save data of regular customers.insted of write in book we want to work digitally ",
            type: "Application development",
            company: "Planics Dev"
        }

    ]
    function changeJobType(e) {
        setJobtype(e.target.value)
    }
    let filteredJobs = jobdata.filter((job) => {
        if (selectedJobtype === 'All') {
            return true
        }
        else {
            return job.type === selectedJobtype
        }
    })
    return (
        <div className='mt-5'>
            {
                ['All', 'Web development', 'Application development'].map((item,index) => {
                    return (

                        <button key={index} className={item == selectedJobtype ? "btn btn-primary mx-1 rounded-pill px-3 " : "btn btn-secondary mx-1 rounded-pill px-3"} onClick={() => setJobtype(item)}>{item}</button>
                    )
                })
            }
            <Row>

                {
                    filteredJobs.map((job,index) => {
                        return (
                            <Col md='12' key={index}>
                                <Card className='mt-3  p-3 shadow-sm'>
                                    <Card.Title>
                                        Title : {job.title}
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="text-muted">Type : {job.type}</p>
                                        <h4>About {job.title}</h4>
                                        <p className="fs-5 lh-lg">{job.desc}</p>
                                        <h3>Company Name : {job.company}</h3>
                                    </Card.Text>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}


export default Filteringjobs
