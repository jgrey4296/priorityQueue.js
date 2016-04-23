/* jshint esversion : 6 */
"use strict";
var PQ = require('./priorityQueue');

module.exports = {

    init : function(test){
        let pq = new PQ();
        test.ok(pq.empty());
        test.done();
    },

    simpleInsert : function(test){
        let pq = new PQ();
        pq.insert(5,5);
        test.ok(!pq.empty());
        test.done();
    },

    simpleRetrieval : function(test){
        let pq = new PQ();
        pq.insert(5,2);
        let val = pq.next();
        test.ok(val === 5);
        test.done();
    },

    simple_minimising_retrieval : function(test){
        let pq = new PQ();
        pq.insert(1,5);
        pq.insert(2,2);
        pq.insert(3,4);
        let val = pq.next();
        test.ok(val === 2,val);
        val = pq.next();
        test.ok(val === 3,val);
        val = pq.next();
        test.ok(val === 1,val);
        test.done();
    },

    simple_maximising_retrieval : function(test){
        let pq = new PQ(true);
        pq.insert(1,5);
        pq.insert(2,2);
        pq.insert(3,4);
        let val = pq.next();
        test.ok(val === 1);
        val = pq.next();
        test.ok(val === 3);
        val = pq.next();
        test.ok(val === 2);
        test.done();
    },

    simple_heapify_test : function(test){
        let pq = new PQ(),
            sampleArray = [1,2,4,3,2,5,6,10],
            sorted = sampleArray.sort((a,b)=>a-b);
        pq.heapify(sampleArray);

        while(sorted.length > 0){
            let a = sorted.shift(),
                b = pq.next();
            test.ok(a === b);            
        }        
        test.done();
    },

    simple_MAX_heapify_test : function(test){
        let pq = new PQ(true),
            sampleArray = [1,2,4,3,2,5,6,10],
            sorted = sampleArray.sort((a,b)=>b-a);
        pq.heapify(sampleArray);

        while(sorted.length > 0){
            let a = sorted.shift(),
                b = pq.next();
            test.ok(a === b);            
        }        
        test.done();
    },

    call_next_on_empty_pq : function(test){
        let pq = new PQ();
        test.throws(function(){
            pq.next();
        });        
        test.done();
    },

    single_element_retrieval_fail : function(test){
        let pq = new PQ();
        pq.insert(3);
        let retrievedVal = pq.next();
        test.ok(retrievedVal === 3);
        test.ok(pq.empty());        
        test.done();
    },

    priority_inference : function(test){
        let pq = new PQ();
        pq.insert({name : "blah", value : 3});
        pq.insert({name : "bloo", value : 5});
        let val = pq.next();
        test.ok(val.name === 'blah');
        test.ok(val.value === 3);
        test.done();
    },

    priority_inference_manual : function(test){
        let pq = new PQ();
        pq.value = "age";
        pq.insert({name : "bob", age : 23 });
        pq.insert({name : "jill", age : 20});
        let val = pq.next();        
        test.ok(val.name === 'jill');
        test.done();
    },

    priority_inference_fail : function(test){
        let pq = new PQ();
        test.throws(function(){
            pq.insert({name : "bob"});
        });        
        test.done();
    },
};
