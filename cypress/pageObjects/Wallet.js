class Wallet
{
    //Reject metamask Transaction
    RejectTransaction(){
        cy.rejectMetamaskTransaction()
    }
    //Confirm metamask transaction
    ConfirmTransaction(){
        cy.confirmMetamaskTransaction()
    }
    //Reject metamask approval
    RejectPermisssionTransaction(){
        cy.rejectMetamaskPermissionToSpend()
    }
    //Confirm metamsk approval
    ConfirmPermisssionTransaction(){
        cy.confirmMetamaskPermissionToSpend()
    }
    //Get metamask connected wallet address
    GetWalletAddress(){
        cy.getMetamaskWalletAddress()
    }
    //Reject Signature request
    RejectSignRequest(){
        cy.rejectMetamaskSignatureRequest()
    }
    //Confirm sigature request
    ConfirmSignRequest(){
        cy.confirmMetamaskSignatureRequest()
    }
    //Disconnect metamask wallet from current application
    DisconectWallet(){
        cy.disconnectMetamaskWalletFromDapp()
    }
    //Disconnect metamask wallet from all application connected with metamask
    DisconectWalletFromAllDapp(){
        cy.disconnectMetamaskWalletFromAllDapps()
    }
    //Allow metamask to add network
    AllowAddNetwork(){
        cy.allowMetamaskToAddNetwork()
    }
    //Reject metamask to add network
    RejectAddNetwork(){
        cy.rejectMetamaskToAddNetwork()
    }
    //Change metamsk metamask network to Kovan
    ChangeNetworkToKovan(){
        cy.changeMetamaskNetwork('Kovan')
    }
    //Change metamsk metamask network to Rinkeby
    ChangeNetworkToRinkeby(){
        cy.changeMetamaskNetwork('Rinkeby')
    }
    //Change metamsk metamask network to Goerli
    ChangeNetworkToGoerli(){
        cy.changeMetamaskNetwork('Goerli')
    }
    //Change metamsk metamask network to Ropsten
    ChangeNetworkToRopsten(){
        cy.changeMetamaskNetwork('Ropsten')
    }
    //Change metamsk metamask network to Sepolia
    ChangeNetworkToSepolia(){
        cy.changeMetamaskNetwork('Sepolia')
    }
    //Switch metamask account by giving account name or account number 
    SwitchAccount(){
        cy.switchMetamaskAccount(accountNameOrAccountNumber)
    }



}

export default Wallet