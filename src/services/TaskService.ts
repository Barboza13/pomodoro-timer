import type { Task } from '@/types'

const TASK_KEY = 'tasks'

export default class TaskService {
  private tasks: Task[] = []

  constructor() {
    this.getTasksFromLocalStorage()
  }

  /**
   * Get tasks from local storage.
   *
   * @returns {void} This method does not return a value.
   */
  private getTasksFromLocalStorage(): void {
    this.tasks = JSON.parse(localStorage.getItem(TASK_KEY) ?? '[]')
  }

  /**
   * Save the tasks in the local storage.
   *
   * @returns {void} This method does not return a value.
   */
  private saveToLocalStorage(): void {
    localStorage.setItem(TASK_KEY, JSON.stringify(this.tasks))
  }

  /**
   * Get all tasks.
   *
   * @returns {Task[]} Tasks list.
   */
  public getTasks(): Task[] {
    return this.tasks
  }

  /**
   * Get task by index.
   *
   * @param {number} index Task index.
   * @returns {Task} Task.
   */
  public getTaskByIndex(index: number): Task {
    return this.tasks[index]
  }

  /**
   * Save new task.
   *
   * @param {Task} task The task to save.
   * @returns {string} A message of success.
   */
  public createTask(task: Task): string {
    this.tasks.unshift(task)
    this.saveToLocalStorage()
    this.getTasksFromLocalStorage()
    return '¡Registro guardado exitosamente!'
  }

  /**
   * Edit a task.
   *
   * @param {number} index The index of the task.
   * @param {Task} task The new task data.
   * @returns {string} A message of success.
   */
  public editTask(index: number, task: Task): string {
    this.tasks.splice(index, 1, task)
    this.saveToLocalStorage()
    this.getTasksFromLocalStorage()
    return '¡Registro actualizado exitosamente!'
  }

  /**
   * Delete a task.
   *
   * @param {number} taskIndex The index of the task to delete.
   * @returns {string} A message of success.
   */
  public deleteTask(taskIndex: number): string {
    this.tasks.splice(taskIndex, 1)
    this.saveToLocalStorage()
    this.getTasksFromLocalStorage()
    return '¡Registro eliminado exitosamente!'
  }
}
