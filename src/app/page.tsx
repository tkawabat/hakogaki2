import { BoxWritingEditor } from '../components/BoxWritingEditor'
import { ChatUI } from '../components/ChatUI'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <BoxWritingEditor />
      <ChatUI />
    </div>
  )
}
