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
              className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
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
