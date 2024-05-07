import React from 'react'
import FixAcc from '../component/FixturesAcc.js';
import icons from '../assets/Team_Icons/Team_icons.js';

const teamdata = {
  "teama": "Team A",
  "teamaIcon": icons.team01,
  "teamb": "Team B",
  "teambIcon": icons.team02,
  "teamaScore": 3,
  "teambScore": 2,
  "msp1": "Player 1",
  "msp1s": 11,
  "msp2s": 9,
  "msp2": "Player 2",
  "mdp1": "Player 3",
  "mdp1s": 6,
  "mdp2s": 11,
  "mdp2": "Player 4",
  "wsp1": "Player 5",
  "wsp1s": 11,
  "wsp2s": 7,
  "wsp2": "Player 6",
  "wdp1": "Player 7",
  "wdp1s": 11,
  "wdp2s": 8,
  "wdp2": "Player 8",
  "xdp1": "Player 9",
  "xdp1s": 9,
  "xdp2s": 11,
  "xdp2": "Player 10"
}

const GroupStageInside = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
            <FixAcc {...teamdata}/>
            <FixAcc {...teamdata}/>
        </div>
    </div>
  )
}

export default GroupStageInside