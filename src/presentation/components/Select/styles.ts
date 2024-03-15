import styled from "styled-components/native";

export const Label = styled.Text<{ error?: boolean }>`
  font-size: 15px;
  line-height: 16px;
  font-weight:bold;
  margin-bottom: 5px;
  color: ${({ error, theme }) => (error ? theme?.colors?.error : theme.colors.text.primary)};
`;