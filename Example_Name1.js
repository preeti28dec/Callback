var namefun = (fun) => {
    return fun("Preeti" ,"Thakur.")
  }
 var callback = (name,seranme) => {
    return "My first name is "+name+" and last name is "+seranme
  }
 var result = namefun(callback)
 console.log(result) 