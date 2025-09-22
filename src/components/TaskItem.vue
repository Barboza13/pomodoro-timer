<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})

const emits = defineEmits(['toggleShowTaskForm'])
</script>

<template>
  <div class="task-item" @click="emits('toggleShowTaskForm')">{{ title }}</div>
</template>

<style scoped>
.task-item {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 2rem;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 0.5rem;

  &:hover {
    background-color: var(--detail-color);
  }
}
</style>
