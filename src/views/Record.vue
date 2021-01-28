<template>
  <div>
    <h1 class="page-caption">New record</h1>

    <form class="form" @submit.prevent="onSubmit">
      <div class="input-field">
        <select ref="selectType" v-model="type">
          <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
        </select>
        <label>Select a type</label>
      </div>

      <div class="input-field">
        <input
          id="recordname"
          type="text"
          class="validate"
          :class="{ invalid: !validName }"
          placeholder="Name"
          v-model="name"
          required
        />
        <label for="recordname">Name</label>
        <span class="helper-text invalid" v-if="!validName">
          This name already exists
        </span>
        <span class="helper-text invalid" v-else-if="name.length === 0">
          Name is required
        </span>
      </div>

      <p>
        <label>
          <input type="checkbox" checked="checked" v-model="active" />
          <span>Status: {{ active ? "Active" : "Disabled" }}</span>
        </label>
      </p>

      <div class="input-field">
        <select ref="selectDate" v-model="date">
          <option v-for="d in dates" :key="d" :value="d">{{ d }}</option>
        </select>
        <label>Select a date</label>
      </div>

      <div class="input-field">
        <input
          id="datavalue"
          type="number"
          class="validate"
          v-model.number="value"
        />
        <label for="datavalue">Value</label>
      </div>

      <button
        class="btn waves-effect waves-light"
        type="submit"
        :disabled="!validName || name.length === 0"
      >
        Create
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import M from "materialize-css";
import { uuid } from "vue-uuid";

export default {
  name: "record",
  data() {
    return {
      selectType: null,
      type: "",
      selectDate: null,
      date: "",
      name: "",
      active: false,
      value: 0,
    };
  },
  computed: {
    types() {
      return this.$store.getters.getTypes;
    },
    dates() {
      return this.$store.getters.getDates;
    },
    typeData() {
      return this.$store.getters.getTypeData(this.type);
    },
    validName() {
      return this.typeData.findIndex(
        (item) => item.name.toLowerCase() === this.name.toLowerCase()
      ) > 0
        ? false
        : true;
    },
  },
  methods: {
    onSubmit() {
      if (this.validName && this.name.length !== 0) {
        // set id
        const id = uuid.v1();
        // set history
        const idx = this.dates.indexOf(this.date);
        const history = this.dates.slice(0, idx + 1).map((item) => {
          if (item === this.date) {
            return {
              date: item,
              value: this.value,
            };
          }
          return {
            date: item,
            value: 0,
          };
        });

        // set record
        const record = {
          id: id,
          type: this.type,
          name: this.name,
          active: this.active,
          history,
        };

        this.$store.dispatch("addNewRecord", record);
        this.$message("New record created successfully");

        // reset
        const length = this.typeData.length + 1;
        this.name = `${this.type}_${length < 10 ? "0" + length : length}`;
        this.active = false;
        this.value = 0;
        this.date = this.dates[0];

        setTimeout(() => {
          this.selectDate = M.FormSelect.init(this.$refs.selectDate);
          M.updateTextFields();
        }, 0);
      }
    },
  },
  mounted() {
    this.type = this.types[0];
    this.date = this.dates[0];

    setTimeout(() => {
      this.selectType = M.FormSelect.init(this.$refs.selectType);
      this.selectDate = M.FormSelect.init(this.$refs.selectDate);
      M.updateTextFields();
    }, 0);
  },
  watch: {
    type() {
      const length = this.typeData.length + 1;
      this.name = `${this.type}_${length < 10 ? "0" + length : length}`;
    },
  },
};
</script>

<style  lang="scss" scoped>
h3 {
  margin-bottom: 50px;
}
.form {
  max-width: 400px;

  & > .input-field,
  p {
    margin-bottom: 30px;
  }
}
.invalid {
  color: #f44336;
}
</style>