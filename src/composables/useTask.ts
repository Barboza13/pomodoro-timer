import { ref } from 'vue'
import TaskService from '@services/TaskService'

import type { Task } from '@/types'

const taskService = new TaskService()
const tasks = ref<Task[]>([])

export default function useTask() {
  const loadTasks = (): void => {
    tasks.value = taskService.getTasks()
  }

  const getTaskByIndex = (index: number): Task => {
    return taskService.getTaskByIndex(index)
  }

  const refreshTasks = (): void => {
    tasks.value = taskService.getTasks()
  }

  const addTask = (task: Task): void => {
    taskService.createTask(task)
    refreshTasks()
  }

  const updateTask = (index: number, newTask: Task): void => {
    taskService.editTask(index, newTask)
    refreshTasks()
  }

  const removeTask = (index: number): void => {
    taskService.deleteTask(index)
    refreshTasks()
  }

  return {
    tasks,
    loadTasks,
    getTaskByIndex,
    refreshTasks,
    addTask,
    updateTask,
    removeTask,
  }
}
