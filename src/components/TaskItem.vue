<script setup lang="ts">
import useTask from '@composables/useTask'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['showTaskFormToEdit'])
const { removeTask } = useTask()

const deleteTask = (): void => {
  removeTask(props.index)
}
</script>

<template>
  <div class="task-item" @click="emits('showTaskFormToEdit', index)">
    <p>
      {{ title }}
    </p>
    <button id="delete-task-button" @click.stop="deleteTask">
      <v-icon name="md-delete" fill="white" scale="1" />
    </button>
  </div>
</template>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 0.5rem;
  z-index: 0;

  &:hover {
    background-color: var(--detail-color);
  }

  & #delete-task-button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 25px;
    cursor: pointer;
    z-index: 10;

    &:hover {
      background-color: var(--primary-color-hover);
      transition: all 75ms ease;
    }
  }
}
</style>
