'use client'

import { useState } from 'react'

export function ChatUI() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message])
      setMessage('')
    }
  }

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? '×' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-96 h-[500px] bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className="mb-2 p-2 bg-gray-100 rounded">
                {msg}
              </div>
            ))}
          </div>

          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 p-2 border rounded"
              placeholder="メッセージを入力..."
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              送信
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
