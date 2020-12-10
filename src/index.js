const posts = [
  { title: 'Ichi', body: 'One' },
  { title: 'Ni', body: 'Two' }
];

function myFunc() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function mySecondFunc(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// mySecondFunc({ title: 'San', body: 'Three' }, myFunc);

// function mySecondFunc(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = true;

//       (!error) ? resolve() : reject('Error: something went wrong');
//     }, 2000);
//   });
// }

// mySecondFunc({ title: 'San', body: 'Three' }).then(myFunc).catch(err => console.log(err));

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchData();