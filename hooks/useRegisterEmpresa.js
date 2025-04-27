"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Asegúrate de que la ruta sea correcta

// Configura tu conexión a Supabase

export function useRegisterEmpresa() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const registerEmpresa = async ({ nombreEmpresa, telefono }) => {
    setLoading(true);
    setMensaje("");

    const { error } = await supabase.from("empresas_interesadas").insert([
      {
        nombre_empresa: nombreEmpresa,
        telefono: telefono,
      },
    ]);

    if (error) {
      console.error(error);
      setMensaje("Ocurrió un error. Intenta nuevamente.");
    } else {
      setMensaje("¡Gracias! Nos pondremos en contacto contigo pronto.");
    }

    setLoading(false);
  };

  return {
    registerEmpresa,
    loading,
    mensaje,
  };
}
