const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("🏃 Promise 1 finished first"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("🐢 Promise 2 finished second"), 3000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("🐘 Promise 3 finished last"), 5000)
);
Promise.race([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
const fast = new Promise((ress) =>
  setTimeout(() => ress("Fast Promise resolved!"), 1000)
);
const medium = new Promise((ress) =>
  setTimeout(() => ress("Medium Promise resolved!"), 2000)
);
const slow = new Promise((ress) =>
  setTimeout(() => ress("Slow Promise resolved!"), 3000)
);
Promise.race([fast, medium, slow]).then((res) => console.log(res));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("⏳ Waiting...");
  await delay(2000); // waits for 2 seconds
  console.log("👋 Hello, after 2 seconds!");
}

greet();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function steps() {
  console.log("Step 1");
  await delay(1000);
  console.log("Step 2");
  await delay(1000);
  console.log("Step 3");
}

steps();
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("User:", user.name);
  } catch (error) {
    console.error("❌ Failed to fetch:", error);
  }
}

fetchUser();
async function getUsers() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/users/1",
      "https://jsonplaceholder.typicode.com/users/2",
      "https://jsonplaceholder.typicode.com/users/3",
    ];

    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((r) => r.json()));

    console.log(
      "👥 Users fetched:",
      data.map((u) => u.name)
    );
  } catch (err) {
    console.error("❌ Error fetching users:", err);
  }
}

getUsers();
