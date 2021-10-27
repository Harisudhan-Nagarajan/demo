class Account {
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance= balance;
    }
    getBalance(){
        return "The balance is: "+ this.balance;
    }
    withdraw(amount){
        if(this.balance>=amount){
        this.balance = this.balance - amount;
        return this.getBalance();
        }
        else{
            return "insufficient fund";
        }
    }
    deposit(amount){
        this.balance +=amount;
        return this.getBalance();
    }
    
}
const Hari= new Account("Hari",123,20000000);
const Sudhan= new Account("Sudhan",124,100000);
const Suba = new Account("Suba",125,120000);
// Hari.getBalance();
 console.log(Hari.deposit(1));


// function getperimeter(length,width){
//     console.log(2*(length+width));
// }
// getperimeter(2,3);
// getperimeter(10,20);
// function s(name="hari",name1="sudhan"){
//    let h=name+name1;
//    return  h;
// }