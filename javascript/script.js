const checkDriverAge = function() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
      alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
      alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
      alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
  };
  

  function checkDriverAge2(age) {
    if (age < 18) {
      return "Sorry, you are too young to drive this car. Powering off";
    } else if (age > 18) {
      return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
      return "Congratulations on your first year of driving. Enjoy the ride!";
    }
  }
  checkDriverAge2(20);
  function addNum(a,b){
    const result = a + b 
    return result;
  }
  const sumAll = addNum(1,2);
  console.log(sumAll);

  var array = ["Banana", "Apples", "Oranges", "Blueberries"];
  array.shift();
  array.sort();
  array.push("kiwi");
  array.shift(array.indexOf("apples"),0);
  array.sort().reverse()
  console.log(array)

  var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
  console.log(array2[1][1][0]);

  var database = [
    {   username:'salisu',

        password:'adamu'
        
    },

  ]
  var newsfeed = [
    {
        username:"tboy",

        timeline:'javascript is hard'
    },
    {
        username:'joseph',

        timeline:'keep trying'
    },
    {
        username:'series',

        timeline:'keep tying'
    },
  ]

  var dataDase = [
    {
      username: 'salisu',
      password: 'adamu'
    }
  ];
    //var user = prompt('what is ur name');
    //var pass = prompt('what is your password');
  

  
  function signin(user, pass) {
    if (user === dataDase[0].username && pass === dataDase[0].password) {
      console.log(newsfeed);
      

    } else {
      alert('Wrong detail');
    }
  }
  
  
  signin(user,pass);  
  
  var names = ['joseph','gowon','series']
  names.forEach(function(names){
    console.log('hello' + names + '!')
  })
  do {
    
  } while (condition);

  var numbers = [10, 20, 30, 40, 50];
  var total = 0;
  numbers.forEach(function(index){
    total += index;
  })
  console.log('the total number is '+ total)
  

  


 
  
