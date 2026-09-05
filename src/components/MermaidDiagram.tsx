import React, { useEffect, useId, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const uniqueId = useId().replace(/[^a-zA-Z0-9]/g, '');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        darkMode: true,
        background: '#0a0f1d',
        primaryColor: '#0ea5e9',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#38bdf8',
        lineColor: '#64748b',
        secondaryColor: '#a855f7',
        tertiaryColor: '#22c55e',
        noteBkgColor: '#1e293b',
        noteTextColor: '#f8fafc',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fontSize: '13px',
      },
      flowchart: {
        curve: 'basis',
        padding: 18,
        nodeSpacing: 35,
        rankSpacing: 40,
        htmlLabels: true,
      },
      securityLevel: 'loose',
    });

    let isMounted = true;
    const renderDiagram = async () => {
      try {
        setError(null);
        // Ensure unique ID for container
        const renderId = `mermaid-${uniqueId}-${Math.floor(Math.random() * 10000)}`;
        const { svg } = await mermaid.render(renderId, chart);
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error('Mermaid render error:', err);
          setError('Could not render diagram preview');
        }
      }
    };

    renderDiagram();
    return () => {
      isMounted = false;
    };
  }, [chart, uniqueId]);

  return (
    <div className="w-full my-4 rounded-2xl bg-[#090d16]/95 border border-white/10 p-4 md:p-6 overflow-x-auto custom-scrollbar shadow-2xl">
      {title && (
        <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span>{title}</span>
        </div>
      )}
      {error ? (
        <div className="text-xs text-red-400 p-4 text-center">{error}</div>
      ) : svgContent ? (
        <div
          ref={containerRef}
          className="flex justify-center items-center [&_svg]:max-w-full [&_svg]:h-auto transition-all"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <div className="flex justify-center items-center py-10 text-xs text-gray-400">
          Rendering Architecture Diagram...
        </div>
      )}
    </div>
  );
};

export default MermaidDiagram;
