import React from 'react'

const Contact = () => {
  return (
    <div id="s4" className='container' >
      <h2>Contact me</h2>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item" style={{width:"200px"}}>Mobile no.</li>
        <li class="list-group-item" style={{width:"400px"}}>8780221755</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item" style={{width:"200px"}}>E-mail</li>
        <li class="list-group-item" style={{width:"400px"}}>
        <a href="mailto:pachchigar1912@gmail.com" target="_blank" rel="noreferrer">pachchigar1912@gmail.com</a>
        </li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item" style={{width:"200px"}}>Linked in</li>
        <li class="list-group-item" style={{width:"400px"}}>
        <a href="https://www.linkedin.com/in/aditya-pachchigar/" target="_blank" rel="noreferrer">Aditya Pachchigar</a>
        </li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item" style={{width:"200px"}}>Github</li>
        <li class="list-group-item" style={{width:"400px"}}>
        <a href="https://github.com/adityapachchigar" target="_blank" rel="noreferrer">adityapachchigar</a>
        </li>
      </ul>
    </div>
    
  )
}

export default Contact