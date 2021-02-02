<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <h4>Add new value</h4>

        <form class="form">
          <div class="input-field">
            <input
              id="recordname"
              type="text"
              class="validate"
              :value="item.name"
              disabled
            />
            <label for="recordname">Name</label>
          </div>

          <div class="input-field">
            <input
              id="recordtype"
              type="text"
              class="validate"
              :value="item.type"
              disabled
            />
            <label for="recordtype">Type</label>
          </div>

          <p>
            <label>
              <input
                type="checkbox"
                checked="checked"
                :value="item.active"
                v-model="active"
                :disabled="loading"
              />
              <span>Status: {{ active ? "Active" : "Disabled" }}</span>
            </label>
          </p>

          <div class="input-field">
            <input
              id="recorddate"
              type="text"
              class="validate"
              :value="nextDate"
              disabled
            />
            <label for="recorddate">Next date</label>
          </div>

          <div class="input-field">
            <input
              id="datavalue"
              type="number"
              class="validate"
              v-model.number="newValue"
              :disabled="loading"
            />
            <label for="datavalue">New value</label>
          </div>

          <Loader v-if="loading" />
          <div v-else class="form-footer">
            <button
              class="btn waves-effect waves-light"
              type="button"
              @click="save"
            >
              Save
              <i class="material-icons right">save</i>
            </button>
            <button
              class="btn waves-effect waves-light orange"
              type="button"
              @click="closeModal"
            >
              Reset
              <i class="material-icons right">remove_circle</i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-overlay"></div>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  props: ["item"],
  data() {
    return {
      active: false,
      newValue: 0,
    };
  },
  computed: {
    dates() {
      return this.$store.getters.getDates;
    },
    nextDate() {
      return this.dates[this.item.history.length] || "Next year";
    },
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    async save() {
      const newItem = { ...this.item, active: this.active };
      newItem.history.push({
        date: this.nextDate,
        value: this.newValue,
      });

      try {
        await this.$store.dispatch("changeItem", newItem);
        this.$message("New value added successfully");
      } catch (error) {
        console.log(error);
      }
      this.closeModal();
    },
    closeModal() {
      this.active = false;
      this.newValue = 0;
      this.$emit("closeModal");
    },
  },
  mounted() {
    this.active = this.item.active;
    setTimeout(() => {
      this.selectDate = M.FormSelect.init(this.$refs.selectDate);
      M.updateTextFields();
    }, 0);
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
h3 {
  margin-bottom: 50px;
}
.form {
  max-width: 400px;
  margin: 0 auto;

  & > .input-field,
  p {
    margin-bottom: 30px;
  }
}
.form-footer {
  display: flex;
  justify-content: space-between;
}
</style>