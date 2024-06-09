import React from 'react'
import NavStud from './NavStud'

const SearchStud = () => {
  return (
    <div>
        <NavStud/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
                <button className="btn btn-success">Search</button>
            </div>
        </div>


    </div>
  )
}

export default SearchStud