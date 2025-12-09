import { useState } from 'react';
import { PlaylistCustomizer } from './components/PlaylistCustomizer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PlaylistCustomizer />
    </div>
  );
}
