import React from 'react';
import { Header } from './components/Header';
import { MonthCard } from './components/MonthCard';
import { useProgress } from './hooks/useProgress';
import { planData } from './data/planData';

function App() {
  const { isCompleted, toggleTask, stats } = useProgress();

  return (
    <div className="container animate-fade-in">
      <Header stats={stats} />

      <main>
        {planData.map(month => (
          <MonthCard
            key={month.id}
            month={month}
            isCompleted={isCompleted}
            toggleTask={toggleTask}
          />
        ))}
      </main>

      <footer style={{
        marginTop: '4rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        paddingBottom: '2rem'
      }}>
        <p>Stay Consistent using the Weekly Discipline Rule.</p>
        <p style={{ marginTop: '0.5rem' }}>Built for Ayush's System Design Journey</p>
      </footer>
    </div>
  );
}

export default App;
