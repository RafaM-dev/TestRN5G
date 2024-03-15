import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, ButtonMenu, ButtonText, ButtonWallet, Circle, ContainerWallet, FloatingButton, Header, Icon, IconContainer, MainText, MenuSection, NavigationBar, SmallText, TextHeader, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faUser, faEyeSlash, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { SvgXml } from 'react-native-svg';
import { faChevronDown, faDollarSign, faGrip, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { iconBolsillos, iconColchon, iconPrestamos, svg1, svg2 } from '../../../styles/svg/loginLogo';

interface TextHeaderProps {
  fSize?: string;
  children: string;
}

const TextHeaderNumber: React.FC<TextHeaderProps> = ({ fSize, children }) => {
  const [main, decimal] = children.split(',');

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <MainText fSize={fSize}>{main},</MainText>
      <SmallText>{decimal}</SmallText>
    </View>
  );
};

export const HomeScreen = () => {
  const userName = 'Usuario';
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);
  const route = useRoute()
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Loans' as never);
  };

 
  useEffect(() => {
    setCurrentScreen(route.name);
  }, [route.name]);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header>
        <SvgXml xml={svg1} style={{ position: 'absolute', top: -65, left: -38 }} />
        <SvgXml xml={svg2} style={{ position: 'absolute', top: -76, left: -59 }} />
        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
          <Circle>
            <FontAwesomeIcon size={24} icon={faUser} color='white' />
          </Circle>
          <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TextHeader fSize='12px'>Hola,</TextHeader>
            <TextHeader fSize='16px'>{userName}</TextHeader>
          </View>
        </View>
        <IconContainer>
          <Icon onPress={() => console.log('Icon 1 pressed!')}>
            <FontAwesomeIcon size={24} icon={faBell} color='white' />
          </Icon>
          <Icon onPress={() => console.log('Icon 2 pressed!')}>
            <FontAwesomeIcon size={24} icon={faQuestion} color='white' />
          </Icon>
        </IconContainer>
      </Header>
      <ContainerWallet>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          <TextHeader fSize='12px'>Disponible</TextHeader>
          <FontAwesomeIcon size={16} icon={faEyeSlash} color='white' />
        </View>
        <TextHeaderNumber fSize='12px'>$000.000,00</TextHeaderNumber>
        <TextHeaderNumber fSize='12px'>Total: $000.000,00</TextHeaderNumber>
        <ButtonWallet>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <TextHeader fSize='10px'>Tu Plata</TextHeader>
            <FontAwesomeIcon size={16} icon={faChevronDown} color='white' />
          </View>
        </ButtonWallet>
      </ContainerWallet>
      <MenuSection>
        <Button onPress={handlePress}>
          <SvgXml xml={iconPrestamos} width="64" height="64" />
          <ButtonText>Préstamos</ButtonText>
        </Button>
        <Button onPress={() => console.log('Button pressed!')}>
          <SvgXml xml={iconColchon} width="64" height="64" />
          <ButtonText>Colchón</ButtonText>
        </Button>
        <Button onPress={() => console.log('Button pressed!')}>
          <SvgXml xml={iconBolsillos} width="64" height="64" />
          <ButtonText>Bolsillos</ButtonText>
        </Button>
      </MenuSection>
      <FloatingButton onPress={() => console.log('Floating button pressed!')}>
        <FontAwesomeIcon size={24} icon={faDollarSign} color='white' />
      </FloatingButton>
      <NavigationBar style={styles.shadowProp}>
        <ButtonMenu activeOpacity={0.6}
          isPressed={currentScreen === 'Home'}
          onPress={() => console.log('Home pressed!')}
        >
          <FontAwesomeIcon size={20} icon={faHome} color='black' />
          <ButtonText fSize='8px'>Inicio</ButtonText>
        </ButtonMenu>
        <ButtonMenu activeOpacity={0.6}
          isPressed={currentScreen === 'Movimientos'}
          onPress={() => console.log('Movimientos pressed!')}>
          <FontAwesomeIcon size={20} icon={faFileLines} color='black' />
          <ButtonText fSize='8px'>Movimientos</ButtonText>
        </ButtonMenu>
        <ButtonMenu activeOpacity={0.6}
          isPressed={currentScreen === 'Servicios'}
          onPress={() => console.log('Servicios pressed!')}>
          <FontAwesomeIcon size={20} icon={faGrip} color='black' />
          <ButtonText fSize='8px'>Servicios</ButtonText>
        </ButtonMenu>
      </NavigationBar>
    </View>

  );
};