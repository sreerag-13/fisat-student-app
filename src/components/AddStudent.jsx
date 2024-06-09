import React, { useState } from 'react'
import NavStud from './NavStud'

const AddStudent = () => {
    const[fisat,changedata]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""

        }
    )
   const inputhandler=(event)=>{
        changedata({...fisat,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(fisat)
    }
  return (
    <div>
<NavStud/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="row g-3"> 
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label" >First Name</label>
                        <input type="text" className="form-control" name='firstname' value={fisat.firtname} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='lastname' value={fisat.lastname} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">College Name</label>
                        <input type="text" className="form-control" name='college' value={fisat.college} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <form action="" className="label-label">Date Of Birth</form>
                        <input type="date" name='dob' id="" className="form-control" value={fisat.dob} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">Course</label>
                        <input type="text" className="form-control" name='course' value={fisat.course} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name='mobile' value={fisat.mobile} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={fisat.email} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea  id="" className="form-control" name='address' value={fisat.address} onChange={inputhandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success" onClick={readvalue}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
  )
}

export default AddStudent