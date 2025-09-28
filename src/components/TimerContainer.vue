<script setup lang="ts">
import useCountdown from '@composables/useCountdown'
import { ref } from 'vue'

const time = ref<number>(25)
const {
  countdown,
  isPaused,
  isRunning,
  isFinished,
  initCountdown,
  pauseCountdown,
  resumeCountdown,
  restartCountdown,
  addMinutes,
} = useCountdown(time)

const changeTime = (newTime: number): void => {
  time.value = newTime
}
</script>

<template>
  <section class="timer-container">
    <article class="period-container">
      <button class="period-container-button" @click="changeTime(25)">Focus</button>
      <button class="period-container-button" @click="changeTime(5)">Short Break</button>
      <button class="period-container-button" @click="changeTime(15)">Long Break</button>
    </article>
    <article class="stopwatch-container">
      <p id="stopwatch">{{ countdown }}</p>
      <div class="stopwatch-controller-container">
        <button v-if="isPaused" id="stopwatch-pause" @click="resumeCountdown">Resume</button>
        <button v-else-if="isRunning" id="stopwatch-pause" @click="pauseCountdown">Pause</button>
        <button v-if="isFinished" id="stopwatch-start" @click="initCountdown">Start</button>
        <button v-else id="stopwatch-start" @click="restartCountdown">Restart</button>
      </div>
    </article>
    <article class="increment-stopwatch-container">
      <button class="increment-stopwatch-container-button" @click="addMinutes(25)">+ 25min</button>
      <button class="increment-stopwatch-container-button" @click="addMinutes(20)">+ 10min</button>
      <button class="increment-stopwatch-container-button" @click="addMinutes(5)">+ 5min</button>
      <button class="increment-stopwatch-container-button" @click="addMinutes(1)">+ 1min</button>
    </article>
  </section>
</template>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  border: 1px solid var(--detail-color);
  border-radius: 5px;
  gap: 0.5rem;

  & .period-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & .period-container-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: var(--text-color);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0.5rem 0.5rem;

      &:hover {
        background-color: var(--detail-color);
        transition: all 200ms ease;
      }
    }
  }

  & .stopwatch-container {
    width: 50%;

    & #stopwatch {
      text-align: center;
      font-size: 5rem;
    }

    & .stopwatch-controller-container {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1rem;
      height: 3rem;
      width: 100%;

      & #stopwatch-pause {
        text-align: center;
        height: 2rem;
        width: 50%;
        background-color: transparent;
        color: var(--text-color);
        border: 1px solid var(--detail-color);
        cursor: pointer;
        border-radius: 5px;

        &:hover {
          background-color: var(--detail-color);
          transition: all 75ms ease;
        }
      }

      & #stopwatch-start {
        text-align: center;
        height: 2rem;
        width: 50%;
        background-color: var(--primary-color);
        color: var(--text-color);
        cursor: pointer;
        border: none;
        border-radius: 5px;

        &:hover {
          background-color: var(--primary-color-hover);
          transition: all 75ms ease;
        }
      }
    }
  }

  & .increment-stopwatch-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    & .increment-stopwatch-container-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: var(--detail-color);
      border: none;
      cursor: pointer;
      padding: 0.3rem 0.3rem;

      &:hover {
        color: var(--text-color);
        transition: all 200ms ease;
      }
    }
  }
}
</style>
