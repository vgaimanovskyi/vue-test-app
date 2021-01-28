import M from "materialize-css";

export default {
  install(Vue) {
    Vue.prototype.$message = function (html) {
      M.toast({ html })
    }
  }
}