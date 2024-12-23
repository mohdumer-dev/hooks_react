let value
function getdata(){
    console.log("Data received")
  }
  function dataDebounce(){
    clearTimeout(value)
   value= setTimeout(getdata,200)
  }
  dataDebounce()
  dataDebounce()
  dataDebounce()
  dataDebounce()
  dataDebounce()