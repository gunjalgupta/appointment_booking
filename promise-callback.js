//Using Callbacks

function concatString(previous, current, callback){
    setTimeout(
      () => {
        callback((previous + ' ' + current))
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

  function concatAll(){
    concatString('', 'Output', result => {
      concatString(result, 'Using', result => {
        concatString(result, 'Callbacks', result => {
         console.log(result) 
        })
      })
    })
  }
  concatAll()

// Using promise
 function concatString(previous, current){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(previous + ' ' + current)
        }, 
        Math.floor(Math.random() * 100) + 1
      )
    })
  }
  function concatAll(){  
    concatString('', 'Output ')
    .then(result => concatString(result, 'using'))
    .then(result => concatString(result, 'Promise'))
    .then(result => {
      console.log(result) // Prints out " A B C"
    })
  }
  concatAll()
 
//Using async await
  async function concatAll(){
    let toPrint = await concatString('', 'Output ')
    toPrint = await concatString(toPrint, 'using ')
    toPrint = await concatString(toPrint, 'async-await')
    console.log(toPrint);
  }
  concatAll()