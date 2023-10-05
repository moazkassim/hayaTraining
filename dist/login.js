function checkAccount() {
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  console.log(password.value);
  console.log(email.value);
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: email.value,
      password: password.value,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((location.href = "./home.html"));
}
// fetch("https://fakestoreapi.com/users/1", { mode: "cors" })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/users/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//

// fetch("https://fakestoreapi.com/auth/login", {
//   method: "POST",
//   body: JSON.stringify({
//     username: "mor_2314",
//     password: "83r5^_",
//   }),
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/auth/login", {
//   method: "POST",
//     headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: "mor_2314",
//     password: "83r5^_",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
