//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

inputArray = [1, 2, 3, 4, 56, 77, 88, 6, 'y', 'ho', 89, 0, 43, 0, 5, 32];
let numberChet = 0;
let numberNechet = 0;
let number0 = 0;
inputArray.forEach(function(item, index, array){
    if (typeof item == 'number') { //Если это число
        if (item == 0) { number0++ } else //Если это ноль то увеличиваем счетчик нулей
        { if (item % 2 == 0) { numberChet++ } else { numberNechet++ } ;} //Если четное число то увел счетчик иначе увел счет нечет
    }
});
console.log("Кол-во нулей " + number0);
console.log("Кол-во четных " + numberChet);
console.log("Кол-во нечетных " + numberNechet);