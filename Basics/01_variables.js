const accountId = 123456;
let accountName = "Itachi";
var accountEmail = "itachi@gmail.com";
accountPassword = "123QWE";

// accountId = 12; //Not allowed(const)

accountName = "Uchiha";
accountEmail = "uchiha@gmail.com";
accountPassword = "123qwe";

/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/
console.log(accountId);
console.table([accountName,accountEmail,accountPassword]);