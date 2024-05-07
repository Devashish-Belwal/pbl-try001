import React from 'react';
import FixAcc from '../component/FixturesAcc';
import icons from '../assets/Team_Icons/Team_icons';
import Grpstg from '../component/GroupStage';
import SemiStage from '../component/SemiStage';
import ThirdStage from '../component/ThirdStage';
import FinalStage from '../component/FinalStage';

const Fixtures = () => {
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

  return (<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '7rem', marginRight: '7rem'/* , alignItems: 'center' */ }}>
    <Grpstg/>
    <br/>
    <SemiStage/>
    <br/>
    <ThirdStage/>
    <br/>
    <FinalStage/>
  </div>)
}

export default Fixtures