import * as z from 'zod'

const _baseSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})

export type ContactFormData = z.infer<typeof _baseSchema>

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t('validation.nameMin')).max(50, t('validation.nameMax')),
    email: z.string().email(t('validation.emailInvalid')),
    message: z.string().min(10, t('validation.messageMin')).max(500, t('validation.messageMax')),
  })
