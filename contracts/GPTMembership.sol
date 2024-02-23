// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GPTMemebership is ERC721 {

    // State Variable
    address public owner;
    uint256 public membershipTypes;
    uint256 public totalMemberships;

    string public MY_CONTRACT = "JEREMIAH T.A";
    
    // Struct
    struct Membership {
        uint256 id;
        string name;
        uint256 cost;
        string date;
    } 

    struct UserMembership {
        uint256 id;
        uint256 membershipId;
        address addressUser;
        uint256 cost;
        string expireDate;
    }

    // Mapping 
    mapping (address => UserMembership) userMemberships;
    mapping (uint256 => Membership) memberships;
    mapping (uint256 => mapping (address => bool)) public hasBought;
    mapping (uint256 => mapping (uint256 => address)) public membershipTaken;
    mapping (uint256 => uint256[]) membershipsTaken; 


    // Modifier
    modifier onlyOwner () {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    // Constructor
    constructor (
        string memory _name, 
        string memory _symbol
        ) ERC721 (_name, _symbol) {
            owner = msg.sender;
    } 

    // functions
    
    // function to create a membership 
    function list (
        string memory _name, 
        uint256 _cost, 
        string memory _date
        ) public onlyOwner {
            membershipTypes++;
            memberships[membershipTypes] = Membership(
                membershipTypes,
                _name,
                _cost,
                _date
            );
    }

    // function to 
    function mint (
        uint256 _membershipId, 
        address _user,
        string memory _expiredDate
    ) public payable {
        require(_membershipId != 0, "Invalid membershipId");
        require(_membershipId <= membershipTypes);

        require(msg.value >= memberships[_membershipId].cost, "Insufficent funds");
        totalMemberships++;

        userMemberships[_user] = UserMembership(
            totalMemberships,
            _membershipId,
            _user,
            memberships[_membershipId].cost,
            _expiredDate
        );

        hasBought[_membershipId][msg.sender] = true;
        membershipTaken[_membershipId][totalMemberships] = msg.sender;

        membershipsTaken[_membershipId].push(totalMemberships);

        _safeMint(msg.sender, totalMemberships);
    }

    function getMemebership (uint256 _memebeshipId) public view returns (Membership memory) {
        return memberships[_memebeshipId];
    }

    function getMemebershipTaken (uint256 _membershipId) public view returns (uint256[] memory) {
        return membershipsTaken[_membershipId];
    }

    function withdarw () public onlyOwner() {
        (bool success,) = owner.call{value: address(this).balance}("");
        require(success);
    }

    function getUserMembership (address _address) public view returns (UserMembership memory) {
        return userMemberships[_address];
    }
}