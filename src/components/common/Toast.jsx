import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';

export default function Toast() {
  const { toasts } = useWorkshop();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => {
        let borderColor = '#FF7A00';
        let Icon = CheckCircle2;
        let iconColor = '#FF7A00';

        if (toast.type === 'error') {
          borderColor = '#ef4444';
          Icon = AlertCircle;
          iconColor = '#ef4444';
        } else if (toast.type === 'info') {
          borderColor = '#3b82f6';
          Icon = Info;
          iconColor = '#3b82f6';
        }

        return (
          <div
            key={toast.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 18px',
              background: '#181818',
              border: `1px solid ${borderColor}`,
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 122, 0, 0.15)',
              borderRadius: '12px',
              color: '#F5F5F5',
              fontSize: '13px',
              fontWeight: '500',
              backdropFilter: 'blur(12px)',
              pointerEvents: 'auto',
              animation: 'fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <Icon size={18} color={iconColor} style={{ flexShrink: 0 }} />
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
}
