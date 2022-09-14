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

// add codes อันนี้เป็นตัวอย่างที่ไม่ดี เพราะสั้น และอ่านไม่รู้เรื่อง
// getJohnProfile().then((resolve) => {
//   console.log(resolve);
// });

// เพื่อรักษาความเป็นคนไว้ ควรจะทำแบบนี้
let displayProfile = (data) => {
  console.log(data);
};

getJohnProfile().then(displayProfile);
