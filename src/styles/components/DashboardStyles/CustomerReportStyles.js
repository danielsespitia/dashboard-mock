import styled from 'styled-components';

export const FullCard = styled.div`
  display: inherit;
  justify-content: center;
  border-radius: 9px;
  background-color: white;
  height: 50.8%;
  width: 100%;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const plotLayoutStyles = {
  autosize: true,
  width: 900,
  height: 380,
  opacity: 0.7,
  title: {
    text: '<b>Customer report</b>',
    font: { family: 'Poppins', size: 15 },
    x: '0.02',
    y: '1.1',
  },
  useResizeHandler: true,
  style: { width: '100%', height: '100%' },
};
