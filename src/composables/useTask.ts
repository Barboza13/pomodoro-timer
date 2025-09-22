import { ref } from 'vue'
import TaskService from '@services/TaskService'

import type { Task } from '@/types'

const taskService = new TaskService()
const tasks = ref<Task[]>([])

export default function useTask() {
  tasks.value = taskService.getTasks()

  const getTasks = (): Task[] => {
    return tasks.value
  }

  const refreshTasks = (): void => {
    tasks.value = taskService.getTasks()
  }

  const addTask = (task: Task): void => {
    taskService.createTask(task)
  }

  const updateTask = (index: number, newTask: Task): void => {
    taskService.editTask(index, newTask)
  }

  const removeTask = (index: number): void => {
    taskService.deleteTask(index)
  }

  return { getTasks, refreshTasks, addTask, updateTask, removeTask }
}
