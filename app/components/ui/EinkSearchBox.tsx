'use client';

import { useState } from 'react';

interface EinkSearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function EinkSearchBox({ 
  placeholder = "Search for a cuisine...",
  onSearch 
}: EinkSearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-6 py-4 text-lg rounded-md transition-all duration-200 outline-none"
          style={{
            backgroundColor: 'white',
            color: 'var(--eink-blue)',
            border: `2px solid ${isFocused ? 'var(--eink-orange)' : 'var(--eink-border)'}`,
            boxShadow: isFocused 
              ? '0 0 0 3px rgba(192, 86, 33, 0.1)' 
              : '0 1px 3px var(--eink-shadow)',
          }}
        />
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: isFocused ? 'var(--eink-orange)' : 'var(--eink-blue-light)' }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>
    </form>
  );
}
