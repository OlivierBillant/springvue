<script setup lang="ts">
import { ref } from 'vue'
import { login } from '../api/auth'

const username = ref('')
const password = ref('')
const error = ref('')

const submit = async () => {
  try {
    const token = await login(username.value, password.value)
    localStorage.setItem('jwt', token)
    window.location.href = '/' // refresh or redirect to main view
  } catch (err) {
    error.value = 'Invalid username or password'
  }
}
</script>

<template>
  <div class="p-6 max-w-sm mx-auto bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">🔐 Login</h2>
    <form @submit.prevent="submit" class="space-y-3">
      <input
        v-model="username"
        placeholder="Username"
        class="border p-2 w-full rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full rounded"
      />
      <button
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Login
      </button>
      <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
    </form>
  </div>
</template>
