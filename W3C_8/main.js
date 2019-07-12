var random = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
console.log(random)
let user =  prompt('Сколько вам лет?', 0);

function GoodWork(random_n, user_n) {
  if (random_n == user_n) {
    alert("GoodWork");
  }
  else {
    alert("Not matched")
  }
}

GoodWork(random, user);