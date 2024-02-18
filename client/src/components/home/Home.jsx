

import React from 'react'
import "./Home.css"
import Nave from '../nave/Nave'
import { useState } from 'react'
import { BsCheckCircleFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { CiFilter } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import {message} from "antd"


function Home() {

  const [task, settask] = useState('')

  const [tasks, settasks] = useState([])

  const [filter,setfilter]=useState([])

  const addtask = () => {  //  new task add function 

     if(task===""){

        message.error("enter your task and add")
        return
     }
    const obj = {

      data: task,
      complete: false

    }

    settasks([obj, ...tasks])
    setfilter([obj,...filter])

    settask('')

  }


  const addcomplete = (index) => {  // task status change function  

    const result = tasks[index]

    result.complete = true

    settasks([...tasks])
    }

  const deleteTask = (index) => {  // task delete function

    tasks.splice(index, 1)

    settasks([...tasks])

  }


  const filterFunc=(value)=>{  // task filtering

       if(value==="pending"){   // filtering pending tasks

        const res=filter.filter((obj)=>obj.complete===false)

        settasks(res)
        return
      
            }else if(value==="completed"){  // filtering competed tasks

           const res=filter.filter((obj)=>obj.complete===true)

           settasks(res)
           return
       
       
          }else{   // filtering all tasks

               settasks(filter)
          }
  }
 
 
 
 
 
 
  return (

    <div>

      <Nave />

      <div className='home-main' >

        <h5 > Add your today tasks </h5>

        <div className='input-main' >

          <input type="text" placeholder='Add new task' value={task} onChange={(e) => { settask(e.target.value) }} />

          <button className='input-btn' onClick={addtask}  > Add </button>

         

          <Dropdown>
            <Dropdown.Toggle className='togil'  >
            < CiFilter className='filter-icon' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{filterFunc("completed")}}>Completed</Dropdown.Item>
              <Dropdown.Item onClick={()=>{filterFunc("pending")}}>Pending</Dropdown.Item>
              <Dropdown.Item onClick={()=>{filterFunc("all")}}>All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

        <div className='data-min-box' >

          <div className='data-box' >



            {

              tasks.map((obj, index) => (


                <p className='data' >  <span> {obj.data} </span>

                  {obj.complete ? <BsCheckCircleFill className='tick-mark' /> : <input type="checkbox" onClick={() => { addcomplete(index) }} />}

                  <MdDelete className='delete-icon' onClick={() => { deleteTask(index) }} />

                </p>



              ))

            }









          </div>




        </div>







      </div>



    </div>
  )
}

export default Home
