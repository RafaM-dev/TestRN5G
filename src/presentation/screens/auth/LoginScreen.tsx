import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, ButtonText, CenteredContainer, Container, SmallText, SmallTextRight, SvgBackground, Title } from './styles';
import { SvgCss } from 'react-native-svg/css';
import { InputForm, Select } from '../../components';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Path } from 'react-native-svg';
import { LoginLogo } from '../../../styles/svg/loginLogo';
import { Icon } from '../home/styles';
import { useLogin } from '../../hooks/useLogin';
import { identificationTypes } from '../../../infrastructure/optionSelects';
import * as ImagePicker from 'expo-image-picker';

export const LoginScreen = () => {
  const { control, formState: { errors }, watch } = useForm();
  const cedula = watch('document_number');
  const typeId = watch('type_id');

  const openCamera = async () => {
    await ImagePicker.launchCameraAsync({
      quality: 1,
      exif: true,
      cameraType: ImagePicker.CameraType.front,
  
    })
  };

  const { handlePress, loading } = useLogin(typeId, cedula)

  return (
    <Container>
      <View style={{ position: 'absolute', top: 20, right: 20, zIndex: 999 }}>
        <Icon onPress={openCamera}>
          <FontAwesomeIcon icon={faCamera} size={24} color='white' />
        </Icon>
      </View>
      <SvgBackground viewBox="0 0 800 400">
        <Path
          d="M420.6040862244773 206.59552223292755C382.8103563660789 190.39821365443626 282.61302604381325 147.45651184169213 244.81929618541483 131.25920326320093"
          fill="none"
          strokeWidth="150"
          stroke="#310866"
          strokeLinecap="round"
          strokeDasharray="16 0"
          transform="matrix(1.4, 0.5, -1.3, 1, -250 ,-300)"
        />
        <Path
          d="M394.1703920920336 202.69057529603418C394.02091699437733 202.54110019837793 393.42301660375233 201.94319980775293 393.2735415060961 201.79372471009668"
          fill="none"
          strokeWidth="150"
          stroke="#310866"
          strokeLinecap="round"
          strokeDasharray="16 0"
          transform="matrix(0.2, 0.8, -1, 0.2, 890 ,-890)"
        />
        <Path
          d="M394.1703920920336 202.69057529603418C394.02091699437733 202.54110019837793 393.42301660375233 201.94319980775293 393.2735415060961 201.79372471009668"
          fill="none"
          strokeWidth="150"
          stroke="#310866"
          strokeLinecap="round"
          strokeDasharray="16 0"
          transform="matrix(0.2, 0.8, -1, 0.2, 210 ,120)"
        />
        <Path
          d="M420.6040862244773 206.59552223292755C382.8103563660789 190.39821365443626 282.61302604381325 147.45651184169213 244.81929618541483 131.25920326320093"
          fill="none"
          strokeWidth="120"
          stroke="#310866"
          strokeLinecap="round"
          strokeDasharray="16 0"
          transform="matrix(1,3.220446049250313e-16,-2.220446049250313e-16,1.3224105843377236,540,100)"
        />
        <Path
          d="M190.5829620361328,368.60986328125C260.53811899820965,347.9820607503255,540.358746846517,265.4708506266276,610.3139038085938,244.84304809570312"
          fill="none"
          strokeWidth="120"
          stroke="#310866"
          strokeLinecap="round"
          strokeDasharray="16 0"
          transform="matrix(0.4,1,-1,0.8,540,350)"
        />
      </SvgBackground>
      <CenteredContainer>
        <View style={{ position: 'relative', width: '20%', height: '20%' }}>
          <SvgCss xml={LoginLogo} style={{ position: 'absolute', top: '0%', left: 0, backgroundColor: 'transparent' }} />
          <SvgCss xml={LoginLogo} style={{ position: 'absolute', opacity: 0.7, top: '-1%', left: '2%', transform: [{ rotate: '42deg' }], backgroundColor: 'transparent' }} />
        </View>
        <Title>NEQUI</Title>
      </CenteredContainer>
      <View style={{ marginTop: 'auto', display: 'flex', marginBottom: 15 }}>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Select
            name="type_id"
            control={control}
            error={!!errors["type_id"]}
            required
            options={identificationTypes}
          />
          <InputForm
            placeholder="Número de documento"
            name="document_number"
            required
            control={control}
            error={!!errors["document_number"]}
            keyboardType="numeric"
          />
        </View>
        <Button onPress={handlePress}>
          {loading ? <ActivityIndicator color="#fff" /> : <ButtonText>Entra</ButtonText>}
        </Button>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 16, marginTop: 10 }}>
          <SmallText>Ayuda</SmallText>
          <SmallTextRight>
            <View style={{ flexDirection: 'row' }}>
              <SmallText style={{ color: 'white' }}>by{'  '}</SmallText>
              <FontAwesomeIcon size={16} icon={faCirclePause} color='#fff' style={{ transform: [{ rotate: '-110deg' }] }} />
            </View>
          </SmallTextRight>
        </View>
      </View>
    </Container >
  );
};