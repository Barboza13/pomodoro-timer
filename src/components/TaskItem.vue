<script setup lang="ts">
import { computed } from 'vue'
import useTask from '@composables/useTask'

import type { PropType } from 'vue'
import type { Task } from '@/types'
import { TaskStatus } from '@/types'

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  selectedTaskIndex: {
    type: Number as PropType<number | null>,
    default: null,
  },
})

const emits = defineEmits(['showTaskFormToEdit', 'handleSelectTask'])
const { removeTask } = useTask()
const isSelected = computed(() => props.selectedTaskIndex === props.index)

const deleteTask = (): void => removeTask(props.index)

const toggleSelectedTask = (): void => emits('handleSelectTask', props.index)
</script>

<template>
  <div class="task-item" @click="emits('showTaskFormToEdit', index)">
    <div class="task-item-data-container">
      <input
        id="current-task-button"
        type="radio"
        name="task_selected"
        :checked="isSelected"
        @click.stop="toggleSelectedTask"
      />
      <div
        :class="[
          task.status === TaskStatus.completed
            ? 'status-indicator-completed'
            : 'status-indicator-incomplete',
        ]"
      ></div>
      <p>
        {{ task.title }}
      </p>
    </div>
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
  height: 2.5rem;
  width: 100%;
  background-color: transparent;
  transition-delay: 140ms; /* Transition applied when moving the cursor away */
  cursor: pointer;
  border-radius: 5px;
  padding: 0 0.5rem;
  z-index: 0;

  &:hover {
    background-color: var(--detail-color);
    transition: background-color 75ms linear;
  }

  & .task-item-data-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    & #current-task-button {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 38px;
      height: 18px;
      background-color: #ccc;
      border-radius: 24px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s ease;
      outline: none;
      border: none;

      /*  Inner circle  */
      &::before {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: white;
        top: 2px;
        left: 2px;
        transition: transform 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      &:checked {
        background-color: #4caf50;
      }

      &:checked::before {
        transform: translateX(20px);
      }

      &:hover {
        opacity: 0.8;
      }

      &:focus {
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
      }
    }

    & .status-indicator-completed {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: green;
    }

    & .status-indicator-incomplete {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--detail-color);
    }
  }

  & #delete-task-button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 10;

    &:hover {
      background-color: var(--primary-color-hover);
      transition: all 75ms ease;
    }
  }
}
</style>
