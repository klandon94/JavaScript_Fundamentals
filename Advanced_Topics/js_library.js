var _ = {
    // Produces a new array of values by mapping each value in list through a transformation function
    map: function(arr, callback){
        for (let i = 0; i < arr.length; i++){
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    // Boils down an array of values into a single value based on function provided
    reduce: function(arr, callback){
        let value = 0;
        for (let i = 0; i < arr.length; i++){
            value = callback(value, arr[i]);
        }
        return value;
    },
    // Looks through each value in the array and returns the first one that passes a given predicate
    find: function(arr, callback){
        for (let i = 0; i < arr.length; i++){
            if (callback(arr[i])) return arr[i];
        }
        return null;
    },
    // Looks through each value in the array and returns an array of all the values that pass a predictae
    filter: function(arr, callback){
        newarr = []
        for (let i = 0; i < arr.length; i++){
            if (callback(arr[i])) newarr.push(arr[i]);
        }
        if (newarr.length == 0) return null;
        return newarr;
    },
    // Opposite of filter, returns the values in the array that do not pass the predicate
    reject: function(arr, callback){
        newarr = []
        for (let i = 0; i < arr.length; i++){
            if (!callback(arr[i])) newarr.push(arr[i]);
        }
        if (newarr.length == 0) return null;
        return newarr;
    }
}

var trips = _.map([1,2,3,4,5,6], function(num){return num * 3;});
console.log(trips);
var evens = _.filter([1,3,2,4,5,6], function(num){return num % 2 == 0;});
console.log(evens);
var odds = _.reject([1,2,3,4,5,6], function(num){return num % 2 == 0;});
console.log(odds);
var greater100 = _.find([80,17,30,105,200], function(num){return num>100;});
console.log(greater100);
var sum = _.reduce([1,2,3,4,5,6], function(x, y){return x+y;});
console.log(sum);