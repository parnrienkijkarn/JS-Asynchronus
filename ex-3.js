let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
// อันนี้หาความ Dry ไม่ได้
// getJohnProfile().then((resolve) => {
//   console.log(resolve);
// });
// getJohnOrders().then((resolve) => {
//   console.log(resolve)
// });

// ถ้าจะให้ Dry ต้องเอามันมาประกาศเป็น function ก่อนแบบนี้
const johnProfile = (data) => {
  console.log(data);
};

const johnOrder = (data) => {
  console.log(data);
};

getJohnProfile().then(johnProfile).then(getJohnOrders).then(johnOrder);
