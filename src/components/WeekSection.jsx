import React from 'react';
import { TaskItem } from './TaskItem';
import { List } from 'lucide-react';

export function WeekSection({ week, isCompleted, toggleTask }) {
  return (
    <div style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border)' }}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>
        {week.title}
      </h3>

      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <List size={14} /> TOPICS
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {week.topics.map((topic, i) => (
            <span key={i} style={{
              background: 'var(--bg-card-hover)',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)'
            }}>
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {week.tasks.length > 0 && (
          <h4 style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem'
          }}>
            TASKS
          </h4>
        )}
        {week.tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            isCompleted={isCompleted(task.id)}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}
