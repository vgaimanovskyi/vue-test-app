<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <h4>Confirm</h4>
        <p>
          Do you want to delete item with id: <b>{{ delID.name }}</b> ?
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
  props: ["delID"],
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    async confirm() {
      try {
        await this.$store.dispatch("delItem", this.delID.id);
        this.$message("Item deleted successfully");
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