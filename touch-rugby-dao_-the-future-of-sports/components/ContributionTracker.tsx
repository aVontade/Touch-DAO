
import React, { useState, useEffect } from 'react';

interface Task {
  id: string;
  text: string;
  type: 'contribution' | 'proposal';
  status: 'pending' | 'completed';
  date: string;
}

const ContributionTracker: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');
  const [inputType, setInputType] = useState<'contribution' | 'proposal'>('contribution');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('touch_dao_tasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        console.error("Failed to parse saved tasks", e);
      }
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('touch_dao_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: inputText,
      type: inputType,
      status: 'pending',
      date: new Date().toLocaleDateString(),
    };

    setTasks([newTask, ...tasks]);
    setInputText('');
  };

  const toggleStatus = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const pendingCount = tasks.filter(t => t.status === 'pending').length;

  return (
    <section id="dashboard" className="py-24 px-4 bg-slate-950/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Member <span className="text-gradient">Dashboard</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Track your personal contributions to the DAO and manage your proposed actions. This data is stored locally for your reference.
          </p>
        </div>

        <div className="glass rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
          {/* Header Stats */}
          <div className="p-8 border-b border-slate-800 bg-slate-900/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-8">
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Active Tasks</div>
                <div className="text-2xl font-bold text-blue-400">{pendingCount}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Total Impact</div>
                <div className="text-2xl font-bold text-white">{tasks.length}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Local Sync Active
            </div>
          </div>

          {/* Form */}
          <div className="p-8 border-b border-slate-800">
            <form onSubmit={addTask} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="e.g., Organized local tournament in London"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={inputType}
                  onChange={(e) => setInputType(e.target.value as any)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                >
                  <option value="contribution">Contribution</option>
                  <option value="proposal">Proposal</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                >
                  Add
                </button>
              </div>
            </form>
          </div>

          {/* List */}
          <div className="min-h-[300px] max-h-[500px] overflow-y-auto custom-scrollbar">
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                <p>No actions tracked yet. Start building the DAO today.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800/50">
                {tasks.map((task) => (
                  <div key={task.id} className={`p-6 flex items-start gap-4 transition-colors group hover:bg-white/[0.02] ${task.status === 'completed' ? 'opacity-60' : ''}`}>
                    <button
                      onClick={() => toggleStatus(task.id)}
                      className={`mt-1 w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${task.status === 'completed' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 hover:border-blue-500 text-transparent'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${task.type === 'contribution' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                          {task.type}
                        </span>
                        <span className="text-[10px] text-slate-600 font-bold">{task.date}</span>
                      </div>
                      <p className={`text-slate-200 transition-all ${task.status === 'completed' ? 'line-through text-slate-500' : ''}`}>
                        {task.text}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-slate-600 hover:text-red-500 transition-all rounded-lg hover:bg-red-500/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionTracker;
