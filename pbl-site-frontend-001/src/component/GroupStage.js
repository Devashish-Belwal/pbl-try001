import React from 'react';
import Acc from '../component/CustomAccordion.js';
import GSInside from '../component/GroupStageInside.js';

const GroupStage = () => {
  return (<div>
    <Acc title={'Group Stage'} insidethebody={<GSInside/>}/>
  </div>)
}

export default GroupStage