import React from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useNotification } from '@/context/NotificationContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useNotification();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const Toast = ({ toast, onClose }) => {
  React.useEffect(() => {
    if (toast.duration) {
      const timer = setTimeout(onClose, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-success" />,
    error: <XCircle className="w-5 h-5 text-danger" />,
    info: <Info className="w-5 h-5 text-info" />
  };

  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 bg-surface border border-border shadow-soft-lg rounded-xl animate-slide-up",
      "dark:bg-[#1C1C1C] dark:border-[#2E2E2E]"
    )}>
      {icons[toast.type]}
      <p className="text-sm font-medium text-textHeading pr-4">{toast.message}</p>
      <button onClick={onClose} className="ml-auto text-textMuted hover:text-textHeading">
        <XCircle className="w-4 h-4" />
      </button>
    </div>
  );
};
