const data = {
  name: 1,
  items: [
    { name: 2, items: [{ name: 3 }, { name: 4 }] },
    { name: 5, items: [{ name: 6 }] },
  ],
};

const hasItemsArray = (data) =>
  !!data && data.items && Array.isArray(data.items);

const printDir = (data, counter) => {
  const indent = counter > 1 ? " " : "";
  const connector = counter > 1 ? "│" + indent.repeat(counter) + "└" : "├";
  console.log(connector + "─".repeat(counter * 4), data.name);
};

function tree(data, count = 0) {
  let counter = count;
  if (data.items) {
    printDir(data, counter);
    if (hasItemsArray(data)) {
      counter++;
      data.items.map((x) => tree(x, counter));
    }
  } else {
    printDir(data, counter);
  }
}
tree(data);
