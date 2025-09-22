<script setup lang="ts">
import TaskContainer from '@components/TaskContainer.vue'
import TimerContainer from '@components/TimerContainer.vue'
</script>

<template>
  <main class="main-container">
    <TaskContainer />
    <TimerContainer />
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 600px;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
