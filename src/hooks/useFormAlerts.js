import { useEffect } from "react";
import { alerts } from "@/utils/alerts.js";

export const useFormAlerts = (responseState) => {
    useEffect(() => {
        responseState.success && alerts.success(responseState.message);
        responseState.error && alerts.error(responseState.error);
    }, [responseState]);
};