import styled from "styled-components/native";

export const Content = styled.View`
  display: flex;
  width: 95%;
  height: 48px;
  flex-direction: column;
  gap: 5px;
  position: relative;
  background-color: #594077;
  border-radius: 12px;
  margin: 0 auto;
`;
type InputProps = {
  error?: boolean;
};
export const InputProp = styled.TextInput<InputProps>`
  border-radius: 12px;
  color: white;
  width: 100%;
  padding: 8px 12px;
  font-size: 16px; 
  text-align: left;
`;

InputProp.defaultProps = {
  placeholderTextColor: 'white',
};

type TitleProps = {
  error?: boolean;
};

export const Title = styled.Text<TitleProps>`
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ error, theme }) => (error ? theme?.colors?.error : theme.colors.text.primary)};
`;
export const Icon = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 8px;
  bottom: 14px;
  width: 30px;
  height: 30px;
`;
