import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast ${visible ? 'show' : ''}`} id="toast" role="alert">
      <Check size={18} />
      <span>{message}</span>
    </div>
  );
}
