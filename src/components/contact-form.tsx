import { useActionState } from 'react'
import { sendContactForm } from '#/lib/actions'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Textarea } from '#/components/ui/textarea'
import { cn } from '#/lib/utils'
import { Loader2 } from 'lucide-react'

const initialState = { success: false, message: '' }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState,
  )

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-none"
          >
            First name
          </label>
          <Input
            id="first-name"
            name="first-name"
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="last-name"
            className="text-sm font-medium leading-none"
          >
            Last name
          </label>
          <Input id="last-name" name="last-name" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Email
        </label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help you?"
          className="min-h-[120px]"
          required
        />
      </div>

      {state.message && (
        <p
          aria-live="polite"
          className={cn(
            'text-sm',
            state.success ? 'text-green-500' : 'text-red-500',
          )}
        >
          {state.message}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
