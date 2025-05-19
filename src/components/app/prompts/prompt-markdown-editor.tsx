'use client';

import { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { languages } from '@codemirror/language-data';

export const myTheme = EditorView.theme({
  '&': {
    height: '100%',
    outline: 'none !important',
    backgroundColor: 'transparent !important',
  },
});

const syntaxStyles = syntaxHighlighting(defaultHighlightStyle, {
  fallback: true,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function MarkdownEditor({
  value,
  onChange,
  className,
  readOnly = false,
  onFocus,
  onBlur,
}: Readonly<MarkdownEditorProps>) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  const firstRunRef = useRef(true);
  const { theme } = useTheme();

  // Mantener actualizado el callback sin re-crear el editor
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Crear editor solo al montar (y cuando cambie theme o readOnly)
  useEffect(() => {
    if (!editorRef.current) return;
    viewRef.current?.destroy();

    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
        theme === 'dark' ? oneDark : [],
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const newContent = update.state.doc.toString();
            if (firstRunRef.current) {
              firstRunRef.current = false;
            } else {
              onChangeRef.current(newContent);
            }
          }
        }),
        EditorView.domEventHandlers({ focus: () => onFocus?.(), blur: () => onBlur?.() }),
        EditorState.readOnly.of(readOnly),
        EditorView.lineWrapping,
        myTheme,
        syntaxStyles,
      ],
    });

    viewRef.current = new EditorView({ state: startState, parent: editorRef.current });
    return () => viewRef.current?.destroy();
  }, [theme, readOnly]);

  // Sincronizar contenido cuando `value` cambie externamente
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (value !== current) {
      view.dispatch({ changes: { from: 0, to: current.length, insert: value } });
    }
  }, [value]);

  return (
    <div className={cn('relative w-full', className)}>
      <div ref={editorRef} />
    </div>
  );
}
