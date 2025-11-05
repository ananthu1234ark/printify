<template>
  <div class="min-h-screen bg-white">
    <header class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold text-red-600">Printify</h1>
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Printify Kochi. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>