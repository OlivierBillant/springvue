<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUsers } from '../api/users'

const users = ref<{ id: number; name: string }[]>([])

onMounted(async () => {
  users.value = await getUsers()
})
</script>

<template>
  <div>
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
