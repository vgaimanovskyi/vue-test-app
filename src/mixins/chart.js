export default {
  computed: {
    dates() {
      return this.$store.getters.getDates;
    },
  },
  methods: {
    chart(filterData, filter) {
      this.renderChart(
        {
          labels: this.dates,
          datasets: this.buildChartSet(filterData),
        },
        {
          title: {
            display: true,
            text: `${filter} charts`.toUpperCase(),
            fontSize: 14,
          },
          legend: {
            position: "bottom",
          },
          maintainAspectRatio: false,
          // responsive: true,
        }
      );
    },
    buildChartSet(filterData) {
      const datasets = [];
      const colors = [
        "#3e95cd",
        "#8e5ea2",
        "#3cba9f",
        "#e8c3b9",
        "#c45850",
        "#ce93d8",
        "#d500f9",
        "#90caf9",
        "#1565c0",
        "#e6ee9c",
      ];
      filterData.forEach((item, idx) => {
        const obj = {
          data: item.history.map((i) => i.value),
          label: item.name,
          borderDash: item.active ? [] : [5, 5],
          pointBackgroundColor: item.active ? colors[idx] : "red",
          borderColor: colors[idx],
          fill: false,
        };
        datasets.push(obj);
      });
      return datasets;
    },
  }
}