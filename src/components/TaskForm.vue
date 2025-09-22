<script setup lang="ts">
import { ref } from 'vue'
import useTask from '@composables/useTask'

const emits = defineEmits(['toggleShowTaskForm'])
const { addTask, refreshTasks } = useTask()
const title = ref<string>('')
const content = ref<string>('')

const handleSubmitForm = (): void => {
  addTask({ title: title.value, content: content.value })
  refreshTasks()

  title.value = ''
  content.value = ''
}
</script>

<template>
  <section class="task-form-container">
    <v-icon
      id="task-form-close-button"
      name="io-close"
      fill="#4b4b4b"
      @click="emits('toggleShowTaskForm')"
    />
    <form class="task-form" @submit.prevent="handleSubmitForm">
      <p class="task-form-title">Create new Task</p>
      <input
        class="task-form-input"
        type="text"
        name="title"
        id="title"
        placeholder="Enter a title..."
        v-model="title"
      />
      <input
        class="task-form-input"
        type="text"
        name="content"
        id="content"
        placeholder="Enter the content..."
        v-model="content"
      />
      <button id="task-form-submit-button" type="submit">Save</button>
    </form>
  </section>
</template>

<style scoped>
.task-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 400px;
  background-color: var(--text-color);
  border-radius: 10px;
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;

  & #task-form-close-button {
    position: fixed;
    top: 0;
    right: 0;
    margin: 0.5rem 0.5rem 0.5rem 0;
    cursor: pointer;
  }

  & .task-form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1rem 1rem;
    gap: 1rem;

    & .task-form-title {
      color: var(--detail-color);
      font-size: 1rem;
    }

    & .task-form-input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      height: 2rem;
      width: 100%;
      padding: 0 1rem;
      background-color: #fff;
      outline: none;
      border: none;
      border-radius: 5px;
    }

    & #task-form-submit-button {
      position: fixed;
      right: 0;
      bottom: 0;
      margin: 0 1rem 1rem 0;
      height: 2rem;
      width: 120px;
      text-align: center;
      background-color: var(--primary-color);
      color: var(--text-color);
      font-size: 1.1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-color-hover);
        transition: all 75ms ease;
      }
    }
  }
}
</style>
