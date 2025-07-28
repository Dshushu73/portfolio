'use client'

import { useState, useEffect } from 'react';
import { Todo, FilterType, Theme } from './types/Todo';
import Form from './components/Form';
import List from './components/List';
import Filter from './components/Filter';

export default function Todoapp() {
  // ✅ Start with empty array (safe for SSR)
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('All');
  const [isHydrated, setIsHydrated] = useState(false);
  
  const [theme, setTheme] = useState<Theme>('light');

  // ✅ Load from localStorage AFTER component mounts (client-side only)
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, isHydrated]);


  const addTodo = (text: string): void => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Todo List
            </h1>
    
          </div>
          
          <Form onAddTodo={addTodo} />
          
          <Filter filter={filter} onFilterChange={setFilter} />
          
          <List
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center transition-colors duration-200">
            {todos.length} total tasks • {todos.filter(t => t.completed).length} completed
          </div>
        </div>
      </div>
    </div>
  );
}