const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses ) {
	let weth;
	const FACTORY_ADDRESS = '0x013CfCd596FF72A8209f44eB72FDD33C351Be8cc';

	if(network === 'mainnet'){
		weth = await WETH.at("");
	} else {
		await deployer.deploy(WETH);
		weth = await WETH.deployed();
	}

	await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
	router = await Router.deployed();
};
