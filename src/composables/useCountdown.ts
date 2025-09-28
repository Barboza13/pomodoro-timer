import { ref, watch, computed, onUnmounted } from 'vue'

import type { Ref } from 'vue'

export default function useCountdown(timeRef: Ref<number>) {
  const minutes = ref<number>(timeRef.value)
  const totalTime = computed(() => minutes.value * 60 * 1000)
  const remainingTime = ref<number>(totalTime.value)
  const isPaused = ref<boolean>(false)
  const isRunning = ref<boolean>(false)
  const isFinished = ref<boolean>(true)
  const countdown = ref<string>(formatTime(totalTime.value))
  let intervalId: number | null = null

  function clearCountdownInterval(): void {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onUnmounted(() => clearCountdownInterval())

  watch(timeRef, (newTime) => {
    minutes.value = newTime
    remainingTime.value = totalTime.value
    countdown.value = formatTime(totalTime.value)

    if (isRunning.value) {
      clearCountdownInterval()
      initCountdown()
    }
  })

  watch(totalTime, (newTotalTime) => {
    if (!isRunning.value && !isPaused.value) {
      remainingTime.value = newTotalTime
      countdown.value = formatTime(newTotalTime)
    }
  })

  function formatTime(milliseconds: number): string {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000))
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  function resetState(): void {
    remainingTime.value = totalTime.value
    countdown.value = formatTime(totalTime.value)
    isRunning.value = false
    isPaused.value = false
    isFinished.value = true
  }

  const initCountdown = (): void => {
    clearCountdownInterval()
    isRunning.value = true
    isFinished.value = false
    isPaused.value = false

    intervalId = setInterval(() => {
      remainingTime.value -= 1000
      countdown.value = formatTime(remainingTime.value)

      if (remainingTime.value <= 0) {
        remainingTime.value = 0
        countdown.value = formatTime(0)
        isRunning.value = false
        isFinished.value = true
        clearCountdownInterval()
      }
    }, 1000)
  }

  const pauseCountdown = (): void => {
    if (!isRunning.value) return

    isPaused.value = true
    isRunning.value = false
    clearCountdownInterval()
  }

  const resumeCountdown = (): void => {
    if (!isPaused.value || remainingTime.value <= 0) return

    isPaused.value = false
    initCountdown()
  }

  const restartCountdown = (): void => {
    clearCountdownInterval()
    resetState()
  }

  const addMinutes = (minutesToAdd: number): void => {
    if (minutesToAdd <= 0) return

    const minutesToAddInMilliseconds = minutesToAdd * 60 * 1000

    if (minutesToAddInMilliseconds > totalTime.value) {
      return
    }

    if (remainingTime.value + minutesToAddInMilliseconds > totalTime.value) {
      remainingTime.value = totalTime.value
      return
    }

    remainingTime.value = remainingTime.value + minutesToAddInMilliseconds
    countdown.value = formatTime(remainingTime.value)
  }

  return {
    countdown,
    initCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
    addMinutes,
    isPaused,
    isRunning,
    isFinished,
  }
}
