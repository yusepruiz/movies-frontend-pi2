import { useState } from "react";

export const useFormState = () => {
    const [loading, setLoading] = useState(false);
    const [responseState, setResponseState] = useState({ success: null, message: null, error: null });

    const handleRequest = async (requestFn) => {
        try {
            setLoading(true);
            const response = await requestFn();
            setResponseState({
                success: response.submit || true,
                message: response.message,
                error: null
            });
            return response;
        } catch (error) {
            setResponseState({
                success: false,
                message: null,
                error: error.response?.data?.errors?.[0]?.message || "Error de servidor"
            });
        } finally {
            setLoading(false);
        }
    };

    return { loading, responseState, setResponseState, handleRequest };
};