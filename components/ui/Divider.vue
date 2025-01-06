<template>
  <div class="divider">
    <hr class="divider-line" />
    <span class="divider-text">{{ text }}</span>
    <hr class="divider-line" />
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    text: {
      type: String,
      default: "Divider",
    },
  },
};
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  position: relative;
  text-align: center;
}

.divider-line {
  flex: 1;
  border: none;
  border-top: 1px solid #6e6d7a;
  margin: 0 8px;
}

.divider-text {
  white-space: nowrap;
  font-size: 14px;
  color: #666;
  padding: 0 8px;
  background: white; /* Background to cover hr */
}
</style>
