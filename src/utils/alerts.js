import Swal from "sweetalert2";

import { ALERTS_BUTTONS_COLORS, ALERTS_MESSAGES } from "@/constants/constants.js";

export const alerts = {
  // Alerta de éxito (para creación y edición)
  success: (message = ALERTS_MESSAGES.SUCCESS) => {
    return Swal.fire({
      title: "¡Logrado!",
      text: message,
      icon: "success",
      confirmButtonColor: ALERTS_BUTTONS_COLORS.SUCCESS,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false, // Se cierra solo, más fluido
    });
  },

  // Alerta de error
  error: (message = ALERTS_MESSAGES.ERROR) => {
    return Swal.fire({
      title: "Ops...",
      text: message,
      icon: "error",
      confirmButtonColor: ALERTS_BUTTONS_COLORS.ERROR,
    });
  },

  // Alerta de confirmación (para eliminar)
  confirmDelete: async (displayName) => {
    return await Swal.fire({
      title: "¿Estás seguro?",
      text: ALERTS_MESSAGES.DELETE(displayName),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: ALERTS_BUTTONS_COLORS.DELETE.CONFIRM,
      cancelButtonColor: ALERTS_BUTTONS_COLORS.DELETE.CANCEL,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
  },
};