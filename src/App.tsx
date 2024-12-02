import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <CheckSquare className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-800">Task Master</h1>
          </div>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;