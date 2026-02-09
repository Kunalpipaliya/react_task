import React from 'react'
import { useState } from 'react'
const FilterCategory = () => {
    const [selectedCategory, setCategory] = useState('all')
    let data = [
        {
            name: "Rose",
            category: "flower",
        },
        {
            name: "Lotus",
            category: "flower"
        },
        {
            name: "Jasmine",
            category: "flower"
        },
        {
            name: "Sunflower",
            category: "flower"
        },
        {
            name: "lily",
            category: "flower"
        },
        {
            name: "Lion",
            category: "animal"
        },
        {
            name: "Tiger",
            category: "animal"
        },
        {
            name: "Fox",
            category: "animal"
        },
        {
            name: "Wolf",
            category: "animal"
        },
        {
            name: "Dog",
            category: "animal"
        },
        {
            name: "Shirt",
            category: "Clothes"
        },
        {
            name: "T-shirt",
            category: "Clothes"
        },
        {
            name: "Jacket",
            category: "Clothes"
        },
        {
            name: "Cargo",
            category: "Clothes"
        },
        {
            name: "Jeans",
            category: "Clothes"
        },

    ]
    function changeCategory(e) {
        setCategory(e.target.value)
    }
    const filterdata = data.filter((value) => {
        if (selectedCategory === 'all') {
            return true
        }
        else {
            return value.category === selectedCategory
        }
    })
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>

                    <input className='btn btn-primary me-2' type="button" value="all" onClick={changeCategory} />
                    <input className='btn btn-primary me-2' type="button" value="flower" onClick={changeCategory} />
                    <input className='btn btn-primary me-2' type="button" value="animal" onClick={changeCategory} />
                    <input className='btn btn-primary me-2' type="button" value="Clothes" onClick={changeCategory} />
                </div>
                <input type="text" onChange={(e)=>setCategory(e.target.value)} placeholder='Search Here ...' className='form-control w-25' />
            </div>
            <table border={1} className='table table-bordered' style={{ margin: "auto", marginTop: "30px" }}>
                <thead>

                    <tr>
                        <th className='bg-warning'>Name</th>
                        <th className='bg-warning'>Category</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filterdata.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FilterCategory
