import { useState, useEffect, useMemo } from 'react';
import { planData } from '../data/planData';

export function useProgress() {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('study-plan-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('study-plan-progress', JSON.stringify([...completedTasks]));
  }, [completedTasks]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const isCompleted = (taskId) => completedTasks.has(taskId);

  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;

    planData.forEach(month => {
      month.weeks.forEach(week => {
        week.tasks.forEach(task => {
          total++;
          if (completedTasks.has(task.id)) {
            completed++;
          }
        });
      });
    });

    return {
      total,
      completed,
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
    };
  }, [completedTasks]);

  return { isCompleted, toggleTask, stats };
}
