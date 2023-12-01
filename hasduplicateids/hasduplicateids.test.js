const hasDuplicateIds = require("./hasDuplicateId");

describe("DOM has a Duplicate IDs", () => {
  let root;
  beforeEach(() => {
    // create mock elements
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);
  });

  afterEach(() => {
    root = null;
  });

  it("should be a function", () => {
    expect(typeof hasDuplicateIds).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof hasDuplicateIds()).toEqual("boolean");
  });
  it("should return false if no root", () => {
    expect(hasDuplicateIds).toBeFalsy();
  });
  it("should return true if the are duplicate IDs", () => {
    // Add duplicate ids
    root.id = "";
    root.children[0].id = "child";
    root.children[1].id = "child";


    const result = hasDuplicateIds(root);

    expect(result).toEqual(true);
  });
});
