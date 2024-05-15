import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";


function Experience() {
  return (
    <section id='experience'>
      <h4>What Skills I Have</h4>
      <h2>My Experience & Education</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>HTML</h5>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>CSS</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>JavaScript</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>Bootstrap</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>Tailwind</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>React</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>Git & Github</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backendend Development & Languages</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>Node JS</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>MongoBD</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>PHP</h5>
            <small className='text-light'>BASIC</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>MySQL</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>Express JS</h5>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div><h5>JAVA</h5>
            <small className='text-light'>Core</small></div>
            </article>

            <article className="experience_details">
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h5>C/C++</h5>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>


          </div>
        </div>

        <div className="experience_education">
        <h3>Education</h3>
          <div className="experience_content1">
            <article className="experience_details">
            <FaSchool className='experience_details-icon'/>
            <div>
            <h5>B.Tech - CSBS</h5>
            <small className='text-light'>Bharati Vidyapeeth Deemed to Be University BVDUDET, Navi Mumbai</small>
            <h6>CGPA: 9.5 | June 2024</h6>
            </div>
            </article>

            <article className="experience_details">
            <FaSchool className='experience_details-icon'/>
            <div>
            <h5>XII - HSC</h5>
            <small className='text-light'> Chandrabhan Sharma Junior College of Science & Commerce, Mumbai</small>
            <h6>64.46% | 2020</h6>
            </div>
            </article>

            <article className="experience_details">
            <FaSchool className='experience_details-icon'/>
            <div>
            <h5>X - SSC</h5>
            <small className='text-light'> St. Joseph's High School & Jr. College, Navi Mumbai</small>
            <h6>79.60% | 2018</h6>
            </div>
            </article>

          </div>
        </div>

        <div className="experience_internship">
        <h3>Internships</h3>
          <div className="experience_content1">
            <article className="experience_details">
            <GoOrganization className='experience_details-icon'/>
            <div>
            <h5>Full Stack Developer Intern</h5>
            <small className='text-light'> Red Fibre, Navi Mumbai </small>
            <h6>June ‘23 - Aug ’23</h6>
            </div>
            </article>

            <article className="experience_details">
            <GoOrganization className='experience_details-icon'/>
            <div>
            <h5>AICTE Virtual Internship Program</h5>
            <small className='text-light'>Cisco</small>
            <h6>2023</h6>
            </div>
            </article>

            <article className="experience_details">
            <GoOrganization className='experience_details-icon'/>
            <div>
            <h5>Web Development and Designing Intern</h5>
            <small className='text-light'>Oasis Infobyte</small>
            <h6>Sep 2023</h6>
            </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience