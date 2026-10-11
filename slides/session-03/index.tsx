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

const IconCode = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Svg>
);

const IconBox = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
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

const IconLayers = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Svg>
);

const IconRuler = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0l-6-6c-.4-.4-.4-1 0-1.4L13.9 1.3c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z" />
    <line x1="14.5" y1="6.5" x2="13.5" y2="7.5" />
    <line x1="11" y1="10" x2="10" y2="11" />
    <line x1="7.5" y1="13.5" x2="6.5" y2="14.5" />
  </Svg>
);

const IconFile = ({ size = 32, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </Svg>
);

const IconArrowRight = ({ size = 24, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
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
          fontSize: 52,
          fontWeight: 700,
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
        <span style={{ fontWeight: 700, color: ink.text }}>SESSION 03</span>
        <span style={{ color: ink.border }}>|</span>
        <span>CSS Foundations, The Box Model & Visual Architecture</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 600, color: ink.soft }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Reusable Syntax Highlighter (CSS & HTML) ─────────────────────────────────

const renderCssHighlightedLine = (line: string): ReactNode => {
  if (line.trim().startsWith('/*')) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }
  if (line.trim().startsWith('//')) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }

  // Handle HTML inside combined snippets
  if (line.includes('<') || line.includes('>')) {
    const parts = line.split(/(<\/?[a-zA-Z0-9-]+|\/?>|="[^"]*"|='[^']*'|[a-zA-Z0-9-]+(?==)|<!--.*?-->)/g);
    return (
      <>
        {parts.map((p, i) => {
          if (!p) return null;
          if (p.startsWith('<') || p.startsWith('</') || p === '>' || p === '/>') {
            return <span key={i} style={{ color: '#79c0ff', fontWeight: 600 }}>{p}</span>;
          }
          if (p.startsWith('="')) {
            return (
              <span key={i}>
                <span style={{ color: '#8b949e' }}>=</span>
                <span style={{ color: '#a5d6ff' }}>{p.slice(1)}</span>
              </span>
            );
          }
          if (/^[a-zA-Z0-9-]+$/.test(p)) {
            return <span key={i} style={{ color: '#ffa657' }}>{p}</span>;
          }
          return <span key={i} style={{ color: '#f0f6fc' }}>{p}</span>;
        })}
      </>
    );
  }

  // CSS tokenization: selector, property, colon, value, semicolon
  const colonIdx = line.indexOf(':');
  const isDeclaration = colonIdx !== -1 && !line.includes('{') && !line.includes('}');

  if (isDeclaration) {
    const prop = line.substring(0, colonIdx);
    const rest = line.substring(colonIdx + 1);
    const semiIdx = rest.lastIndexOf(';');
    const val = semiIdx !== -1 ? rest.substring(0, semiIdx) : rest;
    const semi = semiIdx !== -1 ? ';' : '';

    return (
      <>
        <span style={{ color: '#79c0ff' }}>{prop}</span>
        <span style={{ color: '#8b949e' }}>:</span>
        <span style={{ color: '#a5d6ff' }}>{val}</span>
        <span style={{ color: '#8b949e' }}>{semi}</span>
      </>
    );
  }

  // Selectors & braces
  if (line.includes('{') || line.includes('}')) {
    const parts = line.split(/([{}])/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part === '{' || part === '}') {
            return <span key={i} style={{ color: '#d2a8ff', fontWeight: 700 }}>{part}</span>;
          }
          if (part.startsWith('.') || part.startsWith('#')) {
            return <span key={i} style={{ color: '#ffa657', fontWeight: 600 }}>{part}</span>;
          }
          return <span key={i} style={{ color: '#ff7b72', fontWeight: 600 }}>{part}</span>;
        })}
      </>
    );
  }

  return <span style={{ color: '#f0f6fc' }}>{line}</span>;
};

const CodeWindow = ({
  code,
  filename = 'style.css',
  badge = 'CSS',
  style,
}: {
  code: string;
  filename?: string;
  badge?: string;
  style?: CSSProperties;
}) => {
  const lines = code.trim().split('\n');
  return (
    <div
      style={{
        borderRadius: 14,
        background: '#0d1117',
        border: '1px solid #30363d',
        overflow: 'hidden',
        boxShadow: shadow.window,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          background: '#161b22',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <span style={{ fontFamily: font.mono, fontSize: 16, color: '#8b949e', marginLeft: 8 }}>
            {filename}
          </span>
        </div>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 13,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 4,
            background: 'rgba(222, 59, 61, 0.2)',
            color: ink.accent,
          }}
        >
          {badge}
        </span>
      </div>
      <div
        style={{
          padding: '20px 24px',
          fontFamily: font.mono,
          fontSize: 21,
          lineHeight: 1.6,
          overflowX: 'auto',
          flex: 1,
        }}
      >
        {lines.map((line, i) => (
          <div key={i} style={{ whiteSpace: 'pre' }}>
            {renderCssHighlightedLine(line)}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Concept Check Component ──────────────────────────────────────────────────

interface QuizOption {
  label: string;
  isCorrect: boolean;
  explanation: string;
}

const ConceptCheck = ({
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 1400,
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 16,
          padding: '36px 44px',
          boxShadow: shadow.card,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: ink.accentSoft,
              color: ink.accent,
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Concept Check
          </div>
          <span style={{ color: ink.muted, fontSize: 20 }}>Select the best answer to test your understanding</span>
        </div>
        <h3 style={{ fontSize: 36, fontWeight: 700, margin: '0 0 28px 0', lineHeight: 1.3 }}>
          {question}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {options.map((opt, i) => {
            const isChosen = selected === i;
            let borderCol = ink.border;
            let bgCol = '#ffffff';
            if (isChosen) {
              borderCol = opt.isCorrect ? ink.mint : ink.accent;
              bgCol = opt.isCorrect ? ink.mintSoft : ink.accentSoft;
            }

            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  textAlign: 'left',
                  padding: '20px 24px',
                  borderRadius: 12,
                  border: `2px solid ${borderCol}`,
                  background: bgCol,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 24, fontWeight: 600, color: ink.text }}>
                    {opt.label}
                  </span>
                  {isChosen && (
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: opt.isCorrect ? ink.mint : ink.accent,
                      }}
                    >
                      {opt.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}
                    </span>
                  )}
                </div>
                {isChosen && (
                  <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.45 }}>
                    {opt.explanation}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Chapter Divider Template ─────────────────────────────────────────────────

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
          fontSize: 92,
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
// SLIDE PAGES DEFINITIONS (1 - 39)
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
          border: `1px solid ${ink.accentBorder}`,
          color: ink.accent,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          width: 'fit-content',
          marginBottom: 32,
        }}
      >
        <span>Full-Stack Web Development</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>Session 03</span>
      </div>

      <h1
        style={{
          fontSize: 104,
          fontFamily: font.display,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: '0 0 24px 0',
          lineHeight: 1.05,
          color: ink.text,
          maxWidth: 1550,
        }}
      >
        CSS Foundations, The Box Model & Visual Architecture
      </h1>

      <p
        style={{
          fontSize: 34,
          color: ink.muted,
          maxWidth: 1250,
          lineHeight: 1.4,
          margin: '0 0 44px 0',
        }}
      >
        Transforming raw semantic HTML documents into polished, responsive, and accessible digital interfaces.
      </p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {[
          { label: 'Separation of Concerns', desc: 'Structure vs. Presentation' },
          { label: 'Rule Anatomy & Specificity', desc: 'The Cascade Trophy Hierarchy' },
          { label: 'Responsive Units', desc: 'px vs. rem vs. % vs. vh/vw' },
          { label: 'The Box Model & Reset', desc: 'Content, Padding, Border, Margin' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: '16px 24px',
              borderRadius: 12,
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: ink.text }}>{item.label}</span>
            <span style={{ fontSize: 16, color: ink.muted }}>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 02: Agenda
const Agenda: Page = () => {
  const items = [
    { num: '01', title: 'The Visual Web & Mental Model', time: '15 min', desc: 'Why HTML alone is not enough: skeleton vs. skin and separation of concerns.' },
    { num: '02', title: 'CSS Syntax & 3 Stylesheet Locations', time: '20 min', desc: 'Inline vs. Internal vs. External stylesheets and why external is industry standard.' },
    { num: '03', title: 'Targeting Elements & Specificity', time: '20 min', desc: 'Tags vs. Classes vs. IDs, class naming best practices, and the Trophy Hierarchy.' },
    { num: '04', title: 'Typography, Colors & Measurement Units', time: '25 min', desc: 'Font stacks, line-height rules, color codes, and mastering px, rem, %, and vh/vw.' },
    { num: '05', title: 'The CSS Box Model & Spacing', time: '25 min', desc: 'Content, padding, border, margin, margin collapsing, and the border-box rescue.' },
    { num: '06', title: 'DevTools, Strategic AI & 2 Homeworks', time: '15 min', desc: 'Live Chrome Styles inspection, Socratic AI debugging, and homework missions.' },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Overview"
        title="Session Roadmap"
        subtitle="Our 2-hour journey from unstyled document to production CSS"
      />
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          alignContent: 'center',
        }}
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            style={{
              padding: '24px 28px',
              borderRadius: 14,
              border: `1px solid ${ink.border}`,
              background: ink.panel,
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 26,
                fontWeight: 800,
                color: ink.accent,
                background: ink.accentSoft,
                padding: '6px 14px',
                borderRadius: 8,
              }}
            >
              {it.num}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{it.title}</h3>
                <span style={{ fontSize: 16, fontWeight: 600, color: ink.muted, fontFamily: font.mono }}>{it.time}</span>
              </div>
              <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.45 }}>{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 03: Divider 1
const Divider1: Page = () => (
  <ChapterDivider
    number="Part 01"
    tagline="The Problem & Philosophy"
    title="The Visual Web & Separation of Concerns"
    subtitle="Why unstyled HTML looks like a 1993 research paper, and how CSS provides the visual transformation."
  />
);

// 04: Before & After Comparison
const BeforeAfterComparison: Page = () => {
  const [showStyled, setShowStyled] = useState(true);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 01: Mental Model"
        title="The Raw HTML vs. Modern CSS Transformation"
        subtitle="The exact same semantic markup produces two completely different experiences"
      />
      <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
        {/* Left explanation */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 24, lineHeight: 1.5, color: ink.soft }}>
            In Session 2, we built semantic HTML documents. If you open them in a browser without CSS, browsers apply their default user-agent stylesheet:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Black Times New Roman text across 100% of the screen width',
              'Raw blue underlined hyperlinks with purple visited states',
              'Zero margin buffers or cards to group related thoughts',
              'Buttons that look like Windows 95 grey rectangles',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ink.accent }} />
                <span style={{ fontSize: 20, color: ink.soft }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <button
              onClick={() => setShowStyled(!showStyled)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 28px',
                borderRadius: 10,
                background: ink.accent,
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(222, 59, 61, 0.3)',
              }}
            >
              <span>Toggle Preview: {showStyled ? 'Show Raw 1993 HTML' : 'Show Styled Modern UI'}</span>
            </button>
          </div>
        </div>

        {/* Right card comparison preview */}
        <div
          style={{
            flex: 1,
            height: 520,
            background: showStyled ? '#f1f5f9' : '#ffffff',
            border: `2px dashed ${showStyled ? '#cbd5e1' : '#000000'}`,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            transition: 'all 0.25s ease',
          }}
        >
          {showStyled ? (
            <div
              style={{
                width: 380,
                background: '#ffffff',
                borderRadius: 16,
                padding: 28,
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    background: 'rgba(222, 59, 61, 0.1)',
                    color: ink.accent,
                    fontSize: 13,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 9999,
                  }}
                >
                  FEATURED WORKSHOP
                </span>
                <span style={{ fontSize: 14, color: '#64748b' }}>2 Hours</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#0f172a' }}>
                Modern CSS Architecture
              </h3>
              <p style={{ margin: 0, fontSize: 16, color: '#475569', lineHeight: 1.5 }}>
                Master layout engines, box model mechanics, and responsive typography tokens from the ground up.
              </p>
              <button
                style={{
                  marginTop: 6,
                  padding: '12px',
                  borderRadius: 8,
                  background: ink.accent,
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Enroll Now • Free
              </button>
            </div>
          ) : (
            <div style={{ fontFamily: 'Times New Roman, serif', color: '#000000', maxWidth: 380 }}>
              <h3 style={{ fontSize: 26, margin: '0 0 10px 0' }}>FEATURED WORKSHOP</h3>
              <h2 style={{ fontSize: 32, margin: '0 0 10px 0' }}>Modern CSS Architecture</h2>
              <p style={{ fontSize: 18, margin: '0 0 14px 0' }}>
                Master layout engines, box model mechanics, and responsive typography tokens from the ground up.
              </p>
              <button style={{ padding: '2px 6px', fontSize: 14 }}>Enroll Now • Free</button>
            </div>
          )}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 05: Mental Model: Separation of Concerns
const MentalModelSeparation: Page = () => {
  const pillars = [
    {
      role: 'HTML',
      title: 'The Skeleton & Bones',
      color: '#e34c26',
      bg: 'rgba(227, 76, 38, 0.08)',
      desc: 'Raw content, semantic landmarks, links, and accessibility tree.',
      analogy: 'The structural framing, drywall, and electrical wiring of a house.',
      rule: 'Answers WHAT the content is.',
    },
    {
      role: 'CSS',
      title: 'The Skin & Interior Design',
      color: '#264de4',
      bg: 'rgba(38, 77, 228, 0.08)',
      desc: 'Colors, fonts, spacing, layout grids, animations, and responsive breakpoints.',
      analogy: 'The wall paint, floor tiles, furniture layout, lighting, and curtains.',
      rule: 'Answers HOW the content looks.',
    },
    {
      role: 'JavaScript',
      title: 'The Muscles & Brain',
      color: '#b45309',
      bg: 'rgba(180, 83, 9, 0.08)',
      desc: 'User interaction, state changes, asynchronous data fetching, and events.',
      analogy: 'The plumbing switches, thermostat automation, and smart door locks.',
      rule: 'Answers HOW the page behaves.',
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 01: Mental Model"
        title="The Three Pillars of Web Development"
        subtitle="Why modern engineering strictly isolates structure from presentation"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1, alignContent: 'center' }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            style={{
              padding: '36px 32px',
              borderRadius: 16,
              background: ink.panel,
              border: `2px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 22,
                fontWeight: 800,
                color: p.color,
                background: p.bg,
                padding: '6px 14px',
                borderRadius: 8,
                width: 'fit-content',
              }}
            >
              {p.role}
            </div>
            <h3 style={{ margin: 0, fontSize: 32, fontWeight: 700, color: ink.text }}>
              {p.title}
            </h3>
            <p style={{ margin: 0, fontSize: 20, color: ink.soft, lineHeight: 1.5 }}>
              {p.desc}
            </p>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: `1px solid ${ink.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 700, color: ink.muted, textTransform: 'uppercase' }}>
                House Metaphor:
              </span>
              <span style={{ fontSize: 18, color: ink.soft, fontStyle: 'italic' }}>
                {p.analogy}
              </span>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  color: p.color,
                }}
              >
                ★ {p.rule}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 06: Concept Check 1
const ConceptCheck1: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01: Concept Verification"
      title="Checking Separation of Concerns"
      subtitle="Why do we keep styling code strictly out of our HTML markup?"
    />
    <ConceptCheck
      question="Why did the web industry deprecate old HTML tags like <font> and <center> in favor of CSS?"
      options={[
        {
          label: 'A. Browsers run out of RAM when processing font tags',
          isCorrect: false,
          explanation: 'Browsers could easily parse <font>, but repeating styling across 100 HTML files became unmaintainable.',
        },
        {
          label: 'B. To separate content structure from styling rules',
          isCorrect: true,
          explanation: 'CSS allows a single stylesheet to control thousands of pages without touching the HTML markup.',
        },
        {
          label: 'C. Because HTML tags are forbidden from having colors',
          isCorrect: false,
          explanation: 'HTML can technically have colors via inline attributes, but doing so violates professional software design.',
        },
        {
          label: 'D. Because search engines block any website that uses HTML',
          isCorrect: false,
          explanation: 'Search engines rely heavily on HTML semantics, but prefer clean, lightweight markup without embedded presentation.',
        },
      ]}
    />
    <SlideFooter />
  </div>
);

// 07: Divider 2
const Divider2: Page = () => (
  <ChapterDivider
    number="Part 02"
    tagline="Syntax & Location"
    title="CSS Syntax & Where to Write It"
    subtitle="Rule anatomy, the semicolon rule, and the three stylesheet placement strategies."
  />
);

// 08: CSS Rule Anatomy
const CssRuleAnatomy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Syntax"
      title="The Anatomy of a CSS Rule"
      subtitle="How browsers parse selectors, properties, values, and declarations"
    />
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="style.css"
          badge="CSS Syntax"
          code={`/* A CSS Rule consists of a Selector & Declaration Block */
h1 {
  color: #de3b3d;
  font-size: 2.5rem;
  line-height: 1.2;
}

.profile-card {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
}`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {[
          { label: 'Selector', code: 'h1 / .profile-card', desc: 'Points to the exact HTML element(s) you wish to style.' },
          { label: 'Declaration Block', code: '{ ... }', desc: 'Encloses all rules inside matching curly brackets.' },
          { label: 'Property', code: 'color / font-size', desc: 'The specific visual style attribute you want to adjust.' },
          { label: 'Value', code: '#de3b3d / 2.5rem', desc: 'The parameter setting you are assigning to that property.' },
          { label: 'Semicolon (;)', code: '; (CRITICAL)', desc: 'Terminates each declaration. Forgetting this breaks following rules!' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px 20px',
              borderRadius: 12,
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: ink.text }}>{item.label}</div>
              <div style={{ fontSize: 16, color: ink.muted }}>{item.desc}</div>
            </div>
            <code
              style={{
                fontFamily: font.mono,
                fontSize: 16,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 6,
                background: '#ffffff',
                border: `1px solid ${ink.border}`,
                color: ink.accent,
              }}
            >
              {item.code}
            </code>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 09: Where CSS Lives Overview
const WhereCssLivesOverview: Page = () => {
  const methods = [
    {
      type: '1. Inline Styles',
      tag: 'Inside the HTML tag',
      code: '<p style="color: red;">Hello</p>',
      scope: 'Single element only',
      caching: '❌ No caching',
      verdict: 'Avoid in production',
      verdictColor: ink.accent,
    },
    {
      type: '2. Internal Styles',
      tag: '<style> in <head>',
      code: '<style>\n  p { color: red; }\n</style>',
      scope: 'Single HTML document',
      caching: '❌ Re-downloaded per page',
      verdict: 'Good for quick demos',
      verdictColor: ink.amber,
    },
    {
      type: '3. External Stylesheet',
      tag: '<link> to .css file',
      code: '<link rel="stylesheet"\n      href="style.css">',
      scope: 'Entire website',
      caching: '✅ Cached by browser',
      verdict: 'Production standard',
      verdictColor: ink.mint,
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 02: Architecture"
        title="Where Does CSS Live? The 3 Locations"
        subtitle="Three methods to connect styles to your HTML documents"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignContent: 'center' }}>
        {methods.map((m, idx) => (
          <div
            key={idx}
            style={{
              padding: '32px 28px',
              borderRadius: 16,
              background: ink.panel,
              border: `2px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{m.type}</h3>
            </div>
            <span style={{ fontSize: 16, color: ink.muted, fontWeight: 600 }}>{m.tag}</span>

            <div
              style={{
                fontFamily: font.mono,
                fontSize: 16,
                background: '#0d1117',
                color: '#79c0ff',
                padding: '16px',
                borderRadius: 10,
                whiteSpace: 'pre',
                minHeight: 80,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {m.code}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${ink.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                <span style={{ color: ink.muted }}>Scope:</span>
                <span style={{ fontWeight: 600 }}>{m.scope}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                <span style={{ color: ink.muted }}>Browser Caching:</span>
                <span style={{ fontWeight: 600 }}>{m.caching}</span>
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: '8px 12px',
                  borderRadius: 8,
                  background: '#ffffff',
                  border: `1px solid ${ink.border}`,
                  fontWeight: 700,
                  fontSize: 16,
                  color: m.verdictColor,
                  textAlign: 'center',
                }}
              >
                {m.verdict}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 10: Inline Styles Deep Dive
const InlineStylesDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Architecture"
      title="Location 1: Inline Styles (The Quick Hack)"
      subtitle="Writing styles directly inside the style attribute of an HTML tag"
    />
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <CodeWindow
          filename="index.html"
          badge="HTML Attribute"
          code={`<!-- Inline style on a single element -->
<button style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 8px;">
  Save Changes
</button>

<!-- What happens if you have 20 buttons on 5 pages? -->
<button style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 8px;">
  Cancel
</button>`}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            padding: '24px 28px',
            borderRadius: 14,
            background: ink.accentSoft,
            border: `1px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <IconAlert color={ink.accent} size={28} />
            <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: ink.accent }}>
              Why Engineers Avoid Inline Styles:
            </h4>
          </div>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
            <li><strong>Violates DRY (Don't Repeat Yourself):</strong> Changing a button color requires editing every button across every HTML file manually.</li>
            <li><strong>Creates Nuclear Specificity:</strong> Inline styles override classes and external stylesheets, making layout overrides nearly impossible.</li>
            <li><strong>No Pseudo-classes:</strong> You cannot write <code>:hover</code> or <code>:focus</code> states inline!</li>
          </ul>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.text }}>
            When is it acceptable?
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.muted, lineHeight: 1.5 }}>
            HTML email templates (where email clients strip external styles) and dynamic calculated coordinates via JavaScript.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 11: Internal Styles Deep Dive
const InternalStylesDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Architecture"
      title="Location 2: Internal Stylesheet (<style> in <head>)"
      subtitle="Embedding styles inside a single document's header block"
    />
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <CodeWindow
          filename="index.html"
          badge="Internal CSS"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Single Page Demo</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      background-color: #f8fafc;
    }
    .hero-title {
      font-size: 2.5rem;
      color: #0f172a;
    }
  </style>
</head>
<body>
  <h1 class="hero-title">Welcome</h1>
</body>
</html>`}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ padding: '24px 28px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 700, color: ink.text }}>
            Pros of Internal Styles:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
            <li>Single-file portability: All markup and styling live in a single file.</li>
            <li>Great for quick CodePen prototypes and educational classroom sandboxes.</li>
            <li>No network request overhead for secondary files on first load.</li>
          </ul>
        </div>

        <div style={{ padding: '24px 28px', borderRadius: 14, background: ink.amberSoft, border: '1px solid rgba(180, 83, 9, 0.2)' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 700, color: ink.amber }}>
            The Multi-Page Pitfall:
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            If your website has 5 pages (Home, About, Services, Pricing, Contact), duplicating the <code>&lt;style&gt;</code> block across all 5 pages bloats file size and prevents the browser from caching your design rules!
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 12: External Stylesheet Contract
const ExternalStylesheetContract: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Architecture"
      title="Location 3: External Stylesheet (The Professional Standard)"
      subtitle="Connecting a standalone .css file via the <link> element"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <CodeWindow
          filename="index.html"
          badge="HTML Link"
          code={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Production Web App</title>

  <!-- Connects external style.css file -->
  <link rel="stylesheet" href="style.css">
</head>`}
        />
      </div>

      <div style={{ flex: 1 }}>
        <CodeWindow
          filename="style.css"
          badge="Dedicated CSS File"
          code={`/* style.css is cached once and shared across ALL pages */
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
}

.btn-primary {
  background-color: #de3b3d;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
}`}
        />
      </div>
    </div>

    <div
      style={{
        marginTop: 20,
        padding: '16px 24px',
        borderRadius: 12,
        background: ink.mintSoft,
        border: '1px solid rgba(21, 128, 61, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <IconCheck color={ink.mint} size={28} />
        <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint }}>
          The Golden Rule for Workshops & Homework:
        </span>
        <span style={{ fontSize: 20, color: ink.soft }}>
          Always use external stylesheets. Put your styles in <code>style.css</code> and link in <code>&lt;head&gt;</code>.
        </span>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 13: Concept Check 2
const ConceptCheck2: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02: Concept Verification"
      title="Checking Stylesheet Placement"
      subtitle="Which architecture strategy fits this real-world scenario?"
    />
    <ConceptCheck
      question="You are building a 6-page company website that shares a header, footer, and brand typography. Which CSS approach should you implement?"
      options={[
        {
          label: 'A. Write inline style attributes on every single element',
          isCorrect: false,
          explanation: 'Inline styles cannot be shared across pages and create an unmaintainable nightmare.',
        },
        {
          label: 'B. Copy and paste an internal <style> block into all 6 files',
          isCorrect: false,
          explanation: 'Duplicating styles creates code drift; editing a color in one file leaves the other 5 broken.',
        },
        {
          label: 'C. Create an external style.css and link it in each page',
          isCorrect: true,
          explanation: 'External stylesheets are cached by the browser and allow updating the entire website from one file.',
        },
        {
          label: 'D. Create 6 different CSS files with different selectors',
          isCorrect: false,
          explanation: 'Shared components (like headers and footers) should share a unified global stylesheet.',
        },
      ]}
    />
    <SlideFooter />
  </div>
);

// 14: Divider 3
const Divider3: Page = () => (
  <ChapterDivider
    number="Part 03"
    tagline="Selectors & Hierarchy"
    title="Targeting Elements & Specificity"
    subtitle="Tags vs. Classes vs. IDs, class naming philosophy, and the Trophy Hierarchy."
  />
);

// 15: Tag vs. Class vs. ID
const TagVsClassVsId: Page = () => {
  const selectors = [
    {
      type: 'Tag / Element',
      syntax: 'p { color: #333; }',
      scope: 'Global blanket rule',
      desc: 'Styles every single <p> tag on the entire site. Great for base font resets, but dangerous for specific component styling.',
      color: '#e34c26',
    },
    {
      type: 'Class Selector (.)',
      syntax: '.card { padding: 20px; }',
      scope: 'Reusable component workhorse',
      desc: 'Target any element assigned class="card". Can be applied to multiple elements and combined freely.',
      color: ink.mint,
      recommended: true,
    },
    {
      type: 'ID Selector (#)',
      syntax: '#hero { background: blue; }',
      scope: 'Strictly unique element',
      desc: 'Can only be used once per page. Creates heavy specificity that makes future styling overrides nearly impossible.',
      color: ink.accent,
      warning: 'Avoid in CSS!',
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03: Selectors"
        title="Tag vs. Class vs. ID Selectors"
        subtitle="The three primary ways CSS selects targets in the HTML DOM"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1, alignContent: 'center' }}>
        {selectors.map((s, idx) => (
          <div
            key={idx}
            style={{
              padding: '32px 28px',
              borderRadius: 16,
              background: ink.panel,
              border: `2px solid ${s.recommended ? ink.mint : ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{s.type}</h3>
              {s.recommended && (
                <span style={{ fontSize: 13, fontWeight: 700, padding: '4px 10px', borderRadius: 9999, background: ink.mintSoft, color: ink.mint }}>
                  RECOMMENDED
                </span>
              )}
              {s.warning && (
                <span style={{ fontSize: 13, fontWeight: 700, padding: '4px 10px', borderRadius: 9999, background: ink.accentSoft, color: ink.accent }}>
                  {s.warning}
                </span>
              )}
            </div>

            <div
              style={{
                fontFamily: font.mono,
                fontSize: 18,
                background: '#0d1117',
                color: '#79c0ff',
                padding: '16px',
                borderRadius: 10,
              }}
            >
              {s.syntax}
            </div>

            <div style={{ fontSize: 16, fontWeight: 700, color: s.color }}>
              Scope: {s.scope}
            </div>

            <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 16: Naming Classes with Intention
const NamingClassesWithIntention: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03: Best Practices"
      title="Naming Classes with Intention (The Kebab-Case Mindset)"
      subtitle="Good class names describe what an element is, not how it currently looks"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignContent: 'center' }}>
      {/* Bad names */}
      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.accentSoft,
          border: `1px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ padding: '6px 12px', borderRadius: 6, background: ink.accent, color: '#fff', fontWeight: 700 }}>
            ✗ AVOID
          </div>
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.accent }}>
            Appearance-Locked Names
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { name: '.blue-box', flaw: 'What happens when brand changes to red? The name becomes a lie.' },
            { name: '.big-text-12', flaw: 'Locks font size to class name. Editing size breaks meaning.' },
            { name: '.left-column', flaw: 'On mobile phones, this column stacks vertically, not on the left!' },
            { name: '.red_button', flaw: 'Uses snake_case instead of web-standard kebab-case.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '14px 18px', borderRadius: 10, border: '1px solid #fed7d7' }}>
              <code style={{ fontFamily: font.mono, fontSize: 18, fontWeight: 700, color: ink.accent }}>{item.name}</code>
              <p style={{ margin: '4px 0 0 0', fontSize: 16, color: ink.soft }}>{item.flaw}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Good names */}
      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.mintSoft,
          border: '1px solid rgba(21, 128, 61, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ padding: '6px 12px', borderRadius: 6, background: ink.mint, color: '#fff', fontWeight: 700 }}>
            ✓ PREFERRED
          </div>
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.mint }}>
            Purpose & Intent-Driven Names
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { name: '.profile-card', benefit: 'Describes the functional component clearly.' },
            { name: '.lead-paragraph', benefit: 'Indicates editorial hierarchy, not specific pixels.' },
            { name: '.sidebar', benefit: 'Represents secondary content regardless of screen position.' },
            { name: '.btn-primary', benefit: 'Standard kebab-case; clear primary action contract.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '14px 18px', borderRadius: 10, border: '1px solid #bbf7d0' }}>
              <code style={{ fontFamily: font.mono, fontSize: 18, fontWeight: 700, color: ink.mint }}>{item.name}</code>
              <p style={{ margin: '4px 0 0 0', fontSize: 16, color: ink.soft }}>{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 17: Specificity Without Math
const SpecificityWithoutMath: Page = () => {
  const levels = [
    { level: 'Level 4: Inline Style', selector: 'style="..." in HTML', weight: '1000 Points', desc: 'The Nuclear Option. Overrides virtually all CSS file rules.', color: ink.accent },
    { level: 'Level 3: ID Selector', selector: '#main-header', weight: '100 Points', desc: 'Heavyweight Champion. Overrides classes easily. Avoid for styling.', color: ink.amber },
    { level: 'Level 2: Class / Attribute', selector: '.card, [type="text"]', weight: '10 Points', desc: 'Middleweight. The daily workhorse of professional web apps.', color: ink.mint },
    { level: 'Level 1: Tag Selector', selector: 'p, h1, button, div', weight: '1 Point', desc: 'Lightweight. Weakest baseline selector.', color: ink.sky },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03: The Cascade"
        title="Specificity Without Mathematics: The Trophy Hierarchy"
        subtitle="When two conflicting rules target the same element, which one wins?"
      />
      <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {levels.map((lvl, idx) => (
            <div
              key={idx}
              style={{
                padding: '20px 24px',
                borderRadius: 14,
                background: ink.panel,
                border: `2px solid ${ink.border}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 22, fontWeight: 700, color: lvl.color }}>{lvl.level}</span>
                  <code style={{ fontFamily: font.mono, fontSize: 16, color: ink.muted }}>{lvl.selector}</code>
                </div>
                <div style={{ fontSize: 16, color: ink.soft }}>{lvl.desc}</div>
              </div>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 18,
                  fontWeight: 800,
                  color: lvl.color,
                  padding: '6px 14px',
                  borderRadius: 8,
                  background: '#ffffff',
                  border: `1px solid ${ink.border}`,
                }}
              >
                {lvl.weight}
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ padding: '28px', borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}` }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: 24, fontWeight: 700, color: ink.text }}>
              The 2 Golden Rules of Cascading:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontWeight: 800, color: ink.accent, fontSize: 20 }}>1.</span>
                <span style={{ fontSize: 18, color: ink.soft, lineHeight: 1.45 }}>
                  <strong>Higher Specificity Always Trumps Lower:</strong> A single class (10 pts) beats a tag selector (1 pt), even if the tag is written later.
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontWeight: 800, color: ink.accent, fontSize: 20 }}>2.</span>
                <span style={{ fontSize: 18, color: ink.soft, lineHeight: 1.45 }}>
                  <strong>The Tiebreaker (The Cascade):</strong> If two rules have the exact same specificity, the one written <em>lower in the stylesheet</em> wins!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 18: Interactive Specificity Arena
const InteractiveSpecificityArena: Page = () => {
  const [activeRule, setActiveRule] = useState<'tag' | 'class' | 'id' | 'inline'>('class');

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 03: Live Arena"
        title="Interactive Specificity Battle Arena"
        subtitle="Test conflicting CSS rules and observe which style wins in real time"
      />
      <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
        <div style={{ flex: 1.1 }}>
          <div
            style={{
              background: '#0d1117',
              borderRadius: 14,
              border: '1px solid #30363d',
              padding: '24px',
              fontFamily: font.mono,
              fontSize: 19,
              lineHeight: 1.6,
            }}
          >
            <div style={{ color: '#8b949e', marginBottom: 12 }}>/* 4 Conflicting rules targeting the same button */</div>
            <div style={{ color: activeRule === 'tag' ? '#58a6ff' : '#8b949e', fontWeight: activeRule === 'tag' ? 700 : 400 }}>
              button &#123; background: #64748b; color: #fff; &#125; /* 1 pt */
            </div>
            <div style={{ color: activeRule === 'class' ? '#3fb950' : '#8b949e', fontWeight: activeRule === 'class' ? 700 : 400 }}>
              .btn-primary &#123; background: #2563eb; color: #fff; &#125; /* 10 pts */
            </div>
            <div style={{ color: activeRule === 'id' ? '#d29922' : '#8b949e', fontWeight: activeRule === 'id' ? 700 : 400 }}>
              #checkout-btn &#123; background: #16a34a; color: #fff; &#125; /* 100 pts */
            </div>
            <div style={{ color: activeRule === 'inline' ? '#f85149' : '#8b949e', fontWeight: activeRule === 'inline' ? 700 : 400 }}>
              &lt;button style="background: #de3b3d;"&gt; /* 1000 pts */
            </div>
          </div>
        </div>

        <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
          <div style={{ fontSize: 20, color: ink.muted, textAlign: 'center' }}>
            Select which active rule you are comparing:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%' }}>
            {[
              { id: 'tag', label: 'Tag (button)', points: '1 Pt' },
              { id: 'class', label: 'Class (.btn-primary)', points: '10 Pts' },
              { id: 'id', label: 'ID (#checkout-btn)', points: '100 Pts' },
              { id: 'inline', label: 'Inline Style', points: '1000 Pts' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveRule(btn.id as any)}
                style={{
                  padding: '16px',
                  borderRadius: 10,
                  border: `2px solid ${activeRule === btn.id ? ink.accent : ink.border}`,
                  background: activeRule === btn.id ? ink.accentSoft : '#ffffff',
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div>{btn.label}</div>
                <span style={{ fontSize: 14, color: ink.muted }}>{btn.points}</span>
              </button>
            ))}
          </div>

          {/* Rendered Button preview */}
          <div
            style={{
              padding: '30px 40px',
              borderRadius: 16,
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: 16, color: ink.muted }}>Computed Rendered Output:</span>
            <button
              style={{
                padding: '16px 36px',
                borderRadius: 10,
                fontSize: 22,
                fontWeight: 700,
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                background:
                  activeRule === 'tag'
                    ? '#64748b'
                    : activeRule === 'class'
                    ? '#2563eb'
                    : activeRule === 'id'
                    ? '#16a34a'
                    : '#de3b3d',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'background 0.2s ease',
              }}
            >
              Complete Checkout
            </button>
            <span style={{ fontSize: 16, fontWeight: 600, color: ink.accent }}>
              Winning Rule: {activeRule.toUpperCase()} ({activeRule === 'tag' ? '1 Pt' : activeRule === 'class' ? '10 Pts' : activeRule === 'id' ? '100 Pts' : '1000 Pts'})
            </span>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 19: Divider 4
const Divider4: Page = () => (
  <ChapterDivider
    number="Part 04"
    tagline="Styling & Sizing"
    title="Typography, Colors & Measurement Units"
    subtitle="The aesthetic toolkit: typography hierarchy, color models, and CSS units (px, rem, %, vh, vw)."
  />
);

// 20: Color Systems
const ColorSystems: Page = () => {
  const models = [
    {
      format: 'Named Colors',
      syntax: 'color: crimson;',
      desc: '140 built-in browser color keywords (red, blue, coral, papayawhip).',
      usage: 'Great for rapid testing, but unsuited for precise brand palettes.',
      sample: '#dc2626',
    },
    {
      format: 'Hexadecimal (#)',
      syntax: 'color: #de3b3d;',
      desc: '6-digit hex code (#RRGGBB). Values range from 00 (darkest) to FF (brightest).',
      usage: 'Industry standard for web UI brand colors and solid backgrounds.',
      sample: '#de3b3d',
    },
    {
      format: 'RGB & RGBA',
      syntax: 'background: rgba(222, 59, 61, 0.15);',
      desc: 'Red, Green, Blue (0-255) plus optional Alpha opacity channel (0.0 to 1.0).',
      usage: 'Essential for translucent overlays, glassy panels, and soft pill badges.',
      sample: 'rgba(222, 59, 61, 0.25)',
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04: Visual Styling"
        title="Web Color Systems: Hex, RGB, and RGBA"
        subtitle="How to declare colors and semi-transparent alpha channels in CSS"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1, alignContent: 'center' }}>
        {models.map((m, idx) => (
          <div
            key={idx}
            style={{
              padding: '32px 28px',
              borderRadius: 16,
              background: ink.panel,
              border: `2px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{m.format}</h3>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: m.sample,
                  border: `2px solid ${ink.border}`,
                }}
              />
            </div>

            <div
              style={{
                fontFamily: font.mono,
                fontSize: 17,
                background: '#0d1117',
                color: '#79c0ff',
                padding: '16px',
                borderRadius: 10,
              }}
            >
              {m.syntax}
            </div>

            <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
              {m.desc}
            </p>

            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${ink.border}`, fontSize: 16, color: ink.muted }}>
              <strong>Best Use Case:</strong> {m.usage}
            </div>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 21: Typography Essentials
const TypographyEssentials: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Visual Styling"
      title="The 5 Essential Typography Properties"
      subtitle="Crafting readable, accessible, and balanced editorial copy"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="typography.css"
          badge="CSS Text"
          code={`body {
  /* 1. Font Family Stack (with system fallbacks) */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* 2. Base Size */
  font-size: 1rem; /* 16px default */

  /* 3. Weight: 400 (regular), 600 (semibold), 700 (bold) */
  font-weight: 400;

  /* 4. The 1.5 Readability Rule (Unitless line-height!) */
  line-height: 1.6;

  /* 5. Text Alignment */
  text-align: left;
}`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            ★ The 1.5 Unitless Line-Height Rule:
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            Never write <code>line-height: 24px;</code>! When font sizes change, fixed pixel heights cause text lines to collide or overlap. Use unitless numbers like <code>1.5</code> or <code>1.6</code> so line spacing scales proportionally.
          </p>
        </div>

        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.text }}>
            System Font Stacks (Zero Download Delay):
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            Specifying <code>system-ui, -apple-system, sans-serif</code> renders the native font of the user's OS (San Francisco on Mac, Segoe UI on Windows), providing instant rendering without downloading heavy webfont files.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 22: Backgrounds & Borders
const BackgroundsAndBorders: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Visual Styling"
      title="Backgrounds, Borders & Border-Radius"
      subtitle="Shaping rectangular elements into modern UI cards, badges, and circular avatars"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <CodeWindow
          filename="card-styling.css"
          badge="Borders"
          code={`/* 1. Background color fills content + padding */
.card {
  background-color: #ffffff;

  /* 2. Border Shorthand: width | style | color */
  border: 1px solid #e2e8f0;

  /* 3. Rounded corners */
  border-radius: 12px;
}

/* 4. Pill Badge (9999px trick) */
.badge {
  border-radius: 9999px;
  padding: 4px 12px;
}

/* 5. Circular Avatar */
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}`}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            padding: '24px',
            borderRadius: 14,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {/* Card sample */}
          <div style={{ padding: '16px 20px', borderRadius: 12, background: '#fff', border: '1px solid #cbd5e1', textAlign: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>Card (12px)</span>
          </div>

          {/* Pill sample */}
          <div style={{ padding: '8px 20px', borderRadius: 9999, background: ink.accentSoft, border: `1px solid ${ink.accentBorder}`, color: ink.accent, fontWeight: 700 }}>
            Pill (9999px)
          </div>

          {/* Circle sample */}
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>
            50% Circle
          </div>
        </div>

        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.text }}>
            The Border Shorthand Property:
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            <code>border: 1px solid #e2e8f0;</code> is a shorthand that sets <code>border-width</code>, <code>border-style</code>, and <code>border-color</code> in a single line. Common styles: <code>solid</code>, <code>dashed</code>, <code>dotted</code>.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 23: CSS Units: The Ruler of the Web
const CssUnitsTheRuler: Page = () => {
  const unitCategories = [
    {
      title: 'Absolute Units (Fixed)',
      unit: 'px (Pixels)',
      desc: 'Tied to physical screen pixels. 1px is always 1px regardless of device settings or user zoom.',
      when: 'Borders, subtle divider lines, box-shadow offsets.',
      badge: 'Fixed',
      badgeColor: ink.amber,
    },
    {
      title: 'Relative to Font Size',
      unit: 'rem & em',
      desc: 'rem is relative to the root <html> font (default 16px). em is relative to current element font.',
      when: 'All typography (headings, copy) and box model spacing (padding/margins).',
      badge: 'Scalable',
      badgeColor: ink.mint,
    },
    {
      title: 'Relative to Screen / Parent',
      unit: '% & vh / vw',
      desc: '% scales relative to parent container. vh / vw scale relative to full browser viewport dimensions.',
      when: 'Container widths (width: 100%), hero heights (min-height: 80vh).',
      badge: 'Responsive',
      badgeColor: ink.sky,
    },
  ];

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 04: Units"
        title="CSS Measurement Units: The Ruler of the Web"
        subtitle="Why screens from 320px phones to 4K displays require relative thinking"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1, alignContent: 'center' }}>
        {unitCategories.map((u, i) => (
          <div
            key={i}
            style={{
              padding: '32px 28px',
              borderRadius: 16,
              background: ink.panel,
              border: `2px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: font.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: '#ffffff',
                  color: u.badgeColor,
                  border: `1px solid ${ink.border}`,
                }}
              >
                {u.badge}
              </span>
              <span style={{ fontFamily: font.mono, fontSize: 24, fontWeight: 800, color: ink.accent }}>{u.unit}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: ink.text }}>{u.title}</h3>
            <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>{u.desc}</p>
            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${ink.border}` }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: ink.muted }}>Best used for:</span>
              <p style={{ margin: '4px 0 0 0', fontSize: 17, color: ink.text, fontWeight: 600 }}>{u.when}</p>
            </div>
          </div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
};

// 24: Px vs. Rem Deep Dive
const PxVsRemDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Units"
      title="px vs. rem: The Accessibility & Scalability Gold Standard"
      subtitle="Why modern front-end engineering uses rem for all typography and spacing"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignContent: 'center' }}>
      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: ink.text }}>Pixels (px)</h3>
          <span style={{ fontSize: 14, fontWeight: 700, color: ink.amber, background: ink.amberSoft, padding: '4px 10px', borderRadius: 6 }}>
            Absolute Unit
          </span>
        </div>
        <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
          Hardcodes an exact number of hardware pixels on the screen (e.g. <code>font-size: 16px;</code>).
        </p>
        <div style={{ background: '#ffffff', padding: '18px', borderRadius: 10, border: `1px solid ${ink.border}` }}>
          <div style={{ fontWeight: 700, color: ink.accent, marginBottom: 6 }}>The Accessibility Problem:</div>
          <div style={{ fontSize: 17, color: ink.soft, lineHeight: 1.45 }}>
            If a visually impaired user increases their browser default font size to 24px in settings, hardcoded <code>px</code> overrides their choice and leaves text tiny and unreadable!
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.mintSoft,
          border: '2px solid rgba(21, 128, 61, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: ink.mint }}>Root EM (rem)</h3>
          <span style={{ fontSize: 14, fontWeight: 700, color: ink.mint, background: '#ffffff', padding: '4px 10px', borderRadius: 6 }}>
            Modern Best Practice
          </span>
        </div>
        <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
          Relative to the root <code>&lt;html&gt;</code> element font size (default: <strong>1rem = 16px</strong>).
        </p>
        <div style={{ background: '#ffffff', padding: '18px', borderRadius: 10, border: '1px solid #bbf7d0' }}>
          <div style={{ fontWeight: 700, color: ink.mint, marginBottom: 6 }}>Why rem is the Gold Standard:</div>
          <div style={{ fontSize: 17, color: ink.soft, lineHeight: 1.45 }}>
            <code>1rem = 16px</code>, <code>1.5rem = 24px</code>, <code>2rem = 32px</code>. If the user changes their browser zoom preference to 20px, everything scaled in <code>rem</code> scales automatically!
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 25: Em, Percent & Viewport Units
const EmPercentAndViewport: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Units"
      title="Relative Layout Units: em, %, and vh / vw"
      subtitle="Connecting sizing to parent containers and full-screen browser viewports"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignContent: 'center' }}>
      {[
        {
          name: 'em (Element EM)',
          metric: 'Relative to Parent Font',
          example: 'padding: 0.5em 1.2em;',
          useCase: 'Buttons & badges where padding should scale proportionally whenever font size changes.',
          gotcha: 'Compounding issue: Nesting multiple em elements can cause font sizes to multiply exponentially.',
        },
        {
          name: 'Percentage (%)',
          metric: 'Relative to Parent Box',
          example: 'width: 50%; max-width: 100%;',
          useCase: 'Responsive layout columns and fluid card widths that flex with the page.',
          gotcha: 'Parent must have a defined size; height: 100% fails if parent height is undefined.',
        },
        {
          name: 'Viewport Units (vw / vh)',
          metric: '1% of Browser Window',
          example: 'min-height: 80vh; width: 100vw;',
          useCase: 'Hero banner sections, full-screen takeover modals, and immersive landing pages.',
          gotcha: 'On mobile browsers, mobile URL search bars expand/collapse vh dimensions dynamically.',
        },
      ].map((u, i) => (
        <div
          key={i}
          style={{
            padding: '30px 26px',
            borderRadius: 16,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{u.name}</h3>
          <span style={{ fontSize: 16, color: ink.accent, fontWeight: 700 }}>{u.metric}</span>
          <code style={{ fontFamily: font.mono, fontSize: 16, background: '#0d1117', color: '#79c0ff', padding: '10px 14px', borderRadius: 8 }}>
            {u.example}
          </code>
          <p style={{ margin: 0, fontSize: 17, color: ink.soft, lineHeight: 1.5 }}>
            <strong>Ideal For:</strong> {u.useCase}
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${ink.border}`, fontSize: 15, color: ink.muted }}>
            <strong>Watch Out:</strong> {u.gotcha}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 26: Unit Decision Cheatsheet
const UnitDecisionCheatsheet: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04: Summary"
      title="The Beginner Unit Decision Matrix"
      subtitle="A fast reference rule of thumb for every property in your CSS file"
    />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div
        style={{
          borderRadius: 16,
          border: `1px solid ${ink.border}`,
          overflow: 'hidden',
          background: '#ffffff',
          boxShadow: shadow.card,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 2fr', background: ink.panel, padding: '16px 24px', fontWeight: 700, fontSize: 18, borderBottom: `1px solid ${ink.border}` }}>
          <span>CSS Property Category</span>
          <span>Recommended Unit</span>
          <span>Engineering Rationale</span>
        </div>
        {[
          { cat: 'Borders & Hairline Dividers', unit: 'px (1px, 2px)', why: 'Physical crisp lines should never scale with font or zoom.', color: ink.amber },
          { cat: 'Typography (font-size)', unit: 'rem (1rem, 1.5rem, 2rem)', why: 'Respects user accessibility preferences and system zoom.', color: ink.mint },
          { cat: 'Box Spacing (padding, margin)', unit: 'rem (or px for micro-spacers)', why: 'Keeps layout spacing proportional to typography scale.', color: ink.mint },
          { cat: 'Container Widths (cards, grids)', unit: '% or max-width in px/rem', why: 'Allows fluid shrinking on mobile while capping desktop width.', color: ink.sky },
          { cat: 'Hero Sections & Modals', unit: 'vh / vw (min-height: 80vh)', why: 'Guarantees the element fills the user viewport window.', color: ink.purple },
        ].map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 2fr',
              padding: '18px 24px',
              borderBottom: idx < 4 ? `1px solid ${ink.border}` : 'none',
              alignItems: 'center',
              fontSize: 18,
            }}
          >
            <span style={{ fontWeight: 600, color: ink.text }}>{row.cat}</span>
            <code style={{ fontFamily: font.mono, fontWeight: 700, color: row.color }}>{row.unit}</code>
            <span style={{ color: ink.muted }}>{row.why}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 27: Divider 5
const Divider5: Page = () => (
  <ChapterDivider
    number="Part 05"
    tagline="Layout Geometry"
    title="The CSS Box Model & Spacing"
    subtitle="The Postal Box metaphor, padding vs. margin, and the life-saving border-box universal reset."
  />
);

// 28: The Postal Box Metaphor
const PostalBoxMetaphor: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05: Box Model"
      title="The Postal Box Metaphor: 4 Concentric Layers"
      subtitle="Every single HTML element on the web is rendered as a rectangular cardboard shipping box"
    />
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      {/* Box Model Graphic */}
      <div
        style={{
          flex: 1.2,
          background: '#fff7ed',
          border: '2px dashed #f97316',
          borderRadius: 20,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: shadow.card,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 800, color: '#c2410c', marginBottom: 12 }}>
          MARGIN (Buffer between neighboring boxes • Always transparent)
        </div>

        <div
          style={{
            width: '90%',
            background: '#fef3c7',
            border: '4px solid #b45309',
            borderRadius: 14,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 800, color: '#92400e', marginBottom: 12 }}>
            BORDER (The cardboard box package wall)
          </div>

          <div
            style={{
              width: '85%',
              background: '#dcfce7',
              border: '2px dashed #16a34a',
              borderRadius: 10,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: '#15803d', marginBottom: 10 }}>
              PADDING (Bubble wrap protecting the item • Takes background color)
            </div>

            <div
              style={{
                width: '75%',
                background: '#3b82f6',
                borderRadius: 8,
                padding: '18px',
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              CONTENT (Text, Image, Icon, or Child Elements)
            </div>
          </div>
        </div>
      </div>

      {/* Explanations */}
      <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { layer: '1. Content', desc: 'The actual payload inside the box: text, icons, images.', col: '#2563eb' },
          { layer: '2. Padding', desc: 'Inner breathing room. Adopts the element background color and expands clickable surface.', col: '#16a34a' },
          { layer: '3. Border', desc: 'The perimeter boundary framing the box. Has width, style, and color.', col: '#b45309' },
          { layer: '4. Margin', desc: 'Outer space separating this element from adjacent neighbors. Always transparent.', col: '#ea580c' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px 20px',
              borderRadius: 12,
              background: ink.panel,
              border: `1px solid ${ink.border}`,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: item.col, marginBottom: 4 }}>
              {item.layer}
            </div>
            <div style={{ fontSize: 17, color: ink.soft, lineHeight: 1.45 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 29: Padding vs. Margin Deep Dive
const PaddingVsMarginDeepDive: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05: Box Model"
      title="Padding vs. Margin: The Definitive Difference"
      subtitle="How to decide whether you need inner breathing room or outer separation buffer"
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignContent: 'center' }}>
      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.mintSoft,
          border: '2px solid rgba(21, 128, 61, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: ink.mint }}>Padding (Inside)</h3>
          <span style={{ fontSize: 14, fontWeight: 700, background: '#fff', color: ink.mint, padding: '4px 10px', borderRadius: 6 }}>
            Inner Space
          </span>
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
          <li>Lives <strong>inside</strong> the border.</li>
          <li><strong>Adopts the background color:</strong> If a button is red, padding is red!</li>
          <li><strong>Expands clickable area:</strong> Adding padding to a button makes it much easier to tap on mobile touchscreens.</li>
          <li>Cannot have negative values (always &ge; 0).</li>
        </ul>
        <div style={{ background: '#fff', padding: '16px', borderRadius: 10, border: '1px solid #bbf7d0', fontSize: 16, color: ink.mint, fontWeight: 600 }}>
          Rule of Thumb: If you want breathing room INSIDE a card or button, use padding.
        </div>
      </div>

      <div
        style={{
          padding: '32px',
          borderRadius: 16,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: ink.accent }}>Margin (Outside)</h3>
          <span style={{ fontSize: 14, fontWeight: 700, background: '#fff', color: ink.accent, padding: '4px 10px', borderRadius: 6 }}>
            Outer Buffer
          </span>
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
          <li>Lives <strong>outside</strong> the border.</li>
          <li><strong>Always transparent:</strong> Shows whatever background exists underneath the page.</li>
          <li>Pushes adjacent sibling elements away from each other.</li>
          <li>Supports <code>margin: auto;</code> to center block elements horizontally.</li>
          <li>Can collapse vertically when adjacent margins touch.</li>
        </ul>
        <div style={{ background: '#fff', padding: '16px', borderRadius: 10, border: '1px solid #fecaca', fontSize: 16, color: ink.accent, fontWeight: 600 }}>
          Rule of Thumb: If you want distance BETWEEN two separate cards, use margin.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 30: The Classic Box Model Bug
const TheClassicBoxModelBug: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05: Box Model"
      title="The Classic Beginner Bug: Content-Box Math"
      subtitle="Why setting width: 300px unexpectedly expands to 340px and breaks layouts"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="broken-layout.css"
          badge="Default CSS Bug"
          code={`/* By default, CSS uses box-sizing: content-box */
.card {
  width: 300px;
  padding: 20px;       /* +20px left, +20px right */
  border: 2px solid #000; /* +2px left, +2px right */
}

/* ❌ THE ACCIDENTAL TOTAL RENDERED WIDTH:
   300px (content)
 +  40px (padding left + right)
 +   4px (border left + right)
 = 344px TOTAL WIDTH!
*/`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '24px',
            borderRadius: 14,
            background: ink.accentSoft,
            border: `1px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <IconAlert color={ink.accent} size={28} />
            <h4 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: ink.accent }}>
              Why Multi-Column Layouts Break:
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            Imagine placing two side-by-side boxes with <code>width: 50%</code>. The moment you add <code>padding: 16px</code> to make text readable, the combined width exceeds 100%, causing the second box to drop awkwardly onto a new row!
          </p>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 700, color: ink.text }}>
            How do engineers solve this?
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.muted, lineHeight: 1.5 }}>
            By instructing the browser: <em>"When I say 300px wide, make the ENTIRE box 300px, including padding and border."</em>
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 31: Border-Box Rescue
const BorderBoxRescue: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05: Box Model"
      title="The box-sizing: border-box Rescue Rule"
      subtitle="How modern CSS locks element dimensions so padding never expands total width"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="fixed-layout.css"
          badge="Border-Box Fix"
          code={`/* With box-sizing: border-box */
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #000;
}

/* ✅ THE PREDICTABLE TOTAL RENDERED WIDTH:
   Total width stays exactly 300px!
   The content area shrinks inwards to 256px
   to absorb the 40px padding and 4px border.
*/`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '28px',
            borderRadius: 16,
            background: ink.mintSoft,
            border: '2px solid rgba(21, 128, 61, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconCheck color={ink.mint} size={32} />
            <h4 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.mint }}>
              Predictable Layout Sizing
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            Under <code>border-box</code>, your width is an absolute guarantee. You can add <code>padding: 2rem</code> or a <code>border: 5px solid red</code> without altering the total outer width of the element on screen!
          </p>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: ink.muted, textTransform: 'uppercase' }}>
            Mathematical Comparison:
          </span>
          <div style={{ marginTop: 8, fontSize: 18, fontFamily: font.mono, color: ink.soft }}>
            content-box: Total = Width + Padding + Border<br />
            border-box: Total = Width (Content shrinks)
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 32: The Universal Reset
const UniversalReset: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05: Foundation"
      title="The Universal CSS Reset (Line 1 of Every Project)"
      subtitle="The 3 essential lines every front-end engineer writes to initialize a project"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="style.css"
          badge="Line 1 of Every Project"
          code={`/* 1. Apply border-box and clear margins across ALL elements */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 2. Base typography & background */
body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
}`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: '24px 28px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 700, color: ink.text }}>
            Why We Reset Margin & Padding to 0:
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            Different browsers (Chrome, Safari, Firefox) apply slightly different default margins to <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;p&gt;</code>. Resetting them to <code>0</code> eliminates browser inconsistencies and gives you full control.
          </p>
        </div>

        <div style={{ padding: '24px 28px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 700, color: ink.accent }}>
            Margin Collapsing Note:
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            When two vertical block margins touch (e.g. <code>margin-bottom: 20px</code> on a paragraph followed by <code>margin-top: 15px</code> on another), they collapse into the larger value (<strong>20px</strong>), rather than adding up to 35px.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 33: Interactive Box Model Playground
const InteractiveBoxModelPlayground: Page = () => {
  const [padding, setPadding] = useState(24);
  const [border, setBorder] = useState(2);
  const [isBorderBox, setIsBorderBox] = useState(true);

  const baseWidth = 320;
  const totalWidth = isBorderBox ? baseWidth : baseWidth + padding * 2 + border * 2;

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 05: Live Simulator"
        title="Interactive Box Model Simulator"
        subtitle="Manipulate padding and border to see how box-sizing alters total calculated width"
      />
      <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
        {/* Controls */}
        <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>Padding (Inner): {padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="48"
              step="4"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>Border Width: {border}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />

            <div style={{ paddingTop: 10, borderTop: `1px solid ${ink.border}` }}>
              <button
                onClick={() => setIsBorderBox(!isBorderBox)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  background: isBorderBox ? ink.mint : ink.accent,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Mode: {isBorderBox ? 'box-sizing: border-box (Locked)' : 'box-sizing: content-box (Expanding)'}
              </button>
            </div>
          </div>

          <div style={{ padding: '20px 24px', borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
            <div style={{ fontSize: 16, color: ink.muted }}>Total Rendered Width on Screen:</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: isBorderBox ? ink.mint : ink.accent, fontFamily: font.mono }}>
              {totalWidth}px
            </div>
            <div style={{ fontSize: 14, color: ink.soft }}>
              {isBorderBox ? '✓ Locked to declared 320px width' : '⚠️ Expanded by padding and border!'}
            </div>
          </div>
        </div>

        {/* Live Canvas Box Preview */}
        <div
          style={{
            flex: 1.1,
            height: 480,
            background: '#f8fafc',
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: totalWidth,
              background: '#dcfce7',
              border: `${border}px solid #16a34a`,
              borderRadius: 12,
              padding: padding,
              boxSizing: isBorderBox ? 'border-box' : 'content-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: shadow.card,
              transition: 'all 0.15s ease',
            }}
          >
            <div
              style={{
                background: '#2563eb',
                color: '#ffffff',
                padding: '16px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 18,
                textAlign: 'center',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Content Area
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 34: Divider 6
const Divider6: Page = () => (
  <ChapterDivider
    number="Part 06"
    tagline="Inspection & Practice"
    title="DevTools, Strategic AI & Hands-on Missions"
    subtitle="Diagnosing layouts live in Chrome, Socratic AI prompts, and our two homework assignments."
  />
);

// 35: DevTools Box Model Guide
const DevToolsBoxModelGuide: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06: Tooling"
      title="Chrome DevTools: Styles & Box Model Inspector"
      subtitle="How engineers diagnose layout collisions and test values in real time"
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1, alignContent: 'center' }}>
      {[
        {
          step: '1. Inspect Element',
          shortcut: 'Cmd + Shift + C (Mac) / Ctrl + Shift + C',
          desc: 'Hover over any button or card on the screen to highlight its bounding box and reveal active styles.',
        },
        {
          step: '2. The Styles Pane',
          shortcut: 'Elements > Styles Tab',
          desc: 'See every CSS rule applied to the element. Crossed-out rules mean higher-specificity rules overrode them!',
        },
        {
          step: '3. Interactive Box Diagram',
          shortcut: 'Scroll down Styles pane',
          desc: 'Double-click any padding or margin number in the DevTools diagram to edit values live without reloading.',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            padding: '32px 28px',
            borderRadius: 16,
            background: ink.panel,
            border: `2px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: ink.text }}>{item.step}</h3>
          </div>
          <code
            style={{
              fontFamily: font.mono,
              fontSize: 16,
              background: '#0d1117',
              color: '#79c0ff',
              padding: '10px 14px',
              borderRadius: 8,
            }}
          >
            {item.shortcut}
          </code>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 36: AI Partnering Workflow
const AIPartneringWorkflow: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06: AI Workflows"
      title="Socratic AI Prompting for CSS Debugging"
      subtitle="Collaborating with AI like an engineer rather than copy-pasting bloated code"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1 }}>
        <CodeWindow
          filename="ai-tutor-prompt.txt"
          badge="Socratic Prompt"
          code={`"I have a button inside a card. When I add margin-top: 20px
to the button, the entire card moves down rather than just
the button moving inside the card.

Look at my CSS below. Explain why margin collapsing is
occurring and guide me to fix it using padding on the card
or border-box, without writing the solution for me."`}
        />
      </div>

      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            The 3-Point CSS Audit Checklist:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            <li><strong>Audit 1:</strong> Did AI use any <code>#id</code> selectors in CSS? (Change to classes).</li>
            <li><strong>Audit 2:</strong> Did AI hardcode font sizes in <code>px</code>? (Convert to <code>rem</code>).</li>
            <li><strong>Audit 3:</strong> Did AI inject <code>!important</code>? (Fix specificity order instead).</li>
          </ul>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 14, background: ink.mintSoft, border: '1px solid rgba(21, 128, 61, 0.2)' }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: ink.mint }}>Rule of Engagement:</span>
          <p style={{ margin: '4px 0 0 0', fontSize: 17, color: ink.soft }}>
            Always test AI CSS suggestions in DevTools before pasting into your files.
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 37: Lab Instructions
const LabInstructions: Page = () => {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={fill}>
      <SlideHeader
        part="Part 06: Hands-on Lab"
        title="In-Class Lab: The Extreme CSS Makeover (35 min)"
        subtitle="Transforming raw Session 2 HTML into a polished card across 3 guided visual sprints"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr 1fr', gap: 20, flex: 1, alignItems: 'stretch' }}>
        {/* Column 1: Starter HTML Snippet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 4 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.accent, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              1. Starter HTML Code
            </span>
          </div>
          <CodeWindow
            filename="event.html"
            badge="Starter HTML"
            style={{ flex: 1 }}
            code={`<!-- Copy into event.html -->
<article class="event-card">
  <span class="badge">
    WORKSHOP
  </span>
  <h2>
    Web Architecture 2026
  </h2>
  <p class="meta">
    📅 Sat, Oct 24 • 10:00 AM
  </p>
  <p class="desc">
    Master modern CSS layout
    engines, box model mechanics,
    and responsive typography.
  </p>
  <button type="button"
          class="btn-register">
    Register Now • Free
  </button>
</article>`}
          />
          <div style={{ padding: '8px 12px', borderRadius: 8, background: ink.panel, border: `1px solid ${ink.border}`, fontSize: 13, color: ink.muted }}>
            📁 Link: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>
          </div>
        </div>

        {/* Column 2: The 3 Guided Visual Sprints */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 4 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.text, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              2. The 3 Makeover Sprints
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            {[
              {
                sprint: 'Sprint 1 (8m)',
                title: 'Universal Reset & Body',
                color: ink.amber,
                bg: ink.amberSoft,
                tasks: [
                  'Add *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }',
                  'Set body: font-family: system-ui, sans-serif; background: #f1f5f9; padding: 2rem;',
                ],
              },
              {
                sprint: 'Sprint 2 (15m)',
                title: 'Card Box & Spacing',
                color: ink.mint,
                bg: ink.mintSoft,
                tasks: [
                  'Target .event-card: max-width: 400px; margin: 30px auto; background: #fff; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);',
                  'Target .badge: pill shape border-radius: 9999px; padding: 4px 12px; background: rgba(222, 59, 61, 0.1); color: #de3b3d; font-size: 11px; font-weight: 700;',
                ],
              },
              {
                sprint: 'Sprint 3 (12m)',
                title: 'Button & Hover Polish',
                color: ink.accent,
                bg: ink.accentSoft,
                tasks: [
                  'Style .btn-register: width: 100%; padding: 12px; border-radius: 8px; background: #de3b3d; color: #fff; font-weight: 700; border: none; cursor: pointer;',
                  'Add :hover state: background: #b91c1c; with transition: background 0.2s ease;',
                ],
              },
            ].map((sp, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  background: ink.panel,
                  border: `1px solid ${ink.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: ink.text }}>{sp.title}</span>
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: 5,
                      background: sp.bg,
                      color: sp.color,
                    }}
                  >
                    {sp.sprint}
                  </span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: ink.soft, lineHeight: 1.4 }}>
                  {sp.tasks.map((task, tIdx) => (
                    <li key={tIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Expected Target Output Mockup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 4 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.mint, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              3. Target Output Preview
            </span>
            <span style={{ fontSize: 12, color: ink.muted }}>Expected Browser Result</span>
          </div>

          <div
            style={{
              flex: 1,
              borderRadius: 14,
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              boxShadow: shadow.window,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Simulated Browser Chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                background: '#f8fafc',
                borderBottom: `1px solid ${ink.border}`,
              }}
            >
              <div style={{ display: 'flex', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div
                style={{
                  flex: 1,
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 6,
                  padding: '2px 10px',
                  fontFamily: font.mono,
                  fontSize: 11,
                  color: '#64748b',
                  textAlign: 'center',
                }}
              >
                http://localhost:5173/event.html
              </div>
            </div>

            {/* Simulated Viewport Body with #f1f5f9 background */}
            <div
              style={{
                flex: 1,
                background: '#f1f5f9',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* The Styled Output Card */}
              <div
                style={{
                  width: 320,
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: '22px 20px',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(222, 59, 61, 0.1)',
                      color: '#de3b3d',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 9999,
                      letterSpacing: '0.04em',
                    }}
                  >
                    WORKSHOP
                  </span>
                  <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>2 Hours</span>
                </div>

                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                  Web Architecture 2026
                </h3>

                <p style={{ margin: 0, fontSize: 12, color: '#64748b', fontWeight: 500 }}>
                  📅 Sat, Oct 24 • 10:00 AM
                </p>

                <p style={{ margin: 0, fontSize: 12, color: '#475569', lineHeight: 1.45 }}>
                  Master modern CSS layout engines, box model mechanics, and responsive typography.
                </p>

                <button
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    marginTop: 4,
                    width: '100%',
                    padding: '10px',
                    borderRadius: 8,
                    background: btnHover ? '#b91c1c' : '#de3b3d',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 13,
                    border: 'none',
                    cursor: 'pointer',
                    transform: btnHover ? 'translateY(-1px)' : 'none',
                    boxShadow: btnHover ? '0 4px 12px rgba(222, 59, 61, 0.3)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Register Now • Free
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, color: ink.mint }}>
            ✓ Hover the button above to preview the interactive :hover state!
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// 38: Homework 1 Showcase
const Homework1Showcase: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 01"
      title="Homework 1: The CSS Bug Clinic (Layout Surgery)"
      subtitle="Diagnose and fix 5 classic beginner CSS bugs in an intentionally broken card using DevTools"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 700, color: ink.accent }}>
            Deliverables: <code>clinic.html</code> & <code>clinic.css</code>
          </h4>
          <p style={{ margin: '0 0 12px 0', fontSize: 17, color: ink.soft }}>
            You are handed an intentionally broken codebase with <strong>5 severe CSS defects</strong>. Use Chrome DevTools Styles & Box Model tabs to perform code surgery:
          </p>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 16, color: ink.soft, lineHeight: 1.55 }}>
            <li><strong>Bug 1 (Semicolon Paralysis):</strong> A missing semicolon silently cancels following properties.</li>
            <li><strong>Bug 2 (Content-Box Blowout):</strong> <code>width: 100%</code> + padding causes the card to blow past viewport width.</li>
            <li><strong>Bug 3 (ID Specificity Lockout):</strong> An accidental <code>#id</code> blocks a button class style.</li>
            <li><strong>Bug 4 (Padding vs Margin Bleed):</strong> Background color leaking outside the expected boundaries.</li>
            <li><strong>Bug 5 (Line-Height Collision):</strong> Fixed pixel line-height causes title lines to crash and overlap.</li>
          </ul>
        </div>

        <div style={{ fontSize: 16, color: ink.muted }}>
          📁 Starter code provided in <code>homework/session-3/homework-1.md</code>. Push fixes to GitHub before Session 04.
        </div>
      </div>

      {/* Visual mockup of the broken vs repaired card */}
      <div
        style={{
          flex: 0.9,
          background: '#f1f5f9',
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            width: 360,
            background: '#ffffff',
            borderRadius: 14,
            padding: '20px',
            border: '2px dashed #de3b3d',
            boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: -12, right: 16, background: '#de3b3d', color: '#fff', fontSize: 12, fontWeight: 800, padding: '3px 10px', borderRadius: 9999 }}>
            5 ACTIVE DEFECTS
          </div>
          <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>CLINICAL CODEBASE</span>
          <h4 style={{ margin: '4px 0 6px 0', fontSize: 20, color: '#0f172a' }}>Broken Event Card</h4>
          <p style={{ margin: 0, fontSize: 14, color: '#64748b', lineHeight: 1.3 }}>
            Overlapping lines, broken borders, runaway widths, and unclickable action buttons.
          </p>
          <div style={{ marginTop: 12, padding: '10px', background: '#fee2e2', borderRadius: 8, color: '#b91c1c', fontSize: 13, fontWeight: 600, textAlign: 'center' }}>
            Mission: Diagnose via DevTools & Repair!
          </div>
        </div>

        <div style={{ fontSize: 15, color: ink.mint, fontWeight: 700 }}>
          ✓ Goal: Clean, responsive, semantic, 100% bug-free output
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 39: Homework 2 Showcase & Closing
const Homework2ShowcaseAndClosing: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 02"
      title="Homework 2: SaaS Pricing Tier & Next Session Preview"
      subtitle="Build a high-converting pricing card and recap our CSS milestones"
    />
    <div style={{ display: 'flex', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '24px', borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 700, color: ink.text }}>
            Deliverables: <code>pricing.html</code> & <code>pricing.css</code>
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.55 }}>
            <li>Featured tier badge (<code>★ MOST POPULAR</code>) with pill border radius.</li>
            <li>Typographic price lockup: <code>$29</code> with <code>/ month</code> subscript.</li>
            <li>Feature checklist with styled checkmark indicators.</li>
            <li>High-contrast CTA button with smooth <code>:hover</code> transition.</li>
            <li>Strict <code>box-sizing: border-box</code> layout sizing.</li>
          </ul>
        </div>

        <div style={{ padding: '20px 24px', borderRadius: 14, background: ink.accentSoft, border: `1px solid ${ink.accentBorder}` }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: ink.accent, marginBottom: 4 }}>
            🚀 Preview for Session 04:
          </div>
          <div style={{ fontSize: 17, color: ink.soft, lineHeight: 1.45 }}>
            Next session we dive into the <strong>Modern Layout Engine: Flexbox (The 3-Property Rule)</strong>!
          </div>
        </div>
      </div>

      {/* Visual mockup of the pricing card */}
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
            borderRadius: 16,
            padding: '28px 24px',
            border: '2px solid #de3b3d',
            boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            color: '#f8fafc',
          }}
        >
          <span style={{ background: '#de3b3d', color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 9999, width: 'fit-content', margin: '0 auto' }}>
            ★ MOST POPULAR
          </span>
          <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Pro Developer Tier</h3>
          <div style={{ fontSize: 40, fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
            $29 <span style={{ fontSize: 16, fontWeight: 500, color: '#94a3b8' }}>/ month</span>
          </div>
          <div style={{ textAlign: 'left', fontSize: 14, color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: 6, margin: '8px 0' }}>
            <div>✓ Unlimited private repositories</div>
            <div>✓ Automated CI/CD build actions</div>
            <div>✓ Custom domain with SSL certificate</div>
          </div>
          <button style={{ width: '100%', padding: '12px', borderRadius: 8, background: '#de3b3d', color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            Get Started with Pro
          </button>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PRESENTER NOTES (Index-aligned for all 39 pages)
// ─────────────────────────────────────────────────────────────────────────────

export const notes: (string | undefined)[] = [
  // 01: Cover
  `Welcome students to Session 3!
Acknowledge the major milestone from Session 2: everyone understands how HTML forms the semantic skeleton of the web.
Set the stage for today: transforming raw text and blue links into beautiful, responsive web experiences with CSS.`,

  // 02: Agenda
  `Walk through our 6 milestones for today.
Highlight the transition: we begin with basic syntax and stylesheet linking, progress into typography and CSS units, unpack the Box Model, and finish with live Chrome DevTools and two homework assignments.`,

  // 03: Divider 1
  `Transition into Part 1.
Explain that CSS was born out of a critical software engineering need: separating document structure from visual design.`,

  // 04: Before & After Comparison
  `Click the toggle button on this slide to demonstrate the before and after comparison live!
Emphasize to students: the underlying HTML on both sides is 100% identical. CSS is purely the visual presentation layer.`,

  // 05: Mental Model: Separation of Concerns
  `Revisit the 3 pillars of web development:
HTML = Skeleton & Bones.
CSS = Skin, Clothing & Interior Paint.
JavaScript = Muscles & Brain.
Explain why keeping them separated makes websites easier to maintain and accessible to screen readers.`,

  // 06: Concept Check 1
  `Give students 30 seconds to read the question.
Click Option B to reveal the explanation: CSS allows updating styling across an entire website by editing one single file.`,

  // 07: Divider 2
  `Introduce Part 2: CSS Syntax & Stylesheet Architecture.
Today we learn how CSS rules are written and the three locations where styles can be placed.`,

  // 08: CSS Rule Anatomy
  `Walk through the anatomy diagram:
1. Selector targets the HTML.
2. Property defines what feature we are changing.
3. Value defines the setting.
Warning: Emphasize the semicolon! Forgetting a semicolon is the #1 cause of broken CSS rules for beginners.`,

  // 09: Where CSS Lives Overview
  `Present the 3 methods:
Inline styles (in the HTML tag).
Internal stylesheet (<style> in <head>).
External stylesheet (<link> to style.css).
Tease why external is the universal industry standard.`,

  // 10: Inline Styles Deep Dive
  `Explain inline styles.
Ask the class: if you have 20 buttons on 5 pages, what happens when your manager asks to change the button color from blue to purple?
You have to manually edit 20 separate HTML tags! This violates DRY.`,

  // 11: Internal Styles Deep Dive
  `Explain internal styles with <style> inside <head>.
Acknowledge that it's useful for single-file CodePen demos, but explain the multi-page pitfall: duplicating <style> across 5 pages wastes bandwidth and prevents browser caching.`,

  // 12: External Stylesheet Contract
  `Break down the <link rel="stylesheet" href="style.css"> contract.
Explain that the browser downloads style.css once, caches it in memory, and instantly applies it to every page the user visits.`,

  // 13: Concept Check 2
  `Interactive concept check on stylesheet placement.
Ask students which option they would choose for a multi-page website.
Click Option C to confirm external stylesheet.`,

  // 14: Divider 3
  `Introduce Part 3: Targeting Elements & Specificity.
How does CSS know which element to style, and what happens when rules clash?`,

  // 15: Tag vs. Class vs. ID
  `Contrast tags, classes, and IDs:
Tag selectors are broad blankets.
Class selectors (.card) are reusable workhorses.
ID selectors (#hero) are unique identifiers—advise students to avoid IDs in CSS to prevent specificity locks.`,

  // 16: Naming Classes with Intention
  `Highlight naming conventions:
Avoid appearance-locked names like .blue-box. If the box changes to green, the class name becomes misleading!
Use purpose-driven names like .profile-card and .btn-primary in kebab-case.`,

  // 17: Specificity Without Math
  `Explain the Trophy Hierarchy:
Inline (1000 pts) > ID (100 pts) > Class (10 pts) > Tag (1 pt).
Explain the tiebreaker rule: if two rules have the same specificity, the one written lower in the file wins (The Cascade).`,

  // 18: Interactive Specificity Arena
  `Click through the buttons on this slide live!
Show students how an ID selector overrides a class, and how an inline style overrides an ID. This visual demonstration cements specificity.`,

  // 19: Divider 4
  `Introduce Part 4: Typography, Colors & Measurement Units.
We move from syntax into visual styling tools and the responsive ruler of the web.`,

  // 20: Color Systems
  `Review Hex codes (#de3b3d) and RGB/RGBA.
Demonstrate how the alpha channel in rgba(222, 59, 61, 0.15) allows creating soft tinted backgrounds without affecting the text opacity.`,

  // 21: Typography Essentials
  `Cover font-family system stacks and font-size.
Highlight the 1.5 unitless line-height rule: never use pixels for line-height because it fails to scale when font sizes change.`,

  // 22: Backgrounds & Borders
  `Demonstrate the border shorthand: width, style, and color.
Show the border-radius trick: 12px for modern cards, 9999px for pill badges, and 50% for circular avatars.`,

  // 23: CSS Units: The Ruler of the Web
  `Introduce CSS measurement units.
Explain that screens range from 320px smartphones to giant monitors, so hardcoding fixed pixels creates brittle layouts.`,

  // 24: Px vs. Rem Deep Dive
  `Explain why rem is the gold standard for accessibility:
1rem = 16px by default. When a user with low vision increases their device font size in browser settings, rem scales automatically while px stays locked.`,

  // 25: Em, Percent & Viewport Units
  `Explain % (relative to parent box width) and vh/vw (relative to browser viewport window).
Mention that em is great for button padding that scales with font size.`,

  // 26: Unit Decision Cheatsheet
  `Review the cheatsheet matrix:
Borders -> px.
Typography & spacing -> rem.
Container widths -> %.
Hero sections -> vh.`,

  // 27: Divider 5
  `Introduce Part 5: The CSS Box Model & Spacing.
This is the single most important layout concept in all of web development.`,

  // 28: The Postal Box Metaphor
  `Use the Postal Box metaphor:
Content = the item being shipped.
Padding = bubble wrap protecting the item (adopts background color).
Border = cardboard package wall.
Margin = empty space separating packages.`,

  // 29: Padding vs. Margin Deep Dive
  `Reiterate the core distinction:
Padding is inside the border, expands background color and clickable area.
Margin is outside the border and is always transparent.`,

  // 30: The Classic Box Model Bug
  `Explain the content-box math:
width: 300px + padding: 20px + border: 2px = 344px total width!
Explain why this causes multi-column layouts to wrap onto new lines unexpectedly.`,

  // 31: Border-Box Rescue
  `Explain box-sizing: border-box:
When you declare width: 300px, the total width remains exactly 300px, and padding expands inwards.`,

  // 32: The Universal Reset
  `Show the 3-line universal reset.
Explain that every modern front-end project starts with this snippet at line 1 to ensure consistent cross-browser spacing.`,

  // 33: Interactive Box Model Playground
  `Use the sliders on this slide!
Move the padding and border sliders and toggle the box-sizing button.
Show students how content-box expands total width while border-box keeps width locked.`,

  // 34: Divider 6
  `Introduce Part 6: DevTools, Strategic AI & Hands-on Missions.
Connecting theory to developer tools and code practice.`,

  // 35: DevTools Box Model Guide
  `Walk through Chrome DevTools.
Show students how to inspect elements and locate the interactive Box Model diagram in the Styles tab.`,

  // 36: AI Partnering Workflow
  `Explain how to prompt AI Socratic assistants for CSS debugging.
Emphasize our 3-point audit: no IDs in CSS, no hardcoded px font sizes, and no !important.`,

  // 37: Lab Instructions
  `Kick off the 35-minute Extreme CSS Makeover lab!
Direct everyone to copy the starter HTML snippet directly from the slide into event.html.
Guide them through the 3 visual sprints:
Sprint 1: Line 1 Universal Reset & body background.
Sprint 2: Centering the card, adding padding, and shaping the pill badge.
Sprint 3: Styling the CTA button and adding the :hover transition.
Walk around the room to assist students with live DevTools inspection.`,

  // 38: Homework 1 Showcase
  `Present Homework 1: The CSS Bug Clinic (Layout Surgery).
Explain the scenario: they inherit a broken codebase with 5 classic CSS bugs.
Walk through the 5 defect types:
1. Semicolon paralysis
2. Content-box blowout
3. ID specificity lockout
4. Margin bleed trap
5. Line-height collision
Tell them to open Chrome DevTools, locate each symptom, and perform surgery to repair the file!`,

  // 39: Homework 2 Showcase & Closing
  `Present Homework 2: The SaaS Pricing Tier.
Highlight the featured tier badge, big price lockup, feature checklist, and CTA hover state.
Tease Session 4: Modern Layout Engine: Flexbox. Push all homework to GitHub!`,
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
  title: 'Session 03: CSS Foundations, The Box Model & Visual Architecture',
  createdAt: '2026-10-11T09:10:10.934Z',
};

export default [
  Cover,
  Agenda,
  Divider1,
  BeforeAfterComparison,
  MentalModelSeparation,
  ConceptCheck1,
  Divider2,
  CssRuleAnatomy,
  WhereCssLivesOverview,
  InlineStylesDeepDive,
  InternalStylesDeepDive,
  ExternalStylesheetContract,
  ConceptCheck2,
  Divider3,
  TagVsClassVsId,
  NamingClassesWithIntention,
  SpecificityWithoutMath,
  InteractiveSpecificityArena,
  Divider4,
  ColorSystems,
  TypographyEssentials,
  BackgroundsAndBorders,
  CssUnitsTheRuler,
  PxVsRemDeepDive,
  EmPercentAndViewport,
  UnitDecisionCheatsheet,
  Divider5,
  PostalBoxMetaphor,
  PaddingVsMarginDeepDive,
  TheClassicBoxModelBug,
  BorderBoxRescue,
  UniversalReset,
  InteractiveBoxModelPlayground,
  Divider6,
  DevToolsBoxModelGuide,
  AIPartneringWorkflow,
  LabInstructions,
  Homework1Showcase,
  Homework2ShowcaseAndClosing,
] satisfies Page[];
