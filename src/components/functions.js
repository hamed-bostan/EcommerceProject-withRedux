const shorten = (title) => {
  const sliceTitle = title.split(" ");
  const newTitle = `${sliceTitle[0]} ${sliceTitle[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const object = state.selectedItems.find((item) => item.id === id);
  if (object) {
    return object.quantity;
  } else {
    return;
  }
};

export { shorten, isInCart, quantityCount };
