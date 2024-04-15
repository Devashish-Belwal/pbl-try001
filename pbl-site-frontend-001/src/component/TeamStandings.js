import React, { useState, useEffect } from 'react';
import CustomAccordion from './CustomAccordion';
import icons from '../assets/Team_Icons/Team_icons.js'

const TeamStandings = () => {

    const iconsDict = {}
    
    iconsDict["Team01Name"] = icons.team01;
    iconsDict["Team02Name"] = icons.team02;
    iconsDict["Team03Name"] = icons.team03;
    iconsDict["Team04Name"] = icons.team04;
    iconsDict["Team05Name"] = icons.team05;
    iconsDict["Team06Name"] = icons.team06;
    iconsDict["Team07Name"] = icons.team07;
    iconsDict["Team08Name"] = icons.team08;
    iconsDict["Team09Name"] = icons.team09;
    iconsDict["Team10Name"] = icons.team10;
    iconsDict["Team11Name"] = icons.team11;
    iconsDict["Team12Name"] = icons.team12;

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
        <CustomAccordion title={team.name} icon={iconsDict[team.name]} total={team.total_games} win={team.wins} loss={team.loses}>
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