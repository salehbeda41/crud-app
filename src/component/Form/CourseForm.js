import React,{Component} from "react";

const CourseForm =(props)=>{

    return(
       <div>
            <form onSubmit={props.addCourse}>
               < input type ="text" placeholder="add course.." id="name"  value={props.current} onChange={props.updateCourse}/>
               <button type= "submit">Add Course</button>
            </form>
       </div>
    )
}


export default CourseForm;