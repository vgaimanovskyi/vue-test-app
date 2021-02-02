<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <h4>Confirm</h4>
        <p>
          Do you want to change <b>{{ item.name }}</b> status to
          <b>{{ !item.active ? "Active" : "Disabled" }}</b> ?
        </p>
      </div>
      <Loader v-if="loading" />
      <div v-else class="modal-footer">
        <button @click="confirm" class="modal-close btn-flat">Yes</button>
        <button @click="closeModal" class="modal-close btn-flat">No</button>
      </div>
    </div>
    <div class="modal-overlay"></div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    async confirm() {
      this.item.active = !this.item.active;
      try {
        await this.$store.dispatch("changeItem", this.item);
        this.$message("Status changed successfully");
      } catch (error) {
        console.log(error);
      }
      this.closeModal();
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 1003;
  display: block;
  opacity: 1;
  top: 10%;
  transform: scaleX(1) scaleY(1);
}
.modal-overlay {
  z-index: 1002;
  display: block;
  opacity: 0.5;
}
</style>