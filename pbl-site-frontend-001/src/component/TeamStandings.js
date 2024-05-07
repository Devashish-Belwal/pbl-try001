import React, { useState, useEffect } from 'react';
import CustomAccordion from './HomeTeamData.js';
import icons from '../assets/Team_Icons/Team_icons.js';

const TeamStandings = () => {

    const iconsDict = {}
    
    iconsDict["Bandipur"] = icons.team01;
    iconsDict["Corbett"] = icons.team02;
    iconsDict["Gir"] = icons.team03;
    iconsDict["Kanha"] = icons.team04;
    iconsDict["Kaziranga"] = icons.team05;
    iconsDict["Nallamala"] = icons.team06;
    iconsDict["Namdapha"] = icons.team07;
    iconsDict["Nilgiri"] = icons.team08;
    iconsDict["Pichavaram"] = icons.team09;
    iconsDict["Saranda"] = icons.team10;
    iconsDict["Sundarbans"] = icons.team11;
    iconsDict["Waynad"] = icons.team12;

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
        <div style={{ width: '75rem', padding:'2.5px'}}>
            <CustomAccordion title={team.name} icon={iconsDict[team.name.split(' ')[0]]} total={team.total_games} win={team.wins} loss={team.loses}/>
        </div>
        )
        })}
        </div>
    </div>
    )
}

export default TeamStandings