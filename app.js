import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
};

export default App;