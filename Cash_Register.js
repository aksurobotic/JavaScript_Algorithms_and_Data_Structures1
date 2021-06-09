/*
########### Cash RegisterPassed ###########
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/



function checkCashRegister(price, cash, cid) {
    const currency = {"PENNY":0.01, "NICKEL":0.05, "DIME":0.1, "QUARTER":0.25, "ONE":1, "FIVE":5, "TEN":10, "TWENTY":20, "ONE HUNDRED":100}
    var current = 0;
    
    var change = {status: "OPEN", change: []};
    //console.log(change.change)
    var chc = (cash - price).toFixed(2);
  
    //console.log(cid[cid.length-1][0])
    //console.log(currency[cid[cid.length-1][0]])
    for (let i =0 ; i < cid.length; i++){
      current = (current + cid[i][1]);
      let a= chc % currency[cid[cid.length-1-i][0]];
      let b =parseFloat((chc / currency[cid[cid.length-1-i][0]]).toFixed(2));
      
      let c = parseFloat(cid[cid.length-1-i][1].toFixed(2)) ;
  
      let d = parseFloat(Math.floor(b)*currency[cid[cid.length-1-i][0]].toFixed(2));
  
      if( b >= 1 ) {
        if (c <= d){ 
        change.change.push([cid[cid.length-1-i][0], c])
        chc = (chc - c).toFixed(2) }
         else  {change.change.push([cid[cid.length-1-i][0], d])
        chc = (chc - d).toFixed(2)} 
        
          }
     
  
      }
    
      if (current -(cash-price) === 0){ change.status = "CLOSED";
      change.change = cid}
      if (current < chc || chc > 0 ){
        change = {status: "INSUFFICIENT_FUNDS", change: []};
      }
    
      //console.log(change.change)
    return change;
  }
  
  console.log (checkCashRegister(19.50, 20,
                                 [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
     
                                )
                );