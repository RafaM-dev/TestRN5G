import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';
import { useState } from 'react';

/**
 * Custom hook for handling login functionality.
 * 
 * @param typeId - The type ID.
 * @param cedula - The cedula (document number).
 * @returns An object containing the handlePress function and the loading state.
 */

export const useLogin = (typeId: string, cedula: string) => {
    const toast = useToast();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handlePress = async () => {
        if (!typeId || !cedula) {
            toast.show("Por favor ingrese los campos", {
                type: "error",
            });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('https://backend-prueba-5g.vercel.app/login', {
                cedula
            });

            if (response.data === 'Logged in') {
                navigation.navigate('Home' as never)
                toast.show("Bienvenido", {
                    type: "success",
                });
            } else {
                toast.show("Numero de documento incorrecto", {
                    type: "error",
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return { handlePress, loading }
}