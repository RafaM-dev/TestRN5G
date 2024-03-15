import { faArrowLeft, faBan, faRocket, faSearch, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { Text, TouchableOpacity, Modal, Button, View } from 'react-native'
import { ButtonText, IconCard, LoanCard, LoansContainer, ModalBox, ModalContainer, ModalText, StyledButton, StyledButtonModal, StyledButtonText, StyledTextInput, TextCard } from './style'
import { useNavigation } from '@react-navigation/native'
import { useLoans } from '../../hooks/useLoans'

export const LoansScreen = () => {
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const { loans, error } = useLoans(search);

    const loanStateStyles = {
        'activo': { bgColor: '#ECFAF6', color: '#43CEA2', icon: faRocket, text: 'Activo' },
        'inactivo': { bgColor: '#FBEBF1', color: '#FF2F73', icon: faBan, text: 'Inactivo' },
        'en proceso': { bgColor: '#fcf9d9', color: '#cac034', icon: faSync, text: 'En Proceso' },
    };

    if (error) {
        return <Text>No se pudieron cargar los préstamos. Por favor, inténtalo de nuevo más tarde.</Text>;
    }

    return (
        <LoansContainer>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 10 }}>
                <FontAwesomeIcon
                    size={30}
                    icon={faArrowLeft}
                    color='#210049'
                />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#210049' }}>Prestamos</Text>
            <Text style={{ color: '#6E6E6E', fontSize: 14 }}>
                Para nosotros es importante que tengas el control de los prestamos que haz realizado
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                <StyledTextInput
                    onChangeText={text => setSearch(text)}
                    value={search}
                    placeholder='Buscar prestamo...'
                />
                <StyledButton onPress={() => setModalVisible(true)}>
                    <FontAwesomeIcon icon={faSearch} color='white' size={20} />
                </StyledButton>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalContainer>
                    <ModalBox>
                        <ModalText>Selecciona una opción para filtrar:</ModalText>
                        <StyledButtonModal onPress={() => { setSearch(''); setModalVisible(false); }} bgColor='#f3f3f3'>
                            <ButtonText >Todos</ButtonText>
                        </StyledButtonModal>
                        <StyledButtonModal onPress={() => { setSearch('activo'); setModalVisible(false); }} bgColor='#ECFAF6'>
                            <ButtonText>Activo</ButtonText>
                        </StyledButtonModal>
                        <StyledButtonModal onPress={() => { setSearch('inactivo'); setModalVisible(false); }} bgColor='#FBEBF1'>
                            <ButtonText>Inactivo</ButtonText>
                        </StyledButtonModal>
                        <StyledButtonModal onPress={() => { setSearch('en proceso'); setModalVisible(false); }} bgColor='#fcf9d9'>
                            <ButtonText>En Proceso</ButtonText>
                        </StyledButtonModal>
                    </ModalBox>
                </ModalContainer>
            </Modal>

            {loans && loans?.map((loan, index) => {
                const { bgColor, color, icon, text } = loanStateStyles[loan.state] || {};

                return (
                    <LoanCard key={index}>
                        <IconCard style={{ backgroundColor: bgColor }}>
                            <FontAwesomeIcon
                                icon={icon}
                                size={12}
                                color={color}
                            />
                            <Text style={{ color }}>
                                {text}
                            </Text>
                        </IconCard>
                        <TextCard bold width='80%'>{loan.name}</TextCard>
                        <TextCard color='#6E6E6E'>{loan.description}</TextCard>
                    </LoanCard>
                );
            })}
        </LoansContainer >
    )
}