const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let returnArray; 
      
      if (typeof collection === "array") {
        // if array then extract all elements using slice
        returnArray = collection.slice();
      } else {
        // else extract all values using values method 
        returnArray = Object.values(collection);
      }

      for (let x = 0; x < returnArray.length; x++) {
        callback(returnArray[x]);
      };

      return collection;
    },

    map: function(collection, callback) {
      let returnArray = []; 
      
      if (typeof collection === "object") {
        collection = Object.values(collection);
      };
       
      for (let x = 0; x < collection.length; x++) {
        returnArray.push(callback(collection[x]));
      };

      return returnArray;
    },

    reduce: function(collection, callback, total) {
      let collectionCopy = collection.slice();
      
      if (!total) {
        total = collectionCopy[0];
        collectionCopy = collectionCopy.slice(1);
      };

      for (let x = 0; x < collectionCopy.length; x++) {
        total = callback(total, collectionCopy[x], collectionCopy);
      };

      return total;
    },

    find: function(collection, predicate) {

      if (typeof collection === "object") {
        collection = Object.values(collection);
      };
       
      for (let x = 0; x < collection.length; x++) {
        if (predicate(collection[x])) {
          return collection[x]; 
        };
      };

      return undefined;
    },

    filter: function(collection, predicate) {
      
      let returnArray = [];

      if (typeof collection === "object") {
        collection = Object.values(collection);
      };

      for (let x = 0; x < collection.length; x++) {
        if (predicate(collection[x])) {
          returnArray.push(collection[x]); 
        };
      };

      return returnArray;

    },

    size: function(collection) {

      if (typeof collection === "object") {
        collection = Object.keys(collection);
      };


      return collection.length;
    },

    first: function(collection, size) {
      if (!size) {
        return collection[0];
      } else {
        return collection.slice(0, size);
      }
    },

    last: function(collection, size) {
      if (!size) {
        return collection[collection.length - 1];
      } else {
        return collection.slice(collection.length - size, collection.length);
      }
    },

    compact: function(collection) {
      const falsy = [false, null, 0, "", undefined, NaN];
      return collection.filter(element => !falsy.includes(element));
    },

    sortBy: function(collection, callback) {
      let returnArray = collection.slice();
      return returnArray.sort(function(x, y) {
        return callback(x) - callback(y);
      });
    },

    flatten: function() {
 
    },

    uniq: function(collection, isSorted=false, callback=false) {
      if (isSorted) {
        const sort = [collection[0]];
        for (let x = 1; x < collection.length; x++) {
          if (sort[x - 1] !== collection[x])
            sort.push(collection[idx]);
        }
        return sort;
      } else if (!callback) {
        return Array.from(new Set(collection));
      } else {
        const updated = new Set()
        const unique = new Set()
        for (let x of collection) {
          const modified = callback(x)
          if (!updated.has(modified)) {
            updated.add(modified)
            unique.add(x)
          }
        }
        return Array.from(unique)
      }
    },

    keys: function(obj) {
       let keys = [];
       for (let key in obj){
         keys.push(key);
       }
       return keys;
    },

    values: function(obj) {
      let values = [];
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

    giveMeMore: function() {

    },


  }
})()

fi.libraryMethod()
