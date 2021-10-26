// Create a function that accepts another function as an argument
var namefun = (fun) => {
    // Calls the function with any required arguments
    return fun("Preeti Thakur", 21)
  }
  // Callback gets arguments from the above call
 var callback = (name, age) => {
    return "My name is "+name+" and I am "+age+" years old."
  }
  // Passing a callback into a callback accepting function
 var result = namefun(callback)
 console.log(result) 