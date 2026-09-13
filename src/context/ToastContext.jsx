import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const timerRef = useRef(null);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastMessage(null), 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ toastMessage, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
