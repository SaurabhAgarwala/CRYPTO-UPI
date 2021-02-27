/**
 *Submitted for verification at Etherscan.io on 2021-02-27
*/

pragma solidity ^0.4.24;


contract CryptoUPI{
    
    address public owner;
    
    uint256 public ttlUsers;
    
    struct User{
        address acnt;
        uint256 mob;
        string name;
        uint256 id;
        bool valid;
    }
    
    mapping( uint256 => User ) users;
    mapping( address => uint256 ) addrMob;
    mapping( uint256 => address ) mobAddr;
    mapping( address => uint256 ) otps;

    constructor() public{
        owner = msg.sender;
        ttlUsers=0;
    }
    
    event OTPgenerated(uint256 mobNo);
    event userRegistered(address addr, uint256 mobNo);
    
    function generateOTP( uint256 mobNo ) external{
        uint256 otp=122563;
        otps[msg.sender] = otp;
        mobAddr[mobNo]=msg.sender;
        addrMob[msg.sender]=mobNo;
        emit OTPgenerated(mobNo);
    }
    
    function getOTP( uint256 mobNo ) external view returns(uint256){
        require(msg.sender==owner);
        return otps[mobAddr[mobNo]];
    }
    
    function register(uint256 mobNo, string name, uint256 otp) external{
        require( otps[ msg.sender ]==otp , "1. OTP should be correct." );
        require( otps[ mobAddr[mobNo] ]==otp , "2. OTP should be correct." );
        
        ttlUsers+=1;
        
        User memory user;
        user.acnt=msg.sender;
        user.mob=mobNo;
        user.name=name;
        user.id=ttlUsers;
        user.valid=true;
        
        users[mobNo]=user;
        
        emit userRegistered(msg.sender,mobNo);
    }
    
    function isRegistered(uint256 mobNo) external view returns(bool){
        if( users[mobNo].id == 0 ){
            return false;
        }else{
            return true;
        }
    }
    
    function getUserName( uint256 mobNo) external view returns(string){
        return users[mobNo].name;
    }
    
    function getUserAddress( uint256 mobNo ) external view returns(address){
        return users[mobNo].acnt;
    }
}
