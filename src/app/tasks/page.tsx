'use client';

import { useMemo, useState } from 'react';

type Task = {
  id: string;
  title: string;
  note: string;
  due: string;
  tag: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 't-001',
    title: 'Design task list layout',
    note: 'Define spacing, alignment, and empty state behavior.',
    due: 'Today',
    tag: 'UI',
    completed: true,
  },
  {
    id: 't-002',
    title: 'Draft sample task content',
    note: 'Create realistic labels, notes, and due dates.',
    due: 'Tomorrow',
    tag: 'Content',
    completed: false,
  },
  {
    id: 't-003',
    title: 'Add monochrome styling system',
    note: 'Use zinc scale and keep contrast crisp.',
    due: 'Wed',
    tag: 'Theme',
    completed: false,
  },
  {
    id: 't-004',
    title: 'Refine checkbox affordances',
    note: 'Ensure hover/focus rings feel intentional.',
    due: 'Thu',
    tag: 'UX',
    completed: true,
  },
  {
    id: 't-005',
    title: 'Prepare next sprint list',
    note: 'Add backlog tasks for the following week.',
    due: 'Fri',
    tag: 'Planning',
    completed: false,
  },
];

const filters = ['All tasks', 'Today', 'Upcoming', 'Done'];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const summary = useMemo(
    () => [
      { label: 'Total', value: tasks.length },
      { label: 'Done', value: tasks.filter((task) => task.completed).length },
      { label: 'Open', value: tasks.filter((task) => !task.completed).length },
    ],
    [tasks],
  );

  const handleToggle = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className='min-h-screen font-sans text-zinc-900'>
      <div className='relative overflow-hidden bg-zinc-50'>
        <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(24,24,27,0.06)_1px,transparent_1px)] bg-size-[48px_48px]' />
        <div className='relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:px-10 sm:py-16'>
          <header className='flex flex-col gap-6'>
            <div className='flex flex-wrap items-end justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
                  Task manager
                </p>
                <h1 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
                  Monday focus list
                </h1>
              </div>
              <div className='rounded-full border border-zinc-900/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-700 shadow-sm'>
                Feb 08, 2026
              </div>
            </div>
            <div className='flex flex-wrap gap-3'>
              {summary.map((item) => (
                <div
                  key={item.label}
                  className='flex items-center gap-2 rounded-full border border-zinc-900/15 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600'
                >
                  <span>{item.label}</span>
                  <span className='text-sm font-semibold text-zinc-900'>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </header>

          <section className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-2'>
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  type='button'
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    index === 0
                      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
                      : 'border-zinc-900/20 bg-white/80 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className='grid gap-4'>
              {tasks.map((task) => (
                <article
                  key={task.id}
                  className='flex flex-col gap-4 rounded-3xl border border-zinc-900/10 bg-white/80 p-5 shadow-[0_1px_0_0_rgba(24,24,27,0.06),0_12px_32px_-24px_rgba(24,24,27,0.35)] backdrop-blur sm:flex-row sm:items-center sm:justify-between'
                >
                  <div className='flex items-start gap-4'>
                    <div className='pt-1'>
                      <input
                        id={task.id}
                        type='checkbox'
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                        className='h-5 w-5 rounded border-zinc-400 text-zinc-900 focus:ring-2 focus:ring-zinc-900/40'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={task.id}
                        className={`block text-lg font-semibold tracking-tight ${
                          task.completed
                            ? 'text-zinc-400 line-through'
                            : 'text-zinc-900'
                        }`}
                      >
                        {task.title}
                      </label>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          task.completed ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        {task.note}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-3 sm:justify-end'>
                    <span className='rounded-full border border-zinc-900/10 bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600'>
                      {task.tag}
                    </span>
                    <span className='rounded-full border border-zinc-900/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700'>
                      {task.due}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
