import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(
  ({ theme }): TextInputProps => ({
    placeholderTextColor: theme.COLORS.GRAY_300,
  })
)`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
