import _ from "lodash";

export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      pageCount: 0,
      allItems: [],
      pageItems: [],
    };
  },
  methods: {
    setupPagination(data) {
      this.allItems = _.chunk(data, this.pageSize);
      this.pageCount = _.size(this.allItems);
      this.pageItems = this.allItems[this.page - 1] || this.allItems[0];
    },
    changePage(page) {
      this.page = page;
      this.pageItems = this.allItems[page - 1] || this.allItems[0];
    },
  }
}