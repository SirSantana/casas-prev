'use client';

import dynamic from 'next/dynamic';

// Carga del componente dinámico solo en el cliente
const PlanoEditor = dynamic(() => import('../../components/EditorPlano'), {
  ssr: false,
});
const MuroEditor = dynamic(() => import('../../components/MuroEditor'), {
  ssr: false,
});

export default function EditorWrapper() {
  return <MuroEditor />;
}