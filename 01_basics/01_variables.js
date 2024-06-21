const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 will be not allowed because its declared as a const.


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var its old and, 
because of issues in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])