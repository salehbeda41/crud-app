import React,{Component} from 'react';
import CourseForm from './component/Form/CourseForm';
import CoursesList from './component/List/CoursesList';

class App extends Component{

  state={
    courses:[
      {name:"HTML"},
      {name:"Css"},
      {name:"Javascript"}
    ],
    current:''
  }


   updateCourse= (e) =>{
      this.setState({current:e.target.value});
  }

   addCourse =(e)=>{
      e.preventDefault();
      if(e.target.name.value===''){
        return false;
      }else{
        let {current}=this.state;
      let {courses}=this.state;
      // console.log(this.input.value);
      courses.push({name:current});
      this.setState({
        courses,
        current:''
      });
      }
  }

  deleteCourse =(index)=>{
    let {courses}=this.state;
    courses.splice(index,1);
    this.setState({courses});
  }


  //edit course

  editCourse=(index,value)=>{
    let {courses}=this.state;
    let course =courses[index];
    course['name']=value;
    this.setState(
      courses
    )

  }

  render(){

    const {courses}=this.state;
    const coursesList=courses.map((course,index) =>{
        return <CoursesList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>;
    })
    return(
      <section className='App'>
        <h2>Courses List</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>{coursesList}</ul>
      </section>
    )
  }
}

export default App;
