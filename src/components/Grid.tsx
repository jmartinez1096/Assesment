import styled from 'styled-components/native';

type Props = {
  alignContent?: string;
  alignItems?: string;
};

export const Row = styled.View<Props>`
  flex-direction: row;
  justify-content: ${({ alignContent }) => alignContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;
