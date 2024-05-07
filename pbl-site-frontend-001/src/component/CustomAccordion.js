import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 0px solid #cccccc;
  border-radius: 4px;
`;

const AccordionHeader = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? '#f0f0f0' : '#ffffff')};
  color: ${({ isOpen }) => (isOpen ? '#000000' : '#000000')};
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AccordionTitle = styled.div`
  flex-grow: 1;
`;

const AccordionBody = styled.div`
  padding: 10px;
`;

const CustomAccordion = ({ title, insidethebody, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (<>
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isOpen && (
        <AccordionBody>
          {insidethebody}
        </AccordionBody>
      )}
    </AccordionContainer>
    </>);
};

export default CustomAccordion;