import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('oes_users');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Demo User', email: 'demo@example.com', password: 'Password123!', avatar: 'https://i.pravatar.cc/150?img=11' }
    ];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedAuth = localStorage.getItem('oes_auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      // Check session expiry
      if (Date.now() - authData.loginTime < SESSION_DURATION) {
        return authData.user;
      } else {
        localStorage.removeItem('oes_auth');
        localStorage.removeItem('oes_current_user');
      }
    }
    return null;
  });

  const [welcomeUser, setWelcomeUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('oes_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('oes_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('oes_current_user');
    }
  }, [currentUser]);

  const login = (email, password, rememberMe = true) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('No user found with this email address.');
    }
    if (user.password !== password) {
      throw new Error('Invalid email or password.');
    }

    const sessionData = { user, loginTime: Date.now() };
    if (rememberMe) {
      localStorage.setItem('oes_auth', JSON.stringify(sessionData));
    }
    setCurrentUser(user);
    setWelcomeUser(user.name);
    setTimeout(() => setWelcomeUser(null), 3000);
    return user;
  };

  const register = (name, email, password) => {
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      throw new Error('An account with this email address already exists.');
    }

    const newUser = {
      id: String(Date.now()),
      name,
      email,
      password,
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
    };

    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('oes_auth');
    localStorage.removeItem('oes_current_user');
  };

  const forgotPassword = (email) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('No user registered with this email address.');
    }
    return true;
  };

  const resetPassword = (email, newPassword) => {
    setUsers(prev => prev.map(u => u.email.toLowerCase() === email.toLowerCase() ? { ...u, password: newPassword } : u));
    if (currentUser && currentUser.email.toLowerCase() === email.toLowerCase()) {
      setCurrentUser(prev => ({ ...prev, password: newPassword }));
    }
    return true;
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated: !!currentUser,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword,
      welcomeUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
