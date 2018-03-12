const seconds = (x) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve(console.log("Hello")) }, x);
  })
  return promise
}

const sleep = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve() }, Math.random() * ms);
  })
  return promise
}

seconds(2000)

sleep(2000)
  .then(_ => console.log("I'm done sleeping!"))
  .then(_ => sleep(2000))
  .then(_ => console.log("Oops, I fell asleep again.."))
