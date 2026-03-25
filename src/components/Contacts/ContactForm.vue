<template>
  <form @submit="onSubmit" class="mt-4 space-y-6">
    <div class="flex flex-col gap-1">
      <label for="name" class="sr-only">{{ t('Contacts.form.name') }}</label>
      <input id="name" v-model.trim="name" class="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
        :placeholder="t('Contacts.form.name')" />
      <small v-if="nameError" class="text-red-500">{{ nameError }}</small>
    </div>
    <div class="flex flex-col gap-1">
      <label for="email" class="sr-only">{{ t('Contacts.form.email') }}</label>
      <input id="email" v-model.trim="email" class="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
        :placeholder="t('Contacts.form.email')" />
      <small v-if="emailError" class="text-red-500">{{ emailError }}</small>
    </div>
    <div class="flex flex-col gap-1">
      <label for="message" class="sr-only">{{ t('Contacts.form.message') }}</label>
      <textarea id="message" v-model.trim="message" class="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
        :placeholder="t('Contacts.form.message')" rows="5" />
      <small v-if="messageError" class="text-red-500">{{ messageError }}</small>
    </div>
    <button type="submit" :disabled="isPending" :class="['w-full px-4 py-2 min-h-11 bg-grey rounded-sm transition-colors duration-300 text-lg font-bold text-antiqueWhite flex items-center justify-center',
      isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-orange hover:text-grey']">
      <span v-if="isPending"
        class="inline-block w-5 h-5 border-2 border-antiqueWhite border-t-transparent rounded-full animate-spin" />
      <span v-else>{{ t('Contacts.form.submit') }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import emailjs from '@emailjs/browser'
import { createContactSchema, type ContactFormData } from './validation'

const { t } = useI18n()
const toast = useToast()
const isPending = ref(false)

const schema = computed(() => toTypedSchema(createContactSchema((key) => t(`Contacts.${key}`))))
const { handleSubmit, resetForm } = useForm<ContactFormData>({
  validationSchema: schema,
  initialValues: { name: '', email: '', message: '' },
})

const { value: name, errorMessage: nameError } = useField<string>('name')
const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: message, errorMessage: messageError } = useField<string>('message')

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || ''

if (import.meta.env.DEV) {
  const missing = ['VITE_EMAIL_SERVICE_ID', 'VITE_EMAIL_TEMPLATE_ID', 'VITE_EMAIL_PUBLIC_KEY']
    .filter((key) => !import.meta.env[key])
  if (missing.length) {
    console.warn(`[ContactForm] Missing env vars: ${missing.join(', ')}. Contact form will not work.`)
  }
}

const onSubmit = handleSubmit(async (data) => {
  isPending.value = true
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
    resetForm()
    toast.success(t('Contacts.form.success'))
  } catch (error) {
    console.error('Error submitting form:', error)
    toast.error(t('Contacts.form.error'))
  } finally {
    isPending.value = false
  }
})
</script>
