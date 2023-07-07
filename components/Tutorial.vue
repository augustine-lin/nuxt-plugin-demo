<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-4 space-x-2">
        <h1 class="p-4 text-4xl font-bold text-gray-600">Books</h1>
        <div v-for="book in books" :key="book.id" class="p-4">
          <div>Title: {{ book.title }}</div>
          <div>Author: {{ book.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      books: [],
    }
  },
  methods:{
    async getBooks() {
      const response = await this.$bookAPI.getBooks()
      console.log(response)
      this.books = response.data['hydra:member']
    }
  },
  mounted() {
    this.getBooks()
  }
}
</script>
<style>
.p-4 {
  padding: 16px;
}
</style>