import React, { useEffect, useState } from 'react'
import NavStud from './NavStud'
import axios from 'axios'

const ViewStud = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>
        {
            axios.get("https://courseapplogix.onrender.com/getdata").then((response)=>{
                changedata(response.data)
            }
        ).catch((error)=>{
            alert(error.message)
        }
        
        ).finally()
        }
        useEffect(()=>{fetchData()},[])
    

   


    return (
        <div>
            <NavStud/>

            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">firstname</th>
                                <th scope="col">lastname</th>
                                <th scope="col">college</th>
                                <th scope="col">course</th>
                                <th scope="col">dob</th>

                            </tr>
                        </thead>
                        <tbody>

                           {

                            data.map(

                                (value,index)=>{

                                return  <tr>
                                <th scope="row">{value.firstname}</th>
                                <td>{value.lastname}</td>
                                <td>{value.college}</td>
                                <td>{value.course}</td>
                                <td>{value.dob}</td>
                                
                              </tr>
                                }
                            )

                            
                           }
                        
                        </tbody>
                    </table>

                </div>
            </div>



        </div>
    )
}

export default ViewStud