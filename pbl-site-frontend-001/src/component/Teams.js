import React/* , { useState, useEffect } */ from 'react';
/* import CustomAccordion from './HomeTeamData.js'; */
import icons from '../assets/Team_Icons/Team_icons.js';
import Card from './BasicCard.js';
import { Link } from 'react-router-dom';

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

    /* const [AllTeamData, setAllTeamData] = useState([]) */

    /* useEffect(() => {
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
        }, []); */

    return (
    <div style={{ display:'flex', width: '80%', alignContent:'flex-start', flexDirection: 'column' }}>
        {/* <div>
        {AllTeamData.map((team) => {
        return (
        <div style={{ width: '75rem', padding:'2.5px'}}>
            <CustomAccordion title={team.name} icon={iconsDict[team.name.split(' ')[0]]} total={team.total_games} win={team.wins} loss={team.loses}/>
        </div>
        )
        })}
        </div> */}

        <div style={{display: 'flex', gap: '10px', width: '100%', width: '95%', alignSelf: 'center', flexDirection: 'column' }}>

            <div style={{display: 'flex', gap: '10px', width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                <Link to={"/bandipur_blazers"}>
                    <Card name="Bandipur Blazers" imageUrl={iconsDict["Bandipur"]} />
                </Link>

                <Link to={"/corbett_crushers"}>
                    <Card name="Corbett Crushers" imageUrl={iconsDict["Corbett"]} />
                </Link>

                <Link to={"/gir_gliders"}>
                    <Card name="Gir Gliders" imageUrl={iconsDict["Gir"]} />
                </Link>

                <Link to={"/kanha_knights"}>
                    <Card name="Kanha Knights" imageUrl={iconsDict["Kanha"]} />
                </Link>

                <Link to={"/kaziranga_kaisers"}>
                    <Card name="Kaziranga Kaisers" imageUrl={iconsDict["Kaziranga"]} />
                </Link>

                <Link to={"/nallamala_nets"}>
                    <Card name="Nallamala Nets" imageUrl={iconsDict["Nallamala"]} />
                </Link>

            </div>

            <div style={{display: 'flex', gap: '10px', width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                <Link to={"/namdapha_nimblebirds"}>
                    <Card name="Namdapha Nimblebirds" imageUrl={iconsDict["Namdapha"]} />
                </Link>

                <Link to={"/nilgiri_ninjas"}>
                    <Card name="Nilgiri Ninjas" imageUrl={iconsDict["Nilgiri"]} />
                </Link>

                <Link to={"/pichavaram_phoenixes"}>
                    <Card name="Pichavaram Phoenixes" imageUrl={iconsDict["Pichavaram"]} />
                </Link>

                <Link to={"/saranda_shuttlers"}>
                    <Card name="Saranda Shuttlers" imageUrl={iconsDict["Saranda"]} />
                </Link>

                <Link to={"/sundarbans_smashers"}>
                    <Card name="Sundarbans Smashers" imageUrl={iconsDict["Sundarbans"]} />
                </Link>

                <Link to={"/waynad_wariors"}>
                    <Card name="Wayanad Warriors" imageUrl={iconsDict["Waynad"]} />
                </Link>

            </div>

        </div>

    </div>
    )
}

export default TeamStandings