const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    handleClick(isAdd, value) {
      if (isAdd) {
        this.counter += value;
      } else {
        this.counter -= value;
      }
    },
    updateName(e, value) {
      this.name = e.target.value + value;
    },
  },
});

app.mount("#events");
