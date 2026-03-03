import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const RickandMorty = () => {
    const [characters, setCharacters] = useState([])
    const [location, setLocation] = useState([])
    const [episode, setEpisode] = useState([])
    const arrayOfAPI = [
        "https://rickandmortyapi.com/api/character",
        "https://rickandmortyapi.com/api/location",
        "https://rickandmortyapi.com/api/episode"
    ]

    const promises = arrayOfAPI.map(url => fetch(url).then(res => res.json()))

    Promise.all(promises)
        .then((res) => {
            console.log(res[0].results);
            setCharacters(res[0].results)
            console.log(res[1].results);
            setLocation(res[1].results)
            console.log(res[2].results);
            setEpisode(res[2].results)
        })
        .catch((err) => {
            console.log(err);

        })
    return (
        <div className='mx-4'>
            <img src="hero.svg" alt="" />
            <h1 className='fw-bold'>Characters of Rick and Morty</h1>

            <Row>

                {
                    characters.map((item, index) => {
                        return (

                            <Col key={index} md="6" className='text-white border border-3  border-white rounded-4 lh-1' style={{ background: "#3c3e44" }}>
                                <Row className='align-items-center'>
                                    <Col md="5">
                                        <img src={item.image} alt="" width={"100%"} height={"100%"} style={{ objectFit: "cover" }} />
                                    </Col>
                                    <Col md="7">
                                        <h2 className='fw-bold'>{item.name}</h2>
                                        <p>{item.status}-{item.species}</p>
                                        <p className="text-secondary">Last known location:</p>
                                        <p>{item.location.name}</p>
                                        <p className="text-secondary">First seen in:</p>
                                        <p>{item.origin.name}</p>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
            <hr />
            {/* <h1 className="fw-bold">Locations of Ricks and Morty</h1> */}
            <h1 className="fw-bold">Episodes of Ricks and Morty</h1>
            {
                episode.map((item,index)=>{
                    return(
                        <div>
                            <p>id : {item.id}</p>
                            <p>Air Date : {item.air_date}</p>
                            <p>Episode : {item.episode}</p>
                            <p>Name : {item.name}</p>
                            <p>characters : {item.characters.join(" ")} </p>
                            <hr />
                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default RickandMorty
