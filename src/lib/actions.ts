import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

function field(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === 'string' ? value : ''
}

export async function sendContactForm(_prevState: unknown, formData: FormData) {
  const parsed = contactSchema.safeParse({
    firstName: field(formData, 'first-name'),
    lastName: field(formData, 'last-name') || undefined,
    email: field(formData, 'email'),
    message: field(formData, 'message'),
  })

  if (!parsed.success) {
    return {
      success: false,
      message:
        parsed.error.issues[0]?.message ??
        'Please fill in all required fields.',
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    success: true,
    message: "Message sent! I'll get back to you soon.",
  }
}
