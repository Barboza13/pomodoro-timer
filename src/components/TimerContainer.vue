<script setup lang="ts"></script>

<template>
  <section class="timer-container">
    <article class="period-container">
      <button class="period-container-button">Focus</button>
      <button class="period-container-button">Short Break</button>
      <button class="period-container-button">Long Break</button>
    </article>
    <article class="stopwatch-container">
      <p id="stopwatch">00:00</p>
      <div class="stopwatch-controller-container">
        <button id="stopwatch-pause">Pause</button>
        <button id="stopwatch-start">Start</button>
      </div>
    </article>
    <article class="increment-stopwatch-container">
      <button class="increment-stopwatch-container-button">+ 25min.</button
      ><button class="increment-stopwatch-container-button">+ 10min.</button
      ><button class="increment-stopwatch-container-button">+ 5min.</button
      ><button class="increment-stopwatch-container-button">+ 1min.</button>
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
      cursor: pointer;
      padding: 0.3rem 0.3rem;

      &:hover {
        background-color: var(--detail-color);
        transition: all 75ms ease;
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
      justify-content: space-between;
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
      color: var(--text-color);
      border: none;
      cursor: pointer;
      padding: 0.3rem 0.3rem;

      &:hover {
        background-color: var(--detail-color);
        transition: all 75ms ease;
      }
    }
  }
}
</style>
