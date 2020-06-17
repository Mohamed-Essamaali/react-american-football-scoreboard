//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";

//import components
import BottomRow from "./BottomRow";
import Home from './components/Home';
import Away from './components/Away';
import Timer from './components/Timer';



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore,setHomeScore] = useState(0);
  const [awayScore,setAwayScore] = useState(0);
  const [time,setTimer] = useState(0.3);
  const[name,setName]=useState('');
  const[scoreAmount,setScoreAmount]=useState(0);
  const[message,setMessage]=useState('');

  console.log('the name is ', name , 'The score Amount is ', scoreAmount);

  const handleChanges = event=>{
  //   name=
  //  setName ();
  //  setScoreAmount(event.target.value);   
  }

  return (
    <div className="container">

 
      <section className="scoreboard">
        <h2 className='message'>{message}</h2>
        <div className="topRow">
          <Home homeScore={homeScore}/>
         
          <div className="timer" >00.03
          <Timer setTimer={setTimer}/>
          </div>
          <Away awayScore={awayScore}/>
        </div>

        <BottomRow />
      </section>
  
      <section className="buttons">
      <div className='user_input'>
      <label htmlFor='name'>Enter Your Name</label>
      <input id='name'  type='text' name='name' onChange={e=>{
        return setName(e.target.value);
      }}/>
      <label htmlFor='amount'>Enter the scoring amount</label>
      <input id='amount'  type='number' name='amount' onChange={e=>{
        return setScoreAmount(e.target.value)}}/>
    </div>
       
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
           onClick={()=>{setHomeScore(homeScore+7);}}>
             Home Touchdown</button>
          <button className="homeButtons__fieldGoal"
           onClick={()=>{setHomeScore(homeScore+3);}}>
             Home Field Goal</button>
             
       
        <div className="awayButtons">
          
          <button className="awayButtons__touchdown" 
          onClick={()=>{
            if(scoreAmount<awayScore ){
              setMessage('Game is over')
           }
            else 
            setAwayScore(awayScore+7);
          }}>
            Away Touchdown</button>
          <button className="awayButtons__fieldGoal" 
          onClick={()=>{setAwayScore(awayScore+3);}}>
            Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
