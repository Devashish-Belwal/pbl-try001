import React, { useState, useEffect } from 'react';
import CustomAccordion from './CustomAccordion';
import icons from '../assets/Team_Icons/Team_icons.js'

const TeamStandings = () => {

    const iconsDict = {}
    
    iconsDict["icons.team01"] = icons.team01;
    iconsDict["icons.team02"] = icons.team02;
    iconsDict["icons.team03"] = icons.team03;
    iconsDict["icons.team04"] = icons.team04;
    iconsDict["icons.team05"] = icons.team05;
    iconsDict["icons.team06"] = icons.team06;

    const [AllTeamData, setAllTeamData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/dishes');
                const data = await response.json();
                console.log(data);
                setAllTeamData(data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId)
        }, []);


    return (<div>
        <div>
        {AllTeamData.map((team) => {
        return (
        <CustomAccordion title={team.name} icon={iconsDict[team.icon]} total={team.total_games} win={team.wins} loss={team.loses}>
            <p>
            {team.name}
            </p>
        </CustomAccordion>
        )
        })}
        </div>
    </div>
    )
}

export default TeamStandings