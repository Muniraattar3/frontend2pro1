/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee =>{
        if(employee.profession === "developer"){
            console.log(employee)
        }
    });
  }
  PrintDeveloperbyMap();


  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee =>{
      if(employee.profession === "developer"){
        console.log(employee)
      }
    });
  }
  PrintDeveloperbyForEach()

  function addData() {
    //Write your code here, just console.log
    arr.push({id: 4, name: "susan", age:"20", profession:"intern"});
    console.log(arr)
  }
  addData()
  
  function removeAdmin() {
    //Write your code here, just console.log
    let updatedarr = arr.filter(employee => employee.profession !== "admin");
    console.log(updatedarr)
  }
  removeAdmin()
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 =[
      {id: 4, userName: "Tony", hobby: "Acting", city: "NewYork"},
      {id: 5, userName: "Lina", hobby: "Painting", city: "California"},
      {id: 6, userName: "Tony", hobby: "Acting", city: "Los Angeles"}
    ];
    console.log(arr1)

    let concatearrays = arr.concat(arr1);
  console.log(concatearrays)
  }
  concatenateArray()
