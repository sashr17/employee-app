const findById = (id, list) => {
  let filteredList = [];
  filteredList = list.filter(item => {
    if (item.id === id) {
      return item;
    }
  });

  return filteredList.length > 0 ? filteredList.pop() : "";
};

module.exports = {
  findById
};
