pragma solidity ^0.4.17;

contract Inbox{
    string public message;
    
    // constructor function as name is same as contract / class
    function Inbox(string initialMessage) public{
        message = initialMessage;
    }
    
    // update the value
    function setMessage(string newMessage) public{
        message=newMessage;
    }
    
    // fetch the value
    function getMessage() public view returns(string){
        return message;
    }
    
}


// public private view constant pure payable 

