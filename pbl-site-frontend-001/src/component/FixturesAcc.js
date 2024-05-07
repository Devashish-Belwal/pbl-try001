import React, { useState } from 'react';
import styled from 'styled-components';

const FullContainer = styled.div`
  display: inline-flex;
  padding: 5px;
  border: 0px solid #cccccc;
  border-radius: 4px;
  flex-direction: column;
  background-color: #ffffff;
`;

const Header = styled.div`
display: flex;
gap: 1rem;
padding: 5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
justify-content: center;
align-items: center;
/* background-color:#aa00ff; */
`;

const TeamA = styled.div`
display: flex;
align-items: center;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const SetScore = styled.div`
display: flex;
padding: 0.25rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const TeamB = styled.div`
display: flex;
align-items: center;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const Body = styled.div`
display: flex;
gap: 10px;
padding: 5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const MS = styled.div`
display: flex;
gap: 0.25rem;
padding: 2.5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.div``;

const MSP1 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const MSScore = styled.div`
display: flex;
gap: 0.5rem;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: row;
align-items: center;
`;

const MSScoreD = styled.div`
display: flex;
padding: 0.25rem;
gap: 1rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
`;

const MSP2 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const MD = styled.div`
display: flex;
gap: 0.25rem;
padding: 2.5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const MDP1 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const MDScore = styled.div`
display: flex;
gap: 0.5rem;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: row;
align-items: center;
`;

const MDScoreD = styled.div`
display: flex;
padding: 0.25rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
`;

const MDP2 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const WS = styled.div`
display: flex;
gap: 0.25rem;
padding: 2.5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const WSP1 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const WSScore = styled.div`
display: flex;
gap: 0.5rem;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: row;
align-items: center;
`;

const WSScoreD = styled.div`
display: flex;
padding: 0.25rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
`;

const WSP2 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const WD = styled.div`
display: flex;
gap: 0.25rem;
padding: 2.5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const WDP1 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const WDScore = styled.div`
display: flex;
gap: 0.5rem;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: row;
align-items: center;
`;

const WDScoreD = styled.div`
display: flex;
padding: 0.25rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
`;

const WDP2 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const XD = styled.div`
display: flex;
gap: 0.25rem;
padding: 2.5px;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const XDP1 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const XDScore = styled.div`
display: flex;
gap: 0.5rem;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: row;
align-items: center;
`;

const XDScoreD = styled.div`
display: flex;
padding: 0.25rem;
border: 1px solid #cccccc;
border-radius: 4px;
flex-direction: row;
`;

const XDP2 = styled.div`
display: flex;
border: 0px solid #cccccc;
border-radius: 4px;
flex-direction: column;
`;

const C_Acc = ({ teama, teamaIcon, teamb, teambIcon, teamaScore, teambScore, msp1, msp1s, msp2s , msp2, mdp1, mdp1s, mdp2s, mdp2, wsp1, wsp1s, wsp2s, wsp2, wdp1, wdp1s, wdp2s, wdp2, xdp1, xdp1s, xdp2s, xdp2, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <FullContainer>
                <Header onClick={toggleAccordion} isOpen={isOpen}>
                    <TeamA>
                        <img src={teamaIcon} alt='team img' style={{ width: '15rem', height: '15rem' }} />
                        <teamaName>{teama}</teamaName>
                    </TeamA>
                    <SetScore>{teamaScore}-{teambScore}</SetScore>
                    <TeamB>
                        <img src={teambIcon} alt='team img' style={{ width: '15rem', height: '15rem' }} />
                        <teambName>{teamb}</teambName>
                    </TeamB>
                </Header>

                {isOpen &&
                (<Body>

                    <MS>
                        <Title>Men's Singles</Title>
                        <MSScore>
                            <MSP1>{msp1}</MSP1>
                            <MSScoreD>{msp1s}-{msp2s}</MSScoreD>
                            <MSP2>{msp2}</MSP2>
                        </MSScore>
                    </MS>

                    <MD>
                        <Title>Men's Doubles</Title>
                        <MDScore>
                            <MDP1>{mdp1}</MDP1>
                            <MDScoreD>{mdp1s}-{mdp2s}</MDScoreD>
                            <MDP2>{mdp2}</MDP2>
                        </MDScore>
                    </MD>

                    <WS>
                        <Title>Women's Singles</Title>
                        <WSScore>
                            <WSP1>{wsp1}</WSP1>
                            <WSScoreD>{wsp1s}-{wsp2s}</WSScoreD>
                            <WSP2>{wsp2}</WSP2>
                        </WSScore>
                    </WS>

                    <WD>
                        <Title>Women's Doubles</Title>
                        <WDScore>
                            <WDP1>{wdp1}</WDP1>
                            <WDScoreD>{wdp1s}-{wdp2s}</WDScoreD>
                            <WDP2>{wdp2}</WDP2>
                        </WDScore>
                    </WD>

                    <XD>
                        <Title>Mixed Singles</Title>
                        <XDScore>
                            <XDP1>{xdp1}</XDP1>
                            <XDScoreD>{xdp1s}-{xdp2s}</XDScoreD>
                            <XDP2>{xdp2}</XDP2>
                        </XDScore>
                    </XD>

                </Body>)}
            </FullContainer>
        </>
    );
}

export default C_Acc;