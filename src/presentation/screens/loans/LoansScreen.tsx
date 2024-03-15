import { faArrowLeft, faBan, faRocket, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, TextInput, Button } from 'react-native'
import { IconCard, LoanCard, LoansContainer, StyledTextInput, TextCard } from './style'
import { useNavigation } from '@react-navigation/native'

export const LoansScreen = () => {
    const [loans, setLoans] = useState(null);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const loanStateStyles = {
        'activo': { bgColor: '#ECFAF6', color: '#43CEA2', icon: faRocket, text: 'Activo' },
        'inactivo': { bgColor: '#FBEBF1', color: '#FF2F73', icon: faBan, text: 'Inactivo' },
        'en proceso': { bgColor: '#fcf9d9', color: '#cac034', icon: faSync, text: 'En Proceso' },
    };

    useEffect(() => {
        fetch('http://192.168.1.5:5000/loans')
            .then(response => response.json())
            .then(data => setLoans(data))
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        fetch(`http://192.168.1.5:5000/loans?search=${search}`)
            .then(response => response.json())
            .then(data => setLoans(data))
            .catch(error => console.error('Error:', error));
    }, [search]);

    return (
        <LoansContainer>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginBottom:10}}>
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
            <StyledTextInput
                onChangeText={text => setSearch(text)}
                value={search}
                placeholder='Buscar prestamo...'
            />

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