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
  purple: '#7e22ce',
  purpleSoft: 'rgba(126, 34, 206, 0.1)',
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

// Deterministic 1920x1080 Flexbox canvas root
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
  size = 32,
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

const IconLayout = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </Svg>
);

const IconCheck = ({ size = 32, color = ink.mint }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Svg>
);

const IconAlert = ({ size = 32, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Svg>
);

const IconSparkles = ({ size = 32, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </Svg>
);

const IconSmartphone = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </Svg>
);

const IconMonitor = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </Svg>
);

const IconZap = ({ size = 32, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
);

const IconPhoneLandscape = ({ size = 20, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <line x1="18" y1="12" x2="18.01" y2="12" />
  </Svg>
);

const IconTablet = ({ size = 20, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </Svg>
);

const IconLaptop = ({ size = 20, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </Svg>
);

const IconMenu = ({ size = 20, color = '#fff' }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Svg>
);

const IconClose = ({ size = 20, color = '#fff' }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Svg>
);

// ─── Header & Footer Components ───────────────────────────────────────────────

const SlideHeader = ({
  part,
  title,
  subtitle,
}: {
  part?: string;
  title: string;
  subtitle?: string;
}) => (
  <div
    style={{
      marginBottom: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flexShrink: 0,
    }}
  >
    {part && (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 16,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: ink.accent,
            display: 'inline-block',
          }}
        />
        <span>{part}</span>
      </div>
    )}
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 24,
      }}
    >
      <h2
        style={{
          fontSize: 46,
          fontWeight: 800,
          margin: 0,
          fontFamily: font.display,
          letterSpacing: '-0.03em',
          color: ink.text,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <span style={{ fontSize: 24, color: ink.muted, fontWeight: 400 }}>
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

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
        fontSize: 20,
        color: ink.muted,
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ fontWeight: 700, color: ink.text }}>SESSION 04</span>
        <span style={{ color: ink.border }}>|</span>
        <span>Modern Layouts with Flexbox, Responsive Design & CSS Wrap-up</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 600, color: ink.soft }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Syntax Highlighter Helper ────────────────────────────────────────────────

const renderCodeLine = (line: string): ReactNode => {
  if (line.trim().startsWith('/*') || line.trim().startsWith('//') || line.trim().startsWith('<!--')) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }

  // Handle CSS properties and selectors
  if (line.includes(':') && !line.includes('http') && !line.includes('//')) {
    const colonIdx = line.indexOf(':');
    const prop = line.slice(0, colonIdx);
    const val = line.slice(colonIdx);
    return (
      <>
        <span style={{ color: '#79c0ff' }}>{prop}</span>
        <span style={{ color: '#e6edf3' }}>:</span>
        <span style={{ color: '#a5d6ff' }}>{val}</span>
      </>
    );
  }

  // Highlight HTML tags
  if (line.includes('<') || line.includes('>')) {
    const parts = line.split(/(<\/?[a-zA-Z0-9-]+|\/?>|="[^"]*"|='[^']*'|[a-zA-Z0-9-]+(?==))/g);
    return (
      <>
        {parts.map((p, i) => {
          if (!p) return null;
          if (p.startsWith('<') || p.startsWith('</') || p === '>') {
            return <span key={i} style={{ color: '#7ee787' }}>{p}</span>;
          }
          if (p.startsWith('="') || p.startsWith("='")) {
            return <span key={i} style={{ color: '#a5d6ff' }}>{p}</span>;
          }
          return <span key={i} style={{ color: '#e6edf3' }}>{p}</span>;
        })}
      </>
    );
  }

  return <span style={{ color: '#e6edf3' }}>{line}</span>;
};

const CodeSnippet = ({
  code,
  filename,
  language = 'css',
  fontSize = 18,
}: {
  code: string;
  filename?: string;
  language?: string;
  fontSize?: number;
}) => {
  const lines = code.trim().split('\n');
  return (
    <div
      style={{
        borderRadius: 14,
        background: ink.panelDark,
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: shadow.window,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        {filename && (
          <span style={{ fontFamily: font.mono, fontSize: 13, color: '#8b949e' }}>
            {filename}
          </span>
        )}
        <span style={{ fontSize: 12, fontWeight: 700, color: '#6e7681', textTransform: 'uppercase' }}>
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '16px 20px',
          fontFamily: font.mono,
          fontSize,
          lineHeight: 1.5,
          color: '#e6edf3',
          overflowX: 'auto',
        }}
      >
        <code>
          {lines.map((ln, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 16 }}>
              <span style={{ color: '#484f58', userSelect: 'none', width: 24, textAlign: 'right', flexShrink: 0 }}>
                {idx + 1}
              </span>
              <span style={{ flex: 1 }}>{renderCodeLine(ln)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

interface DiffLine {
  type: 'context' | 'added' | 'removed';
  text: string;
}

const DiffCodeSnippet = ({
  filename,
  lines,
  fontSize = 17,
}: {
  filename?: string;
  lines: DiffLine[];
  fontSize?: number;
}) => (
  <div
    style={{
      borderRadius: 14,
      background: ink.panelDark,
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: shadow.window,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      fontFamily: font.mono,
      fontSize,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
      </div>
      {filename && (
        <span style={{ fontSize: 13, color: '#8b949e', letterSpacing: '0.02em' }}>
          {filename}
        </span>
      )}
      <span
        style={{
          fontSize: 11,
          padding: '2px 8px',
          borderRadius: 4,
          background: 'rgba(56, 189, 248, 0.15)',
          color: '#38bdf8',
          fontWeight: 700,
        }}
      >
        GIT DIFF
      </span>
    </div>

    <div style={{ padding: '14px 0', lineHeight: 1.65 }}>
      {lines.map((l, idx) => {
        const isAdded = l.type === 'added';
        const isRemoved = l.type === 'removed';
        return (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '3px 18px',
              background: isAdded
                ? 'rgba(46, 160, 67, 0.18)'
                : isRemoved
                ? 'rgba(248, 81, 73, 0.18)'
                : 'transparent',
              borderLeft: isAdded
                ? '4px solid #3fb950'
                : isRemoved
                ? '4px solid #f85149'
                : '4px solid transparent',
            }}
          >
            <span
              style={{
                width: 22,
                userSelect: 'none',
                color: isAdded ? '#3fb950' : isRemoved ? '#f85149' : '#484f58',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {isAdded ? '+' : isRemoved ? '-' : ' '}
            </span>
            <span
              style={{
                color: isAdded ? '#7ee787' : isRemoved ? '#ff7b72' : '#e6edf3',
                textDecoration: isRemoved ? 'line-through' : 'none',
                fontWeight: isAdded ? 600 : 400,
              }}
            >
              {l.text}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

// ─── Concept Check Component ──────────────────────────────────────────────────

interface Option {
  label: string;
  isCorrect: boolean;
  explanation: string;
}

const ConceptCheckCard = ({
  question,
  options,
}: {
  question: string;
  options: Option[];
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 24,
      }}
    >
      <div
        style={{
          padding: '24px 32px',
          background: ink.panel,
          borderRadius: 16,
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: ink.accent,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Interactive Concept Check
        </div>
        <h3
          style={{
            fontSize: 28,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.35,
            color: ink.text,
          }}
        >
          {question}
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {options.map((opt, i) => {
          const isChosen = selectedIdx === i;
          let borderCol = ink.border;
          let bgCol = '#ffffff';

          if (isChosen) {
            borderCol = opt.isCorrect ? ink.mint : ink.accent;
            bgCol = opt.isCorrect ? ink.mintSoft : ink.accentSoft;
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIdx(i)}
              style={{
                padding: '20px 24px',
                borderRadius: 14,
                border: `2px solid ${borderCol}`,
                background: bgCol,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: ink.text }}>
                  {opt.label}
                </span>
                {isChosen && (
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: 6,
                      background: opt.isCorrect ? ink.mint : ink.accent,
                      color: '#ffffff',
                    }}
                  >
                    {opt.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}
                  </span>
                )}
              </div>
              {isChosen && (
                <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.45 }}>
                  {opt.explanation}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Chapter Divider Component ────────────────────────────────────────────────

const ChapterDivider = ({
  number,
  title,
  subtitle,
  tagline,
}: {
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
}) => (
  <div style={fill}>
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 40,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 20px',
          borderRadius: 9999,
          background: ink.accentSoft,
          color: ink.accent,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          width: 'fit-content',
          marginBottom: 24,
        }}
      >
        <span>{number}</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>{tagline}</span>
      </div>
      <h1
        style={{
          fontSize: 88,
          fontFamily: font.display,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          lineHeight: 1.08,
          maxWidth: 1400,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 32,
          color: ink.muted,
          margin: 0,
          maxWidth: 1100,
          lineHeight: 1.45,
        }}
      >
        {subtitle}
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE PAGES DEFINITIONS (1 - 46)
// ─────────────────────────────────────────────────────────────────────────────

// 01: Cover
const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 18px',
          borderRadius: 9999,
          background: ink.accentSoft,
          color: ink.accent,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          width: 'fit-content',
          marginBottom: 28,
        }}
      >
        <span>Phase 1 Milestone</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>CSS Architecture Mastery</span>
      </div>
      <h1
        style={{
          fontSize: 96,
          fontFamily: font.display,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          lineHeight: 1.04,
          maxWidth: 1500,
        }}
      >
        Modern Layouts with Flexbox, Responsive Design & CSS Wrap-up
      </h1>
      <p
        style={{
          fontSize: 32,
          color: ink.muted,
          margin: '0 0 44px 0',
          maxWidth: 1250,
          lineHeight: 1.45,
        }}
      >
        Master the 1D layout engine, fluid multi-card product grids, mobile-first media queries,
        and accessible UI components before advancing to JavaScript.
      </p>

      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, color: ink.soft }}>
          <IconLayout size={24} color={ink.accent} />
          <span>The 3-Property Flexbox Rule</span>
        </div>
        <span style={{ color: ink.border }}>•</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, color: ink.soft }}>
          <IconSmartphone size={24} color={ink.sky} />
          <span>Mobile-First Viewport & Breakpoints</span>
        </div>
        <span style={{ color: ink.border }}>•</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, color: ink.soft }}>
          <IconZap size={24} color={ink.mint} />
          <span>Complete CSS Wrap-up</span>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 02: Agenda (Middle gap fixed by wrapping in a flex container with justifyContent: 'center' and gap: 24)
const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Masterclass Architecture"
      title="Today's Agenda: From Flexbox to Full Responsive Mastery"
      subtitle="7 structured milestones covering modern layout and concluding Phase 1"
    />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 01 • 30 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Modern Layout & 3-Property Rule</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            Container vs item contract, Main/Cross axes, and <code>display: flex</code>, <code>justify-content</code>, <code>align-items</code>.
          </p>
        </div>

        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 02 • 25 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Direction, Wrap & Child Powers</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            Flipping axes with <code>flex-direction</code>, fluid wrapping, <code>flex: 1 1 280px</code>, and the <code>margin-top: auto</code> button secret.
          </p>
        </div>

        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 03 • 20 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Responsive Design & Viewport</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            The mobile traffic shift, the 980px viewport meta contract, and mobile-first progressive enhancement.
          </p>
        </div>

        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 04 • 25 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Media Queries & Breakpoints</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            Syntax mechanics of <code>@media (min-width: ...)</code>, 4 industry breakpoints, and why mobile-first beats desktop-first.
          </p>
        </div>

        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 05 • 25 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Production UI Patterns</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            Responsive navigation bar, zero-media-query fluid card grid, and accessible two-column form controls.
          </p>
        </div>

        <div style={{ padding: '26px 28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: ink.accent, letterSpacing: '0.08em' }}>PART 06 & 07 • 45 MIN</div>
          <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>CSS Wrap-up, Lab & Homework</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.45 }}>
            Chrome Device Mode audit, the 5-layer CSS synthesis, in-class Storefront lab, and 2 homework assignments.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 03: Divider 1
const Divider1: Page = () => (
  <ChapterDivider
    number="Part 01"
    tagline="Modern Layout Revolution"
    title="Flexbox Fundamentals & The 3-Property Rule"
    subtitle="Say goodbye to hacky floats and table layouts: welcome to modern one-dimensional browser alignment."
  />
);

// 04: The Layout Evolution
const TheLayoutEvolution: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="The Layout Evolution: How the Web Escaped Float Hacks"
      subtitle="Before Flexbox vs. Modern Flexbox: the monumental shift in web layout engines"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div
        style={{
          padding: 28,
          borderRadius: 16,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconAlert size={28} color={ink.amber} />
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.amber }}>
            The Dark Ages (2000 – 2014)
          </h3>
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
          <li><strong>Floats:</strong> <code>float: left</code> designed for text wrapping around images was abused for entire page columns.</li>
          <li><strong>Clearfix Disasters:</strong> Containers collapsed to 0 height unless magic clearfix hacks were injected.</li>
          <li><strong>Vertical Centering Nightmare:</strong> Centering a box vertically required 10 lines of absolute positioning and negative margins.</li>
          <li><strong>Fragile Math:</strong> <code>width: 33.333%</code> broke into new lines if a single 1px border was added!</li>
        </ul>
      </div>

      <div
        style={{
          padding: 28,
          borderRadius: 16,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconCheck size={28} color={ink.mint} />
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.mint }}>
            The Flexbox Revolution (2015 – Present)
          </h3>
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
          <li><strong>One-Dimensional Layout Engine:</strong> Purpose-built for rows or columns of UI elements.</li>
          <li><strong>Effortless Alignment:</strong> Center items horizontally and vertically in exactly two lines of CSS.</li>
          <li><strong>Dynamic Space Absorption:</strong> Elements grow to fill leftover space or shrink to avoid overflowing.</li>
          <li><strong>Zero Clearfix Hacks:</strong> The parent container naturally wraps its children without collapsing.</li>
        </ul>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 05: Parent-Child Contract
const ParentChildContract: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="The Parent-Child Contract: Container vs. Items"
      subtitle="Flexbox is activated on the parent container to orchestrate its direct children"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            The Golden Rule of Flexbox
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            Flexbox rules are strictly partitioned:
            <br />
            1. <strong>Container Rules</strong> live on the parent: <code>display: flex</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code>.
            <br />
            2. <strong>Item Rules</strong> live on direct children: <code>flex: 1</code>, <code>align-self</code>, <code>margin-top: auto</code>.
          </p>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: 12, background: ink.accentSoft, border: `1px solid ${ink.accentBorder}` }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: ink.accent }}>
            ⚠️ Pitfall to Avoid:
          </span>
          <span style={{ fontSize: 16, color: ink.soft, marginLeft: 8 }}>
            Flex properties do <strong>not</strong> inherit to grandchildren! If child elements have children of their own, that child must also declare <code>display: flex</code>.
          </span>
        </div>
      </div>

      <div style={{ flex: 1.1 }}>
        <CodeSnippet
          filename="structure.html & style.css"
          language="css"
          code={`/* 1. THE PARENT CONTAINER (The Conductor) */
.parent {
  display: flex;          /* Activates Flexbox layout */
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

/* 2. THE DIRECT CHILDREN (The Musicians) */
.parent > .child {
  flex: 1;                /* Grows/shrinks proportionally */
}

/* 3. GRANDCHILDREN ARE UNAFFECTED! */
.child > p {
  /* Behaves as standard block text */
}`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 06: Main vs. Cross Axis
const MainVsCrossAxis: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="The Two Axes: Main Axis vs. Cross Axis"
      subtitle="The physical coordinate system that controls all Flexbox spacing and alignment"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 24, fontWeight: 700, color: ink.sky }}>
            Main Axis (Default: Horizontal ➔)
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            Runs in the direction children flow (left to right by default).
            <br />
            Governed by: <strong><code>justify-content</code></strong>.
          </p>
        </div>

        <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 24, fontWeight: 700, color: ink.purple }}>
            Cross Axis (Default: Vertical ⬇)
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            Runs perpendicular to the Main Axis (top to bottom by default).
            <br />
            Governed by: <strong><code>align-items</code></strong>.
          </p>
        </div>
      </div>

      {/* Visual Coordinate Diagram */}
      <div
        style={{
          flex: 1.2,
          height: 380,
          background: ink.panelDark,
          borderRadius: 16,
          padding: 32,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: shadow.window,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 60,
            right: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ height: 3, flex: 1, background: '#38bdf8' }} />
          <span style={{ fontSize: 16, fontFamily: font.mono, fontWeight: 700, color: '#38bdf8' }}>
            MAIN AXIS (justify-content) ➔
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 24,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: 120, height: 100, borderRadius: 12, background: 'rgba(56, 189, 248, 0.2)', border: '2px solid #38bdf8', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 20, fontWeight: 700 }}>
            Item 1
          </div>
          <div style={{ width: 120, height: 140, borderRadius: 12, background: 'rgba(168, 85, 247, 0.2)', border: '2px solid #c084fc', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 20, fontWeight: 700 }}>
            Item 2
          </div>
          <div style={{ width: 120, height: 90, borderRadius: 12, background: 'rgba(34, 197, 94, 0.2)', border: '2px solid #4ade80', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 20, fontWeight: 700 }}>
            Item 3
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16, fontFamily: font.mono, fontWeight: 700, color: '#c084fc' }}>
            ⬇ CROSS AXIS (align-items)
          </span>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 07: The 3-Property Rule
const ThreePropertyRule: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="The 3-Property Rule: Solving 90% of Layouts"
      subtitle="You only need three CSS declarations to master modern front-end alignment"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: ink.accentSoft, color: ink.accent, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 22, fontWeight: 800 }}>
          1
        </div>
        <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}><code>display: flex;</code></h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
          The power switch. Placed on the parent container, it converts all direct child elements from standard block/inline flow into flex items.
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: ink.skySoft, color: ink.sky, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 22, fontWeight: 800 }}>
          2
        </div>
        <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}><code>justify-content: ...;</code></h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
          Controls alignment along the <strong>Main Axis</strong> (horizontal by default). Packs elements together or distributes whitespace evenly between them.
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: ink.mintSoft, color: ink.mint, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 22, fontWeight: 800 }}>
          3
        </div>
        <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}><code>align-items: ...;</code></h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
          Controls alignment along the <strong>Cross Axis</strong> (vertical by default). Controls whether items stretch, center, or snap to the top/bottom edges.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 08: Justify-Content Deep Dive
const JustifyContentDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="Justify-Content: Distributing Main Axis Space"
      subtitle="The 6 core values that control how flex items sit along the main axis"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1, alignItems: 'center' }}>
      {[
        { name: 'flex-start', desc: 'Packs items at the start edge (Default)', preview: 'flex-start' },
        { name: 'center', desc: 'Packs items together at the exact center', preview: 'center' },
        { name: 'flex-end', desc: 'Packs items against the end edge', preview: 'flex-end' },
        { name: 'space-between', desc: 'First item at start, last at end, equal middle space', preview: 'space-between' },
        { name: 'space-around', desc: 'Equal space around each item (edges have half space)', preview: 'space-around' },
        { name: 'space-evenly', desc: 'Equal space between all items and both outer edges', preview: 'space-evenly' },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: font.mono, fontSize: 18, fontWeight: 700, color: ink.accent }}>
              justify-content: {item.name};
            </span>
            <span style={{ fontSize: 14, color: ink.muted }}>{item.desc}</span>
          </div>
          <div
            style={{
              height: 44,
              borderRadius: 8,
              background: '#0f172a',
              display: 'flex',
              justifyContent: item.preview as any,
              alignItems: 'center',
              padding: '0 8px',
            }}
          >
            <div style={{ width: 44, height: 26, borderRadius: 4, background: '#38bdf8' }} />
            <div style={{ width: 44, height: 26, borderRadius: 4, background: '#c084fc' }} />
            <div style={{ width: 44, height: 26, borderRadius: 4, background: '#4ade80' }} />
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 09: Align-Items Deep Dive
const AlignItemsDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="Align-Items: Controlling the Cross Axis"
      subtitle="How items align or stretch vertically across the flex row"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      {[
        { name: 'stretch', desc: 'Default: items stretch to fill container height', align: 'stretch' },
        { name: 'center', desc: 'Items centered vertically along cross axis', align: 'center' },
        { name: 'flex-start', desc: 'Items snap to top edge of container', align: 'flex-start' },
        { name: 'flex-end', desc: 'Items snap to bottom edge of container', align: 'flex-end' },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            padding: 20,
            borderRadius: 14,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            height: 360,
          }}
        >
          <div style={{ fontFamily: font.mono, fontSize: 18, fontWeight: 700, color: ink.purple }}>
            align-items: {item.name};
          </div>
          <div style={{ fontSize: 15, color: ink.muted, minHeight: 40 }}>
            {item.desc}
          </div>
          <div
            style={{
              flex: 1,
              borderRadius: 10,
              background: '#0f172a',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: item.align as any,
              padding: 12,
            }}
          >
            <div style={{ width: 36, height: item.align === 'stretch' ? 'auto' : 50, borderRadius: 6, background: '#38bdf8' }} />
            <div style={{ width: 36, height: item.align === 'stretch' ? 'auto' : 80, borderRadius: 6, background: '#c084fc' }} />
            <div style={{ width: 36, height: item.align === 'stretch' ? 'auto' : 40, borderRadius: 6, background: '#4ade80' }} />
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 10: The Gap Property
const TheGapProperty: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Flexbox Fundamentals"
      title="The Gap Property: Goodbye Fragile Margin Hacks!"
      subtitle="How modern CSS provides clean gutters between flex items without edge bleed"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.accentSoft, border: `1px solid ${ink.accentBorder}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.accent }}>
            ❌ The Obsolete Margin Hack
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Developers used <code>margin-right: 16px</code> on children, then had to cancel the outer edge with <code>:last-child {'{ margin-right: 0; }'}</code>. If items wrapped, negative margins were required.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 14, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.mint }}>
            ✅ The Modern Gap Solution
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Declare <code>gap: 20px;</code> on the parent container!
            The browser places gutters <strong>only between items</strong>, never along outer edges.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeSnippet
          filename="style.css"
          language="css"
          code={`/* Shorthand: Row & Column spacing */
.card-grid {
  display: flex;
  gap: 24px;              /* 24px in both directions */
}

/* Independent Gutters */
.catalog {
  display: flex;
  row-gap: 32px;          /* Vertical gap between rows */
  column-gap: 16px;       /* Horizontal gap between cards */
}`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 11: Interactive Flexbox Arena
const InteractiveFlexboxArena: Page = () => {
  const [justify, setJustify] = useState<'flex-start' | 'center' | 'flex-end' | 'space-between'>('space-between');
  const [align, setAlign] = useState<'stretch' | 'center' | 'flex-start' | 'flex-end'>('center');

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 01: Flexbox Fundamentals"
        title="Interactive Flexbox Arena: Live Alignment Playground"
        subtitle="Click any combination below to see the 3-Property Rule in action live"
      />
      <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: ink.muted, marginBottom: 8, textTransform: 'uppercase' }}>
              Select justify-content (Main Axis)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {(['flex-start', 'center', 'flex-end', 'space-between'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setJustify(val)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: `2px solid ${justify === val ? ink.sky : ink.border}`,
                    background: justify === val ? ink.skySoft : '#fff',
                    fontFamily: font.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: ink.muted, marginBottom: 8, textTransform: 'uppercase' }}>
              Select align-items (Cross Axis)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {(['stretch', 'center', 'flex-start', 'flex-end'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAlign(val)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: `2px solid ${align === val ? ink.purple : ink.border}`,
                    background: align === val ? ink.purpleSoft : '#fff',
                    fontFamily: font.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px 16px', borderRadius: 8, background: ink.panelDark, color: '#38bdf8', fontFamily: font.mono, fontSize: 15 }}>
            display: flex; justify-content: {justify}; align-items: {align};
          </div>
        </div>

        {/* Live Preview Box */}
        <div
          style={{
            flex: 1.2,
            height: 380,
            borderRadius: 16,
            background: '#0f172a',
            border: '2px solid rgba(255,255,255,0.1)',
            padding: 24,
            display: 'flex',
            justifyContent: justify,
            alignItems: align,
            gap: 16,
            boxShadow: shadow.window,
          }}
        >
          <div style={{ width: 90, height: align === 'stretch' ? 'auto' : 70, borderRadius: 8, background: '#38bdf8', color: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 800 }}>
            Card 1
          </div>
          <div style={{ width: 90, height: align === 'stretch' ? 'auto' : 110, borderRadius: 8, background: '#c084fc', color: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 800 }}>
            Card 2
          </div>
          <div style={{ width: 90, height: align === 'stretch' ? 'auto' : 60, borderRadius: 8, background: '#4ade80', color: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 800 }}>
            Card 3
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 12: Concept Check 1
const ConceptCheck1: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Concept Check"
      title="Check Your Mental Model: Flexbox Alignment"
      subtitle="Verify your understanding before moving into advanced mechanics"
    />
    <ConceptCheckCard
      question="You are styling a navigation bar with a brand logo on the left and login buttons on the right. With default row orientation, which property and value pushes them to opposite edges?"
      options={[
        {
          label: 'A) align-items: space-between;',
          isCorrect: false,
          explanation: 'align-items operates on the Cross Axis (vertical by default), not horizontal distribution.',
        },
        {
          label: 'B) justify-content: space-between;',
          isCorrect: true,
          explanation: 'Exactly right! justify-content controls the Main Axis (horizontal row), pinning the first item to the start edge and the last item to the end edge.',
        },
        {
          label: 'C) float: right;',
          isCorrect: false,
          explanation: 'Floats are obsolete legacy mechanisms that break flex container height calculations.',
        },
        {
          label: 'D) margin: 0 auto;',
          isCorrect: false,
          explanation: 'margin: 0 auto centers an element within its parent, but does not push items to opposite edges.',
        },
      ]}
    />
    <SlideFooter />
  </div>
);

// 13: Divider 2
const Divider2: Page = () => (
  <ChapterDivider
    number="Part 02"
    tagline="Advanced Flexbox Mechanics"
    title="Direction, Wrapping & Flex Child Powers"
    subtitle="Flipping coordinate axes, fluid multi-line wrapping, and the sticky button auto-margin secret."
  />
);

// 14: Flex-Direction
const FlexDirection: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Advanced Flexbox"
      title="Flex-Direction: Swapping the Coordinate Axes"
      subtitle="How switching direction turns a horizontal row into a vertical stack"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 24, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: font.mono, fontSize: 20, fontWeight: 700, color: ink.accent }}>
            flex-direction: row;
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, padding: '3px 8px', borderRadius: 6, background: ink.accentSoft, color: ink.accent }}>
            DEFAULT
          </span>
        </div>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
          <li>Main Axis runs <strong>Horizontal (Left ➔ Right)</strong>.</li>
          <li>Cross Axis runs <strong>Vertical (Top ⬇ Bottom)</strong>.</li>
          <li><code>justify-content</code> controls horizontal distribution.</li>
          <li><code>align-items</code> controls vertical alignment.</li>
        </ul>
        <div style={{ height: 60, borderRadius: 8, background: '#0f172a', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 12 }}>
          <div style={{ width: 40, height: 36, borderRadius: 6, background: '#38bdf8' }} />
          <div style={{ width: 40, height: 36, borderRadius: 6, background: '#c084fc' }} />
          <div style={{ width: 40, height: 36, borderRadius: 6, background: '#4ade80' }} />
        </div>
      </div>

      <div style={{ padding: 24, borderRadius: 16, background: ink.skySoft, border: `2px solid ${ink.sky}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: font.mono, fontSize: 20, fontWeight: 700, color: ink.sky }}>
            flex-direction: column;
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, padding: '3px 8px', borderRadius: 6, background: ink.sky, color: '#fff' }}>
            VERTICAL
          </span>
        </div>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
          <li>Main Axis flips to <strong>Vertical (Top ⬇ Bottom)</strong>!</li>
          <li>Cross Axis flips to <strong>Horizontal (Left ➔ Right)</strong>!</li>
          <li><code>justify-content</code> now controls vertical alignment.</li>
          <li><code>align-items</code> now controls horizontal alignment.</li>
        </ul>
        <div style={{ height: 110, borderRadius: 8, background: '#0f172a', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 120, height: 22, borderRadius: 4, background: '#38bdf8' }} />
          <div style={{ width: 120, height: 22, borderRadius: 4, background: '#c084fc' }} />
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 15: Flex-Wrap
const FlexWrap: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Advanced Flexbox"
      title="Flex-Wrap: Unlocking Multi-Line Fluid Grids"
      subtitle="Allowing cards to wrap down to the next row when screen space runs out"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.accent }}>
            <code>flex-wrap: nowrap;</code> (Default)
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Flexbox tries to force all items onto a single line. Items compress smaller and smaller until they blowout past screen edges, creating horizontal scrollbars.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 14, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.mint }}>
            <code>flex-wrap: wrap;</code> (Essential for Grids)
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            When items exceed the parent container width, remaining items gracefully drop down into the next line, honoring gap spacing!
          </p>
        </div>
      </div>

      <CodeSnippet
        filename="product-grid.css"
        language="css"
        code={`/* The Universal Fluid Grid Recipe */
.card-grid {
  display: flex;
  flex-wrap: wrap;        /* Allows wrapping across rows */
  gap: 24px;
}

.card {
  flex: 1 1 280px;        /* Minimum 280px, grows to fill */
}

/* On mobile (360px): 1 card per row */
/* On tablet (720px): 2 cards per row */
/* On desktop (1200px): 4 cards per row */
/* ZERO media queries required! */`}
      />
    </div>
    <SlideFooter />
  </div>
);

// 16: Interactive Flex Direction & Wrap Playground (NEW INTERACTIVE SLIDE)
const InteractiveFlexWrapPlayground: Page = () => {
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [wrap, setWrap] = useState<'wrap' | 'nowrap'>('wrap');
  const [gapVal, setGapVal] = useState<number>(16);
  const [itemCount, setItemCount] = useState<number>(6);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 02: Interactive Arena"
        title="Interactive Direction, Wrap & Gap Playground"
        subtitle="Toggle direction, wrapping, and spacing to see how items flow and wrap live"
      />
      <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: ink.muted, marginBottom: 6, textTransform: 'uppercase' }}>
              flex-direction
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {(['row', 'column'] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => setDirection(dir)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: `2px solid ${direction === dir ? ink.sky : ink.border}`,
                    background: direction === dir ? ink.skySoft : '#fff',
                    fontFamily: font.mono,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {dir}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: ink.muted, marginBottom: 6, textTransform: 'uppercase' }}>
              flex-wrap
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {(['wrap', 'nowrap'] as const).map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWrap(w)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: `2px solid ${wrap === w ? ink.mint : ink.border}`,
                    background: wrap === w ? ink.mintSoft : '#fff',
                    fontFamily: font.mono,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: ink.muted, marginBottom: 6, textTransform: 'uppercase' }}>
              gap: {gapVal}px
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[8, 16, 24, 32].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGapVal(g)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `2px solid ${gapVal === g ? ink.accent : ink.border}`,
                    background: gapVal === g ? ink.accentSoft : '#fff',
                    fontFamily: font.mono,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {g}px
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: ink.muted, marginBottom: 6, textTransform: 'uppercase' }}>
              Item Count: {itemCount} items
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[4, 6, 8, 10].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setItemCount(c)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `2px solid ${itemCount === c ? ink.purple : ink.border}`,
                    background: itemCount === c ? ink.purpleSoft : '#fff',
                    fontFamily: font.mono,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {c} items
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px 16px', borderRadius: 8, background: ink.panelDark, color: '#38bdf8', fontFamily: font.mono, fontSize: 14 }}>
            display: flex; flex-direction: {direction}; flex-wrap: {wrap}; gap: {gapVal}px;
          </div>
        </div>

        {/* Live Playground Canvas */}
        <div
          style={{
            flex: 1.2,
            height: 400,
            borderRadius: 16,
            background: '#0f172a',
            border: '2px solid rgba(255,255,255,0.1)',
            padding: 24,
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap,
            gap: gapVal,
            overflow: 'auto',
            boxShadow: shadow.window,
          }}
        >
          {Array.from({ length: itemCount }).map((_, i) => (
            <div
              key={i}
              style={{
                width: direction === 'row' ? 120 : '100%',
                height: direction === 'row' ? 70 : 44,
                borderRadius: 8,
                background: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#c084fc' : '#4ade80',
                color: '#0f172a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 800,
                fontSize: 16,
                flexShrink: wrap === 'nowrap' ? 1 : 0,
              }}
            >
              #{i + 1}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 17: Flex Child Holy Trinity
const FlexChildHolyTrinity: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Advanced Flexbox"
      title="Flex Child Powers: Grow, Shrink & Basis"
      subtitle="How individual flex items negotiate size inside the parent container"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: ink.sky }}>
          <code>flex-grow</code>
        </h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.55 }}>
          Controls how much an item will <strong>grow</strong> relative to siblings when there is extra leftover space.
          <br /><br />
          <code>flex-grow: 0;</code> (Default: do not expand)
          <br />
          <code>flex-grow: 1;</code> (Absorb available space)
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: ink.purple }}>
          <code>flex-shrink</code>
        </h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.55 }}>
          Controls how much an item will <strong>shrink</strong> when space is squeezed and overflowing.
          <br /><br />
          <code>flex-shrink: 1;</code> (Default: allow shrinking)
          <br />
          <code>flex-shrink: 0;</code> (Lock size: never shrink)
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: ink.mint }}>
          <code>flex-basis</code>
        </h3>
        <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.55 }}>
          The initial ideal starting size of the item along the main axis <em>before</em> growing or shrinking happens.
          <br /><br />
          <code>flex-basis: auto;</code> (Based on content)
          <br />
          <code>flex-basis: 300px;</code> (Ideal 300px width)
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 18: Flex Shorthand
const FlexShorthand: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Advanced Flexbox"
      title="The Flex Shorthand: The 3 Production Recipes"
      subtitle="Always declare the shorthand: flex: [grow] [shrink] [basis]"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.sky, letterSpacing: '0.1em' }}>RECIPE 1</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}><code>flex: 1;</code></h3>
        <span style={{ fontSize: 14, color: ink.muted }}>Expands to: <code>1 1 0%</code></span>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          <strong>Equal-Width Columns:</strong> Every item ignores internal content size and divides available container space equally.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.purple, letterSpacing: '0.1em' }}>RECIPE 2</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}><code>flex: 0 0 260px;</code></h3>
        <span style={{ fontSize: 14, color: ink.muted }}>Grow: 0, Shrink: 0, Basis: 260px</span>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          <strong>Locked Fixed Sidebar:</strong> Item stays exactly 260px wide at all times. Never expands, never compresses.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 14, background: ink.mintSoft, border: `2px solid ${ink.mint}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.mint, letterSpacing: '0.1em' }}>RECIPE 3 (GRID WORKHORSE)</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}><code>flex: 1 1 280px;</code></h3>
        <span style={{ fontSize: 14, color: ink.muted }}>Grow: 1, Shrink: 1, Basis: 280px</span>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          <strong>Fluid Responsive Cards:</strong> Starts at 280px. Expands to fill empty gaps on desktop rows, contracts cleanly on mobile.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 19: Interactive Flex Sizing Playground (Grow, Shrink & Basis)
const InteractiveFlexSizingPlayground: Page = () => {
  const [containerWidth, setContainerWidth] = useState<number>(880);
  const [grow, setGrow] = useState<number>(1);
  const [shrink, setShrink] = useState<number>(1);
  const [basis, setBasis] = useState<string>('240px');

  const applyPreset = (p: 'equal' | 'hero' | 'sidebar' | 'shrink') => {
    if (p === 'equal') {
      setGrow(1);
      setShrink(1);
      setBasis('0%');
    } else if (p === 'hero') {
      setGrow(2);
      setShrink(1);
      setBasis('auto');
    } else if (p === 'sidebar') {
      setGrow(0);
      setShrink(0);
      setBasis('260px');
    } else if (p === 'shrink') {
      setGrow(0);
      setShrink(1);
      setBasis('340px');
    }
  };

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 02: Advanced Flexbox Arena"
        title="Interactive Sizing Arena: flex-grow, shrink & basis"
        subtitle="Test item sizing dynamics and drag container width to observe growing and shrinking live"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, alignItems: 'center' }}>
        {/* Top Control Bar: Presets & Container Width */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', width: '100%', maxWidth: 1100, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: ink.soft }}>Container Width:</span>
            <input
              type="range"
              min={520}
              max={1100}
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
              style={{ width: 220, cursor: 'pointer' }}
            />
            <span style={{ fontFamily: font.mono, fontWeight: 800, color: ink.accent, fontSize: 15 }}>
              {containerWidth}px
            </span>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'equal', label: 'Equal (1 1 0%)' },
              { id: 'hero', label: 'Hero 2x (2 1 auto)' },
              { id: 'sidebar', label: 'Locked (0 0 260px)' },
              { id: 'shrink', label: 'Shrink (0 1 340px)' },
            ].map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id as any)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  border: `1px solid ${ink.border}`,
                  background: ink.panel,
                  color: ink.soft,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Item 2 Property Toggles & Live Code */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1100,
            padding: '12px 20px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: ink.sky }}>flex-grow:</span>
              {[0, 1, 2, 3].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setGrow(v)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: `1.5px solid ${grow === v ? ink.sky : ink.border}`,
                    background: grow === v ? ink.skySoft : '#fff',
                    color: grow === v ? ink.sky : ink.soft,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: ink.purple }}>flex-shrink:</span>
              {[0, 1, 2].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setShrink(v)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: `1.5px solid ${shrink === v ? ink.purple : ink.border}`,
                    background: shrink === v ? ink.purpleSoft : '#fff',
                    color: shrink === v ? ink.purple : ink.soft,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: ink.mint }}>flex-basis:</span>
              {['0%', 'auto', '180px', '260px', '340px'].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBasis(b)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: `1.5px solid ${basis === b ? ink.mint : ink.border}`,
                    background: basis === b ? ink.mintSoft : '#fff',
                    color: basis === b ? ink.mint : ink.soft,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: font.mono, fontSize: 13, padding: '6px 14px', borderRadius: 8, background: '#0f172a', color: '#38bdf8' }}>
            .item-2 {'{'} flex: {grow} {shrink} {basis}; {'}'}
          </div>
        </div>

        {/* Live Arena Container */}
        <div
          style={{
            width: containerWidth,
            height: 250,
            borderRadius: 14,
            background: '#0f172a',
            border: '2px dashed rgba(255,255,255,0.25)',
            boxShadow: shadow.window,
            padding: 16,
            display: 'flex',
            gap: 16,
            alignItems: 'stretch',
            transition: 'width 0.2s ease',
            overflow: 'hidden',
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              flex: '1 1 180px',
              borderRadius: 10,
              background: '#1e293b',
              border: '2px solid #0284c7',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              minWidth: 0,
            }}
          >
            <strong style={{ fontSize: 16, color: '#38bdf8' }}>Item 1</strong>
            <span style={{ fontSize: 13, fontFamily: font.mono, marginTop: 4 }}>flex: 1 1 180px</span>
            <span style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>Standard Flex Child</span>
          </div>

          {/* Item 2 (Active Target) */}
          <div
            style={{
              flex: `${grow} ${shrink} ${basis}`,
              borderRadius: 10,
              background: 'rgba(222, 59, 61, 0.15)',
              border: `2px solid ${ink.accent}`,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              minWidth: 0,
              transition: 'flex 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: ink.accent, color: '#fff', fontWeight: 800 }}>
                TARGET
              </span>
              <strong style={{ fontSize: 16, color: '#fff' }}>Item 2</strong>
            </div>
            <span style={{ fontSize: 14, fontFamily: font.mono, marginTop: 6, color: '#fca5a5', fontWeight: 700 }}>
              flex: {grow} {shrink} {basis}
            </span>
            <span style={{ fontSize: 12, color: '#fecaca', marginTop: 8, textAlign: 'center' }}>
              {grow > 1
                ? `⚡ Absorbing ${grow}x leftover space!`
                : grow === 0
                ? '🔒 Never expands beyond basis'
                : 'Expands with 1x ratio'}
              {shrink === 0 ? ' • 🛡️ Never shrinks under pressure' : ''}
            </span>
          </div>

          {/* Item 3 */}
          <div
            style={{
              flex: '1 1 180px',
              borderRadius: 10,
              background: '#1e293b',
              border: '2px solid #7e22ce',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              minWidth: 0,
            }}
          >
            <strong style={{ fontSize: 16, color: '#c084fc' }}>Item 3</strong>
            <span style={{ fontSize: 13, fontFamily: font.mono, marginTop: 4 }}>flex: 1 1 180px</span>
            <span style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>Standard Flex Child</span>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 19: Margin-Top Auto Secret
const MarginAutoSecret: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Advanced Flexbox"
      title="The margin-top: auto Superpower in Cards"
      subtitle="The professional solution to aligning buttons across cards with unequal text"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            The Spring Metaphor
          </h4>
          <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.55 }}>
            Inside a flex container with <code>flex-direction: column</code>, <code>margin-top: auto</code> acts like a high-tension spring!
            <br />
            It absorbs all remaining vertical whitespace in the card and pushes the button directly to the bottom.
          </p>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: 12, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: ink.mint }}>Result:</span>
          <span style={{ fontSize: 16, color: ink.soft, marginLeft: 8 }}>
            Whether description text is 1 sentence or 4 sentences, every "Add to Cart" button shares a perfectly aligned horizontal baseline!
          </span>
        </div>
      </div>

      <div style={{ flex: 1.1 }}>
        <CodeSnippet
          filename="card.css"
          language="css"
          code={`/* 1. Turn the card into a flex column */
.product-card {
  display: flex;
  flex-direction: column;
}

/* 2. Allow card body to expand */
.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;           /* Absorbs empty card height */
}

/* 3. The magic spring rule! */
.card-body button {
  margin-top: auto;       /* Pushes button to the bottom! */
}`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 20: Interactive Margin-Auto Superpower Arena (NEW INTERACTIVE SLIDE)
const InteractiveMarginAutoArena: Page = () => {
  const [hasAutoMargin, setHasAutoMargin] = useState<boolean>(true);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 02: Interactive Arena"
        title="Interactive margin-top: auto Card Playground"
        subtitle="Toggle the auto margin to see how buttons instantly snap to an aligned baseline"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setHasAutoMargin(false)}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: `2px solid ${!hasAutoMargin ? ink.accent : ink.border}`,
              background: !hasAutoMargin ? ink.accentSoft : '#fff',
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
              color: !hasAutoMargin ? ink.accent : ink.soft,
            }}
          >
            ❌ Without margin-top: auto (Ragged Baseline)
          </button>
          <button
            type="button"
            onClick={() => setHasAutoMargin(true)}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: `2px solid ${hasAutoMargin ? ink.mint : ink.border}`,
              background: hasAutoMargin ? ink.mintSoft : '#fff',
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
              color: hasAutoMargin ? ink.mint : ink.soft,
            }}
          >
            ✅ With margin-top: auto (Aligned Baseline!)
          </button>
        </div>

        {/* 3 Live Interactive Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', maxWidth: 1200 }}>
          <div
            style={{
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              height: 380,
              boxShadow: shadow.card,
            }}
          >
            <div style={{ height: 120, borderRadius: 8, background: '#e2e8f0', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', fontWeight: 700 }}>
              Short Copy Item
            </div>
            <h4 style={{ margin: '14px 0 6px 0', fontSize: 20 }}>Wireless Mouse</h4>
            <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.4 }}>
              Ergonomic silent click mouse.
            </p>
            <div style={{ fontSize: 22, fontWeight: 800, margin: '8px 0' }}>$29.00</div>
            <button
              style={{
                marginTop: hasAutoMargin ? 'auto' : 8,
                padding: '10px 16px',
                borderRadius: 8,
                background: '#de3b3d',
                color: '#fff',
                border: 'none',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Add to Cart
            </button>
          </div>

          <div
            style={{
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              height: 380,
              boxShadow: shadow.card,
            }}
          >
            <div style={{ height: 120, borderRadius: 8, background: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#475569', fontWeight: 700 }}>
              Long Copy Item
            </div>
            <h4 style={{ margin: '14px 0 6px 0', fontSize: 20 }}>Studio Headphones</h4>
            <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.4 }}>
              Ultra-low latency wireless cans with 40h battery, active noise cancellation, and high-resolution spatial audio engineering for professional audio engineers.
            </p>
            <div style={{ fontSize: 22, fontWeight: 800, margin: '8px 0' }}>$249.00</div>
            <button
              style={{
                marginTop: hasAutoMargin ? 'auto' : 8,
                padding: '10px 16px',
                borderRadius: 8,
                background: '#de3b3d',
                color: '#fff',
                border: 'none',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Add to Cart
            </button>
          </div>

          <div
            style={{
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              height: 380,
              boxShadow: shadow.card,
            }}
          >
            <div style={{ height: 120, borderRadius: 8, background: '#e2e8f0', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', fontWeight: 700 }}>
              Medium Copy Item
            </div>
            <h4 style={{ margin: '14px 0 6px 0', fontSize: 20 }}>Mechanical Keyboard</h4>
            <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.4 }}>
              Custom lubed switches with hot-swappable PCB and double-shot PBT keycaps.
            </p>
            <div style={{ fontSize: 22, fontWeight: 800, margin: '8px 0' }}>$119.00</div>
            <button
              style={{
                marginTop: hasAutoMargin ? 'auto' : 8,
                padding: '10px 16px',
                borderRadius: 8,
                background: '#de3b3d',
                color: '#fff',
                border: 'none',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 22: Interactive Align-Self & Order Arena (UPGRADED INTERACTIVE)
const InteractiveAlignSelfAndOrder: Page = () => {
  const [alignSelf, setAlignSelf] = useState<'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch'>('flex-end');
  const [order, setOrder] = useState<number>(-1);

  const getVisualOrder = (ord: number) => {
    if (ord < 0) return ['Item 3 (Target)', 'Item 1', 'Item 2', 'Item 4'];
    if (ord === 0) return ['Item 1', 'Item 2', 'Item 3 (Target)', 'Item 4'];
    return ['Item 1', 'Item 2', 'Item 4', 'Item 3 (Target)'];
  };

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 02: Advanced Flexbox Arena"
        title="Interactive Overrides: align-self & The order Property"
        subtitle="Individual child overrides: escape container cross-axis alignment and manipulate visual sequence"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, alignItems: 'center' }}>
        {/* Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1200,
            padding: '10px 18px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            {/* Align-Self Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: ink.purple }}>align-self:</span>
              {(['auto', 'flex-start', 'center', 'flex-end', 'stretch'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAlignSelf(val)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: `1.5px solid ${alignSelf === val ? ink.purple : ink.border}`,
                    background: alignSelf === val ? ink.purpleSoft : '#fff',
                    color: alignSelf === val ? ink.purple : ink.soft,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {val}
                </button>
              ))}
            </div>

            {/* Order Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: ink.amber }}>order:</span>
              {[-1, 0, 1, 2].map((ord) => (
                <button
                  key={ord}
                  type="button"
                  onClick={() => setOrder(ord)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: `1.5px solid ${order === ord ? ink.amber : ink.border}`,
                    background: order === ord ? ink.amberSoft : '#fff',
                    color: order === ord ? ink.amber : ink.soft,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {ord === -1 ? '-1 (First)' : ord === 2 ? '2 (Last)' : String(ord)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: font.mono, fontSize: 13, padding: '6px 14px', borderRadius: 8, background: '#0f172a', color: '#38bdf8' }}>
            .item-3 {'{'} align-self: {alignSelf}; order: {order}; {'}'}
          </div>
        </div>

        {/* Live Flex Container Arena */}
        <div
          style={{
            width: '100%',
            maxWidth: 1200,
            height: 230,
            borderRadius: 14,
            background: '#0f172a',
            border: '2px dashed rgba(255,255,255,0.25)',
            boxShadow: shadow.window,
            padding: '16px 24px',
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Subtle guide markers */}
          <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 11, fontFamily: font.mono, color: '#64748b' }}>
            Container: align-items: center;
          </div>

          {/* Item 1 */}
          <div
            style={{
              flex: 1,
              height: 90,
              borderRadius: 10,
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#94a3b8',
              order: 0,
            }}
          >
            <strong style={{ fontSize: 15, color: '#f8fafc' }}>Item 1</strong>
            <span style={{ fontSize: 12, fontFamily: font.mono }}>DOM #1</span>
          </div>

          {/* Item 2 */}
          <div
            style={{
              flex: 1,
              height: 120,
              borderRadius: 10,
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#94a3b8',
              order: 0,
            }}
          >
            <strong style={{ fontSize: 15, color: '#f8fafc' }}>Item 2</strong>
            <span style={{ fontSize: 12, fontFamily: font.mono }}>DOM #2</span>
          </div>

          {/* Item 3 (Active Target) */}
          <div
            style={{
              flex: 1.2,
              height: alignSelf === 'stretch' ? '100%' : 75,
              alignSelf,
              order,
              borderRadius: 10,
              background: 'rgba(222, 59, 61, 0.2)',
              border: `2.5px solid ${ink.accent}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              transition: 'all 0.25s ease',
              boxShadow: '0 0 16px rgba(222,59,61,0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: ink.accent, fontWeight: 800 }}>
                TARGET
              </span>
              <strong style={{ fontSize: 16, color: '#fff' }}>Item 3</strong>
            </div>
            <span style={{ fontSize: 12, fontFamily: font.mono, color: '#fca5a5', marginTop: 4 }}>
              align-self: {alignSelf} | order: {order}
            </span>
          </div>

          {/* Item 4 */}
          <div
            style={{
              flex: 1,
              height: 100,
              borderRadius: 10,
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#94a3b8',
              order: 0,
            }}
          >
            <strong style={{ fontSize: 15, color: '#f8fafc' }}>Item 4</strong>
            <span style={{ fontSize: 12, fontFamily: font.mono }}>DOM #4</span>
          </div>
        </div>

        {/* Dual Info Footprint */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20, width: '100%', maxWidth: 1200 }}>
          <div style={{ padding: '14px 18px', borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: ink.accent }}>Visual Sequence vs DOM Source Sequence:</span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, fontFamily: font.mono, color: ink.soft }}>
              <span style={{ fontWeight: 700, color: ink.mint }}>Visual Render:</span>
              <span>{getVisualOrder(order).join(' → ')}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, fontFamily: font.mono, color: ink.muted }}>
              <span>HTML DOM Order:</span>
              <span>Item 1 → Item 2 → Item 3 → Item 4 (Unchanged!)</span>
            </div>
          </div>

          <div style={{ padding: '14px 18px', borderRadius: 12, background: ink.amberSoft, border: `1px solid ${ink.amber}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: ink.amber }}>⚠️ Accessibility & Keyboard Trap Warning</span>
            <p style={{ margin: 0, fontSize: 13, color: ink.soft, lineHeight: 1.45 }}>
              Screen readers and keyboard Tab cycles navigate strictly by HTML DOM order, ignoring CSS <code>order</code>. Visual reordering without DOM reordering creates disorienting navigation for assistive tech.
            </p>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 22: Concept Check 2
const ConceptCheck2: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Concept Check"
      title="Check Your Mental Model: Flex Sizing & Auto Margins"
      subtitle="Verify your understanding before we dive into responsive design"
    />
    <ConceptCheckCard
      question="Inside a product card styled as a vertical flex column (flex-direction: column), what does applying margin-top: auto to the card's action button accomplish?"
      options={[
        {
          label: 'A) Centers the button horizontally across the card.',
          isCorrect: false,
          explanation: 'Horizontal centering is controlled by align-items or text-align, not margin-top.',
        },
        {
          label: 'B) Pushes the button to the bottom by absorbing all remaining vertical space.',
          isCorrect: true,
          explanation: 'Correct! In a flex column, margin-top: auto expands to absorb all vacant vertical space, pinning the button to the bottom of the card.',
        },
        {
          label: 'C) Forces the button to stretch to 100% width.',
          isCorrect: false,
          explanation: 'Width is governed by align-items: stretch or width: 100%.',
        },
        {
          label: 'D) Causes the card to collapse to zero height.',
          isCorrect: false,
          explanation: 'Flexbox containers do not collapse when children use auto margins.',
        },
      ]}
    />
    <SlideFooter />
  </div>
);

// 23: Divider 3
const Divider3: Page = () => (
  <ChapterDivider
    number="Part 03"
    tagline="Responsive Web Design"
    title="Responsive Design & The Mobile Viewport Contract"
    subtitle="The mobile traffic reality, avoiding fixed-pixel blowout, and the life-saving viewport meta tag."
  />
);

// 24: Why Responsive Matters
const WhyResponsiveMatters: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03: Responsive Architecture"
      title="Why Responsive Matters: The Multi-Device Reality"
      subtitle="Over 55% of global web traffic originates from mobile devices"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 32, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ink.accent }}>58.4%</div>
        <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Mobile Dominance</h4>
        <p style={{ margin: 0, fontSize: 17, color: ink.muted, lineHeight: 1.5 }}>
          More than half of all web visitors browse on smartphones. If a site fails on mobile, it fails for the majority of users.
        </p>
      </div>

      <div style={{ padding: 32, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ink.sky }}>3,000+</div>
        <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Active Screen Sizes</h4>
        <p style={{ margin: 0, fontSize: 17, color: ink.muted, lineHeight: 1.5 }}>
          From 320px budget phones and foldables to 4K desktop workstations. Hardcoding fixed pixel widths is guaranteed to break.
        </p>
      </div>

      <div style={{ padding: 32, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ink.mint }}>0 px</div>
        <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Horizontal Scroll Tolerance</h4>
        <p style={{ margin: 0, fontSize: 17, color: ink.muted, lineHeight: 1.5 }}>
          73% of mobile visitors immediately abandon websites that require horizontal panning or pinch-to-zoom to read text.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 25: The Viewport Meta Contract
const TheViewportMetaContract: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03: Responsive Architecture"
      title="The Viewport Meta Tag Contract: Mobile's Secret Switch"
      subtitle="Why phones pretend to be 980px desktop screens without this single line of HTML"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            Without The Viewport Meta Tag:
          </h4>
          <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
            Mobile browsers assume the site was built for a 2005 desktop monitor. They zoom out to a virtual 980px width, turning headings and links into microscopic unreadable specks.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 14, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.mint }}>
            With The Viewport Meta Tag:
          </h4>
          <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
            The browser renders at the device's physical screen pixel width (e.g. 390px on iPhone), honoring rem typography scales and media queries!
          </p>
        </div>
      </div>

      <DiffCodeSnippet
        filename="index.html (<head> diff)"
        lines={[
          { type: 'context', text: '<!DOCTYPE html>' },
          { type: 'context', text: '<html lang="en">' },
          { type: 'context', text: '<head>' },
          { type: 'context', text: '  <meta charset="UTF-8">' },
          { type: 'removed', text: '  <!-- Missing viewport tag: mobile zooms out to 980px desktop view -->' },
          { type: 'added',   text: '  <!-- THE MANDATORY VIEWPORT CONTRACT -->' },
          { type: 'added',   text: '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' },
          { type: 'context', text: '  <title>Responsive Web App</title>' },
          { type: 'context', text: '  <link rel="stylesheet" href="style.css">' },
          { type: 'context', text: '</head>' },
        ]}
      />
    </div>
    <SlideFooter />
  </div>
);

// 26: Mobile-First Philosophy
const MobileFirstPhilosophy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03: Responsive Architecture"
      title="Mobile-First Philosophy: Progressive Enhancement"
      subtitle="Why starting with single-column mobile flow creates cleaner, bug-free CSS"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: ink.accent, letterSpacing: '0.1em' }}>LAYER 1: FOUNDATION</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Base Mobile Flow</h3>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Write simple, natural block stacking for mobile screens (320px–600px). Zero media queries needed for mobile!
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: ink.sky, letterSpacing: '0.1em' }}>LAYER 2: ENHANCE</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Tablet Adaptations</h3>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Use <code>@media (min-width: 640px)</code> to introduce 2-column forms and multi-card rows when screen space allows.
        </p>
      </div>

      <div style={{ padding: 28, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: ink.mint, letterSpacing: '0.1em' }}>LAYER 3: POLISH</span>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Desktop Wide Layouts</h3>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Use <code>@media (min-width: 1024px)</code> for wide multi-column grids, horizontal navbars, and sidebars.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 27: Fluid vs. Fixed Sizing
const FluidVsFixed: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03: Responsive Architecture"
      title="Fluid vs. Fixed Sizing: Eliminating Horizontal Scrollbars"
      subtitle="The 3 rules that keep components fluid across all display widths"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.accent }}>RULE 1: CONTAINERS</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}><code>max-width</code>, Not <code>width</code></h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          ❌ <code>width: 800px;</code> (Blows out on 400px screens)
          <br /><br />
          ✅ <code>max-width: 800px; width: 100%;</code> (Expands up to 800px, shrinks safely on mobile).
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.sky }}>RULE 2: IMAGES</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Responsive Bounding</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Always declare this universal rule in your base stylesheet:
          <br /><br />
          <code>img {'{ max-width: 100%; height: auto; }'}</code>
          <br /><br />
          Images will never overflow their parent container!
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.mint }}>RULE 3: SPACING</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Fluid Units (<code>rem</code> & <code>%</code>)</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Use <code>rem</code> for font sizes and padding so user device accessibility settings scale seamlessly.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 28: Divider 4
const Divider4: Page = () => (
  <ChapterDivider
    number="Part 04"
    tagline="Media Queries"
    title="Media Queries & Responsive Breakpoints"
    subtitle="The conditional engine of CSS: triggering layout changes based on viewport width."
  />
);

// 29: Media Query Syntax
const MediaQuerySyntax: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Media Queries"
      title="Media Query Syntax: The Conditional Logic of CSS"
      subtitle="How the browser inspects viewport width and conditionally activates rules"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.sky }}>
            The <code>@media</code> At-Rule
          </h4>
          <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.55 }}>
            Think of a media query as an <strong>if-statement</strong> in CSS:
            <br />
            <em>"If the browser viewport is at least 768px wide, apply these additional styling declarations."</em>
          </p>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: 12, background: ink.accentSoft, border: `1px solid ${ink.accentBorder}` }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: ink.accent }}>Key Rule:</span>
          <span style={{ fontSize: 16, color: ink.soft, marginLeft: 8 }}>
            Styles outside media queries apply everywhere. Styles inside media queries apply only when the condition is true.
          </span>
        </div>
      </div>

      <div style={{ flex: 1.1 }}>
        <CodeSnippet
          filename="responsive.css"
          language="css"
          code={`/* 1. BASE MOBILE STYLES (Applies to all devices) */
.site-nav {
  display: flex;
  flex-direction: column; /* Stack vertically on phones */
  gap: 12px;
}

/* 2. PROGRESSIVE ENHANCEMENT BREAKPOINT */
@media (min-width: 768px) {
  .site-nav {
    flex-direction: row;  /* Flip to horizontal on tablets+ */
    justify-content: space-between;
  }
}`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 30: Standard Breakpoints
const StandardBreakpoints: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Media Queries"
      title="The 4 Standard Industry Breakpoints"
      subtitle="Targeting content categories, not specific phone models"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontFamily: font.mono, fontSize: 16, fontWeight: 700, color: ink.accent }}>
          Base (&lt; 640px)
        </span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Mobile Phones</h4>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          Single-column stacking, full-width buttons, collapsible menus, touch targets &ge; 44px.
        </p>
      </div>

      <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontFamily: font.mono, fontSize: 16, fontWeight: 700, color: ink.sky }}>
          min-width: 640px
        </span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Tablets & Phablets</h4>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          2-column form rows (First Name + Last Name side-by-side), 2-card product rows.
        </p>
      </div>

      <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontFamily: font.mono, fontSize: 16, fontWeight: 700, color: ink.purple }}>
          min-width: 1024px
        </span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Laptops & Desktops</h4>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          Full horizontal navigation bars, 3–4 card grids, sidebars alongside main content.
        </p>
      </div>

      <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontFamily: font.mono, fontSize: 16, fontWeight: 700, color: ink.mint }}>
          min-width: 1280px
        </span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Wide Monitors</h4>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          Max-width container bounding (<code>margin: 0 auto</code>) to prevent lines from stretching too wide to read.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 31: Min-Width vs Max-Width
const MinWidthVsMaxWidth: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Media Queries"
      title="min-width vs. max-width: The Cascade Override Trap"
      subtitle="Why professional developers standardize strictly on mobile-first min-width"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: ink.amber }}>
          ❌ Desktop-First (<code>max-width</code>)
        </h3>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: ink.soft, lineHeight: 1.6 }}>
          <li>You write complex desktop styles first.</li>
          <li>Then you have to write media queries to <strong>"undo"</strong> desktop styles for mobile (e.g. <code>float: none; width: auto; display: block;</code>).</li>
          <li>Massive stylesheets with lots of overriding bugs.</li>
        </ul>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.mintSoft, border: `2px solid ${ink.mint}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: ink.mint }}>
          ✅ Mobile-First (<code>min-width</code>)
        </h3>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: ink.soft, lineHeight: 1.6 }}>
          <li>You write lean, natural HTML block styles for mobile first.</li>
          <li>You only add layout superpowers as screen space expands.</li>
          <li><strong>Zero undoing!</strong> Styles build progressively upwards, keeping CSS clean and maintainable.</li>
        </ul>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 33: Interactive Viewport Simulator with Active Breakpoint HUD (UPGRADED)
const InteractiveResponsivePreview: Page = () => {
  const [width, setWidth] = useState<number>(920);

  const getActiveBreakpoint = (w: number) => {
    if (w < 640) {
      return {
        rule: 'Base Mobile Styles (< 640px)',
        label: 'Mobile Viewport',
        color: '#ffbd2e',
      };
    }
    if (w < 1024) {
      return {
        rule: '@media (min-width: 640px)',
        label: 'Tablet Viewport',
        color: '#38bdf8',
      };
    }
    return {
      rule: '@media (min-width: 1024px)',
      label: 'Desktop Viewport',
      color: '#4ade80',
    };
  };

  const activeBp = getActiveBreakpoint(width);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04: Interactive Arena"
        title="Interactive Breakpoint Simulator & Active HUD"
        subtitle="Drag the viewport slider or select device presets to watch layout breakpoints trigger live"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, alignItems: 'center' }}>
        {/* Unified Responsive Control Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1280,
            padding: '10px 18px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            gap: 16,
          }}
        >
          {/* Preset Device Buttons with Real SVG Icons */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[
              { label: 'Mobile', w: 375, icon: IconSmartphone },
              { label: 'Landscape', w: 640, icon: IconPhoneLandscape },
              { label: 'Tablet', w: 768, icon: IconTablet },
              { label: 'Desktop', w: 1024, icon: IconMonitor },
            ].map((d) => {
              const IconComp = d.icon;
              const isSelected = width === d.w;
              return (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => setWidth(d.w)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 14px',
                    borderRadius: 8,
                    border: `1.5px solid ${isSelected ? ink.accent : ink.border}`,
                    background: isSelected ? ink.accentSoft : '#ffffff',
                    color: isSelected ? ink.accent : ink.soft,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <IconComp size={16} color={isSelected ? ink.accent : ink.muted} />
                  <span>{d.label}</span>
                  <span style={{ fontSize: 11, color: isSelected ? ink.accent : ink.muted, fontFamily: font.mono }}>
                    ({d.w}px)
                  </span>
                </button>
              );
            })}
          </div>

          {/* Viewport Width Drag Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: ink.muted }}>Width:</span>
            <input
              type="range"
              min={360}
              max={1120}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              style={{ width: 170, cursor: 'pointer' }}
            />
            <span style={{ fontFamily: font.mono, fontWeight: 800, color: ink.accent, fontSize: 15, width: 55 }}>
              {width}px
            </span>
          </div>

          {/* Active Breakpoint HUD Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '6px 14px',
              borderRadius: 8,
              background: '#0f172a',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: activeBp.color,
                  boxShadow: `0 0 8px ${activeBp.color}`,
                }}
              />
              <span style={{ fontFamily: font.mono, fontSize: 13, color: '#e2e8f0', fontWeight: 600 }}>
                {activeBp.rule}
              </span>
            </div>
            <span
              style={{
                fontSize: 11,
                fontFamily: font.mono,
                fontWeight: 800,
                color: activeBp.color,
                background: 'rgba(255,255,255,0.08)',
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              {activeBp.label}
            </span>
          </div>
        </div>

        {/* Viewport Frame - Enlarged to 550px height */}
        <div
          style={{
            width,
            height: 550,
            borderRadius: 14,
            background: '#0f172a',
            border: '2px solid rgba(255,255,255,0.15)',
            boxShadow: shadow.window,
            padding: 20,
            transition: 'width 0.25s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            overflow: 'hidden',
          }}
        >
          {/* Header inside simulation */}
          <div
            style={{
              display: 'flex',
              flexDirection: width < 640 ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: width < 640 ? 'flex-start' : 'center',
              gap: 10,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#38bdf8' }}>⚡ TechStore</span>
              <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 4, background: 'rgba(56,189,248,0.2)', color: '#38bdf8' }}>
                LIVE STORE
              </span>
            </div>
            <div style={{ display: 'flex', gap: 14, fontSize: 13, color: '#94a3b8' }}>
              <span>Catalog</span>
              <span>Deals</span>
              <span>Reviews</span>
              <span>Support</span>
            </div>
          </div>

          {/* Subheader / Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, fontSize: 12 }}>
              <span style={{ padding: '3px 10px', borderRadius: 9999, background: '#38bdf8', color: '#0f172a', fontWeight: 700 }}>
                All Products
              </span>
              <span style={{ padding: '3px 10px', borderRadius: 9999, background: '#1e293b', color: '#94a3b8' }}>
                Audio
              </span>
              <span style={{ padding: '3px 10px', borderRadius: 9999, background: '#1e293b', color: '#94a3b8' }}>
                Cameras
              </span>
            </div>
            <span style={{ fontSize: 12, color: '#64748b', fontFamily: font.mono }}>
              Displaying: {width < 640 ? '1 Column (Mobile)' : width < 1024 ? '2 Columns (Tablet)' : '3 Columns (Desktop)'}
            </span>
          </div>

          {/* Grid inside simulation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: width < 640 ? '1fr' : width < 1024 ? '1fr 1fr' : 'repeat(3, 1fr)',
              gap: 14,
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {[
              {
                title: 'Studio Headphones Pro',
                desc: 'Active noise cancellation with 40h high-fidelity wireless playback.',
                price: '$249',
                tag: 'AUDIO',
              },
              {
                title: 'Vintage 35mm Rangefinder',
                desc: 'Mechanical shutter manual focus rangefinder camera body.',
                price: '$589',
                tag: 'PHOTO',
              },
              {
                title: 'Fitness GPS Watch',
                desc: 'Continuous heart-rate tracking, sleep stages, and 50m waterproof rating.',
                price: '$179',
                tag: 'WEARABLE',
              },
              {
                title: 'Mechanical 75% Keyboard',
                desc: 'Hot-swappable PCB with custom lubed linear switches.',
                price: '$139',
                tag: 'ACCESSORY',
              },
              {
                title: 'Wireless Fast Charger',
                desc: '15W magnetic inductive charging pad with braided nylon cable.',
                price: '$45',
                tag: 'CHARGING',
              },
              {
                title: 'Noise-Canceling Mic',
                desc: 'Broadcast-quality cardioid USB condenser microphone.',
                price: '$119',
                tag: 'AUDIO',
              },
            ].map((prod, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1e293b',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: 14,
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: '#38bdf8', letterSpacing: '0.05em' }}>
                    {prod.tag}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#4ade80' }}>
                    {prod.price}
                  </span>
                </div>
                <strong style={{ fontSize: 14, color: '#f8fafc' }}>{prod.title}</strong>
                <p style={{ margin: 0, fontSize: 12, color: '#94a3b8', lineHeight: 1.4 }}>
                  {prod.desc}
                </p>
                <button
                  style={{
                    marginTop: 'auto',
                    padding: '6px 12px',
                    borderRadius: 6,
                    background: '#de3b3d',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 33: Concept Check 3
const ConceptCheck3: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Concept Check"
      title="Check Your Mental Model: Media Query Activation"
      subtitle="Verify your understanding of mobile-first breakpoints"
    />
    <ConceptCheckCard
      question="When writing mobile-first CSS using @media (min-width: 768px), when does the code inside that media query block take effect in the browser?"
      options={[
        {
          label: 'A) Only on screens narrower than 768px.',
          isCorrect: false,
          explanation: 'min-width defines a lower boundary, not an upper ceiling. That would be max-width.',
        },
        {
          label: 'B) On screens 768px wide and wider.',
          isCorrect: true,
          explanation: 'Correct! min-width: 768px activates when the browser viewport reaches 768px or larger, progressively enhancing the mobile baseline.',
        },
        {
          label: 'C) Only at exactly 768px wide.',
          isCorrect: false,
          explanation: 'Media queries match ranges, not exact pixel measurements.',
        },
        {
          label: 'D) Only on Apple iPad devices.',
          isCorrect: false,
          explanation: 'Modern media queries test viewport dimensions, not specific vendor hardware.',
        },
      ]}
    />
    <SlideFooter />
  </div>
);

// 34: Divider 5
const Divider5: Page = () => (
  <ChapterDivider
    number="Part 05"
    tagline="Production UI Patterns"
    title="Real-World Components: Navbars, Grids & Forms"
    subtitle="Combining Flexbox and media queries to build the 3 most essential UI components on the web."
  />
);

// 35: Interactive Responsive Navbar (UPGRADED: CONTENT TOP, PREVIEW BOTTOM)
const InteractiveNavbarPattern: Page = () => {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05: Production UI Patterns"
        title="Pattern 1: The Responsive Navigation Bar"
        subtitle="Desktop horizontal spread vs. mobile vertical stack with toggleable drawer"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, alignItems: 'center' }}>
        {/* Top Content & Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1280,
            padding: '10px 18px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            gap: 16,
          }}
        >
          {/* Preset Buttons with SVG Icons */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={() => { setView('desktop'); setMobileMenuOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 8,
                border: `1.5px solid ${view === 'desktop' ? ink.sky : ink.border}`,
                background: view === 'desktop' ? ink.skySoft : '#fff',
                color: view === 'desktop' ? ink.sky : ink.soft,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              <IconMonitor size={16} color={view === 'desktop' ? ink.sky : ink.muted} />
              <span>Desktop View (Spread Row)</span>
            </button>
            <button
              type="button"
              onClick={() => setView('mobile')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 8,
                border: `1.5px solid ${view === 'mobile' ? ink.accent : ink.border}`,
                background: view === 'mobile' ? ink.accentSoft : '#fff',
                color: view === 'mobile' ? ink.accent : ink.soft,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              <IconSmartphone size={16} color={view === 'mobile' ? ink.accent : ink.muted} />
              <span>Mobile View (Drawer Stack)</span>
            </button>
          </div>

          {/* Architecture Callout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: ink.soft }}>
            <span style={{ padding: '4px 10px', borderRadius: 6, background: '#0f172a', color: '#38bdf8', fontFamily: font.mono }}>
              Mobile: flex-col / hidden
            </span>
            <span>→</span>
            <span style={{ padding: '4px 10px', borderRadius: 6, background: '#0f172a', color: '#4ade80', fontFamily: font.mono }}>
              Desktop: @media (min-width: 768px) {'{ flex-row; justify-content: space-between; }'}
            </span>
          </div>
        </div>

        {/* Live Interactive Navbar Frame - Enlarged to 480px height */}
        <div
          style={{
            width: view === 'desktop' ? '100%' : 400,
            maxWidth: 1280,
            height: 480,
            borderRadius: 14,
            background: '#0f172a',
            border: '2px solid rgba(255,255,255,0.12)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: shadow.window,
            transition: 'width 0.25s ease',
            overflow: 'hidden',
          }}
        >
          {view === 'desktop' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
              {/* Desktop Navbar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 24px',
                  background: '#1e293b',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#38bdf8' }}>⚡ AcmeCorp</span>
                  <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 9999, background: 'rgba(56,189,248,0.15)', color: '#38bdf8', fontFamily: font.mono }}>
                    DESKTOP NAV
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 24, color: '#e2e8f0', fontSize: 15, fontWeight: 500 }}>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>Products</span>
                  <span>Solutions</span>
                  <span>Pricing</span>
                  <span>Documentation</span>
                  <span>Enterprise</span>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#94a3b8', cursor: 'pointer' }}>Sign In</span>
                  <button style={{ padding: '8px 18px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                    Get Started Free
                  </button>
                </div>
              </div>

              {/* Realistic Hero Preview underneath Desktop Navbar */}
              <div
                style={{
                  flex: 1,
                  borderRadius: 10,
                  background: 'rgba(30, 41, 59, 0.4)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 32,
                  textAlign: 'center',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em' }}>
                  PAGE CONTENT CONTAINER (max-width: 1280px)
                </span>
                <h3 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: '#ffffff' }}>
                  Scale Web Applications with Pure Flexbox Architecture
                </h3>
                <p style={{ margin: 0, fontSize: 15, color: '#94a3b8', maxWidth: 640 }}>
                  Observe how the navigation links naturally distribute across the horizontal row using <code>justify-content: space-between</code>, without any floats or absolute positioning.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              {/* Mobile Navbar Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', background: '#1e293b', borderRadius: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#38bdf8' }}>⚡ AcmeCorp</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 6,
                    background: mobileMenuOpen ? '#de3b3d' : '#334155',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: 13,
                  }}
                >
                  {mobileMenuOpen ? <IconClose size={16} /> : <IconMenu size={16} />}
                  <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
                </button>
              </div>

              {/* Mobile Drawer */}
              {mobileMenuOpen ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    padding: 20,
                    background: '#1e293b',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <span style={{ color: '#38bdf8', fontWeight: 700, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Products</span>
                  <span style={{ color: '#e2e8f0', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Solutions</span>
                  <span style={{ color: '#e2e8f0', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Pricing</span>
                  <span style={{ color: '#e2e8f0', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Documentation</span>
                  <button style={{ marginTop: 8, padding: '12px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 14 }}>
                    Get Started Free
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    background: 'rgba(30, 41, 59, 0.4)',
                    border: '1px dashed rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 24,
                    textAlign: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 13, color: '#38bdf8', fontWeight: 700 }}>Mobile Viewport (390px)</span>
                  <p style={{ margin: 0, fontSize: 13, color: '#94a3b8' }}>
                    Click the <strong>Menu</strong> button above to reveal the vertical navigation drawer.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 36: Interactive Fluid Card Grid (UPGRADED: PREVIEW INCREASED TO 520px & 6 CARDS)
const InteractiveCardGridPattern: Page = () => {
  const [containerWidth, setContainerWidth] = useState<number>(960);

  const getComputedColumns = (w: number) => {
    if (w < 560) return 1;
    if (w < 840) return 2;
    if (w < 1140) return 3;
    return 4;
  };

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05: Production UI Patterns"
        title="Pattern 2: Fluid Multi-Card Grids"
        subtitle="Automatic column wrapping with flex: 1 1 280px and zero media queries"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, alignItems: 'center' }}>
        {/* Top Content & Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1280,
            padding: '10px 18px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: ink.soft }}>Container Width:</span>
            <input
              type="range"
              min={360}
              max={1260}
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
              style={{ width: 280, cursor: 'pointer' }}
            />
            <span style={{ fontFamily: font.mono, fontWeight: 800, color: ink.accent, fontSize: 16 }}>
              {containerWidth}px
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ padding: '6px 14px', borderRadius: 8, background: '#0f172a', color: '#38bdf8', fontFamily: font.mono, fontSize: 13 }}>
              CSS: flex: 1 1 260px; flex-wrap: wrap;
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 8, background: ink.mintSoft, border: `1.5px solid ${ink.mint}`, color: ink.mint, fontWeight: 800, fontSize: 14 }}>
              Computed: {getComputedColumns(containerWidth)} Column(s)
            </div>
          </div>
        </div>

        {/* Live Fluid Grid Frame - Enlarged to 520px height */}
        <div
          style={{
            width: containerWidth,
            height: 520,
            borderRadius: 14,
            background: '#0f172a',
            border: '2px solid rgba(255,255,255,0.12)',
            padding: 20,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            overflowY: 'auto',
            boxShadow: shadow.window,
            transition: 'width 0.15s ease',
            alignContent: 'flex-start',
          }}
        >
          {[
            { title: 'Studio Monitor Cans', price: '$249', tag: 'BESTSELLER', desc: 'Over-ear planar magnetic headphones with active noise cancellation.' },
            { title: 'Vintage 35mm Camera', price: '$589', tag: 'FEATURED', desc: 'Mechanical rangefinder with 40mm f/1.4 prime lens.' },
            { title: 'Smart Fitness Band', price: '$179', tag: 'NEW', desc: 'Heart-rate GPS tracker with 14-day battery life.' },
            { title: 'Custom 75% Keyboard', price: '$139', tag: 'POPULAR', desc: 'Gasket-mounted hot-swap mechanical keyboard.' },
            { title: '15W Magnetic Charger', price: '$49', tag: 'ACCESSORY', desc: 'Aluminum desktop inductive wireless charging stand.' },
            { title: 'Studio Condenser Mic', price: '$129', tag: 'PRO AUDIO', desc: 'Cardioid USB condenser mic with internal pop filter.' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 260px',
                borderRadius: 10,
                background: '#1e293b',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                color: '#fff',
                minWidth: 240,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: 'rgba(56,189,248,0.2)', color: '#38bdf8', fontWeight: 800 }}>
                  {item.tag}
                </span>
                <span style={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>
                  {item.price}
                </span>
              </div>
              <strong style={{ fontSize: 15, color: '#f8fafc' }}>{item.title}</strong>
              <p style={{ margin: 0, fontSize: 12, color: '#94a3b8', lineHeight: 1.45 }}>
                {item.desc}
              </p>
              <button
                style={{
                  marginTop: 'auto',
                  padding: '8px 12px',
                  borderRadius: 6,
                  background: '#de3b3d',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 37: Interactive Accessible Form Pattern (UPGRADED: CONTENT TOP, PREVIEW BOTTOM)
const InteractiveFormPattern: Page = () => {
  const [formMode, setFormMode] = useState<'desktop' | 'mobile'>('desktop');
  const [modeSelection, setModeSelection] = useState<'in-person' | 'virtual'>('in-person');

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05: Production UI Patterns"
        title="Pattern 3: Accessible Responsive Two-Column Forms"
        subtitle="Two-column desktop inputs collapsing to full-width mobile fields with focus binding"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, alignItems: 'center' }}>
        {/* Top Content & Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 1100,
            padding: '10px 18px',
            borderRadius: 12,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            gap: 16,
          }}
        >
          {/* Preset Buttons with SVG Icons */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={() => setFormMode('desktop')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 8,
                border: `1.5px solid ${formMode === 'desktop' ? ink.sky : ink.border}`,
                background: formMode === 'desktop' ? ink.skySoft : '#fff',
                color: formMode === 'desktop' ? ink.sky : ink.soft,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              <IconMonitor size={16} color={formMode === 'desktop' ? ink.sky : ink.muted} />
              <span>Desktop (2-Column Grid)</span>
            </button>
            <button
              type="button"
              onClick={() => setFormMode('mobile')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 8,
                border: `1.5px solid ${formMode === 'mobile' ? ink.accent : ink.border}`,
                background: formMode === 'mobile' ? ink.accentSoft : '#fff',
                color: formMode === 'mobile' ? ink.accent : ink.soft,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              <IconSmartphone size={16} color={formMode === 'mobile' ? ink.accent : ink.muted} />
              <span>Mobile (Stacked 1-Col)</span>
            </button>
          </div>

          {/* Architecture Callout */}
          <div style={{ display: 'flex', gap: 12, fontSize: 13, color: ink.soft }}>
            <span style={{ padding: '4px 10px', borderRadius: 6, background: '#0f172a', color: '#38bdf8', fontFamily: font.mono }}>
              &lt;label htmlFor="..."&gt; Touch Binding
            </span>
            <span style={{ padding: '4px 10px', borderRadius: 6, background: '#0f172a', color: '#4ade80', fontFamily: font.mono }}>
              :focus-visible Accessible Outline
            </span>
          </div>
        </div>

        {/* Live Form Component - Enlarged to 480px height */}
        <div
          style={{
            width: formMode === 'desktop' ? 840 : 420,
            height: 480,
            background: '#ffffff',
            borderRadius: 14,
            border: '2px solid #e2e8f0',
            padding: 24,
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            transition: 'width 0.25s ease',
            overflowY: 'auto',
          }}
        >
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', letterSpacing: '0.05em' }}>
              GLOBAL DEVELOPER SUMMIT 2026
            </span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: 20, fontWeight: 800, color: '#0f172a' }}>
              Attendee Registration Pass
            </h3>
          </div>

          {/* Name Row: Responsive 2-Col or Stack */}
          <div style={{ display: 'flex', flexDirection: formMode === 'desktop' ? 'row' : 'column', gap: 14 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label htmlFor="input-fn" style={{ fontSize: 13, fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                First Name *
              </label>
              <input
                id="input-fn"
                placeholder="Carlos"
                style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #cbd5e1', fontSize: 14, outlineColor: '#de3b3d' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label htmlFor="input-ln" style={{ fontSize: 13, fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                Last Name *
              </label>
              <input
                id="input-ln"
                placeholder="Santana"
                style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #cbd5e1', fontSize: 14, outlineColor: '#de3b3d' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label htmlFor="input-em" style={{ fontSize: 13, fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
              Work Email Address *
            </label>
            <input
              id="input-em"
              placeholder="carlos@engineering.io"
              style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #cbd5e1', fontSize: 14, outlineColor: '#de3b3d' }}
            />
          </div>

          {/* Ticket Radio Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>Select Access Tier:</span>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={() => setModeSelection('in-person')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 8,
                  border: `2px solid ${modeSelection === 'in-person' ? '#de3b3d' : '#e2e8f0'}`,
                  background: modeSelection === 'in-person' ? 'rgba(222,59,61,0.08)' : '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: modeSelection === 'in-person' ? '#de3b3d' : '#334155',
                }}
              >
                In-Person Pass ($199)
              </button>
              <button
                type="button"
                onClick={() => setModeSelection('virtual')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 8,
                  border: `2px solid ${modeSelection === 'virtual' ? '#de3b3d' : '#e2e8f0'}`,
                  background: modeSelection === 'virtual' ? 'rgba(222,59,61,0.08)' : '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: modeSelection === 'virtual' ? '#de3b3d' : '#334155',
                }}
              >
                Virtual Stream (Free)
              </button>
            </div>
          </div>

          <button style={{ marginTop: 'auto', padding: '12px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
            Complete Registration →
          </button>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 38: Divider 6
const Divider6: Page = () => (
  <ChapterDivider
    number="Part 06"
    tagline="Synthesis & Wrap-Up"
    title="DevTools Testing & Complete CSS Wrap-Up"
    subtitle="Simulating mobile devices like a pro, auditing CSS, and celebrating Phase 1 completion."
  />
);

// 39: DevTools Device Mode Guide
const DevToolsDeviceMode: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06: Synthesis & Wrap-Up"
      title="Chrome DevTools Device Mode: Testing Like a Pro"
      subtitle="Simulating mobile devices, touch screens, and throttled networks"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.accent }}>SHORTCUT</span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Toggle Device Toolbar</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Press <code>Cmd + Shift + M</code> (Mac) or <code>Ctrl + Shift + M</code> (Win) in Chrome DevTools to switch between desktop and mobile simulation.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.sky }}>PRESETS</span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Device Emulation</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Test standard devices: iPhone SE (375px), iPhone 14 Pro (393px), and iPad Mini (768px) to verify responsive breakpoints.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: ink.mint }}>INSPECTION</span>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>The Horizontal Leak Test</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Drag the responsive slider smoothly. If any horizontal scrollbar appears, inspect elements to find which child has a hardcoded pixel width!
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 40: The Complete CSS Architecture Synthesis
const TheCssFullPictureSynthesis: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06: Synthesis & Wrap-Up"
      title="The 5-Layer CSS Architecture: Your Complete Toolkit"
      subtitle="The visual engine of the web is now complete in your mental model"
    />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center' }}>
      {[
        { layer: 'Layer 5: Mobile-First Responsive', desc: 'Viewport meta tag, min-width media queries, fluid units (rem, %)', col: ink.mint },
        { layer: 'Layer 4: Flexbox Layout Engine', desc: 'display: flex, justify-content, align-items, flex: 1 1 280px, margin-top: auto', col: ink.sky },
        { layer: 'Layer 3: Box Model Physics', desc: 'Content, Padding (inside), Border (frame), Margin (outside buffer)', col: ink.purple },
        { layer: 'Layer 2: Typography & Colors', desc: 'System font stacks, 1.5 unitless line-height, hex & rgba tints, classes vs IDs', col: ink.amber },
        { layer: 'Layer 1: The Universal Reset', desc: '*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }', col: ink.accent },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            padding: '16px 24px',
            borderRadius: 12,
            background: ink.panel,
            borderLeft: `6px solid ${item.col}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: shadow.card,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: ink.text }}>
            {item.layer}
          </div>
          <div style={{ fontSize: 16, color: ink.muted, fontFamily: font.mono }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 41: AI Prompting for Layouts
const AIPromptingForLayouts: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06: Synthesis & Wrap-Up"
      title="Strategic AI: The 3-Point Layout Audit"
      subtitle="How to critically audit AI-generated CSS before accepting it into your codebase"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.accent }}>CHECK 1: ENGINE</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>No Legacy Floats / Tables</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Verify that AI did not hallucinate <code>float: left</code>, <code>display: table</code>, or complex absolute positioning calculations.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.sky }}>CHECK 2: SIZING</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>No Fixed Width Leaks</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Check for hardcoded fixed pixel widths (e.g. <code>width: 480px</code>). Ensure it used <code>max-width</code>, <code>%</code>, or <code>flex</code>.
        </p>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: ink.mint }}>CHECK 3: DIRECTION</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Mobile-First Queries</h4>
        <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
          Verify that media queries use <code>min-width</code> rather than fragile <code>max-width</code> cascades that fight browser defaults.
        </p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 42: Divider 7
const Divider7: Page = () => (
  <ChapterDivider
    number="Part 07"
    tagline="Hands-on Practice"
    title="In-Class Lab & Homework Assignments"
    subtitle="Building the Responsive Storefront live, then tackling our two production homework deliverables."
  />
);

// 43: Lab Instructions (Improved with clear files and sprint tasks)
const LabInstructions: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 07: In-Class Lab"
      title="In-Class Lab: Building the Fluid Storefront"
      subtitle="Deliverables: store.html & store.css • A 35-minute guided sprint"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignItems: 'center' }}>
      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: ink.accent }}>SPRINT 1 (10 MIN)</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Reset & Header</h4>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, color: ink.soft, lineHeight: 1.55 }}>
          <li>Line 1 Universal Reset (<code>box-sizing: border-box</code>).</li>
          <li>Store header with brand title left & item badge right.</li>
          <li><code>display: flex; justify-content: space-between;</code></li>
          <li>Category filter pills bar with Flexbox <code>gap: 12px;</code></li>
        </ul>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: ink.sky }}>SPRINT 2 (15 MIN)</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Fluid Card Grid</h4>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, color: ink.soft, lineHeight: 1.55 }}>
          <li>Container with <code>display: flex; flex-wrap: wrap; gap: 24px;</code></li>
          <li>Product cards styled with <code>flex: 1 1 280px;</code></li>
          <li>Add images with <code>width: 100%; height: 180px; object-fit: cover;</code></li>
          <li>Card hover lift: <code>transform: translateY(-4px);</code></li>
        </ul>
      </div>

      <div style={{ padding: 26, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: ink.mint }}>SPRINT 3 (10 MIN)</div>
        <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Sticky Buttons & Audit</h4>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, color: ink.soft, lineHeight: 1.55 }}>
          <li>Give cards unequal description copy lengths.</li>
          <li>Card body: <code>display: flex; flex-direction: column; flex-grow: 1;</code></li>
          <li>Apply <strong><code>margin-top: auto;</code></strong> to all buttons!</li>
          <li>Verify in Chrome DevTools Device Mode (375px vs 768px).</li>
        </ul>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 45: Lab Live Target Preview (UPGRADED: LEGEND TOP, MASSIVE PREVIEW BOTTOM)
const LabTargetPreview: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 07: In-Class Lab Preview"
      title="Lab Target Preview & Design Spec Legend"
      subtitle="Visual blueprint and token spec sheet for store.html & store.css"
    />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, alignItems: 'center' }}>
      {/* Top Token Spec Sheet & Legend Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: 1680,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.1fr 1.2fr 1.5fr',
          gap: 16,
          padding: '12px 18px',
          borderRadius: 12,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
        }}
      >
        {/* Token Group 1: Color Chips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: ink.accent, letterSpacing: '0.05em' }}>
            1. PALETTE & COLOR TOKENS
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[
              { label: 'Accent', hex: '#de3b3d', bg: '#de3b3d', fg: '#fff' },
              { label: 'Dark', hex: '#0f172a', bg: '#0f172a', fg: '#fff' },
              { label: 'Slate', hex: '#1e293b', bg: '#1e293b', fg: '#fff' },
              { label: 'Border', hex: '#e2e8f0', bg: '#e2e8f0', fg: '#0f172a' },
              { label: 'Page', hex: '#f8fafc', bg: '#f8fafc', fg: '#0f172a' },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '3px 8px',
                  borderRadius: 6,
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  fontSize: 11,
                  fontFamily: font.mono,
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: 3, background: c.bg, border: '1px solid rgba(0,0,0,0.1)' }} />
                <span style={{ fontWeight: 700 }}>{c.label}:</span>
                <span style={{ color: ink.muted }}>{c.hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Token Group 2: Typography Spec */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: ink.sky, letterSpacing: '0.05em' }}>
            2. TYPOGRAPHY SPEC
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: 12, color: ink.soft }}>
            <div>
              <strong>Brand:</strong> <code style={{ fontSize: 11 }}>20px / 800</code>
            </div>
            <div>
              <strong>Card Title:</strong> <code style={{ fontSize: 11 }}>15px / 700</code>
            </div>
            <div>
              <strong>Price:</strong> <code style={{ fontSize: 11 }}>16px / 800 (#0f172a)</code>
            </div>
            <div>
              <strong>Body / Desc:</strong> <code style={{ fontSize: 11 }}>13px / 400 (#64748b)</code>
            </div>
          </div>
        </div>

        {/* Token Group 3: Spacing & Box Model */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: ink.purple, letterSpacing: '0.05em' }}>
            3. SPACING & METRICS
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: 12, color: ink.soft }}>
            <div>
              <strong>Container:</strong> <code style={{ fontSize: 11 }}>max-width: 1280px; pad: 20px</code>
            </div>
            <div>
              <strong>Grid Gap:</strong> <code style={{ fontSize: 11 }}>gap: 20px;</code>
            </div>
            <div>
              <strong>Card Radius:</strong> <code style={{ fontSize: 11 }}>border-radius: 12px</code>
            </div>
            <div>
              <strong>Card Padding:</strong> <code style={{ fontSize: 11 }}>padding: 16px;</code>
            </div>
          </div>
        </div>

        {/* Token Group 4: Required Flexbox Rules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: ink.mint, letterSpacing: '0.05em' }}>
            4. CORE FLEXBOX DECLARATIONS
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: 12, fontFamily: font.mono }}>
            <span style={{ color: '#0284c7' }}>header {'{ display: flex; justify-content: space-between; }'}</span>
            <span style={{ color: '#7e22ce' }}>.products {'{ display: flex; flex-wrap: wrap; gap: 20px; }'}</span>
            <span style={{ color: '#15803d' }}>.card {'{ flex: 1 1 280px; display: flex; flex-direction: column; }'}</span>
            <span style={{ color: '#de3b3d', fontWeight: 700 }}>.card button {'{ margin-top: auto; }'}</span>
          </div>
        </div>
      </div>

      {/* Massive High-Fidelity Browser Window Target - Height 530px */}
      <div
        style={{
          width: '100%',
          maxWidth: 1680,
          height: 530,
          background: '#0f172a',
          borderRadius: 16,
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow: shadow.window,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Browser Top Chrome Bar */}
        <div style={{ padding: '10px 18px', background: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 20px', borderRadius: 6, background: '#0f172a', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: 11, color: '#4ade80' }}>🔒</span>
            <span style={{ fontSize: 12, fontFamily: font.mono, color: '#94a3b8' }}>
              http://localhost:5500/store.html
            </span>
          </div>
          <span style={{ fontSize: 11, fontFamily: font.mono, color: '#64748b' }}>
            Viewport: 100% Fluid
          </span>
        </div>

        {/* Browser Webpage Content */}
        <div style={{ padding: '20px 24px', background: '#f8fafc', color: '#0f172a', display: 'flex', flexDirection: 'column', gap: 16, flex: 1, overflowY: 'auto' }}>
          {/* Store Header with space-between */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid #e2e8f0', paddingBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#0f172a' }}>⚡ TechCraft Store</h3>
              <span style={{ background: 'rgba(222,59,61,0.1)', color: '#de3b3d', padding: '3px 10px', borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>
                4 Products Available
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: 13, color: '#64748b' }}>
                <span style={{ color: '#0284c7', fontFamily: font.mono, fontWeight: 700 }}>justify-content: space-between</span>
              </div>
              <button style={{ padding: '8px 16px', borderRadius: 8, background: '#0f172a', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                🛒 Cart (0)
              </button>
            </div>
          </div>

          {/* Filter Bar with gap: 8px */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ padding: '5px 14px', borderRadius: 9999, background: '#0f172a', color: '#fff', fontSize: 12, fontWeight: 700 }}>All Products (4)</span>
              <span style={{ padding: '5px 14px', borderRadius: 9999, background: '#e2e8f0', color: '#475569', fontSize: 12, fontWeight: 600 }}>Audio</span>
              <span style={{ padding: '5px 14px', borderRadius: 9999, background: '#e2e8f0', color: '#475569', fontSize: 12, fontWeight: 600 }}>Cameras</span>
              <span style={{ padding: '5px 14px', borderRadius: 9999, background: '#e2e8f0', color: '#475569', fontSize: 12, fontWeight: 600 }}>Wearables</span>
              <span style={{ padding: '5px 14px', borderRadius: 9999, background: '#e2e8f0', color: '#475569', fontSize: 12, fontWeight: 600 }}>Accessories</span>
            </div>
            <span style={{ fontSize: 12, color: '#64748b', fontFamily: font.mono }}>
              display: flex; flex-wrap: wrap; gap: 20px;
            </span>
          </div>

          {/* 4 Fluid Product Cards with Aligned Baseline Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, flex: 1 }}>
            {/* Card 1 */}
            <div style={{ flex: '1 1 280px', background: '#fff', borderRadius: 12, border: '1.5px solid #e2e8f0', padding: 16, display: 'flex', flexDirection: 'column', boxShadow: shadow.card }}>
              <div style={{ height: 110, background: '#cbd5e1', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 13, color: '#475569', fontWeight: 700 }}>
                [ Wireless Audio Thumbnail ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#de3b3d' }}>AUDIO</span>
                <span style={{ fontSize: 11, color: '#64748b' }}>★★★★★ 4.9</span>
              </div>
              <strong style={{ fontSize: 16, marginTop: 4 }}>Earbuds Pro 2</strong>
              <p style={{ margin: '4px 0 10px 0', fontSize: 13, color: '#64748b', lineHeight: 1.4 }}>
                Wireless earbuds with active noise cancelation.
              </p>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>$89.00</span>
              <button style={{ marginTop: 'auto', padding: '10px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>

            {/* Card 2 */}
            <div style={{ flex: '1 1 280px', background: '#fff', borderRadius: 12, border: '1.5px solid #e2e8f0', padding: 16, display: 'flex', flexDirection: 'column', boxShadow: shadow.card }}>
              <div style={{ height: 110, background: '#cbd5e1', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 13, color: '#475569', fontWeight: 700 }}>
                [ Studio Monitor Thumbnail ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#de3b3d' }}>PRO AUDIO</span>
                <span style={{ fontSize: 11, color: '#64748b' }}>★★★★★ 5.0</span>
              </div>
              <strong style={{ fontSize: 16, marginTop: 4 }}>Studio Monitor Over-Ear</strong>
              <p style={{ margin: '4px 0 10px 0', fontSize: 13, color: '#64748b', lineHeight: 1.4 }}>
                Professional planar magnetic cans for high-fidelity mixing, master acoustic calibration, and extended 40-hour session comfort.
              </p>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>$249.00</span>
              <button style={{ marginTop: 'auto', padding: '10px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>

            {/* Card 3 */}
            <div style={{ flex: '1 1 280px', background: '#fff', borderRadius: 12, border: '1.5px solid #e2e8f0', padding: 16, display: 'flex', flexDirection: 'column', boxShadow: shadow.card }}>
              <div style={{ height: 110, background: '#cbd5e1', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 13, color: '#475569', fontWeight: 700 }}>
                [ 35mm Rangefinder Thumbnail ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#de3b3d' }}>PHOTO</span>
                <span style={{ fontSize: 11, color: '#64748b' }}>★★★★☆ 4.8</span>
              </div>
              <strong style={{ fontSize: 16, marginTop: 4 }}>Vintage 35mm Rangefinder</strong>
              <p style={{ margin: '4px 0 10px 0', fontSize: 13, color: '#64748b', lineHeight: 1.4 }}>
                Mechanical shutter magnesium body with optical split-image prism rangefinder.
              </p>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>$589.00</span>
              <button style={{ marginTop: 'auto', padding: '10px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>

            {/* Card 4 */}
            <div style={{ flex: '1 1 280px', background: '#fff', borderRadius: 12, border: '1.5px solid #e2e8f0', padding: 16, display: 'flex', flexDirection: 'column', boxShadow: shadow.card }}>
              <div style={{ height: 110, background: '#cbd5e1', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 13, color: '#475569', fontWeight: 700 }}>
                [ GPS Smartwatch Thumbnail ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#de3b3d' }}>WEARABLE</span>
                <span style={{ fontSize: 11, color: '#64748b' }}>★★★★★ 4.9</span>
              </div>
              <strong style={{ fontSize: 16, marginTop: 4 }}>GPS Smartwatch Titanium</strong>
              <p style={{ margin: '4px 0 10px 0', fontSize: 13, color: '#64748b', lineHeight: 1.4 }}>
                50m waterproof multisport watch.
              </p>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>$179.00</span>
              <button style={{ marginTop: 'auto', padding: '10px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 45: Homework 1 Showcase
const Homework1Showcase: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 01"
      title="Homework 1: The Fluid Flexbox Storefront"
      subtitle="Deliverables: products.html & products.css in session-04/homework-1/"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 24, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 700, color: ink.text }}>
            Core Mission & Requirements:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            <li>Store header with brand title & item count badge using <code>space-between</code>.</li>
            <li>Category filter tags bar aligned cleanly with Flexbox <code>gap</code>.</li>
            <li>Multi-card product catalog with <code>flex-wrap: wrap</code> and <code>flex: 1 1 280px</code>.</li>
            <li>Varying description copy lengths across cards.</li>
            <li>All "Add to Cart" buttons aligned to baseline via <strong><code>margin-top: auto</code></strong>!</li>
            <li>Subtle card hover lift with <code>transform: translateY(-4px)</code>.</li>
          </ul>
        </div>
      </div>

      {/* Visual mockup of Storefront Card */}
      <div
        style={{
          flex: 0.9,
          background: '#0f172a',
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 340,
            background: '#ffffff',
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ height: 140, background: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', fontSize: 16, fontWeight: 700 }}>
            [ Product Image 400x200 ]
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flexGrow: 1, gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#de3b3d' }}>★ BESTSELLER</span>
            <h4 style={{ margin: 0, fontSize: 20, color: '#0f172a' }}>Studio Monitor Pro</h4>
            <p style={{ margin: 0, fontSize: 14, color: '#64748b', lineHeight: 1.4 }}>
              Active noise canceling wireless cans with 40h battery.
            </p>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginTop: 4 }}>$249.00</div>
            <button style={{ marginTop: 'auto', padding: 10, borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 46: Homework 2 Showcase & Closing
const Homework2ShowcaseAndClosing: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 02 & Milestone Graduation"
      title="Homework 2: Responsive Conference Portal & Phase 1 Complete!"
      subtitle="Deliverables: portal.html & portal.css in session-04/homework-2/"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 700, color: ink.text }}>
            Homework 2 Requirements:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
            <li>Responsive navigation bar (stacks on mobile, spreads on desktop).</li>
            <li>Accessible registration form with <code>&lt;label for&gt;</code> binding.</li>
            <li>2-column name row on screens &ge; 640px, full-width on mobile.</li>
            <li>Radio pill options styled with Flexbox.</li>
            <li>Custom <code>:focus-visible</code> accessibility outline.</li>
          </ul>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 14, background: ink.accentSoft, border: `2px solid ${ink.accent}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <IconSparkles size={24} color={ink.accent} />
            <span style={{ fontSize: 20, fontWeight: 800, color: ink.accent }}>
              🎉 PHASE 1 GRADUATION & NEXT SESSION PREVIEW!
            </span>
          </div>
          <div style={{ fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
            You have officially mastered the <strong>Skeleton (HTML)</strong> and the <strong>Presentation & Layout (CSS)</strong> of the web!
            <br />
            <strong>Next Session (Session 05):</strong> We ignite the brain of the web — <strong>JavaScript Fundamentals, Browser Memory & Dynamic State!</strong>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 0.9,
          background: '#0f172a',
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 360,
            background: '#1e293b',
            borderRadius: 14,
            padding: 20,
            border: '2px solid #de3b3d',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            color: '#f8fafc',
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8' }}>GLOBAL DEVELOPER SUMMIT 2026</span>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Reserve Attendee Pass</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div style={{ height: 32, borderRadius: 6, background: '#334155', padding: '6px 8px', fontSize: 11, color: '#94a3b8' }}>First Name</div>
            <div style={{ height: 32, borderRadius: 6, background: '#334155', padding: '6px 8px', fontSize: 11, color: '#94a3b8' }}>Last Name</div>
          </div>
          <div style={{ height: 32, borderRadius: 6, background: '#334155', padding: '6px 8px', fontSize: 11, color: '#94a3b8' }}>carlos@engineering.io</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: 6, borderRadius: 6, background: 'rgba(222,59,61,0.2)', border: '1px solid #de3b3d', fontSize: 11, textAlign: 'center' }}>In-Person ($199)</div>
            <div style={{ flex: 1, padding: 6, borderRadius: 6, background: '#334155', fontSize: 11, textAlign: 'center' }}>Virtual (Free)</div>
          </div>
          <button style={{ padding: 10, borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Complete Registration →
          </button>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PRESENTER NOTES (Index-aligned for all 46 pages)
// ─────────────────────────────────────────────────────────────────────────────

export const notes: (string | undefined)[] = [
  // 01: Cover
  `Welcome students to Session 4!
Celebrate the major milestone: today we merge modern Flexbox layouts with responsive mobile-first design to wrap up CSS completely.
Tease the big picture: today completes Phase 1 of our curriculum, and next session we start JavaScript!`,

  // 02: Agenda
  `Present our 7 structured milestones for today.
Highlight that we move from Flexbox fundamentals (the 3-property rule), into advanced wrapping and child sizing, then into responsive viewports and media queries, followed by hands-on labs and 2 homework projects.`,

  // 03: Divider 1
  `Introduce Part 1: Modern Layout Revolution & Flexbox Fundamentals.
Explain that Flexbox was created to solve the biggest headache in front-end web history: layout and alignment.`,

  // 04: The Layout Evolution
  `Contrast the dark ages of floats with modern Flexbox.
Explain that floats were created for text wrapping around magazine photos, but developers hijacked them for columns.
Emphasize that Flexbox is a dedicated one-dimensional layout engine built directly into browser rendering pipelines.`,

  // 05: Parent-Child Contract
  `Stress the parent-child contract in Flexbox.
Explain that display: flex on the container gives the parent conductor authority over its immediate children.
Warn students: flex properties do not cascade down to grandchildren! If children have nested elements, they need their own display: flex.`,

  // 06: Main vs. Cross Axis
  `Walk through the coordinate system.
Explain that Flexbox operates along two perpendicular axes: the Main Axis (horizontal row by default) and the Cross Axis (vertical column by default).
Connect the properties: justify-content controls the Main Axis; align-items controls the Cross Axis.`,

  // 07: The 3-Property Rule
  `Teach the 3-Property Rule:
1. display: flex; (wakes up the engine)
2. justify-content: ...; (main axis alignment)
3. align-items: ...; (cross axis alignment)
Assure students that mastering these 3 declarations solves 90% of real-world layout challenges.`,

  // 08: Justify-Content Deep Dive
  `Walk through the 6 core justify-content values.
Highlight space-between: it is the universal secret behind navigation bars with a logo on the left and buttons on the right.`,

  // 09: Align-Items Deep Dive
  `Walk through align-items values.
Point out that stretch is the default: flex items stretch to match the tallest item in the row.
Show how align-items: center provides instantaneous vertical centering.`,

  // 10: The Gap Property
  `Celebrate the modern gap property.
Explain how older codebases had to use negative margins and :last-child hacks.
Show how gap cleanly adds gutters between flex items without spilling over outer boundaries.`,

  // 11: Interactive Flexbox Arena
  `Engage the class live!
Click different buttons on the slide to toggle justify-content and align-items.
Show how the 3 boxes react in real time. Have students predict where the boxes will move before clicking.`,

  // 12: Concept Check 1
  `Give students 30 seconds to answer the question.
Click Option B to reveal the explanation: justify-content: space-between distributes items along the main axis to opposite edges.`,

  // 13: Divider 2
  `Introduce Part 2: Direction, Wrapping & Flex Child Powers.
Now we learn what happens when we flip the axes, wrap across rows, and configure child sizing.`,

  // 14: Flex-Direction
  `Demonstrate flex-direction: column.
Crucial insight: when you change direction to column, the Main Axis becomes vertical and the Cross Axis becomes horizontal!
Therefore, justify-content now aligns vertically, and align-items aligns horizontally.`,

  // 15: Flex-Wrap
  `Explain flex-wrap: wrap.
By default (nowrap), items get crushed into narrow slivers.
With wrap, items gracefully drop to the next line when screen width is exceeded, forming fluid responsive card rows.`,

  // 16: Interactive Flex Direction & Wrap Playground
  `Live interactive playground!
Toggle between row and column direction.
Switch between wrap and nowrap and add more items to demonstrate how nowrap crushes items while wrap drops them into new rows cleanly.`,

  // 17: Flex Child Holy Trinity
  `Break down the 3 child powers:
flex-grow: absorbing leftover empty space.
flex-shrink: contracting when squeezed.
flex-basis: initial ideal starting size before flexing.`,

  // 18: Flex Shorthand
  `Present the 3 golden production recipes:
1. flex: 1; for equal-width columns.
2. flex: 0 0 260px; for locked sidebars.
3. flex: 1 1 280px; for fluid responsive cards.`,

  // 19: Interactive Flex Sizing Playground
  `Live interactive sizing arena!
Test flex-grow, flex-shrink, and flex-basis with real-time resizing.
Show how flex-grow absorbs extra container space, and how flex-shrink activates when the container is squeezed.`,

  // 20: Margin-Top Auto Secret
  `Reveal the margin-top: auto secret.
Explain that in a vertical flex column, margin-top: auto acts like an expanding spring, pushing the card's button to the bottom so all buttons align horizontally across sibling cards.`,

  // 21: Interactive Margin-Auto Arena
  `Click the toggle button live!
Show students the ragged baseline when buttons sit right beneath unequal text paragraphs.
Then click 'With margin-top: auto' and watch all buttons snap cleanly to the exact same baseline!`,

  // 22: Interactive Align-Self & Order Arena
  `Engage students with the interactive align-self and order playground!
Change Item 3's cross-axis position with align-self, and alter its visual order with the order property.
Highlight the accessibility disparity: visual order changes, but keyboard tab and screen readers strictly follow the DOM!`,

  // 23: Concept Check 2
  `Interactive concept check on auto margins.
Ask students which option accurately describes margin-top: auto in a flex column.
Click Option B to confirm.`,

  // 24: Divider 3
  `Introduce Part 3: Responsive Design & The Mobile Viewport Contract.
We now transition into making our layouts fluid and accessible across all device screens.`,

  // 25: Why Responsive Matters
  `Cite the mobile traffic stats: over 58% of web traffic is mobile.
Emphasize that users will not tolerate horizontal scrolling or pinch-to-zoom on modern websites.`,

  // 26: The Viewport Meta Contract
  `Explain the viewport meta tag contract with the git diff view!
Show what happens when it is missing: mobile phones render a 980px desktop view with unreadable microscopic text.
With the tag added, the browser matches device physical width at 1.0 scale.`,

  // 27: Mobile-First Philosophy
  `Introduce the mobile-first philosophy.
Start with simple, natural single-column flow for mobile.
Then progressively enhance upward with media queries as screen size expands.`,

  // 28: Fluid vs. Fixed Sizing
  `Cover the 3 rules for fluid sizing:
1. Use max-width instead of width on containers.
2. Add img { max-width: 100%; height: auto; }.
3. Use rem units for typography and spacing.`,

  // 29: Divider 4
  `Introduce Part 4: Media Queries & Responsive Breakpoints.
How does CSS conditionally trigger styling changes when screen width expands?`,

  // 30: Media Query Syntax
  `Break down the @media (min-width: 768px) syntax.
Explain that it acts as an if-statement evaluated live by the browser as the viewport is resized.`,

  // 31: Standard Breakpoints
  `Review the 4 standard industry breakpoints:
Mobile base (< 640px), Tablet (640px/768px), Desktop (1024px), and Wide Display (1280px).
Advise students to design for content needs rather than specific phone models.`,

  // 32: Min-Width vs Max-Width
  `Contrast min-width mobile-first with max-width desktop-first.
Explain that max-width forces developers to undo desktop styles for mobile, leading to bloated CSS.
Mobile-first builds upward cleanly with zero undoing.`,

  // 33: Interactive Viewport Simulator
  `Click through Mobile, Landscape, Tablet, and Desktop simulation presets or drag the width slider live!
Show how the active breakpoint HUD lights up which media query rule is active as the viewport expands, and watch the product grid reflow smoothly.`,

  // 34: Concept Check 3
  `Interactive concept check on media query execution.
Ask students when min-width: 768px applies.
Click Option B to confirm: 768px wide and wider.`,

  // 35: Divider 5
  `Introduce Part 5: Production UI Patterns (Navbars, Cards & Forms).
Applying Flexbox and media queries to real-world interface components.`,

  // 36: Interactive Navbar Pattern
  `Toggle between Desktop and Mobile views live!
On desktop, point out the wide horizontal spread with space-between. On mobile, click the Menu button to demonstrate the slide-down navigation drawer.`,

  // 37: Interactive Card Grid Pattern
  `Use the container width slider on this slide!
Watch all 6 product cards automatically reflow from 1 column to 2, 3, and 4 columns as the container grows, completely free of media queries.`,

  // 38: Interactive Form Pattern
  `Demonstrate the accessible form live!
Toggle Desktop vs Mobile to show the First and Last name fields collapsing from side-by-side into a single column.
Click the input labels to show how clicking the label focuses the input field.`,

  // 39: Divider 6
  `Introduce Part 6: DevTools Testing & Complete CSS Wrap-Up.
Testing like senior engineers and consolidating our entire CSS knowledge base.`,

  // 40: DevTools Device Mode Guide
  `Guide students through Chrome DevTools Device Mode.
Show how to toggle the Device Toolbar (Cmd+Shift+M), select device presets, and drag the slider to hunt for horizontal scroll leaks.`,

  // 41: The Complete CSS Architecture Synthesis
  `Review the 5-layer CSS pyramid:
1. Universal Reset
2. Typography & Colors
3. Box Model
4. Flexbox Engine
5. Mobile-First Responsive
Congratulate students on mastering the visual engine of the web!`,

  // 42: AI Prompting for Layouts
  `Cover strategic AI prompting for CSS layouts:
Check 1: No legacy floats or tables.
Check 2: No hardcoded fixed width leaks.
Check 3: Uses mobile-first min-width media queries.`,

  // 43: Divider 7
  `Introduce Part 7: In-Class Lab & Homework Assignments.
Transitioning from lecture to hands-on keyboard practice.`,

  // 44: Lab Instructions
  `Kick off the 35-minute In-Class Storefront Lab!
Sprint 1: Reset & Header with space-between.
Sprint 2: Fluid card grid with flex-wrap.
Sprint 3: Sticky buttons via margin-top: auto.
Walk around the classroom providing live DevTools debugging assistance.`,

  // 45: Lab Target Preview
  `Review the Token Spec Sheet Legend at the top (color chips, typography scale, spacing tokens, and flexbox declarations).
Then walk through the completed browser preview target at the bottom, highlighting the header space-between, fluid 4-card grid, and aligned action buttons via margin-top: auto.`,

  // 46: Homework 1 Showcase
  `Present Homework 1: The Fluid Flexbox Storefront.
Review deliverables: products.html and products.css.
Highlight the requirements: filter bar, fluid card grid, and aligned action buttons via margin-top: auto.`,

  // 47: Homework 2 Showcase & Closing
  `Present Homework 2: The Responsive Conference Portal & Accessible Form.
Review deliverables: portal.html and portal.css.
Celebrate Phase 1 graduation: CSS is complete!
Tease next session: Session 05 kicks off JavaScript Fundamentals & Browser Memory!`,
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
  title: 'Session 04: Modern Layouts with Flexbox, Responsive Design & CSS Wrap-up',
  createdAt: '2026-10-18T08:25:36.715Z',
};

export default [
  Cover,
  Agenda,
  Divider1,
  TheLayoutEvolution,
  ParentChildContract,
  MainVsCrossAxis,
  ThreePropertyRule,
  JustifyContentDeepDive,
  AlignItemsDeepDive,
  TheGapProperty,
  InteractiveFlexboxArena,
  ConceptCheck1,
  Divider2,
  FlexDirection,
  FlexWrap,
  InteractiveFlexWrapPlayground,
  FlexChildHolyTrinity,
  FlexShorthand,
  InteractiveFlexSizingPlayground,
  MarginAutoSecret,
  InteractiveMarginAutoArena,
  InteractiveAlignSelfAndOrder,
  ConceptCheck2,
  Divider3,
  WhyResponsiveMatters,
  TheViewportMetaContract,
  MobileFirstPhilosophy,
  FluidVsFixed,
  Divider4,
  MediaQuerySyntax,
  StandardBreakpoints,
  MinWidthVsMaxWidth,
  InteractiveResponsivePreview,
  ConceptCheck3,
  Divider5,
  InteractiveNavbarPattern,
  InteractiveCardGridPattern,
  InteractiveFormPattern,
  Divider6,
  DevToolsDeviceMode,
  TheCssFullPictureSynthesis,
  AIPromptingForLayouts,
  Divider7,
  LabInstructions,
  LabTargetPreview,
  Homework1Showcase,
  Homework2ShowcaseAndClosing,
] satisfies Page[];
