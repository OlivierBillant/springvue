<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUsers, createUser } from '../api/users'

const users = ref<{ id: number; name: string }[]>([])
const newUserName = ref('')

const loadUsers = async () => {
  users.value = await getUsers()
}

const addUser = async () => {
  if (!newUserName.value.trim()) return
  await createUser(newUserName.value)
  newUserName.value = ''
  await loadUsers()
}

onMounted(loadUsers)
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto bg-white shadow rounded-xl">
    <h2 class="text-2xl font-bold mb-4">👥 User List</h2>

    <form @submit.prevent="addUser" class="flex gap-2 mb-6">
      <input
        v-model="newUserName"
        type="text"
        placeholder="Enter a name"
        class="flex-1 border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>

    <table class="w-full text-left border border-gray-200 rounded shadow-sm overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 border-b">ID</th>
          <th class="px-4 py-2 border-b">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="hover:bg-blue-50 transition"
        >
          <td class="px-4 py-2 border-b text-blue-800 font-medium">{{ user.id }}</td>
          <td class="px-4 py-2 border-b">{{ user.name }}</td>
        </tr>
      </tbody>
    </table>

    <p v-if="users.length === 0" class="text-gray-500 mt-4">No users found.</p>
  </div>
</template>
