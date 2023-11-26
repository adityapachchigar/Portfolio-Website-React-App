import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            {/* <img src={props.imageUrl} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="/" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard