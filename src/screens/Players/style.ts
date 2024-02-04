import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const PlayersQuantity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
