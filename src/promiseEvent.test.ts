import "./";

describe("Event promise wrapper", () => {
  describe("Window events", () => {
    it("works", (cb) => {
      window.on("load").then(() => cb());
      window.dispatchEvent(new Event("load"));
    });
  });
  describe("Document events", () => {
    it("works", (cb) => {
      document.on("load").then(() => cb());
      document.dispatchEvent(new Event("load"));
    })
  })
  describe("Element events", () => {
    const el = document.createElement("p");
    it("works", (cb) => {
      el.on("click").then(() => cb());
      el.dispatchEvent(new MouseEvent("click"));
    });
  });
});
