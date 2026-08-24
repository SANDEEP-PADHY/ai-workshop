import React, { useState, useEffect } from 'react';
import { Copy, Check, Edit3, RotateCcw, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';

export default function PromptOutput({
  title,
  subtitle,
  promptText,
  onReset,
  onRegenerate,
  stepKey,
  allowEdit = true
}) {
  const { triggerToast, userEditedPrompts, setUserEditedPrompts } = useWorkshop();
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Use edited prompt if present, otherwise generated prompt
  const activePrompt = (stepKey && userEditedPrompts[stepKey]) !== null && (stepKey && userEditedPrompts[stepKey]) !== undefined
    ? userEditedPrompts[stepKey]
    : promptText;

  const [editText, setEditText] = useState(activePrompt);

  useEffect(() => {
    if (!isEditing) {
      setEditText(activePrompt);
    }
  }, [activePrompt, isEditing]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activePrompt);
      setCopied(true);
      triggerToast(`Copied ${title} to clipboard!`, 'success');
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      triggerToast('Failed to copy to clipboard', 'error');
    }
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      // Save edits
      if (stepKey) {
        setUserEditedPrompts(prev => ({
          ...prev,
          [stepKey]: editText
        }));
      }
      setIsEditing(false);
      triggerToast('Custom prompt edits saved!', 'info');
    } else {
      setEditText(activePrompt);
      setIsEditing(true);
    }
  };

  const handleReset = () => {
    if (stepKey) {
      setUserEditedPrompts(prev => ({
        ...prev,
        [stepKey]: null
      }));
    }
    setEditText(promptText);
    setIsEditing(false);
    if (onReset) onReset();
    triggerToast('Prompt reset to dynamically generated template', 'info');
  };

  const wordCount = activePrompt ? activePrompt.trim().split(/\s+/).length : 0;
  const charCount = activePrompt ? activePrompt.length : 0;

  return (
    <div style={{
      background: 'rgba(19, 19, 19, 0.92)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)'
    }}>
      {/* Header bar */}
      <div style={{
        padding: '16px 20px',
        background: '#161616',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'rgba(255, 122, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF7A00'
          }}>
            <Terminal size={16} />
          </div>
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              color: '#F5F5F5',
              textTransform: 'uppercase'
            }}>
              {title}
            </h3>
            {subtitle && (
              <p style={{ fontSize: '11px', color: '#888', marginTop: '1px' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: '#777'
        }}>
          <span>{wordCount} words</span>
          <span>•</span>
          <span>{charCount} chars</span>
        </div>
      </div>

      {/* Code / Text Area Body */}
      <div style={{ position: 'relative', flex: 1, minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
        {isEditing ? (
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{
              width: '100%',
              flex: 1,
              minHeight: '340px',
              padding: '20px',
              background: '#0e0e0e',
              border: 'none',
              outline: 'none',
              color: '#F5F5F5',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              lineHeight: '1.65',
              resize: 'vertical'
            }}
            placeholder="Edit your prompt here..."
          />
        ) : (
          <div style={{
            padding: '20px',
            background: '#0d0d0d',
            flex: 1,
            maxHeight: '480px',
            overflowY: 'auto'
          }}>
            <pre style={{
              margin: 0,
              color: '#D4D4D4',
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px',
              lineHeight: '1.65',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {activePrompt}
            </pre>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div style={{
        padding: '14px 20px',
        background: '#141414',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {allowEdit && (
            <button
              type="button"
              onClick={handleToggleEdit}
              className={`btn btn-sm ${isEditing ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              {isEditing ? <Check size={14} /> : <Edit3 size={14} />}
              {isEditing ? 'Done Editing' : 'Edit Prompt'}
            </button>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="btn btn-sm btn-outline"
            style={{ padding: '6px 12px', fontSize: '12px' }}
            title="Reset to generated default"
          >
            <RotateCcw size={14} />
            Reset
          </button>

          {onRegenerate && (
            <button
              type="button"
              onClick={onRegenerate}
              className="btn btn-sm btn-outline"
              style={{ padding: '6px 12px', fontSize: '12px' }}
              title="Re-synthesize prompt"
            >
              <Sparkles size={14} />
              Regenerate
            </button>
          )}
        </div>

        {/* Primary Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary"
          style={{
            minWidth: '140px',
            padding: '8px 18px',
            background: copied ? '#10b981' : 'var(--accent-primary)',
            color: copied ? '#ffffff' : '#0B0B0B',
            boxShadow: copied ? '0 0 15px rgba(16, 185, 129, 0.4)' : '0 2px 14px rgba(255, 122, 0, 0.3)'
          }}
        >
          {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
          {copied ? 'Copied Prompt!' : 'Copy Prompt'}
        </button>
      </div>
    </div>
  );
}
