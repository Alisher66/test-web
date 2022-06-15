// 5.  Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом).
// На вход подаются два массива.
// На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]



function getArr(arr1, arr2) {
    let duplicateArr1 = getDuplicateEls(arr1);
    let duplicateArr2 = getDuplicateEls(arr2);

    let res = [];
    duplicateArr1.forEach(el => {
        if (duplicateArr2.includes(el)) {
            res.push(el)
        }
    })
    return res.sort();
}

function getDuplicateEls(arr) {
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] == arr[k]) {
                res.push(arr[i])
                break;
            }
        }
    }

    return Array.from(new Set(res));
}



console.log(getArr([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))


// потратил 15 минут для выполнение