import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const AccordionHeader = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? '#f0f0f0' : '#ffffff')};
  color: ${({ isOpen }) => (isOpen ? '#000000' : '#000000')};
  padding: 10px;
  cursor: pointer;
  display: flex; /* Added to align image and title */
  align-items: center; /* Added to vertically center align items */
`;

const AccordionTitle = styled.div`
  flex-grow: 1; /* Added to allow title to grow */
`;

const AccordionBody = styled.div`
  padding: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  '''&:nth-child(even) {
    background-color: #000000;
  }'''
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
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
        {icon && <img src={icon} alt="Accordion Icon" style={{ marginRight: '10px', height: '20px' }} />} {/* Added image */}
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