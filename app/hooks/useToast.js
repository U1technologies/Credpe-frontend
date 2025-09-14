export const useToast = () => {
  const toast = ({ title, description, variant = "default" }) => {
    // Create toast element
    const toastEl = document.createElement('div');
    toastEl.className = `
      fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm 
      transition-all duration-300 transform translate-x-full
      ${variant === "destructive" 
        ? "bg-red-500 text-white border border-red-600" 
        : "bg-green-500 text-white border border-green-600"
      }
    `;
    
    toastEl.innerHTML = `
      <div class="font-semibold">${title}</div>
      ${description ? `<div class="text-sm opacity-90 mt-1">${description}</div>` : ''}
      <button class="absolute top-2 right-2 text-white hover:opacity-70" onclick="this.parentElement.remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `;
    
    document.body.appendChild(toastEl);
    
    // Animate in
    setTimeout(() => {
      toastEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
      toastEl.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toastEl.parentNode) {
          toastEl.parentNode.removeChild(toastEl);
        }
      }, 300);
    }, 4000);
  };
  
  return { toast };
};