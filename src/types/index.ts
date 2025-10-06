export enum taskStatus {
  incompleted = 0,
  completed = 1,
}

export interface Task {
  title: string
  content: string
  status: taskStatus
}
