export const countItemPerCustomer = (id, items) => {
  let result = [];
  for (let index = 0; index < items.length; index++) {
    if (id === items[index][1].customer_id) {
      result.push(items[index]);
    }
  }
  return result;
};
