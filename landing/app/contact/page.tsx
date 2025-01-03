import CardLayout from '@/components/CardLayout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <CardLayout title="Contact Us">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <Input id="name" name="name" type="text" required className="w-full bg-gray-700 text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <Input id="email" name="email" type="email" required className="w-full bg-gray-700 text-white" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <Textarea id="message" name="message" required className="w-full h-32 bg-gray-700 text-white" />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
      </form>
    </CardLayout>
  )
}

