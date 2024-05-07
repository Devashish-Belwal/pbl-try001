import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 0px solid #cccccc;
  border-radius: 4px;
  width: 100%
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
  font-size: 1.5rem;
  flex-grow: 1;
`;

const AccordionBody = styled.div`
  padding: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
  font-size: 1.5rem;
  border: 0px solid #dddddd;
  padding: 8px;
`;

const CustomAccordion = ({ title, icon, total, win, loss, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (<>
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        {icon && <img src={icon} alt="Accordion Icon" style={{ marginRight: '1rem', height: '5rem' }} />}
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isOpen && (
        <AccordionBody>
          <Table>
            <thead>
              <TableRow>
                <TableCell>Games Played</TableCell>
                <TableCell>Wins</TableCell>
                <TableCell>Loses</TableCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>{total}</TableCell>
                <TableCell>{win}</TableCell>
                <TableCell>{loss}</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </AccordionBody>
      )}
    </AccordionContainer>
    </>);
};

export default CustomAccordion;