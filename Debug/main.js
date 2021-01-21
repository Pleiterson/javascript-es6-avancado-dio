class app {
  constructor() {
    this.bind();
  }
  bind() {
    debugger;
    document.querySelector(".add-button").addEventListener("click", () => {
      this.handleClick(1);
    });

    debugger;
    document.querySelector(".sub-button").addEventListener("click", () => {
      this.handleClick(-1);
    });
  }

  handleClick(params) {
    const counter = document.querySelector(".counter");
    const value = parseInt(counter.innerHTML);
    counter.innerHTML = value + params;
  }
}

new app();
