<template>
  <Transition name="show-task-form">
    <slot />
  </Transition>
</template>

<style>
.show-task-form-enter-from,
.show-task-form-leave-to {
  opacity: 0;
  scale: 0;
}

.show-task-form-enter-active,
.show-task-form-leave-active {
  transition: all 200ms ease;
}

.show-task-form-leave-from,
.show-task-form-enter-to {
  opacity: 1;
  scale: 1.15;
}
</style>
