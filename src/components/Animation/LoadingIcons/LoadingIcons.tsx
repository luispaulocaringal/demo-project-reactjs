import { Helix } from 'ldrs/react';
import 'ldrs/react/Helix.css';

import './LoadingIcons.css';

export function HelixIcon({ isLoading } : { isLoading:boolean }) {
  return (
    <div className="w-100 h-100 loading-container" aria-live="polite" aria-busy={isLoading}>
      { isLoading && 
        <Helix
          size="40"
          speed="1.5"
          color="black" 
        />
      }
    </div>
  )
}