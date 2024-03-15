import styled from "styled-components/native";

export const LoansContainer = styled.View`
  flex: 1;
  padding: 20px 12px;
  background-color: white;
`;

export const LoanCard = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #fff;
    border-radius: 10px;
    padding: 16px;
    margin-top: 8px;
    border: 1px solid #D0D0D0;
`;

export const TextCard = styled.Text<{ fSize?: string, color?: string, bold?: boolean, width?: string }>`
  color: ${({ color }) => color || "#210049"};
  width: ${({ width }) => width || "100%"};
  font-size: ${({ fSize }) => fSize || "16px"};
  text-align: left;
  font-weight:  ${({ bold }) => bold ? 600 : 'normal'};;
`;

export const IconCard = styled.View<{ bgColor?: string }>`
    display: flex;
    flex-direction: row;
    gap: 2px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${({ bgColor }) => bgColor || "#ECFAF6"};
    border-radius: 50px;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

export const StyledTextInput = styled.TextInput`
  height: 50px;
  border: 1px solid #D0D0D0;
  border-radius: 10px;
  margin: 10px 0;
  padding-left: 16px;
`;