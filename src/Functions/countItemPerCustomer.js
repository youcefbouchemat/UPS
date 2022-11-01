export const countItemPerCustomer = (id, items) => {
  let count = 0;
  for (let index = 0; index < items.length; index++) {
    if (id === items[index][1].customer_id) {
      count += 1;
    }
  }
  return count;
};
