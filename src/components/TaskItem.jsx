import React from 'react';
import { CheckCircle, Circle, PenTool, BookOpen, Code, Search } from 'lucide-react';

const getIcon = (type) => {
  switch (type) {
    case 'note': return <PenTool size={16} />;
    case 'build': return <Code size={16} />;
    case 'exercise': return <BookOpen size={16} />;
    case 'practice': return <Search size={16} />;
    default: return <BookOpen size={16} />;
  }
};

export function TaskItem({ task, isCompleted, onToggle }) {
  return (
    <div
      onClick={() => onToggle(task.id)}
      style={{
        display: 'flex',
        alignItems: 'start',
        gap: '0.75rem',
        padding: '0.75rem',
        background: isCompleted ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
        border: `1px solid ${isCompleted ? 'rgba(16, 185, 129, 0.2)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '0.5rem',
        opacity: isCompleted ? 0.7 : 1
      }}
      className="task-item"
    >
      <div style={{ marginTop: '2px', color: isCompleted ? 'var(--success)' : 'var(--text-muted)' }}>
        {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          textDecoration: isCompleted ? 'line-through' : 'none',
          color: isCompleted ? 'var(--text-muted)' : 'var(--text-primary)',
          fontSize: '0.95rem'
        }}>
          {task.text}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginTop: '0.4rem',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {getIcon(task.type)}
          <span>{task.type}</span>
        </div>
      </div>
    </div>
  );
}
