import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch loans data from the backend API.
 * @param search - The search query for filtering loans (optional).
 * @returns An object containing the loans data and error state.
 */

export const useLoans = (search: string) => {
    const [loans, setLoans] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const url = `https://backend-prueba-5g.vercel.app/loans${search ? `?search=${search}` : ''}`;
                const response = await axios.get(url);
                setLoans(response.data);
                setError(false);
            } catch (error) {
                console.error('Error:', error);
                setError(true);
            }
        };
        fetchLoans();
    }, [search]);

    return { loans, error };
};