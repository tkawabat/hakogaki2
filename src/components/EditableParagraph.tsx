'use client'

import { useState, useEffect, useRef } from 'react'

interface EditableParagraphProps {
  initialText: string
  onTextChange: (text: string) => void
}

export function EditableParagraph({ initialText, onTextChange }: EditableParagraphProps) {
  const [text, setText] = useState(initialText)
  const [isEditing, setIsEditing] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    onTextChange(e.target.value)
  }

  // テキストエリアの高さを自動調整
  useEffect(() => {
    if (textareaRef.current && isEditing) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [text, isEditing])

  return (
    <div className="mb-4">
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          onBlur={() => setIsEditing(false)}
          className="w-full p-2 border rounded resize-none overflow-hidden"
          autoFocus
        />
      ) : (
        <p
          onClick={() => setIsEditing(true)}
          className="cursor-text p-2 hover:bg-gray-100 rounded whitespace-pre-line"
        >
          {text.split('\n').map((line, i) => (
            <span key={i}>
              {line || <span className="text-gray-400">ここをクリックして編集...</span>}
              <br />
            </span>
          ))}
        </p>
      )}
    </div>
  )
}
