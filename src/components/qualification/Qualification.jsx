import React from 'react'
import './qualification.css'
import {BiCalendar} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'


const qualification = () => (
  <section className='qualification section'>
                <h2 className="section__title"><FaGraduationCap className= 'qualification__icon'/>Qualification</h2>
                <h5 className="section__subtitle">My personal journey</h5>

       <div className="qualification__container container">
       

       <div className="qualification__sections">
       <div className="qualification__data">
                                 <div>
                                     <h3 className="qualification__title">HSC-Science</h3>
                                     <span className="qualification__subtitle">Mumbai - University</span>
                                     <div className="qualification__calender">
                                     <BiCalendar/>
                                        2018 - 2020
                                     </div>
                                 </div>

                                 <div>
                                     <span className="qualification__rounder"></span>
                                     <span className="qualification__line"></span>
                                 </div>
                                 </div>
                                 <div className="qualification__data">
                                  <div></div>

                                  <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor's in Computer Science</h3>
                                    <span className="qualification__subtitle">C.H.M College Mumbai</span>
                                    <div className="qualification__calender">
                                    <BiCalendar/>
                                                                           2020 - 2022
                                    </div>
                                </div>


                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Bachelor's in Computer Science</h3>
                                    <span className="qualification__subtitle">M.C.C College Mumbai</span>
                                    <div className="qualification__calender">
                                    <BiCalendar/>
                                       2022 - 2023
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                   
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">Master's in Computer Science</h3>
                                        <span className="qualification__subtitle">UBC - Vancouver</span>
                                        <div className="qualification__calender">
                                        <BiCalendar/>
                                           2023 - 2025
                                        </div>
                                    </div>
    

                                </div>

       </div>
       </div>

  
  </section>
)

export default qualification