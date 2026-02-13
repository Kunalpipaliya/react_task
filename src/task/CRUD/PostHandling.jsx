import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const PostHandling = () => {
    const [post, setpost] = useState('')
    const [postlist, setPostlist] = useState([])
    const [editIndex,setEditindex]=useState(null)
    const handleClick = () => {
        if(editIndex!==null){
            const updatedList=[...postlist]
            updatedList[editIndex]={post}
            setPostlist(updatedList)
            setEditindex(null)
        }
        else{

            let obj = { post }
            setPostlist([...postlist, obj])
        }
        setpost('')
    }
    const handleDelete=(index)=>{
        postlist.splice(index,1)
        setPostlist([...postlist])
    }
    const handleUpdate=(index)=>{
        setpost(postlist[index].post)
        setEditindex(index)
    }
    return (
        <div>
            <form action="#" className='w-50 m-auto p-3 rounded'>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Write Anything ....</label>
                    <input type="text" className="form-control" value={post} onChange={(e) => setpost(e.target.value)} />
                </div>
                <button className="btn btn-primary mt-3 w-100" type='button' onClick={handleClick}>{editIndex!==null?"update":"Add Post"}</button>
            </form>
            <Row className='w-75 m-auto'>

                {
                    postlist.map((item, index) => {
                        return (
                            <Col className='shadow-lg p-3 rounded mt-3' md='12'>
                                <div className="d-flex justify-content-between">

                                    <p>{item.post}</p>
                                    <div className="d-flex gap-2">
                                        <button onClick={()=>handleUpdate(index)} className='btn btn-primary' type='button' >Edit</button>
                                        <button onClick={()=>handleDelete(index)} className='btn btn-danger' type='button' >Delete</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default PostHandling
