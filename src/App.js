import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import qoziqorin from './Images/qoziqorin.png'
import dinozavr from './Images/dino.png'
import carone from './Images/cars.png'
import cartwo from './Images/car3.png'
import yashilIcon from './Images/yashil.png'
import qizilIcon from './Images/qizil.png'

function App() {

const [qizilRang, setQizilRang] = useState(false);
const [sariqRang, setSariqRang] = useState(false);
const [yashilRang, setYashilRang] = useState(false);

const [timer, setTimer] = useState(0)
const [start, setStart] = useState(true)
const[carOne, setCarOne] = useState(false)
const[carTwo, setCarTwo] = useState(false)

useEffect(()=>{
  let interval = null;
  if(!start){
    interval = setInterval(()=>{
      if(timer<10){
        setTimer(timer+1)
        qizilBtn()
        clearInterval(interval)
      }
      if(timer>=10){
        setTimer(timer+1)
        sariqBtn()
        clearInterval(interval)
      }
      if(timer>=15){
        setTimer(timer+1)
        yashilBtn()
        clearInterval(interval)
      }
      if(timer===25){
        setTimer(0)
        clearInterval(interval)
      }
    },1000)
  }
  else{
    clearInterval(interval)
  }
  return ()=>{
    clearInterval(interval)
  }
})

function qizilBtn(){
  setQizilRang(true)
  setSariqRang(false)
  setYashilRang(false)
  setCarOne(false)
  setCarTwo(false)
}

function sariqBtn(){
  setQizilRang(false)
  setSariqRang(true)
  setYashilRang(false)
  // car1()
  // car2()
  setCarOne(false)
  setCarTwo(false)
}

function yashilBtn(){
  setQizilRang(false)
  setSariqRang(false)
  setYashilRang(true)
  setCarOne(true)
  setCarTwo(true)
}

function startBtn(){
  setStart(!start)
}

// function car1(){
//   setCarOne(!carOne)
// }

// function car2(){
//   setCarTwo(!carTwo)
// }

  return (
    <div className="App">
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='menu'>
              <div>
              {start?'':<img alt='' src={dinozavr} className="dinozavr"/>}
                <button onClick={startBtn} className='btn btn-primary'>Start</button>
               {/* <button onClick={qizilBtn} className='btn btn-danger'>Qizil</button>
                <button onClick={sariqBtn} className='btn btn-warning mx-3'>Sariq</button>
                <button onClick={yashilBtn} className='btn btn-success'>Yashil</button> */}
              </div>
              <div className='svetafor'>
                <div>
                  {yashilRang?<img alt='' src={qizilIcon}/>:''}
                  {qizilRang?<img alt='' src={yashilIcon}/>:''}
                </div>
               <div className='qizil-bg'>
                  {
                    qizilRang?qizil():''
                  }
                </div>
               <div className='sariq-bg'>
                  {
                    sariqRang?sariq():''
                  }
                </div>
               <div className='yashil-bg'>
                  {
                    yashilRang?yashil():''
                  }
                </div>
                <h1 className='timer'>{timer}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='row trassa mt-4'>
          <div className='col-md-4'>
            <div className='chiziq-menu'>
                <span></span>
                <span></span>
                <span></span>
                <img alt='' src={cartwo} className={`cartwo ${carTwo ? 'CarTwoYur':''}`}/>
            </div>
          </div>
          <div className='col-md-4 zebra-box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {start?'':<img alt='' src={qoziqorin} className="qoziqorin"/>}
          </div>
          <div className='col-md-4'>
            <div className='chiziq-menu'>
              <span></span>
              <span></span>
              <span></span>
              <img alt='' src={carone} className={`carone ${carOne ? 'CarOneYur':''}`}/>
              {/* <img alt='' src={cartwo} className={` carone ${carOne ?'CarOneYur':''} `}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function qizil(){
  return(
    <div className='qizil'>

    </div>
  )
}

export function sariq(){
  return(
    <div className='sariq'>

    </div>
  )
}

export function yashil(){
  return(
    <div className='yashil'>

    </div>
  )
}

export default App;
