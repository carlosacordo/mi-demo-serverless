'use client'; // Le dice a Next.js que este componente se ejecuta en el navegador

import { useEffect, useState } from 'react';

export default function Home() {
  const [mesagges, setMesagges] = useState<any[]>([]);

  useEffect(() => {
    // Llamamos a nuestra propia API Serverless
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => {console.log(data);setMesagges(data)});
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mi Demo Serverless</h1>
      <ul className="space-y-2">
        {mesagges.map((msg) => (
          <li key={msg.id} className="p-4 bg-gray-100 rounded shadow">
            {msg.text}
          </li>
        ))}
      </ul>
    </main>
  );
}