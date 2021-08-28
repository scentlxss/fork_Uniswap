pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

// the quick way to create a ERC20 Token
contract Token2 is ERC20Detailed, ERC20 {
	constructor() ERC20Detailed('token 2','tk2',18) public {}


}
