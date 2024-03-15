import { Svg } from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #210049;
`;
export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-top: 25%;
`;

export const SvgBackground = styled(Svg)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #fff;
  letter-spacing: 7px;
  margin-top: 60px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-bottom: 5px;
`;

export const SmallTextRight = styled(SmallText)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF2F73;
  height: 48px;
  padding: 10px;
  margin: 10px;
  border-radius: 24px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;