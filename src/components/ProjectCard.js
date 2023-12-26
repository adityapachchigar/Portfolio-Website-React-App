import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
        <div className="container my-3">
            <div className="row">
                <div class="card-wrapper col-lg-12">
                    <div class="card">
                        <div class="card-img-wrapper">
                        <img class="card-img-top" src=
                        {props.imageUrl} 
                        alt="" />
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <div class="card-content">
                            <p class="card-text">{props.description}</p>
                            <a href={props.readMore} target="_blank" rel="noreferrer" class="btn btn-primary">Read More</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard