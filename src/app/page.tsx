'use client'

import { BoxWritingEditor } from '../components/BoxWritingEditor'
import { ChatUI } from '../components/ChatUI'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Header />
      <BoxWritingEditor />
      <ChatUI />
    </div>
  )
}
