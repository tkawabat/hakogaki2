'use client'

import { useState } from 'react'
import { EditableParagraph } from './EditableParagraph'

export function BoxWritingEditor() {
  const [paragraphs, setParagraphs] = useState<string[]>([''])

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, ''])
  }

  const handleDeleteParagraph = (index: number) => {
    const newParagraphs = paragraphs.filter((_, i) => i !== index)
    setParagraphs(newParagraphs)
  }

  const handleTextChange = (index: number, text: string) => {
    const newParagraphs = [...paragraphs]
    newParagraphs[index] = text
    setParagraphs(newParagraphs)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        {paragraphs.map((text, index) => (
          <div key={index} className="group relative">
            <EditableParagraph
              initialText={text}
              onTextChange={(newText) => handleTextChange(index, newText)}
            />
            <button
              onClick={() => handleDeleteParagraph(index)}
              className="absolute -left-8 top-2 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddParagraph}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        段落を追加
      </button>
    </div>
  )
}
