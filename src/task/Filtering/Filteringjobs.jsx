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
        <div>
            <input onClick={changeJobType} type="button" value="All" />
            <input onClick={changeJobType} type="button" value="Web development" />
            <input onClick={changeJobType} type="button" value="Application development" />
            <Row>

                {
                    filteredJobs.map((job) => {
                        return (
                            <Col md='4'>
                                <Card>
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
