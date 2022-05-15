import  React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';

const About = (props) => {
  const context = useContext(noteContext);
  let navigate=useNavigate();
  const { notes, getNotes ,editNote} = context;
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
      navigate("/login")
    }
  },[])
  
  return (
    <div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button bg-success text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About iNotebook
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body bg-primary">
        <strong>iNotebook</strong> is used to store the to do list of user or any other information which the user want to remember.It cab be a number of any person , any important work or any type of note.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Features
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body bg-primary">
        <strong>iNotebook</strong> have the feature of delete the notes when the user want to delete the note and also have the feature to edit the note when user want to edit the note.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Security
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body bg-primary">
        <strong>iNotebook</strong> is secure.When user add any note in inotebook then it can never be shown to others.User signup with their username and email and once the user signup with their email then user is able to store their notes in inotebook.When the user once logout from the inotebook the he have to login with the same email for viewing their notes.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
