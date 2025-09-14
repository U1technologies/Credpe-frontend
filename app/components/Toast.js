import * as React from "react";
import { X } from "lucide-react";

const Toast = React.forwardRef(({ className = "", variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "border bg-white text-gray-900 shadow-lg",
    destructive: "border-red-200 bg-red-50 text-red-900",
  };

  return (
    <div
      ref={ref}
      className={`
        pointer-events-auto relative flex w-full max-w-sm items-center justify-between 
        space-x-4 overflow-hidden rounded-lg border p-4 transition-all
        ${variantClasses[variant]} ${className}
      `}
      {...props}
    />
  );
});
Toast.displayName = "Toast";

const ToastTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm font-semibold ${className}`}
    {...props}
  />
));
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm opacity-90 ${className}`}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

const ToastClose = React.forwardRef(({ className = "", onClick, ...props }, ref) => (
  <button
    ref={ref}
    className={`
      absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-70 
      transition-opacity hover:opacity-100 hover:text-gray-600 
      focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400
      ${className}
    `}
    onClick={onClick}
    {...props}
  >
    <X className="h-4 w-4" />
  </button>
));
ToastClose.displayName = "ToastClose";

// Simple Toast Provider Context
const ToastContext = React.createContext({});

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(({ title, description, variant = "default" }) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = { id, title, description, variant };
    
    setToasts((prev) => [...prev, toast]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
    
    return id;
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastViewport toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastViewport = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex max-h-screen w-full flex-col-reverse space-y-2 space-y-reverse md:max-w-[420px]">
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant}>
          <div className="grid gap-1">
            <ToastTitle>{toast.title}</ToastTitle>
            {toast.description && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </div>
          <ToastClose onClick={() => removeToast(toast.id)} />
        </Toast>
      ))}
    </div>
  );
};

// Hook to use toast
const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  
  const toast = ({ title, description, variant = "default" }) => {
    return context.addToast({ title, description, variant });
  };
  
  return { toast };
};

export {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  useToast,
};