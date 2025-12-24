import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { WeekSection } from './WeekSection';

export function MonthCard({ month, isCompleted, toggleTask }) {
  // Default expanded if it's the first month (simulated by checking id, or just simple state)
  const [isExpanded, setIsExpanded] = useState(month.id === 'month-1');

  // Calculate completion for this month
  const total = month.weeks.reduce((acc, w) => acc + w.tasks.length, 0);
  const completed = month.weeks.reduce((acc, w) => acc + w.tasks.filter(t => isCompleted(t.id)).length, 0);
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div style={{
      marginBottom: '1.5rem',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      className="month-card"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isExpanded ? 'var(--bg-card-hover)' : 'transparent'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px', height: '40px',
            background: progress === 100 ? 'var(--success)' : 'var(--primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            {month.id.split('-')[1]}
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{month.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              {month.goal}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ textAlign: 'right', display: 'none', minWidth: '80px', md: { display: 'block' } }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {completed}/{total} Done
            </div>
            <div style={{
              height: '4px',
              background: '#333',
              width: '100%',
              borderRadius: '2px',
              marginTop: '4px',
              width: '100px'
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: progress === 100 ? 'var(--success)' : 'var(--primary)',
                borderRadius: '2px',
                transition: 'width 0.3s'
              }} />
            </div>
          </div>
          {isExpanded ? <ChevronUp color="var(--text-muted)" /> : <ChevronDown color="var(--text-muted)" />}
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', animation: 'slideDown 0.3s ease-out' }}>
          {month.weeks.map(week => (
            <WeekSection
              key={week.id}
              week={week}
              isCompleted={isCompleted}
              toggleTask={toggleTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
