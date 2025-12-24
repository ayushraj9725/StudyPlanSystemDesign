import React from 'react';
import { Target } from 'lucide-react';

export function Header({ stats }) {
  return (
    <header style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h1 className="text-gradient" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            System Design Master Plan
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            6 Months to Architect Level • {stats.completed} / {stats.total} Tasks Completed
          </p>
        </div>
        <div style={{
          background: 'var(--bg-card)',
          padding: '1rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Target size={24} color="var(--primary)" />
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.percentage}%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>COMPLETED</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        height: '8px',
        background: 'var(--bg-card)',
        borderRadius: '999px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${stats.percentage}%`,
          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
          transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }} />
      </div>
    </header>
  );
}
