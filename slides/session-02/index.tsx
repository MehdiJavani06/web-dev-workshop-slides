import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import { type CSSProperties, type ReactNode, useState } from 'react';

// ─── Design System ────────────────────────────────────────────────────────────

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#0a0a0a', accent: '#de3b3d' },
  fonts: {
    display:
      '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
    body: '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 130, body: 30 },
  radius: 12,
};

// ─── Color Tokens & Metrics ───────────────────────────────────────────────────

const ink = {
  text: '#0a0a0a',
  soft: '#2e2e2e',
  muted: '#666666',
  dim: '#999999',
  border: '#e2e4e8',
  panel: '#f8f9fa',
  panelDark: '#0e1117',
  accent: '#de3b3d',
  accentSoft: 'rgba(222, 59, 61, 0.08)',
  accentBorder: 'rgba(222, 59, 61, 0.25)',
  mint: '#15803d',
  mintSoft: 'rgba(21, 128, 61, 0.1)',
  sky: '#0284c7',
  skySoft: 'rgba(2, 132, 199, 0.1)',
  amber: '#b45309',
  amberSoft: 'rgba(180, 83, 9, 0.1)',
  indigo: '#4338ca',
  indigoSoft: 'rgba(67, 56, 202, 0.1)',
};

const font = {
  sans: 'var(--osd-font-body)',
  display: 'var(--osd-font-display)',
  mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
};

const shadow = {
  window:
    '0 0 0 1px rgba(0,0,0,0.08), 0 4px 16px -4px rgba(0,0,0,0.08), 0 16px 36px -12px rgba(0,0,0,0.12)',
  card: '0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px -2px rgba(0,0,0,0.06)',
};

// Robust Flexbox canvas root: Header, Content, and Footer flow deterministically without overlap
const fill: CSSProperties = {
  width: 1920,
  height: 1080,
  position: 'relative',
  overflow: 'hidden',
  background: '#ffffff',
  color: ink.text,
  fontFamily: font.sans,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: '52px 120px 36px 120px',
};

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const Svg = ({
  size = 36,
  color = ink.soft,
  children,
}: {
  size?: number;
  color?: string;
  children: ReactNode;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    {children}
  </svg>
);

const IconCode = ({ size = 36, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Svg>
);

const IconFile = ({ size = 36, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </Svg>
);

const IconTree = ({ size = 36, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <path d="M6.5 10v7a2 2 0 0 0 2 2H14" />
  </Svg>
);

const IconSparkles = ({ size = 36, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </Svg>
);

const IconCheck = ({ size = 36, color = ink.mint }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Svg>
);

const IconAlert = ({ size = 36, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Svg>
);

const IconRefresh = ({ size = 20, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21h5v-5" />
  </Svg>
);

// ─── Header & Footer Chrome ───────────────────────────────────────────────────

const SlideHeader = ({
  part,
  title,
  subtitle,
}: {
  part: string;
  title: string;
  subtitle?: string;
}) => (
  <div style={{ marginBottom: 20, flexShrink: 0 }}>
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: ink.accent,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 6,
      }}
    >
      {part}
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px 24px' }}>
      <h2
        style={{
          margin: 0,
          fontFamily: font.display,
          fontSize: 54,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: ink.text,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <span style={{ fontSize: 26, color: ink.muted, fontWeight: 400 }}>
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

// Fixed: Correctly destructure { current, total } to avoid [object Object]
const SlideFooter = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        marginTop: 18,
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${ink.border}`,
        paddingTop: 16,
        fontSize: 22,
        color: ink.muted,
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ fontWeight: 700, color: ink.text }}>SESSION 02</span>
        <span style={{ color: ink.border }}>|</span>
        <span>Semantic HTML5, DOM Architecture & Strategic AI</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 600, color: ink.soft }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Reusable Syntax Highlighter ──────────────────────────────────────────────

const renderHighlightedLine = (line: string): ReactNode => {
  if (line.trim().startsWith('<!--')) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }
  if (line.trim().startsWith('<!DOCTYPE')) {
    return <span style={{ color: '#d2a8ff', fontWeight: 600 }}>{line}</span>;
  }

  // Tokenize tags, attributes, values, and text
  const parts = line.split(
    /(<\/?[a-zA-Z0-9-]+|\/?>|="[^"]*"|='[^']*'|[a-zA-Z0-9-]+(?==)|<!--.*?-->)/g
  );

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('<!--')) {
          return (
            <span key={i} style={{ color: '#8b949e', fontStyle: 'italic' }}>
              {part}
            </span>
          );
        }
        if (part.startsWith('<') || part.startsWith('</')) {
          return (
            <span key={i} style={{ color: '#79c0ff', fontWeight: 600 }}>
              {part}
            </span>
          );
        }
        if (part === '>' || part === '/>') {
          return (
            <span key={i} style={{ color: '#79c0ff', fontWeight: 600 }}>
              {part}
            </span>
          );
        }
        if (part.startsWith('="') || part.startsWith("='")) {
          return (
            <span key={i}>
              <span style={{ color: '#8b949e' }}>=</span>
              <span style={{ color: '#a5d6ff' }}>{part.slice(1)}</span>
            </span>
          );
        }
        if (
          /^[a-zA-Z0-9-]+$/.test(part) &&
          (parts[i + 1]?.startsWith('="') || parts[i + 1]?.startsWith("='"))
        ) {
          return (
            <span key={i} style={{ color: '#ffa657' }}>
              {part}
            </span>
          );
        }
        return (
          <span key={i} style={{ color: '#f0f6fc' }}>
            {part}
          </span>
        );
      })}
    </>
  );
};

// Reusable Highlighted Code Block for slides and examples
const HighlightedCode = ({
  code,
  style,
}: {
  code: string;
  style?: CSSProperties;
}) => {
  const lines = code.trim().split('\n');
  return (
    <div
      style={{
        fontFamily: font.mono,
        fontSize: 22,
        lineHeight: 1.6,
        background: '#0d1117',
        padding: '20px 24px',
        borderRadius: 12,
        border: '1px solid #30363d',
        overflowX: 'auto',
        ...style,
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ whiteSpace: 'pre' }}>
          {renderHighlightedLine(line)}
        </div>
      ))}
    </div>
  );
};

// ─── Interactive Live Playground Component ───────────────────────────────────

export interface PlaygroundStep {
  label: string;
  desc?: string;
  code: string;
}

const LivePlayground = ({ steps }: { steps: PlaygroundStep[] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState(steps[0].code);
  const [isEditing, setIsEditing] = useState(false);
  const [isModified, setIsModified] = useState(false);

  // When step changes, update code and reset editing
  const selectStep = (idx: number) => {
    setCurrentStep(idx);
    setCode(steps[idx].code);
    setIsModified(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      selectStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      selectStep(currentStep - 1);
    }
  };

  const resetStep = () => {
    setCode(steps[currentStep].code);
    setIsModified(false);
  };

  // Compute newly added lines compared to previous step
  const prevCode = currentStep > 0 ? steps[currentStep - 1].code : '';
  const prevLines = new Set(prevCode.split('\n').map((l) => l.trim()));
  const currentLines = code.split('\n');

  // Preview document injected into sandboxed iframe with clean projector-ready base styling
  const previewDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 24px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 26px;
      line-height: 1.5;
      color: #0f172a;
      background: #ffffff;
    }
    h1 { font-size: 42px; margin: 0 0 16px 0; color: #0a0a0a; line-height: 1.15; font-weight: 800; }
    h2 { font-size: 34px; margin: 24px 0 12px 0; color: #1e293b; line-height: 1.2; font-weight: 700; }
    h3 { font-size: 28px; margin: 18px 0 10px 0; color: #334155; font-weight: 600; }
    p { margin: 0 0 18px 0; font-size: 26px; }
    a { color: #de3b3d; text-decoration: underline; font-weight: 600; }
    strong { font-weight: 700; color: #0a0a0a; }
    em { font-style: italic; color: #334155; }
    button {
      padding: 12px 26px;
      font-size: 24px;
      font-weight: 600;
      background: #de3b3d;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: inline-block;
    }
    button:hover { background: #b91c1c; }
    img { max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; }
    ul, ol { margin: 0 0 20px 32px; padding: 0; font-size: 26px; }
    li { margin-bottom: 10px; }
    header, nav, main, article, section, footer {
      border: 2px dashed #94a3b8;
      padding: 16px;
      margin-bottom: 16px;
      border-radius: 8px;
      background: #f8fafc;
    }
    header::before { content: "<header>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    nav::before { content: "<nav>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    main::before { content: "<main>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    article::before { content: "<article>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    section::before { content: "<section>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    footer::before { content: "<footer>"; display: block; font-size: 18px; color: #64748b; font-family: monospace; font-weight: bold; margin-bottom: 6px; }
    form {
      border: 2px dashed #0284c7;
      padding: 18px;
      margin-bottom: 16px;
      border-radius: 8px;
      background: #f0f9ff;
    }
    form::before { content: "<form>"; display: block; font-size: 18px; color: #0284c7; font-family: monospace; font-weight: bold; margin-bottom: 10px; }
    label { font-size: 24px; font-weight: 600; color: #0f172a; display: inline-block; margin-bottom: 6px; cursor: pointer; }
    input[type="text"], input[type="email"], input[type="password"], select, textarea {
      font-size: 22px;
      padding: 10px 14px;
      border: 2px solid #94a3b8;
      border-radius: 6px;
      width: 100%;
      max-width: 460px;
      display: block;
      margin-top: 4px;
      font-family: inherit;
    }
    input[type="checkbox"], input[type="radio"] {
      width: 22px;
      height: 22px;
      margin-right: 8px;
      vertical-align: middle;
      cursor: pointer;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 22px;
    }
    caption {
      font-size: 20px;
      font-weight: 700;
      color: #475569;
      text-align: left;
      margin-bottom: 8px;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 10px 14px;
      text-align: left;
    }
    th {
      background: #f1f5f9;
      font-weight: 700;
      color: #0f172a;
    }
    tfoot td {
      background: #f8fafc;
      font-weight: 600;
      color: #64748b;
    }
  </style>
</head>
<body>
${code}
</body>
</html>`;

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {/* Step Navigation Bar: Click-based Prev/Next + Pill Jumpers + Mode Toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: ink.panel,
          padding: '10px 18px',
          borderRadius: 12,
          border: `1px solid ${ink.border}`,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Previous Step Button */}
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 700,
              background: '#ffffff',
              color: currentStep === 0 ? ink.dim : ink.text,
              border: `1px solid ${ink.border}`,
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 0 ? 0.5 : 1,
            }}
          >
            ← Prev
          </button>

          {/* Step Pill Selectors */}
          <div style={{ display: 'flex', gap: 8 }}>
            {steps.map((st, idx) => {
              const active = idx === currentStep;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectStep(idx)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: active ? 700 : 500,
                    border: active ? `2px solid ${ink.accent}` : `1px solid ${ink.border}`,
                    background: active ? '#ffffff' : 'transparent',
                    color: active ? ink.accent : ink.soft,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {st.label}
                </button>
              );
            })}
          </div>

          {/* Next Step Button (Prominent for easy clicker progression) */}
          <button
            type="button"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 700,
              background: currentStep === steps.length - 1 ? '#ffffff' : ink.accent,
              color: currentStep === steps.length - 1 ? ink.dim : '#ffffff',
              border: `1px solid ${currentStep === steps.length - 1 ? ink.border : ink.accent}`,
              cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentStep === steps.length - 1 ? 0.5 : 1,
            }}
          >
            Next Step →
          </button>
        </div>

        {/* View / Edit Mode Toggle & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 20, color: ink.muted, fontWeight: 500 }}>
            {steps[currentStep].desc}
          </span>

          {/* Live Edit Toggle */}
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 700,
              background: isEditing ? ink.amber : '#ffffff',
              color: isEditing ? '#ffffff' : ink.soft,
              border: `1px solid ${isEditing ? ink.amber : ink.border}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>{isEditing ? '✓ Done Editing' : '✎ Live Edit'}</span>
          </button>

          {/* Reset Button */}
          {isModified && (
            <button
              type="button"
              onClick={resetStep}
              style={{
                padding: '8px 14px',
                fontSize: 18,
                fontWeight: 600,
                color: ink.muted,
                background: '#ffffff',
                border: `1px solid ${ink.border}`,
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <IconRefresh size={18} color={ink.muted} />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Split Window: Left Code Viewer/Editor, Right Live Browser */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 24 }}>
        {/* Left: Code Viewer / Editor */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: ink.panelDark,
            borderRadius: 14,
            boxShadow: shadow.window,
            overflow: 'hidden',
            border: '1px solid #1f2937',
          }}
        >
          {/* Editor Header */}
          <div
            style={{
              height: 46,
              background: '#161b22',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: '1px solid #30363d',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
              <span
                style={{
                  marginLeft: 12,
                  fontFamily: font.mono,
                  fontSize: 19,
                  color: '#e2e8f0',
                  fontWeight: 600,
                }}
              >
                index.html
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {isEditing ? (
                <span
                  style={{
                    fontSize: 15,
                    fontFamily: font.mono,
                    color: '#fbbf24',
                    background: 'rgba(251, 191, 36, 0.15)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontWeight: 700,
                  }}
                >
                  EDITING LIVE
                </span>
              ) : (
                <span
                  style={{
                    fontSize: 15,
                    fontFamily: font.mono,
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.15)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontWeight: 700,
                  }}
                >
                  SYNTAX HIGHLIGHTED
                </span>
              )}
            </div>
          </div>

          {/* Body: Either Syntax-Highlighted Viewer (clean line numbers, diff background only) OR Live Editable Textarea */}
          {isEditing ? (
            <textarea
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setIsModified(true);
              }}
              spellCheck={false}
              style={{
                flex: 1,
                width: '100%',
                margin: 0,
                padding: '24px 28px',
                fontFamily: font.mono,
                fontSize: 24,
                lineHeight: 1.6,
                color: '#f8fafc',
                background: ink.panelDark,
                border: 'none',
                outline: 'none',
                resize: 'none',
                boxSizing: 'border-box',
                tabSize: 2,
              }}
            />
          ) : (
            <div
              onClick={() => setIsEditing(true)}
              style={{
                flex: 1,
                padding: '20px 0',
                overflowY: 'auto',
                cursor: 'text',
                fontFamily: font.mono,
                fontSize: 24,
                lineHeight: 1.65,
                background: ink.panelDark,
              }}
            >
              {currentLines.map((line, idx) => {
                const isNew = currentStep > 0 && line.trim() && !prevLines.has(line.trim());
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '2px 18px',
                      background: isNew ? 'rgba(34, 197, 94, 0.12)' : 'transparent',
                      borderLeft: isNew ? '4px solid #22c55e' : '4px solid transparent',
                    }}
                  >
                    {/* Fixed line number gutter (clean numbers, no '+' shifting, right-aligned) */}
                    <span
                      style={{
                        width: 36,
                        textAlign: 'right',
                        marginRight: 20,
                        color: isNew ? '#22c55e' : '#484f58',
                        fontSize: 20,
                        userSelect: 'none',
                        fontWeight: isNew ? 600 : 400,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>

                    {/* Syntax-highlighted content */}
                    <span style={{ flex: 1, whiteSpace: 'pre' }}>
                      {renderHighlightedLine(line)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Simulated Browser */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: '#ffffff',
            borderRadius: 14,
            boxShadow: shadow.window,
            overflow: 'hidden',
            border: `1px solid ${ink.border}`,
          }}
        >
          {/* Browser Header Bar */}
          <div
            style={{
              height: 46,
              background: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: `1px solid ${ink.border}`,
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#cbd5e1' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#cbd5e1' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#cbd5e1' }} />
            </div>
            {/* Address Bar */}
            <div
              style={{
                flex: 1,
                background: '#ffffff',
                height: 32,
                borderRadius: 6,
                border: `1px solid ${ink.border}`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                fontSize: 18,
                fontFamily: font.mono,
                color: ink.soft,
                gap: 8,
              }}
            >
              <span style={{ color: ink.mint, fontWeight: 700 }}>🔒</span>
              <span>http://localhost:3000/index.html</span>
            </div>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: ink.accent,
                background: ink.accentSoft,
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              LIVE RENDER
            </span>
          </div>

          {/* Sandboxed iframe rendering */}
          <iframe
            title="Live Preview"
            srcDoc={previewDoc}
            sandbox="allow-scripts"
            style={{
              flex: 1,
              width: '100%',
              border: 'none',
              background: '#ffffff',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Interactive Quiz Component ──────────────────────────────────────────────

interface QuizOption {
  label: string;
  isCorrect: boolean;
  explanation: string;
}

const InteractiveQuiz = ({
  question,
  options,
}: {
  question: string;
  options: QuizOption[];
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <div
        style={{
          background: ink.panel,
          padding: '24px 32px',
          borderRadius: 14,
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: ink.accent,
            marginBottom: 6,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Concept Check · Progressive Drill
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1.25,
            color: ink.text,
          }}
        >
          {question}
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          flex: 1,
          minHeight: 0,
        }}
      >
        {options.map((opt, idx) => {
          const isChosen = selected === idx;
          const showFeedback = selected !== null;
          let borderColor = ink.border;
          let bg = '#ffffff';

          if (showFeedback) {
            if (opt.isCorrect) {
              borderColor = ink.mint;
              bg = ink.mintSoft;
            } else if (isChosen) {
              borderColor = ink.accent;
              bg = ink.accentSoft;
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelected(idx)}
              style={{
                padding: '24px 28px',
                borderRadius: 14,
                border: `2px solid ${borderColor}`,
                background: bg,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
                boxShadow: shadow.card,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: isChosen ? ink.accent : ink.panel,
                    color: isChosen ? '#ffffff' : ink.soft,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <div style={{ fontSize: 28, fontWeight: 600, color: ink.text, lineHeight: 1.3 }}>
                  {opt.label}
                </div>
              </div>

              {showFeedback && (
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: `1px solid ${opt.isCorrect ? 'rgba(21, 128, 61, 0.2)' : 'rgba(222, 59, 61, 0.2)'}`,
                    fontSize: 22,
                    fontWeight: 500,
                    color: opt.isCorrect ? ink.mint : isChosen ? ink.accent : ink.muted,
                    lineHeight: 1.4,
                  }}
                >
                  {opt.isCorrect ? '✓ ' : isChosen ? '✗ ' : ''}
                  {opt.explanation}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Interactive Parsons Nesting Puzzle Component ─────────────────────────────

const ParsonsNestingChallenge = () => {
  const [fixed, setFixed] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        gap: 32,
      }}
    >
      {/* Left Column: The Problem & Action */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: ink.panel,
          padding: '32px 36px',
          borderRadius: 16,
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 8,
            }}
          >
            Parsons Drill · Spot & Fix Broken Nesting
          </div>
          <h3
            style={{
              margin: '0 0 16px 0',
              fontSize: 36,
              fontWeight: 700,
              color: ink.text,
              lineHeight: 1.2,
            }}
          >
            The Parent Must Close After The Child
          </h3>
          <p style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, margin: '0 0 24px 0' }}>
            Look at the snippet below. Notice how <code style={{ fontFamily: font.mono, color: ink.accent }}>&lt;/main&gt;</code> is closing before its nested child <code style={{ fontFamily: font.mono, color: ink.accent }}>&lt;/article&gt;</code>, and <code style={{ fontFamily: font.mono, color: ink.accent }}>&lt;p&gt;</code> was never closed!
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <button
            type="button"
            onClick={() => setFixed(false)}
            style={{
              flex: 1,
              padding: '16px 20px',
              fontSize: 22,
              fontWeight: !fixed ? 700 : 500,
              background: !fixed ? ink.accent : '#ffffff',
              color: !fixed ? '#ffffff' : ink.soft,
              border: `2px solid ${!fixed ? ink.accent : ink.border}`,
              borderRadius: 10,
              cursor: 'pointer',
            }}
          >
            View Broken State
          </button>
          <button
            type="button"
            onClick={() => setFixed(true)}
            style={{
              flex: 1,
              padding: '16px 20px',
              fontSize: 22,
              fontWeight: fixed ? 700 : 500,
              background: fixed ? ink.mint : '#ffffff',
              color: fixed ? '#ffffff' : ink.soft,
              border: `2px solid ${fixed ? ink.mint : ink.border}`,
              borderRadius: 10,
              cursor: 'pointer',
            }}
          >
            Fix Nesting Order ✓
          </button>
        </div>
      </div>

      {/* Right Column: Code Diff Window with Syntax Highlighting */}
      <div
        style={{
          flex: 1,
          background: ink.panelDark,
          borderRadius: 16,
          padding: '32px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: shadow.window,
          border: '1px solid #1f2937',
        }}
      >
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 25,
            lineHeight: 1.8,
            color: '#e2e8f0',
          }}
        >
          <div>{renderHighlightedLine('<main>')}</div>
          <div style={{ paddingLeft: 32 }}>{renderHighlightedLine('<article>')}</div>
          <div style={{ paddingLeft: 64 }}>
            {renderHighlightedLine('<h2>Understanding the DOM</h2>')}
          </div>

          {!fixed ? (
            <>
              <div
                style={{
                  paddingLeft: 64,
                  background: 'rgba(239, 68, 68, 0.2)',
                  borderRadius: 6,
                }}
              >
                <span style={{ color: '#f87171' }}>&lt;p&gt;The DOM is an object tree. </span>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>← Missing &lt;/p&gt;!</span>
              </div>
              <div
                style={{
                  paddingLeft: 32,
                  background: 'rgba(239, 68, 68, 0.2)',
                  borderRadius: 6,
                }}
              >
                <span style={{ color: '#f87171' }}>&lt;/main&gt; </span>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>← Closed parent prematurely!</span>
              </div>
              <div>{renderHighlightedLine('</article>')}</div>
            </>
          ) : (
            <>
              <div
                style={{
                  paddingLeft: 64,
                  background: 'rgba(16, 185, 129, 0.18)',
                  borderRadius: 6,
                }}
              >
                {renderHighlightedLine('<p>The DOM is an object tree.</p>')}
              </div>
              <div
                style={{
                  paddingLeft: 32,
                  background: 'rgba(16, 185, 129, 0.18)',
                  borderRadius: 6,
                }}
              >
                {renderHighlightedLine('</article>')}
              </div>
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.18)',
                  borderRadius: 6,
                }}
              >
                {renderHighlightedLine('</main>')}
              </div>
            </>
          )}
        </div>

        <div
          style={{
            marginTop: 24,
            padding: '14px 18px',
            borderRadius: 10,
            background: fixed ? ink.mintSoft : ink.accentSoft,
            border: `1px solid ${fixed ? ink.mint : ink.accent}`,
            color: fixed ? ink.mint : ink.accent,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          {fixed
            ? '✓ Perfect! Each child container is completely sealed before its parent closes.'
            : '⚠ Warning: The browser rendering engine will guess your intent, often breaking layouts downstream!'}
        </div>
      </div>
    </div>
  );
};

// ─── SLIDE 01: Cover ──────────────────────────────────────────────────────────

const Cover: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div style={{ maxWidth: 1600 }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 20px',
          borderRadius: 30,
          background: ink.accentSoft,
          border: `1px solid ${ink.accentBorder}`,
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 700, color: ink.accent }}>
          SESSION 02 · FULL PRESENTATION DECK
        </span>
      </div>

      <h1
        style={{
          fontFamily: font.display,
          fontSize: 88,
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.04em',
          margin: '0 0 28px 0',
          color: ink.text,
        }}
      >
        Semantic HTML5, DOM Architecture
        <br />
        <span style={{ color: ink.accent }}>& Pragmatic AI Workflows</span>
      </h1>

      <p
        style={{
          fontSize: 34,
          lineHeight: 1.5,
          color: ink.soft,
          maxWidth: 1300,
          margin: 0,
        }}
      >
        Master the skeleton of the web: document anatomy, live interactive playgrounds, the DOM tree,
        pragmatic in-class AI workflows, guided hands-on lab, and homework assignment.
      </p>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 02: Agenda ──────────────────────────────────────────────────────────

const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Overview"
      title="Session Roadmap"
      subtitle="5 interactive learning phases"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 22,
      }}
    >
      {[
        {
          num: '01',
          title: 'HTML Anatomy',
          desc: 'Syntax, tags, attributes, and the document skeleton',
          icon: <IconFile size={38} color={ink.accent} />,
        },
        {
          num: '02',
          title: 'Core Tags',
          desc: 'Headings, text, links, images, and block vs. inline flow',
          icon: <IconCode size={38} color={ink.accent} />,
        },
        {
          num: '03',
          title: 'DOM, Forms & Tables',
          desc: 'Nesting dolls, landmarks, forms, and table architecture',
          icon: <IconTree size={38} color={ink.accent} />,
        },
        {
          num: '04',
          title: 'Pragmatic AI',
          desc: 'Socratic debugging, mock data generation, and 60-second audit',
          icon: <IconSparkles size={38} color={ink.accent} />,
        },
        {
          num: '05',
          title: 'Lab & Homework',
          desc: 'Guided div soup surgery, DevTools verification, and homework',
          icon: <IconCheck size={38} color={ink.accent} />,
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            background: ink.panel,
            borderRadius: 16,
            padding: '28px 24px',
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: shadow.card,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 30,
                fontFamily: font.mono,
                fontWeight: 800,
                color: ink.accent,
                marginBottom: 16,
              }}
            >
              {item.num}
            </div>
            <div style={{ marginBottom: 20 }}>{item.icon}</div>
            <h3
              style={{
                fontSize: 30,
                fontWeight: 700,
                margin: '0 0 10px 0',
                color: ink.text,
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: 22, lineHeight: 1.45, color: ink.soft, margin: 0 }}>
              {item.desc}
            </p>
          </div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: ink.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Hands-on Drills
          </div>
        </div>
      ))}
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 03: Section Divider 1 ──────────────────────────────────────────────

const Divider1: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PART 01
      </div>
      <h2
        style={{
          fontFamily: font.display,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          color: ink.text,
        }}
      >
        The Anatomy of HTML
      </h2>
      <p style={{ fontSize: 34, color: ink.muted, maxWidth: 1200, margin: 0 }}>
        Syntax grammar, tag mechanics, attributes, and the foundational document skeleton.
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── SLIDE 04: What is HTML? ──────────────────────────────────────────────────

const WhatIsHtml: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Anatomy of HTML"
      title="What is HTML?"
      subtitle="HyperText Markup Language"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}
    >
      {/* HTML Card */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '36px 32px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Layer 1 · The Skeleton
          </div>
          <h3 style={{ fontSize: 42, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            HTML
          </h3>
          <p style={{ fontSize: 26, lineHeight: 1.5, color: ink.soft, margin: '0 0 20px 0' }}>
            Defines the <strong>structure</strong>, <strong>meaning</strong>, and <strong>content</strong> of the webpage.
          </p>
        </div>
        <div
          style={{
            background: ink.accentSoft,
            padding: '18px 20px',
            borderRadius: 12,
            fontSize: 22,
            fontWeight: 600,
            color: ink.accent,
          }}
        >
          "What is this content?"
          <br />
          <span style={{ fontSize: 18, fontWeight: 400, color: ink.soft }}>
            (Heading, paragraph, image, link)
          </span>
        </div>
      </div>

      {/* CSS Card */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 32px',
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.sky,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Layer 2 · The Skin
          </div>
          <h3 style={{ fontSize: 42, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            CSS
          </h3>
          <p style={{ fontSize: 26, lineHeight: 1.5, color: ink.soft, margin: '0 0 20px 0' }}>
            Controls visual <strong>presentation</strong>, colors, typography, spacing, and responsive layout.
          </p>
        </div>
        <div
          style={{
            background: ink.skySoft,
            padding: '18px 20px',
            borderRadius: 12,
            fontSize: 22,
            fontWeight: 600,
            color: ink.sky,
          }}
        >
          "How does it look?"
          <br />
          <span style={{ fontSize: 18, fontWeight: 400, color: ink.soft }}>
            (Covered in Sessions 3–5)
          </span>
        </div>
      </div>

      {/* JS Card */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 32px',
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.amber,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Layer 3 · The Muscles
          </div>
          <h3 style={{ fontSize: 42, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            JavaScript
          </h3>
          <p style={{ fontSize: 26, lineHeight: 1.5, color: ink.soft, margin: '0 0 20px 0' }}>
            Provides <strong>interactivity</strong>, logic, state management, and asynchronous data fetching.
          </p>
        </div>
        <div
          style={{
            background: ink.amberSoft,
            padding: '18px 20px',
            borderRadius: 12,
            fontSize: 22,
            fontWeight: 600,
            color: ink.amber,
          }}
        >
          "How does it behave?"
          <br />
          <span style={{ fontSize: 18, fontWeight: 400, color: ink.soft }}>
            (Covered in Sessions 6–10)
          </span>
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 05: Tag Anatomy & Syntax Breakdown ─────────────────────────────────

const TagAnatomy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Anatomy of HTML"
      title="Anatomy of an HTML Element"
      subtitle="Opening tag, attributes, content, and closing tag"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Visual Anatomy Box */}
      <div
        style={{
          background: ink.panelDark,
          borderRadius: 16,
          padding: '40px 50px',
          boxShadow: shadow.window,
          border: '1px solid #1f2937',
        }}
      >
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 42,
            lineHeight: 1.6,
            color: '#f8fafc',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#60a5fa' }}>&lt;p</span>
          <span style={{ color: '#fbbf24' }}> class</span>
          <span style={{ color: '#e2e8f0' }}>=</span>
          <span style={{ color: '#34d399' }}>"highlight"</span>
          <span style={{ color: '#60a5fa' }}>&gt;</span>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Hello, Web!</span>
          <span style={{ color: '#60a5fa' }}>&lt;/p&gt;</span>
        </div>

        {/* Labels under the elements */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            marginTop: 36,
            paddingTop: 28,
            borderTop: '1px solid #374151',
          }}
        >
          <div>
            <div style={{ fontSize: 20, color: '#60a5fa', fontWeight: 700 }}>&lt;p ... &gt;</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              Opening Tag
            </div>
            <div style={{ fontSize: 19, color: '#94a3b8', marginTop: 4 }}>
              Declares element type
            </div>
          </div>
          <div>
            <div style={{ fontSize: 20, color: '#fbbf24', fontWeight: 700 }}>class="highlight"</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              Attribute Name & Value
            </div>
            <div style={{ fontSize: 19, color: '#94a3b8', marginTop: 4 }}>
              Provides metadata/modifier
            </div>
          </div>
          <div>
            <div style={{ fontSize: 20, color: '#ffffff', fontWeight: 700 }}>Hello, Web!</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              Content
            </div>
            <div style={{ fontSize: 19, color: '#94a3b8', marginTop: 4 }}>
              Rendered text or children
            </div>
          </div>
          <div>
            <div style={{ fontSize: 20, color: '#60a5fa', fontWeight: 700 }}>&lt;/p&gt;</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              Closing Tag
            </div>
            <div style={{ fontSize: 19, color: '#94a3b8', marginTop: 4 }}>
              Notice forward slash /
            </div>
          </div>
        </div>
      </div>

      {/* Critical Rule Callout */}
      <div
        style={{
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          borderRadius: 14,
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: ink.accentSoft,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <IconAlert size={30} color={ink.accent} />
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: ink.text }}>
            Void (Self-Closing) Elements in HTML5
          </div>
          <div style={{ fontSize: 21, color: ink.soft, marginTop: 4 }}>
            Elements without content (e.g. <code style={{ fontFamily: font.mono }}>&lt;img&gt;</code>,{' '}
            <code style={{ fontFamily: font.mono }}>&lt;input&gt;</code>,{' '}
            <code style={{ fontFamily: font.mono }}>&lt;br&gt;</code>,{' '}
            <code style={{ fontFamily: font.mono }}>&lt;meta&gt;</code>) do NOT require closing tags.
          </div>
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 06: Document Skeleton Live Playground ──────────────────────────────

const DocumentSkeleton: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Anatomy of HTML"
      title="The Document Skeleton"
      subtitle="Interactive playground: Click Next Step or tabs to watch code evolve"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Modern DOCTYPE',
          desc: '<!DOCTYPE html> tells browsers to render in modern standards mode',
          code: `<!DOCTYPE html>
<!-- Tells the browser: render in modern HTML5 standards mode -->`,
        },
        {
          label: '2. Root <html>',
          desc: '<html> wraps everything with the document language attribute',
          code: `<!DOCTYPE html>
<html lang="en">
  <!-- Root container for the entire document -->
</html>`,
        },
        {
          label: '3. Add <head>',
          desc: '<head> holds invisible metadata like charset, title, and viewport',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <!-- Notice: Nothing in <head> appears inside the webpage canvas! -->
</html>`,
        },
        {
          label: '4. Add <body>',
          desc: '<body> contains all visible UI elements',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to Web Development!</h1>
    <p>Everything you see inside this window lives inside the &lt;body&gt; tag.</p>
    <button type="button">Click Me</button>
  </body>
</html>`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 07: Head vs. Body ──────────────────────────────────────────────────

const HeadVsBody: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Anatomy of HTML"
      title="Head vs. Body"
      subtitle="The invisible metadata vs. the visible viewport"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 36,
      }}
    >
      {/* Head Container */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.sky,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Container 1 · Invisible Metadata
          </div>
          <h3
            style={{
              fontFamily: font.mono,
              fontSize: 44,
              fontWeight: 800,
              margin: '0 0 16px 0',
              color: ink.text,
            }}
          >
            &lt;head&gt;
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 24px 0' }}>
            Information <strong>about</strong> the document for browsers, search engines, and social media scrapers.
          </p>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24 }}>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;title&gt;</code>: Browser tab label & search result title
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;meta charset="UTF-8"&gt;</code>: International text support
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;meta name="viewport" ...&gt;</code>: Mobile responsive scaling
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;link rel="stylesheet" ...&gt;</code>: External styles
            </li>
          </ul>
        </div>
        <div
          style={{
            background: ink.skySoft,
            padding: '14px 18px',
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 600,
            color: ink.sky,
          }}
        >
          Never put visible headings, images, or buttons inside &lt;head&gt;!
        </div>
      </div>

      {/* Body Container */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '36px 40px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Container 2 · Visible Content
          </div>
          <h3
            style={{
              fontFamily: font.mono,
              fontSize: 44,
              fontWeight: 800,
              margin: '0 0 16px 0',
              color: ink.text,
            }}
          >
            &lt;body&gt;
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 24px 0' }}>
            Everything that renders inside the browser window for human users to see and interact with.
          </p>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24 }}>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;h1&gt;</code> ... <code style={{ fontFamily: font.mono }}>&lt;h6&gt;</code>: Headings
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;p&gt;</code>: Text paragraphs
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;a&gt;</code> & <code style={{ fontFamily: font.mono }}>&lt;button&gt;</code>: Navigation & actions
            </li>
            <li>
              <code style={{ fontFamily: font.mono }}>&lt;header&gt;</code>, <code style={{ fontFamily: font.mono }}>&lt;main&gt;</code>, <code style={{ fontFamily: font.mono }}>&lt;article&gt;</code>: Semantic layout
            </li>
          </ul>
        </div>
        <div
          style={{
            background: ink.accentSoft,
            padding: '14px 18px',
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 600,
            color: ink.accent,
          }}
        >
          If a user sees it on the screen, it must live inside &lt;body&gt;.
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 08: Concept Check 1 ────────────────────────────────────────────────

const ConceptCheck1: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Anatomy of HTML"
      title="Progressive Review"
      subtitle="Click an option to test your understanding"
    />

    <InteractiveQuiz
      question="Where should a website's navigation bar and main headline be placed in the HTML document?"
      options={[
        {
          label: "Inside the <head> tag, because it is at the top of the file",
          isCorrect: false,
          explanation: "<head> is strictly for invisible metadata. Content placed in <head> will not render as normal UI.",
        },
        {
          label: "Inside the <body> tag, because all visible content lives in body",
          isCorrect: true,
          explanation: "Correct! Everything a human sees and interacts with on the page belongs inside <body>.",
        },
        {
          label: "Directly after the <!DOCTYPE html> declaration",
          isCorrect: false,
          explanation: "All HTML elements must be wrapped within the root <html> container.",
        },
        {
          label: "Inside a <meta> tag with content='navigation'",
          isCorrect: false,
          explanation: "<meta> tags are for browser metadata, not visual components.",
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 09: Section Divider 2 ──────────────────────────────────────────────

const Divider2: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PART 02
      </div>
      <h2
        style={{
          fontFamily: font.display,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          color: ink.text,
        }}
      >
        Core Tags & Live Sandbox
      </h2>
      <p style={{ fontSize: 34, color: ink.muted, maxWidth: 1200, margin: 0 }}>
        Headings, paragraphs, hyperlinks, images, lists, and understanding block vs. inline flow.
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── SLIDE 10: Headings & Hierarchy Live Playground ───────────────────────────

const HeadingsPlayground: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Headings Hierarchy (h1 – h6)"
      subtitle="Headings establish document rank, not just font size"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Single <h1> Rule',
          desc: 'Every page should have exactly one <h1> representing its primary subject',
          code: `<!-- Exactly ONE <h1> per page: The Main Document Topic -->
<h1>Web Development Academy</h1>
<p>Welcome to modern web development in the AI era.</p>`,
        },
        {
          label: '2. Sub-sections (h2 & h3)',
          desc: 'Use <h2> for major sections and <h3> for sub-topics',
          code: `<h1>Web Development Academy</h1>

<h2>Module 1: Foundations</h2>
<p>Understanding the web platform.</p>

<h3>Lesson 1.1: HTML Structure</h3>
<p>Tags, elements, and attributes.</p>

<h3>Lesson 1.2: The DOM Tree</h3>
<p>Parent and child relationships.</p>`,
        },
        {
          label: '3. Hierarchy Anti-Pattern',
          desc: 'Never jump from <h1> straight to <h4> just to get smaller text (use CSS for size)',
          code: `<h1>Proper Document Outline</h1>

<!-- GOOD: Logical nesting without skipping ranks -->
<h2>Chapter 1: The Internet</h2>
<h3>1.1 DNS Lookups</h3>
<h4>Root Nameservers</h4>

<!-- WRONG: Jumping from h1 to h5 just for styling! -->
<!-- <h5>Bad skip</h5> -->`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 11: Paragraphs & Text Semantics ────────────────────────────────────

const TextSemanticsPlayground: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Paragraphs & Text Formatting"
      subtitle="<p>, <strong>, and <em> communicate semantic intent"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Paragraph Flow',
          desc: 'Browsers add default vertical margins between <p> blocks',
          code: `<p>HTML automatically wraps text when it reaches the edge of its container.</p>

<p>A second paragraph starts on a fresh line with clean vertical separation.</p>`,
        },
        {
          label: '2. Meaning vs. Appearance',
          desc: '<strong> means strong importance; <em> means stress emphasis',
          code: `<p>
  It is <strong>critical</strong> to close your tags.
</p>

<p>
  We <em>really</em> recommend inspecting elements in Chrome DevTools.
</p>`,
        },
        {
          label: '3. Line Breaks vs. Spacing',
          desc: 'Use <br> only for addresses or poetry, never for vertical margins!',
          code: `<p>
  Acme Web Corp<br>
  100 Innovation Way<br>
  San Francisco, CA
</p>

<!-- Note: Do NOT use <br><br> to create margins! Use CSS margins instead. -->`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 12: Hyperlinks (<a href>) ──────────────────────────────────────────

const HyperlinksPlayground: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Hyperlinks (<a href>)"
      subtitle="The superpower of the web: Connecting resources across the globe"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Absolute Links',
          desc: 'Full URLs starting with https:// point to external sites',
          code: `<h2>External Links</h2>
<p>
  Visit the official 
  <a href="https://developer.mozilla.org">MDN Web Docs</a> 
  for reference documentation.
</p>`,
        },
        {
          label: '2. Relative Links',
          desc: 'Paths relative to current file point to pages within your project',
          code: `<nav>
  <p>Internal Site Links:</p>
  <a href="/about.html">About Us</a> |
  <a href="/courses/web.html">Web Course</a> |
  <a href="/contact.html">Contact</a>
</nav>`,
        },
        {
          label: '3. Open in New Tab',
          desc: 'target="_blank" opens in a new tab; always include rel="noopener"',
          code: `<p>
  Read the spec:
  <a 
    href="https://html.spec.whatwg.org" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    WHATWG HTML Living Standard (opens in new tab)
  </a>
</p>`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 13: Images & The alt Attribute (<img src alt>) ─────────────────────

const ImagesPlayground: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Images (<img src alt>)"
      subtitle="The alt attribute is mandatory for accessibility and SEO"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Basic Image Syntax',
          desc: '<img> is a void element; src specifies image path or URL',
          code: `<h2>Web Architecture Diagram</h2>
<img 
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" 
  alt="Code displayed on computer monitor in dark room"
  width="500"
>`,
        },
        {
          label: '2. Why alt Matters',
          desc: 'Screen readers speak the alt text; search engines index it',
          code: `<!-- GOOD: Clear, descriptive alt attribute -->
<img 
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
  alt="Diverse group of software engineering students collaborating around laptop"
  width="500"
>`,
        },
        {
          label: '3. Broken Image Fallback',
          desc: 'When an image fails to load, the browser renders the alt text',
          code: `<!-- Try editing the src to an invalid link below: -->
<img 
  src="broken-image-link.jpg" 
  alt="Student holding course diploma at graduation"
  width="500"
>
<p><em>Notice how the alt text displays when the image fails to load!</em></p>`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 14: Lists & Structured Data (ul, ol, li) ───────────────────────────

const ListsPlayground: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Lists (ul, ol, li)"
      subtitle="Unordered bullets vs. ordered step sequences"
    />

    <LivePlayground
      steps={[
        {
          label: '1. Unordered List (ul)',
          desc: '<ul> creates bullet points where order does not matter',
          code: `<h2>Workshop Tech Stack</h2>
<ul>
  <li>Semantic HTML5</li>
  <li>CSS3 & Modern Flexbox</li>
  <li>Vanilla JavaScript ES6+</li>
  <li>Browser DevTools</li>
</ul>`,
        },
        {
          label: '2. Ordered List (ol)',
          desc: '<ol> creates numbered items where sequence is required',
          code: `<h2>How Code Becomes Pixels</h2>
<ol>
  <li>Browser sends HTTP GET request to server</li>
  <li>Server returns raw HTML byte stream</li>
  <li>Browser parses HTML into the DOM tree</li>
  <li>Rendering engine paints pixels onto screen</li>
</ol>`,
        },
        {
          label: '3. Nested Lists',
          desc: 'A nested list must live inside an <li> element',
          code: `<h2>Frontend Course Topics</h2>
<ul>
  <li>HTML Foundations
    <ol>
      <li>Syntax & Tags</li>
      <li>Document Hierarchy</li>
    </ol>
  </li>
  <li>CSS Box Model</li>
</ul>`,
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 15: Block vs. Inline Flow ──────────────────────────────────────────

const BlockVsInline: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Block vs. Inline Elements"
      subtitle="How elements behave in the browser's normal document flow"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 36,
      }}
    >
      {/* Block Column */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Category 1 · Layout Containers
          </div>
          <h3 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            Block Elements
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Starts on a <strong>new line</strong> and stretches horizontally to fill 100% of its parent width.
          </p>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              fontFamily: font.mono,
              fontSize: 22,
              border: `1px solid ${ink.border}`,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;h1&gt;–&lt;h6&gt;
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;p&gt;
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;div&gt;
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;header&gt;
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;main&gt;
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
              &lt;article&gt;
            </span>
          </div>
        </div>
        <div
          style={{
            background: ink.accentSoft,
            padding: '14px 18px',
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 600,
            color: ink.accent,
          }}
        >
          Stacks vertically like bricks in a wall.
        </div>
      </div>

      {/* Inline Column */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.sky}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.sky,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Category 2 · Text Flow
          </div>
          <h3 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            Inline Elements
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Flows <strong>inside</strong> existing text and only takes up the width of its own content.
          </p>
          <div
            style={{
              background: ink.panel,
              borderRadius: 10,
              padding: '16px 20px',
              fontFamily: font.mono,
              fontSize: 22,
              border: `1px solid ${ink.border}`,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <span style={{ background: ink.skySoft, color: ink.sky, padding: '4px 10px', borderRadius: 6 }}>
              &lt;a&gt;
            </span>
            <span style={{ background: ink.skySoft, color: ink.sky, padding: '4px 10px', borderRadius: 6 }}>
              &lt;span&gt;
            </span>
            <span style={{ background: ink.skySoft, color: ink.sky, padding: '4px 10px', borderRadius: 6 }}>
              &lt;strong&gt;
            </span>
            <span style={{ background: ink.skySoft, color: ink.sky, padding: '4px 10px', borderRadius: 6 }}>
              &lt;em&gt;
            </span>
            <span style={{ background: ink.skySoft, color: ink.sky, padding: '4px 10px', borderRadius: 6 }}>
              &lt;img&gt;
            </span>
          </div>
        </div>
        <div
          style={{
            background: ink.skySoft,
            padding: '14px 18px',
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 600,
            color: ink.sky,
          }}
        >
          Flows horizontally like words in a sentence.
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 16: Concept Check 2 ────────────────────────────────────────────────

const ConceptCheck2: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · Core Tags"
      title="Progressive Review"
      subtitle="Click an option to test your understanding"
    />

    <InteractiveQuiz
      question="Why is omitting the 'alt' attribute on an <img> tag considered a critical defect?"
      options={[
        {
          label: "Because the browser will refuse to load the image entirely",
          isCorrect: false,
          explanation: "The image still loads visually, which is why developers often overlook this silent bug.",
        },
        {
          label: "Because screen readers cannot describe the image to visually impaired users, and broken images show nothing",
          isCorrect: true,
          explanation: "Correct! alt text provides accessibility for screen readers and acts as a text fallback if images fail.",
        },
        {
          label: "Because modern search engines automatically block pages without image alt tags",
          isCorrect: false,
          explanation: "Search engines penalize accessibility scores, but do not outright block the domain.",
        },
        {
          label: "Because CSS cannot style an image unless alt is specified",
          isCorrect: false,
          explanation: "CSS can style elements regardless of attributes.",
        },
      ]}
    />

    <SlideFooter />
  </div>
);

// ─── SLIDE 17: Section Divider 3 ──────────────────────────────────────────────

const Divider3: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PART 03
      </div>
      <h2
        style={{
          fontFamily: font.display,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          color: ink.text,
        }}
      >
        The DOM Tree & Semantic HTML5
      </h2>
      <p style={{ fontSize: 34, color: ink.muted, maxWidth: 1200, margin: 0 }}>
        The Russian nesting dolls model, landmark tags, and the golden rule of &lt;button&gt; vs. &lt;a&gt;.
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── SLIDE 18: Russian Nesting Dolls Metaphor ──────────────────────────────────

const NestingDolls: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="The Russian Nesting Dolls Model"
      subtitle="HTML is an inverted tree: Containers inside containers"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        gap: 36,
      }}
    >
      {/* Visual Hierarchy Diagram */}
      <div
        style={{
          flex: 1,
          background: ink.panelDark,
          borderRadius: 16,
          padding: '32px 36px',
          boxShadow: shadow.window,
          border: '1px solid #1f2937',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontFamily: font.mono, fontSize: 23, lineHeight: 1.75, color: '#e2e8f0' }}>
          <div style={{ color: '#ef4444' }}>&lt;body&gt; <span style={{ color: '#94a3b8' }}>(Root Parent)</span></div>
          <div style={{ paddingLeft: 26, color: '#3b82f6' }}>
            ├── &lt;header&gt; <span style={{ color: '#94a3b8' }}>(Child of body)</span>
          </div>
          <div style={{ paddingLeft: 58, color: '#34d399' }}>
            └── &lt;h1&gt;Web Academy&lt;/h1&gt; <span style={{ color: '#94a3b8' }}>(Child of header)</span>
          </div>
          <div style={{ paddingLeft: 26, color: '#3b82f6' }}>
            ├── &lt;main&gt; <span style={{ color: '#94a3b8' }}>(Child of body, Sibling of header)</span>
          </div>
          <div style={{ paddingLeft: 58, color: '#eab308' }}>
            ├── &lt;article&gt;
          </div>
          <div style={{ paddingLeft: 92, color: '#34d399' }}>
            ├── &lt;h2&gt;DOM Architecture&lt;/h2&gt;
          </div>
          <div style={{ paddingLeft: 92, color: '#cbd5e1' }}>
            └── &lt;p&gt;Elements live in memory.&lt;/p&gt;
          </div>
          <div style={{ paddingLeft: 26, color: '#3b82f6' }}>
            └── &lt;footer&gt;
          </div>
          <div style={{ paddingLeft: 58, color: '#cbd5e1' }}>
            └── &lt;p&gt;&copy; 2026 Academy&lt;/p&gt;
          </div>
          <div style={{ color: '#ef4444' }}>&lt;/body&gt;</div>
        </div>
      </div>

      {/* Core Concept Rules */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            background: ink.panel,
            padding: '28px 32px',
            borderRadius: 16,
            border: `1px solid ${ink.border}`,
            boxShadow: shadow.card,
          }}
        >
          <h3 style={{ fontSize: 30, fontWeight: 700, margin: '0 0 14px 0', color: ink.text }}>
            Tree Relationships in Memory
          </h3>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24, margin: 0 }}>
            <li>
              <strong>Parent:</strong> Element directly enclosing another element.
            </li>
            <li>
              <strong>Child:</strong> Element directly enclosed inside a parent.
            </li>
            <li>
              <strong>Sibling:</strong> Elements sharing the exact same parent container.
            </li>
          </ul>
        </div>

        <div
          style={{
            background: ink.accentSoft,
            border: `2px solid ${ink.accentBorder}`,
            borderRadius: 16,
            padding: '28px 32px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: ink.accent, marginBottom: 8 }}>
            The Strict Nesting Rule:
          </div>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: 0 }}>
            You cannot close a parent before closing its child. If you do, the browser's parser will guess
            where to close it, creating unpredictable layout bugs!
          </p>
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 19: Why Semantic HTML Matters ──────────────────────────────────────

const WhySemantic: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="Why Semantic HTML Matters"
      subtitle="Code communicates meaning to machines and humans"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}
    >
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 32px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 40, marginBottom: 14 }}>♿️</div>
          <h3 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            1. Accessibility (a11y)
          </h3>
          <p style={{ fontSize: 24, lineHeight: 1.5, color: ink.soft, margin: 0 }}>
            Screen readers and assistive technologies use landmarks (<code style={{ fontFamily: font.mono }}>&lt;nav&gt;</code>, <code style={{ fontFamily: font.mono }}>&lt;main&gt;</code>) to allow blind users to jump directly to primary content with keyboard shortcuts.
          </p>
        </div>
        <div style={{ background: ink.mintSoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.mint }}>
          Universal Access by Default
        </div>
      </div>

      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 32px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🔍</div>
          <h3 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            2. Search Engines (SEO)
          </h3>
          <p style={{ fontSize: 24, lineHeight: 1.5, color: ink.soft, margin: 0 }}>
            Google search bots crawl HTML to understand page structure. Semantic tags tell crawlers which text is the primary article and which is secondary footer boilerplate.
          </p>
        </div>
        <div style={{ background: ink.skySoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.sky }}>
          Higher Search Ranking Quality
        </div>
      </div>

      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 32px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🤖</div>
          <h3 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            3. AI & Developer Clarity
          </h3>
          <p style={{ fontSize: 24, lineHeight: 1.5, color: ink.soft, margin: 0 }}>
            Code reading is 10x faster when structural landmarks replace endless anonymous <code style={{ fontFamily: font.mono }}>&lt;div&gt;</code> wrappers. AI coding agents debug semantic code with vastly higher accuracy.
          </p>
        </div>
        <div style={{ background: ink.accentSoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.accent }}>
          Maintainable in the AI Era
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 20: The 6 Core Landmarks ───────────────────────────────────────────

const CoreLandmarks: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="The 6 Core Semantic Landmarks"
      subtitle="Replace generic <div> tags with meaningful structural elements"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
      }}
    >
      {[
        {
          tag: '<header>',
          purpose: 'Introductory banner, branding logo, or page title container.',
        },
        {
          tag: '<nav>',
          purpose: 'Primary navigation links menu. Contains structured links (ul > li > a).',
        },
        {
          tag: '<main>',
          purpose: 'The central, unique content of the page. Exactly ONE <main> per document.',
        },
        {
          tag: '<article>',
          purpose: 'Self-contained, reusable composition (e.g. blog post, card, news story).',
        },
        {
          tag: '<section>',
          purpose: 'Thematic grouping of related content, typically beginning with a heading.',
        },
        {
          tag: '<footer>',
          purpose: 'Closing section for copyright, sitemaps, disclosures, and contact links.',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            background: ink.panel,
            borderRadius: 14,
            padding: '24px 26px',
            border: `1px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 32,
                fontWeight: 700,
                color: ink.accent,
                marginBottom: 10,
              }}
            >
              {item.tag}
            </div>
            <p style={{ fontSize: 22, lineHeight: 1.5, color: ink.soft, margin: 0 }}>
              {item.purpose}
            </p>
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: ink.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            HTML5 Landmark
          </div>
        </div>
      ))}
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 21: The Golden Rule (<button> vs. <a>) ─────────────────────────────

const ButtonVsAnchor: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="The Golden Rule: <button> vs. <a>"
      subtitle="The #1 most frequent junior & AI code flaw"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 36,
      }}
    >
      {/* <a> Card */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.sky,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Role 1 · URL Navigation
          </div>
          <h3
            style={{
              fontFamily: font.mono,
              fontSize: 44,
              fontWeight: 800,
              margin: '0 0 14px 0',
              color: ink.text,
            }}
          >
            &lt;a href="..."&gt;
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Use an anchor when you are <strong>navigating the user to a new location or URL</strong>.
          </p>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24 }}>
            <li>Moving to another page (<code style={{ fontFamily: font.mono }}>/courses</code>)</li>
            <li>Navigating to an external website</li>
            <li>Jumping to an in-page section bookmark (<code style={{ fontFamily: font.mono }}>#faq</code>)</li>
          </ul>
        </div>
        <div style={{ background: ink.skySoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.sky }}>
          "Take me somewhere else in the browser"
        </div>
      </div>

      {/* <button> Card */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '36px 40px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Role 2 · Interactive Action
          </div>
          <h3
            style={{
              fontFamily: font.mono,
              fontSize: 44,
              fontWeight: 800,
              margin: '0 0 14px 0',
              color: ink.text,
            }}
          >
            &lt;button type="button"&gt;
          </h3>
          <p style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Use a button when you are <strong>triggering an in-page action</strong> without changing the URL.
          </p>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24 }}>
            <li>Opening a modal dialog or popup</li>
            <li>Submitting form data to an API</li>
            <li>Toggling dark mode or a mobile hamburger menu</li>
          </ul>
        </div>
        <div style={{ background: ink.accentSoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.accent }}>
          Native keyboard focus (Tab, Enter, Space) is built in for free!
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 22: HTML Forms & The <label> Contract ──────────────────────────────

const FormsAnatomy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="HTML Forms: The <label> Contract"
      subtitle="<form>, <input>, and why every control demands a paired <label>"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 30,
      }}
    >
      {/* Container Card */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '30px 28px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.sky, textTransform: 'uppercase', marginBottom: 10 }}>
            Building Block 1
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 12px 0', color: ink.text }}>
            The &lt;form&gt; Container
          </h3>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Encapsulates all related input controls and defines where and how user data is transmitted.
          </p>
          <HighlightedCode
            code={`<form action="/signup" method="POST">\n  <!-- inputs go here -->\n  <button type="submit">Join</button>\n</form>`}
            style={{ fontSize: 18, padding: '14px 16px' }}
          />
        </div>
        <div style={{ background: ink.skySoft, padding: '12px 14px', borderRadius: 8, fontSize: 18, color: ink.sky, fontWeight: 600 }}>
          Pressing Enter inside any input submits the form!
        </div>
      </div>

      {/* Label Contract Card */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '30px 28px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, textTransform: 'uppercase', marginBottom: 10 }}>
            Building Block 2 · Essential
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 12px 0', color: ink.text }}>
            The &lt;label&gt; Contract
          </h3>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Every input <strong>must</strong> pair with a label. The <code style={{ fontFamily: font.mono }}>for</code> attribute must match the input's <code style={{ fontFamily: font.mono }}>id</code>.
          </p>
          <HighlightedCode
            code={`<label for="user-email">\n  Work Email Address\n</label>\n<input type="email" id="user-email">`}
            style={{ fontSize: 18, padding: '14px 16px' }}
          />
        </div>
        <div style={{ background: ink.accentSoft, padding: '12px 14px', borderRadius: 8, fontSize: 18, color: ink.accent, fontWeight: 600 }}>
          Clicking the label text focuses the input box!
        </div>
      </div>

      {/* Pitfalls Card */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '30px 28px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.amber, textTransform: 'uppercase', marginBottom: 10 }}>
            Junior & AI Pitfalls
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 12px 0', color: ink.text }}>
            The 3 Big Form Mistakes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 20, color: ink.soft, lineHeight: 1.4 }}>
              <strong style={{ color: '#e11d48' }}>1. Placeholder as Label:</strong> Placeholders disappear on typing and fail screen readers.
            </div>
            <div style={{ fontSize: 20, color: ink.soft, lineHeight: 1.4 }}>
              <strong style={{ color: '#e11d48' }}>2. Missing type attribute:</strong> Default is text; use <code style={{ fontFamily: font.mono }}>email</code>, <code style={{ fontFamily: font.mono }}>password</code>, <code style={{ fontFamily: font.mono }}>checkbox</code>.
            </div>
            <div style={{ fontSize: 20, color: ink.soft, lineHeight: 1.4 }}>
              <strong style={{ color: '#e11d48' }}>3. Fake onclick Divs:</strong> Never use <code style={{ fontFamily: font.mono }}>&lt;div onclick&gt;</code> instead of <code style={{ fontFamily: font.mono }}>&lt;button type="submit"&gt;</code>.
            </div>
          </div>
        </div>
        <div style={{ background: ink.amberSoft, padding: '12px 14px', borderRadius: 8, fontSize: 18, color: ink.amber, fontWeight: 600 }}>
          Real forms demand accessible semantic tags!
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 23: Interactive Forms Playground ───────────────────────────────────

const FormsPlayground: Page = () => {
  const steps: PlaygroundStep[] = [
    {
      label: '1. Form Shell & Submit Button',
      desc: 'The container that groups user inputs and handles form submission',
      code: `<!-- Step 1: Form container + submit button -->
<form action="/signup" method="POST">
  <h2>Create Your Account</h2>
  <p>Join the web development workshop.</p>
  
  <button type="submit">Submit Registration</button>
</form>`,
    },
    {
      label: '2. Text & Email Inputs with Labels',
      desc: 'Explicitly pairing <label for> with <input id> for accessibility & touch targets',
      code: `<!-- Step 2: Inputs with explicit <label for> pairing -->
<form action="/signup" method="POST">
  <h2>Create Your Account</h2>
  
  <div style="margin-bottom: 14px;">
    <label for="full-name">Full Name:</label>
    <input type="text" id="full-name" name="name" required>
  </div>

  <div style="margin-bottom: 18px;">
    <label for="work-email">Email Address:</label>
    <input type="email" id="work-email" name="email" required>
  </div>

  <button type="submit">Submit Registration</button>
</form>`,
    },
    {
      label: '3. Dropdown & Checkbox Choices',
      desc: '<select> for dropdown options and <input type="checkbox"> with clickable text label',
      code: `<!-- Step 3: Checkbox & Dropdown Controls -->
<form action="/signup" method="POST">
  <h2>Create Your Account</h2>
  
  <div style="margin-bottom: 14px;">
    <label for="full-name">Full Name:</label>
    <input type="text" id="full-name" name="name" required>
  </div>

  <div style="margin-bottom: 14px;">
    <label for="work-email">Email Address:</label>
    <input type="email" id="work-email" name="email" required>
  </div>

  <div style="margin-bottom: 14px;">
    <label for="role-choice">Primary Track:</label>
    <select id="role-choice" name="track">
      <option value="frontend">Frontend Foundations</option>
      <option value="fullstack">Full-Stack Track</option>
    </select>
  </div>

  <div style="margin-bottom: 18px;">
    <label for="terms-agree">
      <input type="checkbox" id="terms-agree" name="terms" required>
      I agree to the workshop code of conduct
    </label>
  </div>

  <button type="submit">Submit Registration</button>
</form>`,
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03 · DOM Architecture"
        title="Forms Interactive Playground"
        subtitle="Test typing, clicking labels to toggle checkboxes, and native browser validation"
      />
      <LivePlayground steps={steps} />
      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 24: HTML Tables: Tabular Data Architecture ─────────────────────────

const TablesAnatomy: Page = () => {
  const tableCode = `<table>
  <caption>Workshop Track Pricing</caption>
  <thead>
    <tr>
      <th scope="col">Track</th>
      <th scope="col">Duration</th>
      <th scope="col">Pass</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Frontend Core</th>
      <td>4 Weeks</td>
      <td>Free</td>
    </tr>
    <tr>
      <th scope="row">Full-Stack Lab</th>
      <td>8 Weeks</td>
      <td>$199</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Includes DevTools certification</td>
    </tr>
  </tfoot>
</table>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03 · DOM Architecture"
        title="HTML Tables: Tabular Data Architecture"
        subtitle="<table>, <caption>, <thead>, <tbody>, and why tables are strictly for data"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr 1fr',
          gap: 28,
        }}
      >
        {/* Card 1: The Table Hierarchy */}
        <div
          style={{
            background: ink.panel,
            borderRadius: 16,
            padding: '28px 24px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.sky, textTransform: 'uppercase', marginBottom: 10 }}>
              Hierarchy & Landmarks
            </div>
            <h3 style={{ fontSize: 30, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
              The 5 Semantic Layers
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 19, color: ink.soft }}>
              <div>• <code style={{ fontFamily: font.mono, fontWeight: 700, color: ink.text }}>&lt;table&gt;</code>: Root dataset container</div>
              <div>• <code style={{ fontFamily: font.mono, fontWeight: 700, color: ink.text }}>&lt;caption&gt;</code>: Accessible table title (1st child)</div>
              <div>• <code style={{ fontFamily: font.mono, fontWeight: 700, color: ink.text }}>&lt;thead&gt;</code>: Column headers wrapper</div>
              <div>• <code style={{ fontFamily: font.mono, fontWeight: 700, color: ink.text }}>&lt;tbody&gt;</code>: Data rows container</div>
              <div>• <code style={{ fontFamily: font.mono, fontWeight: 700, color: ink.text }}>&lt;tfoot&gt;</code>: Totals / summary row container</div>
            </div>
          </div>
          <div style={{ background: ink.skySoft, padding: '12px 14px', borderRadius: 8, fontSize: 17, color: ink.sky, fontWeight: 600 }}>
            Never skip &lt;caption&gt;! Screen readers announce it first.
          </div>
        </div>

        {/* Card 2: Code Example */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            padding: '28px 26px',
            border: `3px solid ${ink.accent}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent, textTransform: 'uppercase' }}>
                Syntax & Accessible Scopes
              </span>
              <span style={{ background: ink.accentSoft, color: ink.accent, fontSize: 14, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>
                th scope="col|row"
              </span>
            </div>
            <HighlightedCode code={tableCode} style={{ fontSize: 16, padding: '14px 16px' }} />
          </div>
          <div style={{ background: ink.accentSoft, padding: '10px 14px', borderRadius: 8, fontSize: 17, color: ink.accent, fontWeight: 600 }}>
            <code style={{ fontFamily: font.mono }}>&lt;th scope="col"&gt;</code> links data cells to headers!
          </div>
        </div>

        {/* Card 3: The Golden Rule & Pitfalls */}
        <div
          style={{
            background: ink.panel,
            borderRadius: 16,
            padding: '28px 24px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#e11d48', textTransform: 'uppercase', marginBottom: 10 }}>
              The Cardinal Rule
            </div>
            <h3 style={{ fontSize: 30, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
              Data ONLY, Never Layout!
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 19, color: ink.soft }}>
              <div>
                <strong style={{ color: '#e11d48' }}>❌ Layout Anti-Pattern:</strong> In early web days, developers abused tables for columns. Today, that breaks responsive design!
              </div>
              <div>
                <strong style={{ color: ink.mint }}>✓ Proper Tabular Data:</strong> Schedules, pricing matrices, analytics rows, comparison grids.
              </div>
              <div>
                <strong style={{ color: ink.accent }}>✓ colspan & rowspan:</strong> Merge multi-column cells cleanly.
              </div>
            </div>
          </div>
          <div style={{ background: ink.mintSoft, padding: '12px 14px', borderRadius: 8, fontSize: 17, color: ink.mint, fontWeight: 600 }}>
            Pair with forms: forms collect data, tables display matrices!
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 25: Div Soup vs. Semantic HTML with Syntax Highlighting ────────────

const DivSoupVsSemantic: Page = () => {
  const badCode = `<div class="header">
  <div class="logo">Workshop</div>
  <div class="nav-links">
    <div class="link">Home</div>
    <div class="link">Courses</div>
  </div>
</div>
<div class="content">
  <div class="card">
    <div class="card-img"><img src="thumb.jpg"></div>
    <div class="card-title">HTML5 Basics</div>
    <div class="btn" onclick="open()">Enroll</div>
  </div>
</div>`;

  const goodCode = `<header>
  <h1>Workshop</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/courses">Courses</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <img src="thumb.jpg" alt="Course overview graphic">
    <h2>HTML5 Basics</h2>
    <button type="button" onclick="open()">Enroll</button>
  </article>
</main>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03 · DOM Architecture"
        title="Div Soup vs. Semantic HTML"
        subtitle="Syntax-highlighted comparison: Notice how semantic code documents intent"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          gap: 32,
        }}
      >
        {/* Bad: Div Soup */}
        <div
          style={{
            flex: 1,
            background: '#fff1f2',
            borderRadius: 16,
            padding: '24px 28px',
            border: '2px solid #fecdd3',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#e11d48', marginBottom: 10, textTransform: 'uppercase' }}>
              BAD: Non-Semantic "Div Soup"
            </div>
            <HighlightedCode code={badCode} style={{ background: '#1c1917', borderColor: '#44403c' }} />
          </div>
          <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 8, fontSize: 19, color: '#9f1239', fontWeight: 600, marginTop: 12 }}>
            ❌ Inaccessible to screen readers · Hard to read · Brittle styling
          </div>
        </div>

        {/* Good: Semantic HTML5 */}
        <div
          style={{
            flex: 1,
            background: '#f0fdf4',
            borderRadius: 16,
            padding: '24px 28px',
            border: '2px solid #bbf7d0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#15803d', marginBottom: 10, textTransform: 'uppercase' }}>
              GOOD: Accessible Semantic HTML5
            </div>
            <HighlightedCode code={goodCode} style={{ background: '#022c22', borderColor: '#065f46' }} />
          </div>
          <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 8, fontSize: 19, color: '#166534', fontWeight: 600, marginTop: 12 }}>
            ✓ Exposes accessible landmarks · Screen reader friendly · Clean architecture
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 23: Concept Check 3 (Parsons Challenge) ────────────────────────────

const ConceptCheck3: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · DOM Architecture"
      title="Parsons Nesting Puzzle"
      subtitle="Interactive drill: Fix the broken closing tag sequence"
    />

    <ParsonsNestingChallenge />

    <SlideFooter />
  </div>
);

// ─── SLIDE 24: Section Divider 4 ──────────────────────────────────────────────

const Divider4: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PART 04
      </div>
      <h2
        style={{
          fontFamily: font.display,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          color: ink.text,
        }}
      >
        Pragmatic AI for Web Developers
      </h2>
      <p style={{ fontSize: 34, color: ink.muted, maxWidth: 1200, margin: 0 }}>
        Hands-on daily workflows: Socratic debugging, mock data generation, and the 60-second code audit.
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── SLIDE 25: Pragmatic AI Workflow 1: The Socratic Debugger ─────────────────

const AISocraticDebugger: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 · Pragmatic AI Workflows"
      title="AI Workflow 1: The Socratic Debugger"
      subtitle="When your HTML breaks: Prompt AI to explain the bug without spoiling the answer"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        gap: 32,
      }}
    >
      {/* Left: The 3-Part Debug Prompt Template */}
      <div
        style={{
          flex: 1,
          background: ink.panel,
          borderRadius: 16,
          padding: '30px 34px',
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 8, textTransform: 'uppercase' }}>
            The 3-Part Socratic Debug Prompt
          </div>
          <p style={{ fontSize: 22, color: ink.soft, margin: '0 0 16px 0', lineHeight: 1.45 }}>
            Don't ask "Fix this". You learn nothing. Instead, provide your code, your expectation, and ask for a guiding explanation:
          </p>
          <div
            style={{
              background: ink.panelDark,
              borderRadius: 12,
              padding: '20px 22px',
              fontFamily: font.mono,
              fontSize: 20,
              lineHeight: 1.6,
              color: '#e2e8f0',
            }}
          >
            <div style={{ color: '#38bdf8' }}>1. [My Code]:</div>
            <div style={{ color: '#94a3b8', paddingLeft: 16 }}>&lt;img href="logo.png"&gt;</div>
            <div style={{ color: '#38bdf8', marginTop: 8 }}>2. [What I see in browser]:</div>
            <div style={{ color: '#94a3b8', paddingLeft: 16 }}>The image is invisible on the screen.</div>
            <div style={{ color: '#38bdf8', marginTop: 8 }}>3. [Instruction]:</div>
            <div style={{ color: '#34d399', paddingLeft: 16 }}>
              Explain why my attribute is wrong using a real-world metaphor. Do NOT write the corrected code for me.
            </div>
          </div>
        </div>

        <div style={{ background: ink.accentSoft, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.accent, fontWeight: 600 }}>
          💡 Pro Tip: Saves you hours of debugging while building real mental models.
        </div>
      </div>

      {/* Right: AI's Patient Teaching Response */}
      <div
        style={{
          flex: 1,
          background: '#ffffff',
          borderRadius: 16,
          padding: '30px 34px',
          border: `3px solid ${ink.mint}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.mint, marginBottom: 8, textTransform: 'uppercase' }}>
            What The Socratic AI Returns
          </div>
          <div
            style={{
              background: '#f8fafc',
              border: `1px solid ${ink.border}`,
              borderRadius: 12,
              padding: '20px 24px',
              fontSize: 22,
              lineHeight: 1.6,
              color: ink.soft,
            }}
          >
            <p style={{ margin: '0 0 14px 0' }}>
              <strong>"Think of href as a mailing address</strong> on an envelope—it tells a link where to travel when clicked.
            </p>
            <p style={{ margin: '0 0 14px 0' }}>
              An image doesn't travel anywhere. It needs to pull in external image data right here into the page.
            </p>
            <p style={{ margin: 0, color: ink.mint, fontWeight: 600 }}>
              What 3-letter HTML attribute stands for 'Source'?"
            </p>
          </div>
        </div>

        <div style={{ background: ink.mintSoft, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.mint, fontWeight: 600 }}>
          ✓ You immediately recall <code style={{ fontFamily: font.mono }}>src="..."</code> and fix it yourself!
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 26: Pragmatic AI Workflow 2: Generating Semantic Mock Data ────────

const AIMockDataGenerator: Page = () => {
  const generatedCode = `<article class="course-card">
  <img src="react.jpg" alt="React components on laptop screen">
  <h2>Modern React Foundations</h2>
  <p>Learn state, props, hooks, and clean architecture.</p>
  <button type="button">Enroll in Course</button>
</article>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04 · Pragmatic AI Workflows"
        title="AI Workflow 2: Generating Mock Content Fast"
        subtitle="Don't waste 30 minutes typing dummy text: Force AI to give you semantic structures"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          gap: 32,
        }}
      >
        {/* Left: The Engineering Spec Prompt */}
        <div
          style={{
            flex: 1,
            background: ink.panel,
            borderRadius: 16,
            padding: '30px 34px',
            border: `2px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.sky, marginBottom: 8, textTransform: 'uppercase' }}>
              The Spec Prompt You Copy in Class
            </div>
            <p style={{ fontSize: 22, color: ink.soft, margin: '0 0 14px 0', lineHeight: 1.45 }}>
              When practicing layout or building homework, you need 3–4 realistic cards or list items. Prompt with strict constraints:
            </p>
            <div
              style={{
                background: ink.panelDark,
                borderRadius: 12,
                padding: '20px 22px',
                fontFamily: font.mono,
                fontSize: 20,
                lineHeight: 1.6,
                color: '#38bdf8',
              }}
            >
              {`"Generate 3 realistic course cards in pure semantic HTML:
- Root MUST be an <article>
- Include an <img> with descriptive alt text
- Use <h2> for course titles
- Include a <p> description and a <button type="button">
- NO <div> wrappers, NO CSS, NO JavaScript."`}
            </div>
          </div>

          <div style={{ background: ink.skySoft, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.sky, fontWeight: 600 }}>
            Forces AI to output exactly the accessible tags you need for your lab.
          </div>
        </div>

        {/* Right: The Pristine Clean Result */}
        <div
          style={{
            flex: 1,
            background: '#ffffff',
            borderRadius: 16,
            padding: '30px 34px',
            border: `3px solid ${ink.sky}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.sky, marginBottom: 8, textTransform: 'uppercase' }}>
              Clean Output: Ready to Paste into Lab
            </div>
            <HighlightedCode code={generatedCode} />
          </div>

          <div style={{ background: ink.panel, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.soft, fontWeight: 600, border: `1px solid ${ink.border}` }}>
            ✓ Ready in 5 seconds · Zero div soup · Proper headings and buttons
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 27: Pragmatic AI Workflow 3: The 60-Second Code Audit ──────────────

const AIAuditLive: Page = () => {
  const [activeCheck, setActiveCheck] = useState<1 | 2 | 3>(1);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04 · Pragmatic AI Workflows"
        title="AI Workflow 3: The 60-Second Code Audit"
        subtitle="Never paste AI code blindly. Run this 3-point check every time."
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {/* 3 Check Buttons */}
        <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => setActiveCheck(1)}
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: 12,
              border: `2px solid ${activeCheck === 1 ? ink.accent : ink.border}`,
              background: activeCheck === 1 ? ink.accentSoft : '#ffffff',
              color: activeCheck === 1 ? ink.accent : ink.soft,
              fontSize: 22,
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            Check 1: Landmarks
            <div style={{ fontSize: 17, fontWeight: 400, color: ink.muted, marginTop: 4 }}>
              Spot &lt;div&gt; soup vs &lt;header&gt;/&lt;main&gt;
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveCheck(2)}
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: 12,
              border: `2px solid ${activeCheck === 2 ? ink.accent : ink.border}`,
              background: activeCheck === 2 ? ink.accentSoft : '#ffffff',
              color: activeCheck === 2 ? ink.accent : ink.soft,
              fontSize: 22,
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            Check 2: Buttons vs. Links
            <div style={{ fontSize: 17, fontWeight: 400, color: ink.muted, marginTop: 4 }}>
              Catch fake &lt;div onclick&gt; buttons
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveCheck(3)}
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: 12,
              border: `2px solid ${activeCheck === 3 ? ink.accent : ink.border}`,
              background: activeCheck === 3 ? ink.accentSoft : '#ffffff',
              color: activeCheck === 3 ? ink.accent : ink.soft,
              fontSize: 22,
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            Check 3: Accessibility
            <div style={{ fontSize: 17, fontWeight: 400, color: ink.muted, marginTop: 4 }}>
              Catch missing alt on images
            </div>
          </button>
        </div>

        {/* Split Window with Syntax Highlighting on Both */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 24 }}>
          {/* Flawed AI Output */}
          <div
            style={{
              flex: 1,
              background: '#fff1f2',
              borderRadius: 14,
              border: '2px solid #fecdd3',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, color: '#e11d48', marginBottom: 8, textTransform: 'uppercase' }}>
                Flawed AI Code (What AI Usually Outputs)
              </div>
              <HighlightedCode
                code={
                  activeCheck === 1
                    ? `<div class="header">
  <div class="logo">CoursePortal</div>
  <div class="nav-links">
    <div class="link">Home</div>
  </div>
</div>`
                    : activeCheck === 2
                      ? `<!-- Inaccessible Fake Button -->
<div class="btn" onclick="enrollUser()">
  Enroll in Course
</div>`
                      : `<!-- Inaccessible Image -->
<div class="profile-card">
  <img src="instructor.jpg">
  <h3>Dr. Sarah Chen</h3>
</div>`
                }
                style={{ background: '#1c1917' }}
              />
            </div>
            <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: 8, fontSize: 18, color: '#9f1239', fontWeight: 600 }}>
              {activeCheck === 1 && '❌ Flaw: Divs carry zero meaning for screen readers and SEO.'}
              {activeCheck === 2 && '❌ Flaw: A <div> cannot be focused by keyboard (Tab/Enter).'}
              {activeCheck === 3 && '❌ Flaw: Missing alt leaves screen reader users stranded.'}
            </div>
          </div>

          {/* Audited HTML5 */}
          <div
            style={{
              flex: 1,
              background: '#f0fdf4',
              borderRadius: 14,
              border: '2px solid #bbf7d0',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, color: '#15803d', marginBottom: 8, textTransform: 'uppercase' }}>
                Your Audited Fix (What You Must Require)
              </div>
              <HighlightedCode
                code={
                  activeCheck === 1
                    ? `<header>
  <h1>CoursePortal</h1>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>`
                    : activeCheck === 2
                      ? `<!-- Accessible Real Button -->
<button type="button" onclick="enrollUser()">
  Enroll in Course
</button>`
                      : `<!-- Accessible Descriptive Image -->
<article class="profile-card">
  <img src="instructor.jpg" alt="Dr. Sarah Chen">
  <h3>Dr. Sarah Chen</h3>
</article>`
                }
                style={{ background: '#022c22' }}
              />
            </div>
            <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: 8, fontSize: 18, color: '#166534', fontWeight: 600 }}>
              {activeCheck === 1 && '✓ Fixed: Uses true HTML5 landmarks.'}
              {activeCheck === 2 && '✓ Fixed: Real <button> is accessible to all users by default.'}
              {activeCheck === 3 && '✓ Fixed: Descriptive alt text provides graceful fallback.'}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 28: In-Class Practice: Audit This AI Snippet ───────────────────────

const AIAuditPractice: Page = () => {
  const [revealed, setRevealed] = useState(false);

  const flawedSnippet = `<div class="top-nav">
  <span class="brand">TechStore</span>
  <div class="menu">
    <a href="/deals">Deals</a>
    <span onclick="openCart()">Cart (0)</span>
  </div>
  <img src="cart-icon.png">
</div>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04 · In-Class Practice"
        title="In-Class Drill: Spot the 3 AI Defects"
        subtitle="Examine this snippet generated by an AI assistant. Can you spot what is wrong?"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          gap: 32,
        }}
      >
        {/* Left: Code Snippet to Audit */}
        <div
          style={{
            flex: 1,
            background: ink.panel,
            borderRadius: 16,
            padding: '28px 32px',
            border: `2px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 10, textTransform: 'uppercase' }}>
              Snippet Under Review (AI Generated)
            </div>
            <HighlightedCode code={flawedSnippet} />
          </div>

          <button
            type="button"
            onClick={() => setRevealed(!revealed)}
            style={{
              padding: '16px 24px',
              fontSize: 22,
              fontWeight: 700,
              background: revealed ? ink.mint : ink.accent,
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {revealed ? '✓ Hide Audit Answers' : '🔍 Reveal The 3 Flaws'}
          </button>
        </div>

        {/* Right: The 3 Defects Revealed */}
        <div
          style={{
            flex: 1,
            background: '#ffffff',
            borderRadius: 16,
            padding: '28px 32px',
            border: `2px solid ${revealed ? ink.mint : ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: revealed ? ink.mint : ink.muted, marginBottom: 12, textTransform: 'uppercase' }}>
              Audit Report
            </div>

            {revealed ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ background: '#fef2f2', padding: '14px 18px', borderRadius: 10, border: '1px solid #fecdd3' }}>
                  <strong style={{ color: '#e11d48', fontSize: 20 }}>1. Non-semantic navbar:</strong>
                  <div style={{ fontSize: 19, color: ink.soft, marginTop: 4 }}>
                    Uses <code style={{ fontFamily: font.mono }}>&lt;div class="top-nav"&gt;</code> instead of a semantic <code style={{ fontFamily: font.mono }}>&lt;header&gt;</code> and <code style={{ fontFamily: font.mono }}>&lt;nav&gt;</code>.
                  </div>
                </div>

                <div style={{ background: '#fef2f2', padding: '14px 18px', borderRadius: 10, border: '1px solid #fecdd3' }}>
                  <strong style={{ color: '#e11d48', fontSize: 20 }}>2. Fake Cart Button:</strong>
                  <div style={{ fontSize: 19, color: ink.soft, marginTop: 4 }}>
                    Uses <code style={{ fontFamily: font.mono }}>&lt;span onclick="openCart()"&gt;</code>. Keyboard users cannot tab to it or press Enter. Must be a <code style={{ fontFamily: font.mono }}>&lt;button type="button"&gt;</code>!
                  </div>
                </div>

                <div style={{ background: '#fef2f2', padding: '14px 18px', borderRadius: 10, border: '1px solid #fecdd3' }}>
                  <strong style={{ color: '#e11d48', fontSize: 20 }}>3. Missing Image Alt:</strong>
                  <div style={{ fontSize: 19, color: ink.soft, marginTop: 4 }}>
                    <code style={{ fontFamily: font.mono }}>&lt;img src="cart-icon.png"&gt;</code> has no <code style={{ fontFamily: font.mono }}>alt</code> attribute. Must provide <code style={{ fontFamily: font.mono }}>alt="Shopping cart"</code>.
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: ink.muted,
                  fontSize: 24,
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}
              >
                Look at the tags carefully:
                <br />
                Containers? Interactive elements? Image attributes?
                <br />
                Click the button to check your answers!
              </div>
            )}
          </div>

          {revealed && (
            <div style={{ background: ink.mintSoft, padding: '12px 16px', borderRadius: 8, fontSize: 18, color: ink.mint, fontWeight: 700 }}>
              Great job! You just protected your codebase from AI hallucinated div soup.
            </div>
          )}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 29: Section Divider 5 ──────────────────────────────────────────────

const Divider5: Page = () => (
  <div style={{ ...fill, justifyContent: 'center' }}>
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PART 05
      </div>
      <h2
        style={{
          fontFamily: font.display,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          color: ink.text,
        }}
      >
        Guided Hands-on Lab
      </h2>
      <p style={{ fontSize: 34, color: ink.muted, maxWidth: 1200, margin: 0 }}>
        Refactoring "Div Soup" into semantic HTML5 and inspecting live elements in Chrome DevTools.
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── SLIDE 32: Learning Example: Partnering with AI ───────────────────────────

const LearningExampleAI: Page = () => {
  const dirtySnippet = `<!-- Problem: Legacy unsemantic newsletter -->
<div class="newsletter-card">
  <div class="heading">Subscribe to updates</div>
  <div class="input-row">
    <input placeholder="Your email here">
  </div>
  <div class="btn" onclick="send()">Subscribe</div>
</div>`;

  const cleanSnippet = `<form action="/subscribe" method="POST" class="newsletter-form">
  <h2>Subscribe to updates</h2>
  <div class="field-group">
    <label for="news-email">Your Email Address</label>
    <input type="email" id="news-email" name="email" required />
  </div>
  <button type="submit">Subscribe</button>
</form>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05 · Hands-on Lab"
        title="Learning Example: Partnering with AI"
        subtitle="Case study: How to prompt, audit, and verify with AI without blind copy-pasting"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 32,
        }}
      >
        {/* Left: Problem & Specification Prompt */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            padding: '26px 30px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#e11d48', textTransform: 'uppercase' }}>
                Phase 1 · Identify Anti-Patterns
              </span>
              <span style={{ background: '#ffe4e6', color: '#be123c', fontSize: 15, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                3 Accessibility Flaws
              </span>
            </div>
            <HighlightedCode code={dirtySnippet} style={{ background: '#1c1917', padding: '14px 18px', fontSize: 18 }} />

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: ink.accent, marginBottom: 6, textTransform: 'uppercase' }}>
                Phase 2 · Technical Spec Prompt:
              </div>
              <div
                style={{
                  background: ink.panel,
                  padding: '12px 16px',
                  borderRadius: 10,
                  borderLeft: `4px solid ${ink.accent}`,
                  fontFamily: font.mono,
                  fontSize: 16,
                  color: ink.text,
                  lineHeight: 1.5,
                }}
              >
                "Refactor this legacy component into accessible Semantic HTML5:<br />
                1. Wrap in a &lt;form&gt; with a real &lt;button type="submit"&gt;.<br />
                2. Pair the input with an explicit &lt;label for="email"&gt;.<br />
                3. Ensure it passes Tab keyboard navigation.<br />
                Explain the 3 main improvements you made."
              </div>
            </div>
          </div>

          <div style={{ background: ink.accentSoft, padding: '10px 14px', borderRadius: 8, fontSize: 17, color: ink.accent, fontWeight: 600 }}>
            Formula: Context + Existing Code + Strict Constraints. Never prompt vaguely!
          </div>
        </div>

        {/* Right: The Audited Output & DevTools Verification */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            padding: '26px 30px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint, textTransform: 'uppercase' }}>
                Phase 3 · The 60-Second Output Audit
              </span>
              <span style={{ background: ink.mintSoft, color: ink.mint, fontSize: 15, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
                100% Accessible
              </span>
            </div>
            <HighlightedCode code={cleanSnippet} style={{ background: '#022c22', borderColor: '#065f46', padding: '14px 18px', fontSize: 18 }} />

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: ink.mint, marginBottom: 8, textTransform: 'uppercase' }}>
                Phase 4 · Browser & DevTools Verification:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: ink.mint, fontWeight: 700, fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 18, color: ink.soft }}>
                    <strong>Landmark Check:</strong> DevTools reports native <code style={{ fontFamily: font.mono }}>&lt;form&gt;</code> element.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: ink.mint, fontWeight: 700, fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 18, color: ink.soft }}>
                    <strong>Label Check:</strong> Clicking the label text focuses the input box automatically!
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: ink.mint, fontWeight: 700, fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 18, color: ink.soft }}>
                    <strong>Keyboard Check:</strong> Tab moves to input, then button. Enter submits.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: ink.mintSoft, padding: '10px 14px', borderRadius: 8, fontSize: 17, color: ink.mint, fontWeight: 600 }}>
            Golden Rule: AI is a junior assistant, not an architect. Always audit!
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 33: Lab Starter Code & Instructions ────────────────────────────────

const LabInstructions: Page = () => {
  const starterCode = `<!-- Starter: semantic.html (The Div Soup Challenge) -->
<div class="top-bar">
  <div class="site-title">Student Portal</div>
  <div class="links">
    <span onclick="goTo('/')">Home</span>
    <span onclick="goTo('/courses')">Courses</span>
  </div>
</div>
<div class="content">
  <div class="card">
    <div class="card-img"><img src="profile.jpg"></div>
    <div class="card-title">Introduction to Web</div>
    <div class="card-desc">Learn HTML, CSS, and JS.</div>
    <div class="btn" onclick="enroll()">Enroll Now</div>
  </div>
</div>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05 · Hands-on Lab"
        title="Lab Challenge: Div Soup Surgery (55 min)"
        subtitle="In VS Code: Create semantic.html and refactor this starter code"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          gap: 32,
        }}
      >
        {/* Left: Full Starter Code with Syntax Highlighting */}
        <div
          style={{
            flex: 1,
            background: ink.panel,
            borderRadius: 16,
            padding: '24px 28px',
            border: `2px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 8, textTransform: 'uppercase' }}>
              Starter Code: Paste into semantic.html
            </div>
            <HighlightedCode code={starterCode} />
          </div>

          <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 8, border: `1px solid ${ink.border}`, fontSize: 18, color: ink.muted }}>
            📁 Workspace: <code style={{ fontFamily: font.mono }}>workshop/session-02/semantic.html</code>
          </div>
        </div>

        {/* Right: The 4 Concrete Refactoring Tasks */}
        <div
          style={{
            flex: 1,
            background: '#ffffff',
            borderRadius: 16,
            padding: '28px 32px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.text, marginBottom: 14, textTransform: 'uppercase' }}>
              Your 4 Refactoring Checkpoints
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: ink.panel, padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 20, color: ink.text }}>1. Header & Navigation:</strong>
                <div style={{ fontSize: 18, color: ink.soft, marginTop: 4 }}>
                  Convert <code style={{ fontFamily: font.mono }}>.top-bar</code> to <code style={{ fontFamily: font.mono }}>&lt;header&gt;</code>. Convert <code style={{ fontFamily: font.mono }}>.links</code> to <code style={{ fontFamily: font.mono }}>&lt;nav&gt;</code> with <code style={{ fontFamily: font.mono }}>&lt;ul&gt;&lt;li&gt;&lt;a href&gt;</code>.
                </div>
              </div>

              <div style={{ background: ink.panel, padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 20, color: ink.text }}>2. Main Document Landmark:</strong>
                <div style={{ fontSize: 18, color: ink.soft, marginTop: 4 }}>
                  Convert <code style={{ fontFamily: font.mono }}>.content</code> to <code style={{ fontFamily: font.mono }}>&lt;main&gt;</code>. Convert <code style={{ fontFamily: font.mono }}>.card</code> to <code style={{ fontFamily: font.mono }}>&lt;article&gt;</code>.
                </div>
              </div>

              <div style={{ background: ink.panel, padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 20, color: ink.text }}>3. Headings & Image Accessibility:</strong>
                <div style={{ fontSize: 18, color: ink.soft, marginTop: 4 }}>
                  Convert title to <code style={{ fontFamily: font.mono }}>&lt;h2&gt;</code>. Add descriptive <code style={{ fontFamily: font.mono }}>alt="Web development course thumbnail"</code> to the image.
                </div>
              </div>

              <div style={{ background: ink.panel, padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 20, color: ink.text }}>4. Accessible Action Button:</strong>
                <div style={{ fontSize: 18, color: ink.soft, marginTop: 4 }}>
                  Replace <code style={{ fontFamily: font.mono }}>&lt;div class="btn"&gt;</code> with a native <code style={{ fontFamily: font.mono }}>&lt;button type="button"&gt;</code>.
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: ink.mintSoft, padding: '12px 16px', borderRadius: 8, fontSize: 18, color: ink.mint, fontWeight: 700 }}>
            Next: We will inspect your refactored page in Chrome DevTools!
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 31: Lab Verification in Chrome DevTools ────────────────────────────

const LabDevToolsVerification: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 · Hands-on Lab"
      title="Lab Verification: DevTools Elements Tree"
      subtitle="Open Chrome DevTools (F12) to verify your semantic DOM tree"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}
    >
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '32px 28px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 12, textTransform: 'uppercase' }}>
            Verification 1
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 14px 0', color: ink.text }}>
            Keyboard DOM Tree Navigation
          </h3>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: 0 }}>
            In the <strong>Elements</strong> tab:
            <br />
            1. Click on the <code style={{ fontFamily: font.mono }}>&lt;body&gt;</code> node.
            <br />
            2. Press <code style={{ fontFamily: font.mono }}>→</code> to expand children.
            <br />
            3. Press <code style={{ fontFamily: font.mono }}>↓</code> to navigate through siblings.
            <br />
            4. Verify that you see <code style={{ fontFamily: font.mono }}>header</code>, <code style={{ fontFamily: font.mono }}>main</code>, and <code style={{ fontFamily: font.mono }}>article</code>.
          </p>
        </div>
        <div style={{ background: ink.accentSoft, padding: '12px 16px', borderRadius: 8, fontSize: 18, color: ink.accent, fontWeight: 600 }}>
          Notice how easy it is to find elements!
        </div>
      </div>

      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '32px 28px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.sky, marginBottom: 12, textTransform: 'uppercase' }}>
            Verification 2
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 14px 0', color: ink.text }}>
            Accessibility Role Inspection
          </h3>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: 0 }}>
            In the right-hand DevTools panel:
            <br />
            1. Click the <strong>Accessibility</strong> tab (next to Styles).
            <br />
            2. Select your new <code style={{ fontFamily: font.mono }}>&lt;button&gt;</code>.
            <br />
            3. Verify that the <strong>Role</strong> is reported as <code style={{ fontFamily: font.mono }}>"button"</code>.
            <br />
            4. Notice that screen readers can now announce it!
          </p>
        </div>
        <div style={{ background: ink.skySoft, padding: '12px 16px', borderRadius: 8, fontSize: 18, color: ink.sky, fontWeight: 600 }}>
          Confirmed: Native accessibility works.
        </div>
      </div>

      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '32px 28px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.mint, marginBottom: 12, textTransform: 'uppercase' }}>
            Verification 3
          </div>
          <h3 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 14px 0', color: ink.text }}>
            The Tab Key Challenge
          </h3>
          <p style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, margin: 0 }}>
            Put away your mouse!
            <br />
            1. Click inside the webpage window.
            <br />
            2. Press the <code style={{ fontFamily: font.mono }}>Tab</code> key repeatedly.
            <br />
            3. Verify: Does the browser focus the links in order? Does focus jump to the Enroll button?
            <br />
            4. Press <code style={{ fontFamily: font.mono }}>Space</code> or <code style={{ fontFamily: font.mono }}>Enter</code> to activate!
          </p>
        </div>
        <div style={{ background: ink.mintSoft, padding: '12px 16px', borderRadius: 8, fontSize: 18, color: ink.mint, fontWeight: 600 }}>
          If Tab works, your HTML is accessible!
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 32: Homework 01 Assignment ─────────────────────────────────────────

const HomeworkAssignment: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework 01 · Project"
      title="Homework 01: The Accessible Event Card"
      subtitle="Build a standalone event.html page using pure Semantic HTML5"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 36,
      }}
    >
      {/* Project Brief */}
      <div
        style={{ background: '#ffffff', borderRadius: 16, padding: '36px 40px', border: `3px solid ${ink.accent}`, boxShadow: shadow.card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', translate: '6px 0px' }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 10, textTransform: 'uppercase' }}>
            Project Brief
          </div>
          <h3 style={{ fontSize: 38, fontWeight: 800, margin: '0 0 16px 0', color: ink.text }}>
            Tech Conference or Music Festival Page
          </h3>
          <p style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Create <code style={{ fontFamily: font.mono, background: ink.panel, padding: '2px 8px', borderRadius: 4 }}>event.html</code> in your personal workshop folder. Build an accessible landing page representing an upcoming event:
          </p>
          <ul style={{ fontSize: 22, lineHeight: 1.6, color: ink.soft, paddingLeft: 24, margin: 0 }}>
            <li>Proper <code style={{ fontFamily: font.mono }}>&lt;!DOCTYPE html&gt;</code>, <code style={{ fontFamily: font.mono }}>&lt;html lang="en"&gt;</code>, and UTF-8 charset</li>
            <li>A <code style={{ fontFamily: font.mono }}>&lt;header&gt;</code> with event name and <code style={{ fontFamily: font.mono }}>&lt;nav&gt;</code> linking to Schedule, Speakers, Venue</li>
            <li>A <code style={{ fontFamily: font.mono }}>&lt;main&gt;</code> landmark enclosing an <code style={{ fontFamily: font.mono }}>&lt;article&gt;</code> event card</li>
            <li>Event poster <code style={{ fontFamily: font.mono }}>&lt;img&gt;</code> with a meaningful <code style={{ fontFamily: font.mono }}>alt</code> description</li>
            <li>Real <code style={{ fontFamily: font.mono }}>&lt;button type="button"&gt;</code> for "Register Now / RSVP"</li>
            <li>A <code style={{ fontFamily: font.mono }}>&lt;footer&gt;</code> with copyright and contact <code style={{ fontFamily: font.mono }}>&lt;a href="mailto:..."&gt;</code></li>
          </ul>
        </div>
        <div style={{ background: ink.accentSoft, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.accent, fontWeight: 600 }}>
          Due: Before the start of Session 03 (Next week).
        </div>
      </div>

      {/* Pragmatic AI Homework Requirement */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: ink.mint, marginBottom: 10, textTransform: 'uppercase' }}>
            Pragmatic AI Component
          </div>
          <h3 style={{ fontSize: 38, fontWeight: 800, margin: '0 0 16px 0', color: ink.text }}>
            Prompt & Audit Exercise
          </h3>
          <p style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Put today's AI workflows into real practice for your homework:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
              <strong style={{ fontSize: 20, color: ink.text }}>Step 1: The Spec Prompt</strong>
              <div style={{ fontSize: 18, color: ink.muted, marginTop: 4 }}>
                Ask AI to generate 3 realistic schedule sessions for your event (e.g. Keynote, Workshop, Panel). Force it to use semantic <code style={{ fontFamily: font.mono }}>&lt;li&gt;</code> items.
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
              <strong style={{ fontSize: 20, color: ink.text }}>بب2: The 60-Second Audit</strong>
              <div style={{ fontSize: 18, color: ink.muted, marginTop: 4 }}>
                Review what AI outputs. Did it include unnecessary divs? Did it forget tags? Fix any issues before pasting into your file.
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
              <strong style={{ fontSize: 20, color: ink.text }}>Step 3: DevTools Verification</strong>
              <div style={{ fontSize: 18, color: ink.muted, marginTop: 4 }}>
                Press Tab in your browser to verify that every single link and button can be activated via keyboard!
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: ink.mintSoft, padding: '12px 18px', borderRadius: 8, fontSize: 19, color: ink.mint, fontWeight: 600 }}>
          Submit: Push event.html to your GitHub repository.
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 33: Homework 01 Self-Evaluation Checklist ──────────────────────────

const HomeworkChecklist: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework 01 · Rubric"
      title="Homework 01: Self-Evaluation Rubric"
      subtitle="Before submitting your homework, check every box below"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}
    >
      {[
        {
          num: '01',
          title: 'Skeleton Check',
          items: [
            '<!DOCTYPE html> is on line 1',
            '<html lang="en"> root container',
            '<head> has UTF-8 and title',
            'All visible elements in <body>',
          ],
        },
        {
          num: '02',
          title: 'Landmarks Check',
          items: [
            'Exactly ONE <main> element',
            '<header> wraps top navigation',
            '<nav> wraps <ul > li > a',
            '<article> wraps event card',
          ],
        },
        {
          num: '03',
          title: 'Interaction Check',
          items: [
            'Links (a href) used for URLs',
            'Real <button> used for RSVP',
            'ZERO <div onclick> fake buttons',
            '<img> has descriptive alt text',
          ],
        },
        {
          num: '04',
          title: 'A11y & DevTools',
          items: [
            'Tab key highlights all links',
            'Tab key highlights RSVP button',
            'Space/Enter activates button',
            'Clean DOM tree in DevTools',
          ],
        },
      ].map((card, idx) => (
        <div
          key={idx}
          style={{
            background: ink.panel,
            borderRadius: 16,
            padding: '28px 24px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 26, fontFamily: font.mono, fontWeight: 800, color: ink.accent, marginBottom: 12 }}>
              {card.num}
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 16px 0', color: ink.text }}>
              {card.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {card.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: ink.mint, fontWeight: 700, fontSize: 20 }}>✓</span>
                  <span style={{ fontSize: 20, color: ink.soft, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: 8, border: `1px solid ${ink.border}`, fontSize: 17, color: ink.muted, textAlign: 'center', fontWeight: 600 }}>
            Pass Criterion {idx + 1}
          </div>
        </div>
      ))}
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 37: Homework 02: Conference Registration & Schedule Portal ─────────

const HomeworkPortal: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework 02 · Project"
      title="Homework 02: Event Portal & Schedule Matrix"
      subtitle="Build portal.html combining an accessible registration form and data table"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 32,
      }}
    >
      {/* Part A: The Interactive Registration Form */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '30px 34px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent, textTransform: 'uppercase' }}>
              Component 1 · Interactive Form
            </span>
            <span style={{ background: ink.accentSoft, color: ink.accent, fontSize: 15, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
              &lt;form&gt; + &lt;label&gt;
            </span>
          </div>

          <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            Attendee Registration Form
          </h3>

          <ul style={{ fontSize: 20, lineHeight: 1.55, color: ink.soft, paddingLeft: 22, margin: 0 }}>
            <li>Wrapped in <code style={{ fontFamily: font.mono }}>&lt;form action="/register" method="POST"&gt;</code></li>
            <li><strong>Full Name & Email:</strong> <code style={{ fontFamily: font.mono }}>&lt;input type="text"&gt;</code> and <code style={{ fontFamily: font.mono }}>&lt;input type="email"&gt;</code>, each paired with an explicit <code style={{ fontFamily: font.mono }}>&lt;label for="..."&gt;</code></li>
            <li><strong>Track Selection:</strong> <code style={{ fontFamily: font.mono }}>&lt;select&gt;</code> dropdown with at least 3 track options</li>
            <li><strong>Attendance Mode:</strong> Radio buttons (<code style={{ fontFamily: font.mono }}>type="radio"</code>) for In-Person vs. Virtual</li>
            <li><strong>Special Requests:</strong> <code style={{ fontFamily: font.mono }}>&lt;textarea&gt;</code> for dietary/accessibility notes</li>
            <li><strong>Consent Checkbox:</strong> Clickable terms agreement <code style={{ fontFamily: font.mono }}>&lt;input type="checkbox" required&gt;</code></li>
            <li><strong>Submit Button:</strong> Real <code style={{ fontFamily: font.mono }}>&lt;button type="submit"&gt;</code></li>
          </ul>
        </div>

        <div style={{ background: ink.accentSoft, padding: '10px 14px', borderRadius: 8, fontSize: 17, color: ink.accent, fontWeight: 600 }}>
          Strict Rule: Every single input must have a paired &lt;label for&gt;!
        </div>
      </div>

      {/* Part B: The Workshop Schedule & Pricing Table */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 16,
          padding: '30px 34px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: ink.sky, textTransform: 'uppercase' }}>
              Component 2 · Structured Data
            </span>
            <span style={{ background: ink.skySoft, color: ink.sky, fontSize: 15, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>
              &lt;table&gt; Architecture
            </span>
          </div>

          <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 14px 0', color: ink.text }}>
            Schedule & Track Matrix Table
          </h3>

          <ul style={{ fontSize: 20, lineHeight: 1.55, color: ink.soft, paddingLeft: 22, margin: 0 }}>
            <li>Wrapped in <code style={{ fontFamily: font.mono }}>&lt;table&gt;</code> with an accessible <code style={{ fontFamily: font.mono }}>&lt;caption&gt;</code> title</li>
            <li><strong>Table Header (<code style={{ fontFamily: font.mono }}>&lt;thead&gt;</code>):</strong> 5 column headers (<code style={{ fontFamily: font.mono }}>&lt;th scope="col"&gt;</code>): Time, Session Topic, Room, Instructor, Pricing</li>
            <li><strong>Table Body (<code style={{ fontFamily: font.mono }}>&lt;tbody&gt;</code>):</strong> At least 4 session rows (<code style={{ fontFamily: font.mono }}>&lt;tr&gt;</code>) using <code style={{ fontFamily: font.mono }}>&lt;th scope="row"&gt;</code> for time slots and <code style={{ fontFamily: font.mono }}>&lt;td&gt;</code> for data</li>
            <li><strong>Table Footer (<code style={{ fontFamily: font.mono }}>&lt;tfoot&gt;</code>):</strong> Summary row with <code style={{ fontFamily: font.mono }}>colspan="5"</code> explaining ticket perks or included meals</li>
            <li><strong>Accessibility:</strong> Zero layout divs inside table!</li>
          </ul>
        </div>

        <div style={{ background: ink.skySoft, padding: '10px 14px', borderRadius: 8, fontSize: 17, color: ink.sky, fontWeight: 600 }}>
          Deliverable: Single file <code style={{ fontFamily: font.mono }}>portal.html</code> pushed to GitHub.
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── SLIDE 38: Homework 02: Verification Rubric & AI Workflow ─────────────────

const HomeworkPortalRubric: Page = () => {
  const tablePreviewCode = `<table>
  <caption>Conference Schedule & Pricing Matrix</caption>
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Session</th>
      <th scope="col">Room</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">09:00 AM</th>
      <td>HTML5 & DOM Deep Dive</td>
      <td>Hall A</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">11:00 AM</th>
      <td>Forms & Accessibility</td>
      <td>Lab 2</td>
      <td>$49</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">All passes include DevTools lab access</td></tr>
  </tfoot>
</table>`;

  return (
    <div style={fill}>
      <SlideHeader
        part="Homework 02 · Rubric & AI Drill"
        title="Homework 02: Evaluation Rubric & AI Drill"
        subtitle="AI mock data generation prompt and 4-point verification checklist"
      />

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 30,
        }}
      >
        {/* Left: Pragmatic AI Table Drill */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            padding: '26px 30px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.accent, marginBottom: 8, textTransform: 'uppercase' }}>
              AI Drill: Mock Data Generation
            </div>
            <p style={{ fontSize: 19, color: ink.soft, margin: '0 0 12px 0', lineHeight: 1.45 }}>
              Use today's mock data prompting workflow to generate realistic table rows:
            </p>

            <div
              style={{
                background: ink.panel,
                padding: '12px 16px',
                borderRadius: 10,
                borderLeft: `4px solid ${ink.accent}`,
                fontFamily: font.mono,
                fontSize: 16,
                color: ink.text,
                lineHeight: 1.5,
                marginBottom: 14,
              }}
            >
              "Generate an accessible HTML5 table for a 4-session tech workshop with columns Time, Session, Room, and Price. Include a &lt;caption&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, and proper &lt;th scope='col'&gt; and &lt;th scope='row'&gt; attributes. Do not use generic divs."
            </div>

            <div style={{ fontSize: 16, fontWeight: 700, color: ink.muted, textTransform: 'uppercase', marginBottom: 6 }}>
              Expected Table Structure:
            </div>
            <HighlightedCode code={tablePreviewCode} style={{ fontSize: 15, padding: '12px 14px' }} />
          </div>

          <div style={{ background: ink.accentSoft, padding: '10px 14px', borderRadius: 8, fontSize: 16, color: ink.accent, fontWeight: 600 }}>
            Audit AI output: Check that &lt;caption&gt; and scope="col" exist before pasting!
          </div>
        </div>

        {/* Right: 4-Point Self-Check Rubric */}
        <div
          style={{
            background: ink.panel,
            borderRadius: 16,
            padding: '26px 30px',
            border: `2px solid ${ink.border}`,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: ink.mint, marginBottom: 8, textTransform: 'uppercase' }}>
              4-Point Self-Evaluation Rubric
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 16px 0', color: ink.text }}>
              Verify Before Submitting
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 18, color: ink.text }}>1. Form & Label Pairing</strong>
                <div style={{ fontSize: 16, color: ink.soft, marginTop: 4 }}>
                  Every input, radio, and textarea has a paired <code style={{ fontFamily: font.mono }}>&lt;label for="..."&gt;</code>. ZERO unlabelled inputs.
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 18, color: ink.text }}>2. Semantic Table Architecture</strong>
                <div style={{ fontSize: 16, color: ink.soft, marginTop: 4 }}>
                  Includes <code style={{ fontFamily: font.mono }}>&lt;caption&gt;</code>, <code style={{ fontFamily: font.mono }}>&lt;thead&gt;</code> with <code style={{ fontFamily: font.mono }}>scope="col"</code>, and clean rows.
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 18, color: ink.text }}>3. The Touch Target Test</strong>
                <div style={{ fontSize: 16, color: ink.soft, marginTop: 4 }}>
                  Clicking the text of any label immediately focuses the text field or toggles the checkbox/radio button.
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
                <strong style={{ fontSize: 18, color: ink.text }}>4. DevTools Keyboard Test</strong>
                <div style={{ fontSize: 16, color: ink.soft, marginTop: 4 }}>
                  Press <code style={{ fontFamily: font.mono }}>Tab</code> through the entire document. Focus navigates logically to every interactive control.
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: ink.mintSoft, padding: '10px 14px', borderRadius: 8, fontSize: 16, color: ink.mint, fontWeight: 600 }}>
            Submit: Push portal.html to GitHub before Session 03.
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
};

// ─── SLIDE 39: Closing & Session 3 Preview ────────────────────────────────────

const Closing: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Conclusion"
      title="Session 2 Key Takeaways"
      subtitle="What we mastered today & What comes next"
    />

    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        gap: 36,
      }}
    >
      {/* Left: What We Mastered */}
      <div
        style={{
          flex: 1,
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          border: `2px solid ${ink.border}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.mint,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Today's Checkpoints Mastered ✓
          </div>
          <ul style={{ fontSize: 24, lineHeight: 1.65, color: ink.soft, paddingLeft: 24, margin: 0 }}>
            <li>HTML Syntax: Opening tag, attributes, content, closing tag</li>
            <li>Document Skeleton: DOCTYPE, html, head vs. body boundary</li>
            <li>Core Elements: h1–h6, p, a, img with alt, and block vs. inline flow</li>
            <li>DOM Tree Architecture: Russian nesting dolls and hierarchy</li>
            <li>The 6 Semantic Landmarks: header, nav, main, article, section, footer</li>
            <li>Forms & Tables: &lt;form&gt; label contract and &lt;table&gt; data matrices</li>
            <li>Pragmatic AI: Socratic debugging, mock data, and 60-second code audit</li>
            <li>Two Homework Deliverables: event.html card & portal.html forms/tables</li>
          </ul>
        </div>
        <div style={{ background: ink.mintSoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.mint }}>
          Solid architectural foundation for styling!
        </div>
      </div>

      {/* Right: Next Session Teaser */}
      <div
        style={{
          flex: 1,
          background: '#ffffff',
          borderRadius: 16,
          padding: '36px 40px',
          border: `3px solid ${ink.accent}`,
          boxShadow: shadow.card,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: ink.accent,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Next Session · Session 03
          </div>
          <h3
            style={{
              fontFamily: font.display,
              fontSize: 44,
              fontWeight: 800,
              margin: '0 0 16px 0',
              color: ink.text,
            }}
          >
            The CSS Box Model & Cascading Specificity
          </h3>
          <p style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, margin: '0 0 20px 0' }}>
            Now that our document skeleton is solid, how do we dress it with styles?
          </p>
          <ul style={{ fontSize: 24, lineHeight: 1.6, color: ink.soft, paddingLeft: 24 }}>
            <li>The 4 Layers: Content, Padding, Border, Margin</li>
            <li>The Life-Saving Rule: <code style={{ fontFamily: font.mono }}>box-sizing: border-box</code></li>
            <li>CSS Specificity: Tags vs. Classes vs. IDs</li>
            <li>DevTools Box Model Surgery</li>
          </ul>
        </div>
        <div style={{ background: ink.accentSoft, padding: '14px 18px', borderRadius: 10, fontSize: 20, fontWeight: 600, color: ink.accent }}>
          See you next week! Complete event.html & portal.html before class.
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
);

// ─── Speaker Notes (Index-Aligned with 40 Pages) ──────────────────────────────

export const notes: (string | undefined)[] = [
  // 01: Cover
  `Welcome students back to Session 2!
Connect to Session 1: Last week we explored how the internet works, DNS, HTTP requests, and the browser rendering pipeline.
Today we write the code that browsers turn into pixels: HTML5 and the DOM Tree.
Emphasize: In the AI era, our job isn't memorizing tags—it's understanding document structure and auditing code.`,

  // 02: Agenda
  `Walk through our 5-phase session roadmap:
1. Anatomy of HTML & syntax rules.
2. Core tags in our live interactive sandbox.
3. The DOM Tree and semantic landmarks.
4. Pragmatic AI workflows: Socratic debugging, mock data, and code auditing.
5. Guided hands-on lab and homework assignment.`,

  // 03: Divider 1
  `Transition into Part 1.
Reassure beginners: HTML is friendly and forgiving, but subtle nesting bugs cause headaches later if we don't master the grammar upfront.`,

  // 04: What is HTML?
  `Highlight the triad: HTML (Skeleton), CSS (Skin), JavaScript (Muscles).
Stress: Beginners often try to make HTML look pretty by adding random tags. Remind them: HTML only provides meaning and structure. Styling belongs to CSS.`,

  // 05: Tag Anatomy
  `Walk through the anatomy: opening tag, attribute name and value in quotes, content, closing tag.
Point out the forward slash in </p>.
Mention self-closing / void elements (img, input, meta) so students don't look for </img> tags later.`,

  // 06: Document Skeleton Live Playground
  `Live Demo Time! Click through the steps in the playground using Next Step or the step buttons:
Step 1: Explain <!DOCTYPE html> as the modern standard declaration.
Step 2: Show the root <html> wrapper. Notice the clean green diff highlight on newly added lines!
Step 3: Point out that <head> does NOT show up on screen.
Step 4: Show the <body> coming alive with rendered content!
Click 'Live Edit' anytime to type and watch the browser update in real-time.`,

  // 07: Head vs. Body
  `Reinforce the boundary:
<head> is invisible metadata for the machine.
<body> is visible content for the human.
Highlight the beginner pitfall: putting <h1> inside <head>.`,

  // 08: Concept Check 1
  `Solicit student answers before clicking!
Ask: 'Where should a navigation bar and headline live?'
Click option B to reveal the green checkmark and explain why.`,

  // 09: Divider 2
  `Transition into Part 2: Core Tags and Live Sandbox.
Now we explore the common elements used to build 90% of web content.`,

  // 10: Headings Hierarchy Playground
  `Live Demo with Headings:
Point out the strict rule: Exactly ONE <h1> per page.
Show h2 and h3 nesting.
Explain why skipping heading levels (e.g., h1 to h4) breaks accessibility screen readers.`,

  // 11: Paragraphs & Text Semantics
  `Walk through <p>, <strong>, and <em>.
Emphasize semantics: <strong> means 'important', not just 'bold'.
Point out the anti-pattern of using multiple <br> tags for vertical spacing.`,

  // 12: Hyperlinks Playground
  `Demonstrate links:
Step 1: Absolute links pointing to external sites.
Step 2: Relative links pointing to internal pages.
Step 3: target='_blank' and why rel='noopener' protects against tab security exploits.`,

  // 13: Images & alt Attribute Playground
  `Crucial accessibility moment:
Step 1 & 2: Show how src and alt work.
Step 3: Demonstrate the broken link! Show how the alt text appears when the image fails to load.
Explain that blind users hear that alt text spoken aloud.`,

  // 14: Lists Playground
  `Differentiate <ul> (unordered bullets) and <ol> (ordered steps).
Show how <li> must be a direct child of <ul> or <ol>.`,

  // 15: Block vs. Inline
  `Mental Model: Block elements stack vertically like bricks. Inline elements flow horizontally like words.
Point out that <h1> and <p> are blocks, while <a> and <strong> are inline.`,

  // 16: Concept Check 2
  `Poll the classroom on the importance of the alt attribute.
Click the correct answer to show how screen readers rely on alt descriptions.`,

  // 17: Divider 3
  `Transition into Part 3: The DOM Tree Architecture and Semantic HTML5.
This is the core conceptual foundation of modern frontend development.`,

  // 18: Nesting Dolls
  `The Russian Nesting Dolls Metaphor:
HTML is a parent-child hierarchy in browser memory.
Explain Parent, Child, and Sibling relationships.
Warn students: Closing tags out of order creates unpredictable browser auto-correction bugs.`,

  // 19: Why Semantic HTML Matters
  `The 3 Pillars of Semantics:
1. Accessibility for assistive technologies.
2. Search Engine Optimization (SEO).
3. Code maintainability and AI agent parsing.`,

  // 20: Core Landmarks
  `Introduce the 6 landmark elements:
<header>, <nav>, <main>, <article>, <section>, <footer>.
Point out: Exactly ONE <main> per document.`,

  // 21: Button vs. Anchor
  `The golden rule that separates seniors from juniors:
<a> is for URL navigation.
<button> is for in-page actions.
Demonstrate that <button> gets keyboard focus (Tab/Enter) automatically, while <div onclick> is completely broken for keyboard users.`,

  // 22: HTML Forms & The <label> Contract
  `Explain HTML forms:
The <form> element encapsulates input controls and enables native Enter key submission.
Deep dive into the <label> contract:
1. Explain why <label for="id"> matching <input id="id"> is non-negotiable.
2. Clicking the label text focuses the input or checks the box—great for accessibility and mobile touch targets!
3. Warn against the #1 beginner trap: using placeholder as a label. Placeholders vanish on typing and fail screen readers.`,

  // 23: Forms Interactive Playground
  `Live Demo with Forms:
Click through the 3 steps in the playground:
Step 1: The basic form container and submit button.
Step 2: Adding text & email inputs with explicit labels and the required attribute.
Step 3: Dropdown <select> and checkbox with clickable text label.
Invite a student or type in the live sandbox to show native browser email validation!`,

  // 24: HTML Tables & Tabular Data Architecture
  `Introduce structured tabular data:
Explain the 5 key table layers: <table>, <caption>, <thead>, <tbody>, and <tfoot>.
Stress the golden accessibility rule:
Always declare <th scope="col"> for columns and <th scope="row"> for rows so screen readers can announce cell coordinates.
Hammer home the golden rule: Tables are exclusively for tabular data—NEVER use tables for page layout!`,

  // 25: Div Soup vs. Semantic
  `Compare the two syntax-highlighted snippets side by side.
Ask students: 'Which code would you rather read at 2 AM?'
Show how semantic HTML conveys the layout instantly.`,

  // 26: Concept Check 3 (Parsons Challenge)
  `Interactive puzzle:
Ask students to spot the mismatched closing tags in the snippet.
Click 'Fix Nesting Order' to reveal the resolved code and celebrate the fix!`,

  // 27: Divider 4
  `Transition into Part 4: Pragmatic AI in Web Development.
How to actually use AI daily for learning, debugging, and mock data without letting it ruin your code.`,

  // 28: AI Workflow 1: Socratic Debugger
  `Teach the 3-part debug prompt format:
1. Provide your code.
2. State what happens in browser.
3. Ask for a guiding explanation, not code.
Show how this unlocks deep understanding in seconds.`,

  // 29: AI Workflow 2: Mock Data Generation
  `Show students how to save time:
Instead of manually typing 5 fake course cards, prompt AI with strict constraints to generate semantic mock data!
Notice the clean HTML ready to paste into projects.`,

  // 30: AI Workflow 3: The 60-Second Code Audit
  `The daily habit of every smart developer:
Never paste AI code blindly. Run the 3 checks: Landmarks, Button vs Link, and Alt attributes.`,

  // 31: In-Class Practice: Audit This AI Snippet
  `Live classroom exercise!
Ask students to spot the 3 defects in this AI snippet.
Click 'Reveal The 3 Flaws' to check answers together!`,

  // 32: Divider 5
  `Transition into Part 5: The hands-on lab.
Time for students to open VS Code and Chrome DevTools!`,

  // 33: Learning Example: Partnering with AI
  `Learning Example: Partnering with AI:
Walk students through a real-world case study before they touch their lab exercises:
Phase 1: Identify 3 critical defects in legacy newsletter markup (missing form, no labels, fake onclick div).
Phase 2: Construct a constrained technical prompt specifying HTML5 standards and label pairing.
Phase 3: Conduct a strict 60-second semantic audit on the AI output.
Phase 4: Verify keyboard accessibility in Chrome DevTools to ensure true usability.`,

  // 34: Lab Starter Code & Instructions
  `Walk through the 4 lab checkpoints:
Step 1: Set up semantic.html.
Step 2: Refactor top bar into <header> and <nav>.
Step 3: Refactor card into <article> with <button>.
Step 4: Open DevTools Elements tab and use arrow keys to navigate the DOM tree.`,

  // 35: Lab DevTools Verification
  `Guide students through live DevTools testing:
1. Keyboard navigation in Elements tree.
2. Inspecting the Accessibility tab for Role: button.
3. The Tab key test to verify interactive focus.`,

  // 36: Homework 01 Assignment
  `Introduce Homework 1: event.html.
Explain the requirements: valid skeleton, semantic header/nav, event card article, poster image, RSVP button, and footer.
Highlight the pragmatic AI schedule task!`,

  // 37: Homework 01 Self-Evaluation Checklist
  `Walk through the 4-part rubric for Homework 1:
1. Skeleton check.
2. Landmarks check.
3. Interaction check.
4. Accessibility & DevTools check.
Students should verify every box before pushing to GitHub.`,

  // 38: Homework 02: Event Portal & Schedule Matrix
  `Introduce Homework 2: Conference Registration & Schedule Portal (portal.html).
Explain the two major deliverables:
1. Attendee Registration Form: Built with <form>, text/email inputs, <select> dropdown, radio buttons, and required checkbox.
2. Schedule & Track Matrix: Built with structured <table>, accessible <caption>, <thead> with <th scope="col">, <tbody> with <th scope="row">, and summary <tfoot>.
Stress the non-negotiables: Every input must have a paired <label for>, and tables must NEVER be used for page layout!`,

  // 39: Homework 02: Verification Rubric & AI Workflow
  `Walk through the verification rubric and AI prompt guide for Homework 2:
Component 1 Rubric: Form validation, explicit label pairing, submit button, and tab order.
Component 2 Rubric: Semantic table structure, <caption>, scope attributes, and zero div soup.
Show the AI Mock Data Prompt: How students can use AI to generate rich conference schedule rows with clean tabular markup.
Challenge students to run their 60-second audit on the AI output before pasting it into portal.html!`,

  // 40: Closing & Session 3 Preview
  `Recap today's achievements across HTML syntax, DOM hierarchy, semantic landmarks, forms, tables, and pragmatic AI workflows.
Highlight the two deliverables:
1. event.html (The Accessible Event Showcase Card)
2. portal.html (The Event Portal & Schedule Matrix)
Tease Session 3: The CSS Box Model and Cascading Specificity.
Remind everyone to push their work to GitHub before next class!`,
];

// ─── Slide Transition ─────────────────────────────────────────────────────────

export const transition: SlideTransition = {
  duration: 220,
  enter: {
    duration: 220,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    keyframes: [
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
  exit: {
    duration: 150,
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 1, transform: 'translateY(-4px)' },
    ],
  },
};

// ─── Meta & Export Default ────────────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 02: Semantic HTML5, DOM Architecture & Pragmatic AI Workflows',
  createdAt: '2026-10-04T18:24:14.972Z',
};

export default [
  Cover,
  Agenda,
  Divider1,
  WhatIsHtml,
  TagAnatomy,
  DocumentSkeleton,
  HeadVsBody,
  ConceptCheck1,
  Divider2,
  HeadingsPlayground,
  TextSemanticsPlayground,
  HyperlinksPlayground,
  ImagesPlayground,
  ListsPlayground,
  BlockVsInline,
  ConceptCheck2,
  Divider3,
  NestingDolls,
  WhySemantic,
  CoreLandmarks,
  ButtonVsAnchor,
  FormsAnatomy,
  FormsPlayground,
  TablesAnatomy,
  DivSoupVsSemantic,
  ConceptCheck3,
  Divider4,
  AISocraticDebugger,
  AIMockDataGenerator,
  AIAuditLive,
  AIAuditPractice,
  Divider5,
  LearningExampleAI,
  LabInstructions,
  LabDevToolsVerification,
  HomeworkAssignment,
  HomeworkChecklist,
  HomeworkPortal,
  HomeworkPortalRubric,
  Closing,
] satisfies Page[];
