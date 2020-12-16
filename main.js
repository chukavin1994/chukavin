var number = prompt("Введите число");
if(number > 7){
alert('Привет');
} else{
	alert('Число меньше 7');
}
var name = prompt("Введите имя");
if(name === 'Вячеслав'){
alert('Привет Вячеслав');
} else{
	alert('Нет такого имени');
};

function count(numbers, number) {
  var count = []; 
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % number === 0) {
      count.push(numbers[i]); 
    }
  }

  return count;
}

alert(count([4, 5, 6, 7, 8, 9, 12, 13, 18, 21, 3, 24], 3));