<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TaskItem from '@components/TaskItem.vue'
import TaskForm from '@components/TaskForm.vue'
import useTask from '@composables/useTask'

import type { Task } from '@/types'

const { getTasks } = useTask()
const tasks = ref<Task[]>([])
const isShowTaskFormVisible = ref<boolean>(false)

const toggleShowTaskForm = (): void => {
  isShowTaskFormVisible.value = !isShowTaskFormVisible.value
}

onMounted(() => (tasks.value = getTasks()))
</script>

<template>
  <section class="task-container">
    <article class="title-container">
      <p id="title">Pomodoro Timer</p>
      <p id="title">Made by <strong>Carlos Barboza</strong></p>
    </article>
    <article class="new-task-container">
      <p>Tasks list</p>
      <button id="new-task-button" @click="toggleShowTaskForm">+</button>
    </article>
    <article class="task-list-container">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :title="task.title"
        @toggle-show-task-form="toggleShowTaskForm"
      />
    </article>
  </section>
  <teleport to="body">
    <div v-show="isShowTaskFormVisible" id="black-background"></div>
    <TaskForm v-show="isShowTaskFormVisible" @toggle-show-task-form="toggleShowTaskForm" />
  </teleport>
</template>

<style scoped>
.task-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  border: 1px solid var(--detail-color);
  border-radius: 5px;

  & .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: 100%;
    padding: 0 0.5rem;
    font-size: 18px;
  }

  & .new-task-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: 100%;
    padding: 0 0.5rem;

    & #new-task-button {
      text-align: center;
      height: 2rem;
      width: 2rem;
      background-color: transparent;
      border: 1px solid var(--detail-color);
      border-radius: 5px;
      color: var(--text-color);
      cursor: pointer;

      &:hover {
        background-color: var(--detail-color);
        transition: all 75ms ease;
      }
    }
  }

  & .task-list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    gap: 0.3rem;
    padding: 0 0.5rem;
  }
}

#black-background {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
</style>
