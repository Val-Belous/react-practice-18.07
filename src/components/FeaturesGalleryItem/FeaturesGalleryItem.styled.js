import styled from 'styled-components';

export const Text = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const Item = styled.li`
  width: 270px;
  margin-right: 30px;

  &:hover ${Text} {
    color: blue;
  }
`;
export const Par = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${({ status }) => (status ? 'red' : 'black')};
`;
