# Priority Queue

Your standard heap based priority queue

## Dependencies:
[lodash](https://lodash.com/)  
[NodeUnit](https://github.com/caolan/nodeunit) for unit tests

## Basic Usage

For Node.js use [amdefine](https://github.com/jrburke/amdefine) then:
``` 
    //Require the library:
    let PriorityQueue = require('priorityQueue');
    //Create one:
    let pq = new PriorityQueue(),//Minimising
        pq2 = new PriorityQueue(true);//Maximising
```

Require.js:
```
    require('priorityQueue',function(PriorityQueue){
        let pq = new PriorityQueue();
    });
```

### Inserting Values
Insert a value with a specified priority:
```
    pq.insert({name : "bob"}, 5);
    pq.insert({name : "bill"}, 10);
```
Insert an int value, infer priority:
```
    pq.insert(3);
    pq.insert(5);
```
The pq will automatically try to use the pq.value field applied to the data
to infer priority:
```
    pq.insert({name : "bob", value : 5});
```
Which can be set manually:
```
    pq.value = "age";
    pq.insert({name : "bob", age : 20});
```

### Retrieving Values
Get a value out:
```
    let val = pq.next();
    //val === {name:"bob"} for minimising pq
```

### Empty
Check for the priority queue to be empty:
```
    if(pq.empty()){
        console.log("pq is empty");
    }
```

### Comparisons:
The internal comparison function is `pq.comp`, which for min heaps takes the form:
```
    this.comp = (a,b,i,j)=> a.p < b.p ? i : j;
```
Or `>` for max heaps. It takes two objects, `a` and `b`, which are objects with `data`
and `p` fields, while `i` and `j` are the indices for those objects in the heap



