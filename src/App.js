import 'bootstrap/dist/css/bootstrap.min.css';
import {useState , useEffect} from 'react';
import localforage  from 'localforage';

function App() {
  useEffect(()=>{
    localforage.getItem('task',(err,task)=>{
      console.log(task)
      if(task){
        setTask(task)
      }
    })
  },[])

  const [task , setTask] = useState([])
  const [input , setInput] = useState('')

  const storeTask = (task)=>{
    setTask(task)
    localforage.setItem('task',task,err=>{
      if(!err)
        console.log('saved')
      else 
        console.log('error')
    })
  }

  function addTask(input){
    storeTask([...task,{title:input,status:false}])
    setInput('')
  }
  function changeStatus(i){
    const newTask = [...task];
    newTask.splice(i,1,{title:newTask[i].title,status:!newTask[i].status})
    storeTask([...newTask])
  }
  function getTask(){
    return task.map((task,i) => {
      console.log(task.status)
       return <li onClick={()=>changeStatus(i)} key={i} className={(task.status) ?"list-group-item list-group-item-success":"list-group-item list-group-item-danger"}>{task.title}</li>
      }
    )
  }
  return (
    <div className="row mt-5">
      <div className='col-6 mx-auto'>
        <div className='form-group d-flex my-3'>
          <input onChange={e => setInput(e.target.value)} value={input} className='form-control' placeholder='write something...' />
          <button onClick={()=>addTask(input)} className='btn btn-danger mx-auto ms-3'>Save</button>
        </div>
        <ul className='list-group'>
          {getTask()}
        </ul>
      </div>
    </div>
  );
}

export default App;
