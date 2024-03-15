import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #49346A;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text<{ fSize?: string }>`
  color: #fff;
  font-size: ${({ fSize }) => fSize || "16px"};
`;

export const MainText = styled.Text<{ fSize?: string }>`
  color: #fff;
  font-size: ${({ fSize }) => fSize || "16px"};
`;

export const SmallText = styled.Text`
  color: #fff;
  font-size: 8px;
`;



export const IconContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const Icon = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ContainerWallet = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const ButtonWallet = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 14px;
  padding: 10px 20px;
  color: white;
  border: 1px solid white;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 100px;
  width: 56px;
  height: 56px;
  border-radius: 30px;
  background-color: #FF2F73;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity<{ width?: string, height?: string }>`
  align-items: center;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};

`;

export const ButtonText = styled.Text<{ fSize?: string }>`
  font-size: ${({ fSize }) => fSize || "16px"};
  color: #210049;
`;

export const NavigationBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 20px;
  align-self: center;
  height: 60px;
  width: 320px;
  border-radius: 30px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
`;

export const ButtonMenu = styled.TouchableOpacity<{ width?: string, height?: string, isPressed?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: ${({ height }) => height || "52px"};
  width: ${({ width }) => width || "96px"};
  border-radius: 26px;
  background-color: ${({ isPressed }) => isPressed ? '#E9E6ED' : 'transparent'};
`;

export const MenuSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 40%
`;

export const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});