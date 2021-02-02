<template>
  <div>
    <h1 class="page-caption">Home page</h1>
    <!-- ChangeModal -->
    <ChangeModal
      v-if="openChangeModal"
      :item="item"
      @closeModal="toggleChangeModal"
    />

    <!-- AddModal -->
    <AddModal v-if="openAddModal" :item="item" @closeModal="toggleAddModal" />

    <!-- DelModal -->
    <DelModal v-if="openDelModal" :delID="delID" @closeModal="toggleDelModal" />

    <!-- Chart -->
    <div class="chart">
      <canvas ref="canvas"></canvas>
    </div>

    <!-- Filter -->
    <div class="input-field">
      <select ref="select" v-model="filter">
        <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
      </select>
      <label>Type filter</label>
    </div>

    <!-- Table -->
    <Loader v-if="loading" />
    <div v-else class="table-container">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last value</th>
            <th>Last Date</th>
            <th>Add value</th>
            <th>Del item</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in pageItems" :key="item.id">
            <td>
              <b>{{ index + 1 + (page - 1) * pageSize }}</b>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>
              <button
                type="button"
                class="btn custom-btn"
                :class="[item.active ? 'green' : 'red']"
                @click="change(item)"
              >
                <span class="show-status">
                  {{ item.active ? "Active" : "Disabled" }}
                </span>
                <i class="show-icon material-icons">
                  {{ item.active ? "bluetooth" : "error" }}
                </i>
              </button>
            </td>
            <td>{{ item.history[item.history.length - 1].value }}</td>
            <td>{{ item.history[item.history.length - 1].date }}</td>
            <td>
              <button class="btn" @click="add(item)">
                <i class="material-icons">add_circle</i>
              </button>
            </td>
            <td>
              <button class="btn red" @click="del(item.id, item.name)">
                <i class="material-icons">delete</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <Paginate
      v-if="pageCount > 1"
      :page-count="pageCount"
      :click-handler="changePage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :active-class="'active blue darken-3'"
    />
  </div>
</template>

<script>
import M from "materialize-css";
import ChangeModal from "@/components/ChangeModal";
import AddModal from "@/components/AddModal";
import DelModal from "@/components/DelModal";
import paginationMixin from "@/mixins/pagination";
import chartMixin from "@/mixins/chart";
import { Line } from "vue-chartjs";

export default {
  name: "Home",
  components: { ChangeModal, AddModal, DelModal },
  extends: Line,
  mixins: [paginationMixin, chartMixin],
  data() {
    return {
      openChangeModal: false,
      openAddModal: false,
      openDelModal: false,
      delID: null,
      item: {},
      filter: null,
    };
  },
  computed: {
    data() {
      return this.$store.getters.getData;
    },
    types() {
      return this.$store.getters.getTypes;
    },
    filterData() {
      return this.data.filter((item) => item.type === this.filter);
    },
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    // modals
    change(item) {
      this.item = item;
      this.toggleChangeModal();
    },
    toggleChangeModal() {
      this.openChangeModal = !this.openChangeModal;
    },
    add(item) {
      this.item = item;
      this.toggleAddModal();
    },
    toggleAddModal() {
      this.openAddModal = !this.openAddModal;
    },
    del(id, name) {
      this.delID = { id, name };
      this.toggleDelModal();
    },
    toggleDelModal() {
      this.openDelModal = !this.openDelModal;
    },

    // pagination in paginationMixin

    // chart in chartMixin
  },
  mounted() {
    this.filter = this.types[0];

    // await this.$store.dispatch("fetchDataByType");

    this.setupPagination(this.filterData);
    this.chart(this.filterData, this.filter);

    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
      M.updateTextFields();
    }, 0);
  },
  watch: {
    filterData() {
      this.setupPagination(this.filterData);
      this.chart(this.filterData, this.filter);
    },
    filter() {
      this.page = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  max-width: 300px;
}
.custom-btn {
  @media screen and (min-width: 600px) {
    display: block;
    width: 100px;
  }
}
.chart {
  position: relative;
  min-height: 450px;
  margin-bottom: 40px;

  @media screen and (max-width: 991px) {
    min-height: 400px;
  }
  @media screen and (max-width: 599px) {
    min-height: 350px;
  }
  @media screen and (max-width: 399px) {
    min-height: 300px;
  }
}
.table-container {
  overflow-x: auto;
}
.show-icon {
  display: none;
}
@media screen and (max-width: 599px) {
  .show-status {
    display: none;
  }
  .show-icon {
    display: inline-block;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
