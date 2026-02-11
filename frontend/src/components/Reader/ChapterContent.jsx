import React, { useEffect, useState, useMemo, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { api } from '../../services/api';
import { useReaderStore } from '../../stores/readerStore';
import { useAnnotationStore } from '../../stores/annotationStore';
import { AnnotatedParagraph } from './AnnotatedParagraph';
import { Loader2 } from 'lucide-react';

const ChapterContentInner = ({ filename }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fontSize = useReaderStore((state) => state.fontSize);
  const fontFamily = useReaderStore((state) => state.fontFamily);
  const mode = useReaderStore((state) => state.mode);
  const isBold = useReaderStore((state) => state.isBold);

  const annotations = useAnnotationStore((state) => state.annotations);

  // Filter annotations for this chapter
  const chapterAnnotations = useMemo(() =>
    annotations.filter(a => a.chapter === filename),
    [annotations, filename]
  );

  // 创建按段落索引分组的 annotations 映射
  const annotationsByPara = useMemo(() => {
    const map = new Map();
    chapterAnnotations.forEach(a => {
      const key = a.paraIndex;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(a);
    });
    return map;
  }, [chapterAnnotations]);

  // 稳定的空数组
  const EMPTY_ANNOTATIONS = useMemo(() => [], []);

  // 稳定的获取段落 annotations 函数
  const getParaAnnotations = useCallback((paraIndex) => {
    return annotationsByPara.get(paraIndex) || EMPTY_ANNOTATIONS;
  }, [annotationsByPara, EMPTY_ANNOTATIONS]);

  // Pre-process content for "Pure Mode" (只看译文)
  const processedContent = useMemo(() => {
    if (!content || mode !== 'pure') {
      return content;
    }
    
    // 只保留译文段落，移除所有标题、元数据和原文
    const lines = content.split('\n');
    const result = [];
    let inTranslation = false;
    let foundFirstTranslation = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // 跳过所有标题（以 # 开头）
      if (trimmedLine.startsWith('#')) {
        continue;
      }
      
      // 跳过分隔符
      if (trimmedLine === '---') {
        if (inTranslation) {
          result.push(''); // 添加空行分隔
          inTranslation = false;
        }
        continue;
      }
      
      // 跳过元数据行
      if (trimmedLine.startsWith('**原始页码**') || 
          trimmedLine.startsWith('**段落数量**') ||
          trimmedLine.startsWith('**翻译工具**') ||
          trimmedLine.startsWith('- **') ||
          trimmedLine.startsWith('*注：') ||
          trimmedLine.startsWith('## 📖')) {
        continue;
      }
      
      // 检查是否是译文开始
      if (trimmedLine.startsWith('**【译文】**')) {
        inTranslation = true;
        foundFirstTranslation = true;
        // 移除 **【译文】** 标记，保留后面的内容
        const translationContent = trimmedLine.replace(/^\*\*【译文】\*\*\s*/, '');
        if (translationContent) {
          result.push(translationContent);
        }
        continue;
      }
      
      // 如果在译文中，保留内容
      if (inTranslation) {
        result.push(line);
        continue;
      }
      
      // 在找到第一个译文之前，跳过所有内容
      if (!foundFirstTranslation) {
        continue;
      }
    }
    
    // 移除开头的空行
    while (result.length > 0 && result[0].trim() === '') {
      result.shift();
    }
    
    return result.join('\n');
  }, [content, mode]);

  useEffect(() => {
    const loadContent = async () => {
      if (!filename) return;
      setLoading(true);
      setError(null);
      try {
        const text = await api.getChapterContent(filename);
        setContent(text);
      } catch (err) {
        console.error(err);
        setError('Failed to load chapter content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [filename]);

  // 条件返回放在所有 hooks 之后
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-2" />
        <p>Loading chapter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-red-50 text-red-600 rounded-xl text-center my-10 border border-red-100">
        <p className="font-bold">Error</p>
        <p className="text-sm opacity-80">{error}</p>
      </div>
    );
  }

  return (
    <div
      className={`markdown-body transition-all duration-300 ${mode === 'pure' ? 'mode-pure' : ''}`}
      style={{
        fontSize: `${fontSize}%`,
        fontWeight: isBold ? 600 : 400
      }}
    >
      <ReactMarkdown
        components={{
          p: ({ node, children, ...props }) => {
            // 在 pure 模式下，不显示标注（因为行号对不上）
            if (mode === 'pure') {
              return <p className="my-4 leading-relaxed" {...props}>{children}</p>;
            }
            
            const index = node?.position?.start?.line || 0;
            const paraAnnotations = getParaAnnotations(index);

            return (
              <AnnotatedParagraph
                paraIndex={index}
                annotations={paraAnnotations}
                {...props}
              >
                {children}
              </AnnotatedParagraph>
            );
          },
          h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">{children}</h1>,
          h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
          h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
          blockquote: ({children}) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800/50 italic text-gray-600 dark:text-gray-400 rounded-r-lg">
              {children}
            </blockquote>
          ),
          li: ({children}) => <li className="ml-4 list-disc marker:text-blue-500">{children}</li>
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

// 使用 React.memo 防止因父组件的无关状态变化（如 selection）导致重渲染
export const ChapterContent = React.memo(ChapterContentInner);
