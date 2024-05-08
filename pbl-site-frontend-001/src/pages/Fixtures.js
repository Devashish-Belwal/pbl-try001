import React from 'react';
import Grpstg from '../component/GroupStage';
import SemiStage from '../component/SemiStage';
import ThirdStage from '../component/ThirdStage';
import FinalStage from '../component/FinalStage';

const Fixtures = () => {

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