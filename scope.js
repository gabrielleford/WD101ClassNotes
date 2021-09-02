/*
Scope is simply the hierarchy of variables
- Global scope or parent scope
- Local scope or child scope
*/

let global = 'earth';

function scopeExample() {
    let local = 'fishers';
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}.`);
}

scopeExample();
// Local variable cannot be accessed outside the function
// console.log(local);