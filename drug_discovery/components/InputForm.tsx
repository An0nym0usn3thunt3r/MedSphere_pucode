import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface InputFormProps {
  input: string
  setInput: (input: string) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
}

export default function InputForm({ input, setInput, onSubmit, isLoading }: InputFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt here..."
        className="w-full h-64 resize-none"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </form>
  )
}

