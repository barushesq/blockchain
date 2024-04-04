var H=Object.defineProperty,$=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var I=(a,e,s)=>e in a?H(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,T=(a,e)=>{for(var s in e||(e={}))U.call(e,s)&&I(a,s,e[s]);if(k)for(var s of k(e))_.call(e,s)&&I(a,s,e[s]);return a},M=(a,e)=>$(a,Q(e));import{j as F,r as i,H as W,A as R,R as G,p as J,W as K,C as V,a as X,S as Y,B as Z,b as f0,c as e0,d as t0,e as a0}from"./vendor.37bc1fb4.js";const s0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))b(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&b(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function b(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};s0();const f=F.exports.jsx,t=F.exports.jsxs,n0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})});var L="/blockchain/assets/TEC1.465c427b.png";const c0=({onClose:a})=>t("div",{className:"bg-white p-4 rounded-md shadow-md",children:[f("div",{className:"text-lg font-bold mb-2",children:"\xBFQu\xE9 es Metamask y por qu\xE9 necesito usarlo para realizar transacciones en la Testnet Sepolia?"}),f("div",{className:"mb-4",children:t("p",{children:[f("strong",{children:"Respuesta:"})," Metamask es una billetera de criptomonedas que funciona como una extensi\xF3n de navegador y permite a los usuarios interactuar con aplicaciones descentralizadas (dApps) en la blockchain de Ethereum. En nuestro caso, para realizar transacciones en la Testnet Sepolia, Metamask es necesario para autenticar las transacciones y garantizar la seguridad de las operaciones en la red de prueba."]})}),f("div",{className:"text-lg font-bold mb-2",children:"\xBFC\xF3mo puedo instalar Metamask y configurarlo para la Testnet Sepolia?"}),f("div",{className:"mb-4",children:t("p",{children:[f("strong",{children:"Respuesta:"})," Puede instalar Metamask desde la tienda de extensiones de su navegador (Chrome, Firefox, Brave, etc.) y luego configurarlo para conectarse a la Testnet Sepolia. Una vez configurado correctamente, podr\xE1 utilizar Metamask para realizar transacciones en la Testnet sin problemas."]})}),f("div",{className:"text-lg font-bold mb-2",children:"\xBFQu\xE9 precauciones de seguridad debo tomar al utilizar Metamask y realizar transacciones en la Testnet Sepolia?"}),f("div",{children:t("p",{children:[f("strong",{children:"Respuesta:"})," Es importante mantener su billetera Metamask segura y protegida. Aseg\xFArese de utilizar contrase\xF1as seguras y nunca comparta su frase de recuperaci\xF3n con nadie. Adem\xE1s, siempre verifique las direcciones de destino antes de confirmar una transacci\xF3n."]})}),f("div",{className:"text-right mt-4",children:f("button",{className:"text-blue-500",onClick:a,children:"Cerrar"})})]}),r0=()=>{const[a,e]=i.exports.useState(!1),[s,b]=i.exports.useState(!1),n=()=>{window.open("https://metamask.io/download/","_blank")},c=()=>{window.open("https://sepolia.etherscan.io/","_blank")};return t("nav",{className:"w-full flex md:justify-center justify-between items-center p-4 relative z-50",children:[f("div",{className:"md:flex-[0.3] flex-initial justify-center items-center",children:f("img",{src:L,alt:"logo",className:"w-20 cursor-pointer"})}),f("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:["Instalar Metamask","Etherscan","FAQ"].map((l,d)=>f("li",{className:"mx-4 cursor-pointer text-lg",onClick:()=>{l==="Instalar Metamask"?n():l==="Etherscan"?c():l==="FAQ"&&b(!0)},children:l},l+d))}),t("div",{className:"flex relative",children:[!a&&f(W,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),a&&f(R,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}),a&&t("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(R,{onClick:()=>e(!1)})}),["Instalar Metamask","Etherscan","FAQ"].map((l,d)=>f("li",{className:"my-2 text-lg cursor-pointer",onClick:()=>{l==="Instalar Metamask"?n():l==="Etherscan"?c():l==="FAQ"&&b(!0)},children:l},l+d))]})]}),s&&f("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:f("div",{className:"bg-white p-6 rounded-md shadow-lg",children:f(c0,{onClose:()=>b(!1)})})})]})},b0="hh-sol-artifact-1",l0="Transactions",i0="contracts/Transactions.sol",o0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],d0="0x608060405234801561001057600080fd5b50610e0c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906106da565b60405180910390f35b61006c6102e1565b604051610079919061070b565b60405180910390f35b61009c600480360381019061009791906108d9565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab906109a7565b80601f01602080910402602001604051908101604052809291908181526020018280546101d7906109a7565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b5050505050815260200160048201548152602001600582018054610247906109a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906109a7565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc9190610a07565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816104349190610be7565b506080820151816004015560a08201518160050190816104549190610be7565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049096959493929190610d67565b60405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f5826104ca565b9050919050565b610505816104ea565b82525050565b6000819050919050565b61051e8161050b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055e578082015181840152602081019050610543565b60008484015250505050565b6000601f19601f8301169050919050565b600061058682610524565b610590818561052f565b93506105a0818560208601610540565b6105a98161056a565b840191505092915050565b600060c0830160008301516105cc60008601826104fc565b5060208301516105df60208601826104fc565b5060408301516105f26040860182610515565b506060830151848203606086015261060a828261057b565b915050608083015161061f6080860182610515565b5060a083015184820360a0860152610637828261057b565b9150508091505092915050565b600061065083836105b4565b905092915050565b6000602082019050919050565b60006106708261049e565b61067a81856104a9565b93508360208202850161068c856104ba565b8060005b858110156106c857848403895281516106a98582610644565b94506106b483610658565b925060208a01995050600181019050610690565b50829750879550505050505092915050565b600060208201905081810360008301526106f48184610665565b905092915050565b6107058161050b565b82525050565b600060208201905061072060008301846106fc565b92915050565b6000604051905090565b600080fd5b600080fd5b6000610745826104ca565b9050919050565b6107558161073a565b811461076057600080fd5b50565b6000813590506107728161074c565b92915050565b6107818161050b565b811461078c57600080fd5b50565b60008135905061079e81610778565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107e68261056a565b810181811067ffffffffffffffff82111715610805576108046107ae565b5b80604052505050565b6000610818610726565b905061082482826107dd565b919050565b600067ffffffffffffffff821115610844576108436107ae565b5b61084d8261056a565b9050602081019050919050565b82818337600083830152505050565b600061087c61087784610829565b61080e565b905082815260208101848484011115610898576108976107a9565b5b6108a384828561085a565b509392505050565b600082601f8301126108c0576108bf6107a4565b5b81356108d0848260208601610869565b91505092915050565b600080600080608085870312156108f3576108f2610730565b5b600061090187828801610763565b94505060206109128782880161078f565b935050604085013567ffffffffffffffff81111561093357610932610735565b5b61093f878288016108ab565b925050606085013567ffffffffffffffff8111156109605761095f610735565b5b61096c878288016108ab565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109bf57607f821691505b6020821081036109d2576109d1610978565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a128261050b565b9150610a1d8361050b565b9250828201905080821115610a3557610a346109d8565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a9d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a60565b610aa78683610a60565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ae4610adf610ada8461050b565b610abf565b61050b565b9050919050565b6000819050919050565b610afe83610ac9565b610b12610b0a82610aeb565b848454610a6d565b825550505050565b600090565b610b27610b1a565b610b32818484610af5565b505050565b5b81811015610b5657610b4b600082610b1f565b600181019050610b38565b5050565b601f821115610b9b57610b6c81610a3b565b610b7584610a50565b81016020851015610b84578190505b610b98610b9085610a50565b830182610b37565b50505b505050565b600082821c905092915050565b6000610bbe60001984600802610ba0565b1980831691505092915050565b6000610bd78383610bad565b9150826002028217905092915050565b610bf082610524565b67ffffffffffffffff811115610c0957610c086107ae565b5b610c1382546109a7565b610c1e828285610b5a565b600060209050601f831160018114610c515760008415610c3f578287015190505b610c498582610bcb565b865550610cb1565b601f198416610c5f86610a3b565b60005b82811015610c8757848901518255600182019150602085019450602081019050610c62565b86831015610ca45784890151610ca0601f891682610bad565b8355505b6001600288020188555050505b505050505050565b610cc2816104ea565b82525050565b6000610ce3610cde610cd9846104ca565b610abf565b6104ca565b9050919050565b6000610cf582610cc8565b9050919050565b6000610d0782610cea565b9050919050565b610d1781610cfc565b82525050565b600082825260208201905092915050565b6000610d3982610524565b610d438185610d1d565b9350610d53818560208601610540565b610d5c8161056a565b840191505092915050565b600060c082019050610d7c6000830189610cb9565b610d896020830188610d0e565b610d9660408301876106fc565b8181036060830152610da88186610d2e565b9050610db760808301856106fc565b81810360a0830152610dc98184610d2e565b905097965050505050505056fea2646970667358221220a58ced976e0eecf29ff91080295ae64462ce99eb5964f7ee799217307809d29a64736f6c63430008180033",m0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906106da565b60405180910390f35b61006c6102e1565b604051610079919061070b565b60405180910390f35b61009c600480360381019061009791906108d9565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab906109a7565b80601f01602080910402602001604051908101604052809291908181526020018280546101d7906109a7565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b5050505050815260200160048201548152602001600582018054610247906109a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906109a7565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc9190610a07565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816104349190610be7565b506080820151816004015560a08201518160050190816104549190610be7565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049096959493929190610d67565b60405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f5826104ca565b9050919050565b610505816104ea565b82525050565b6000819050919050565b61051e8161050b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055e578082015181840152602081019050610543565b60008484015250505050565b6000601f19601f8301169050919050565b600061058682610524565b610590818561052f565b93506105a0818560208601610540565b6105a98161056a565b840191505092915050565b600060c0830160008301516105cc60008601826104fc565b5060208301516105df60208601826104fc565b5060408301516105f26040860182610515565b506060830151848203606086015261060a828261057b565b915050608083015161061f6080860182610515565b5060a083015184820360a0860152610637828261057b565b9150508091505092915050565b600061065083836105b4565b905092915050565b6000602082019050919050565b60006106708261049e565b61067a81856104a9565b93508360208202850161068c856104ba565b8060005b858110156106c857848403895281516106a98582610644565b94506106b483610658565b925060208a01995050600181019050610690565b50829750879550505050505092915050565b600060208201905081810360008301526106f48184610665565b905092915050565b6107058161050b565b82525050565b600060208201905061072060008301846106fc565b92915050565b6000604051905090565b600080fd5b600080fd5b6000610745826104ca565b9050919050565b6107558161073a565b811461076057600080fd5b50565b6000813590506107728161074c565b92915050565b6107818161050b565b811461078c57600080fd5b50565b60008135905061079e81610778565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107e68261056a565b810181811067ffffffffffffffff82111715610805576108046107ae565b5b80604052505050565b6000610818610726565b905061082482826107dd565b919050565b600067ffffffffffffffff821115610844576108436107ae565b5b61084d8261056a565b9050602081019050919050565b82818337600083830152505050565b600061087c61087784610829565b61080e565b905082815260208101848484011115610898576108976107a9565b5b6108a384828561085a565b509392505050565b600082601f8301126108c0576108bf6107a4565b5b81356108d0848260208601610869565b91505092915050565b600080600080608085870312156108f3576108f2610730565b5b600061090187828801610763565b94505060206109128782880161078f565b935050604085013567ffffffffffffffff81111561093357610932610735565b5b61093f878288016108ab565b925050606085013567ffffffffffffffff8111156109605761095f610735565b5b61096c878288016108ab565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109bf57607f821691505b6020821081036109d2576109d1610978565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a128261050b565b9150610a1d8361050b565b9250828201905080821115610a3557610a346109d8565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a9d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a60565b610aa78683610a60565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ae4610adf610ada8461050b565b610abf565b61050b565b9050919050565b6000819050919050565b610afe83610ac9565b610b12610b0a82610aeb565b848454610a6d565b825550505050565b600090565b610b27610b1a565b610b32818484610af5565b505050565b5b81811015610b5657610b4b600082610b1f565b600181019050610b38565b5050565b601f821115610b9b57610b6c81610a3b565b610b7584610a50565b81016020851015610b84578190505b610b98610b9085610a50565b830182610b37565b50505b505050565b600082821c905092915050565b6000610bbe60001984600802610ba0565b1980831691505092915050565b6000610bd78383610bad565b9150826002028217905092915050565b610bf082610524565b67ffffffffffffffff811115610c0957610c086107ae565b5b610c1382546109a7565b610c1e828285610b5a565b600060209050601f831160018114610c515760008415610c3f578287015190505b610c498582610bcb565b865550610cb1565b601f198416610c5f86610a3b565b60005b82811015610c8757848901518255600182019150602085019450602081019050610c62565b86831015610ca45784890151610ca0601f891682610bad565b8355505b6001600288020188555050505b505050505050565b610cc2816104ea565b82525050565b6000610ce3610cde610cd9846104ca565b610abf565b6104ca565b9050919050565b6000610cf582610cc8565b9050919050565b6000610d0782610cea565b9050919050565b610d1781610cfc565b82525050565b600082825260208201905092915050565b6000610d3982610524565b610d438185610d1d565b9350610d53818560208601610540565b610d5c8161056a565b840191505092915050565b600060c082019050610d7c6000830189610cb9565b610d896020830188610d0e565b610d9660408301876106fc565b8181036060830152610da88186610d2e565b9050610db760808301856106fc565b81810360a0830152610dc98184610d2e565b905097965050505050505056fea2646970667358221220a58ced976e0eecf29ff91080295ae64462ce99eb5964f7ee799217307809d29a64736f6c63430008180033",u0={},h0={};var p0={_format:b0,contractName:l0,sourceName:i0,abi:o0,bytecode:d0,deployedBytecode:m0,linkReferences:u0,deployedLinkReferences:h0};const x0="0x9f43f87596A2C6119cf72f77D83De86940C4e60c",y0=p0.abi,C=G.createContext(),{ethereum:o}=window,A=()=>{const e=new K(o).getSigner();return new V(x0,y0,e)},w0=({children:a})=>{const[e,s]=i.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[b,n]=i.exports.useState(""),[c,l]=i.exports.useState(!1),[d,y]=i.exports.useState(localStorage.getItem("transactionCount")),[w,g]=i.exports.useState([]),N=(r,u)=>{s(h=>M(T({},h),{[u]:r.target.value}))},z=async()=>{try{if(o){const h=(await A().getAllTransactions()).map(m=>({addressTo:m.receiver,addressFrom:m.sender,timestamp:new Date(m.timestamp.toNumber()*1e3).toLocaleString(),message:m.message,keyword:m.keyword,amount:parseInt(m.amount._hex)/10**18}));console.log(h),g(h)}else console.log("Ethereum is not present")}catch(r){console.log(r)}},O=async()=>{try{if(!o)return alert("Please install MetaMask.");const r=await o.request({method:"eth_accounts"});r.length?(n(r[0]),z()):console.log("No accounts found")}catch(r){console.log(r)}},B=async()=>{try{if(o){const u=await A().getTransactionCount();window.localStorage.setItem("transactionCount",u)}}catch(r){throw console.log(r),new Error("No ethereum object")}},D=async()=>{try{if(!o)return alert("Please install MetaMask.");const r=await o.request({method:"eth_requestAccounts"});n(r[0]),window.location.reload()}catch(r){throw console.log(r),new Error("No ethereum object")}},P=async()=>{try{if(o){const{addressTo:r,amount:u,keyword:h,message:m}=e,S=A(),j=J(u);await o.request({method:"eth_sendTransaction",params:[{from:b,to:r,gas:"0x5208",value:j._hex}]});const v=await S.addToBlockchain(r,j,m,h);l(!0),console.log(`Loading - ${v.hash}`),await v.wait(),console.log(`Success - ${v.hash}`),l(!1);const q=await S.getTransactionCount();y(q.toNumber()),window.location.reload()}else console.log("No ethereum object")}catch(r){throw console.log(r),new Error("No ethereum object")}};return i.exports.useEffect(()=>{O(),B()},[d]),f(C.Provider,{value:{transactionCount:d,connectWallet:D,transactions:w,currentAccount:b,isLoading:c,sendTransaction:P,handleChange:N,formData:e},children:a})},g0=a=>`${a.slice(0,5)}...${a.slice(a.length-4)}`,p="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",x=({placeholder:a,name:e,type:s,value:b,handleChange:n})=>f("input",{placeholder:a,type:s,step:"0.0001",value:b,onChange:c=>n(c,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),N0=()=>{const{currentAccount:a,connectWallet:e,handleChange:s,sendTransaction:b,formData:n,isLoading:c}=i.exports.useContext(C),l=d=>{const{addressTo:y,amount:w,keyword:g,message:N}=n;d.preventDefault(),!(!y||!w||!g||!N)&&b()};return f("div",{className:"flex w-full justify-center items-center",children:t("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[t("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[t("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["TRANSACCIONES SEGURAS ",f("br",{})]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"BLOCKCHAIN EN LAS TRANSACCIONES LOGISTICAS"}),!a&&t("button",{type:"button",onClick:e,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:[f(X,{className:"text-white mr-2"}),f("p",{className:"text-white text-base font-semibold",children:"CONECTA TU BILLETERA"})]}),t("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${p}`,children:"FIABILIDAD"}),f("div",{className:p,children:"SEGURIDAD"}),f("div",{className:`sm:rounded-tr-2xl ${p}`,children:"ETHEREUM"}),f("div",{className:`sm:rounded-bl-2xl ${p}`,children:"WEB 3.0"}),f("div",{className:p,children:"TARIFAS BAJAS"}),f("div",{className:`rounded-br-2xl ${p}`,children:"BLOCKCHAIN"})]})]}),t("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ",children:t("div",{className:"flex justify-between flex-col w-full h-full",children:[t("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(Y,{fontSize:21,color:"#fff"})}),f(Z,{fontSize:17,color:"#fff"})]}),t("div",{children:[f("p",{className:"text-white font-light text-sm",children:g0(a)}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),t("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(x,{placeholder:"DIRECCION DE ENVIO",name:"addressTo",type:"text",handleChange:s}),f(x,{placeholder:"CANTIDAD (ETH)",name:"amount",type:"number",handleChange:s}),f(x,{placeholder:"CONCEPTO",name:"keyword",type:"text",handleChange:s}),f(x,{placeholder:"MENSAJE",name:"message",type:"text",handleChange:s}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),c?f(n0,{}):f("button",{type:"button",onClick:l,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"ENVIAR"})]})]})]})})},v0=()=>t("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[f("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:f("div",{className:"flex flex -[0.5] justify-center items-center",children:f("img",{src:L,alt:"logo",className:"w-32"})})}),f("div",{className:"flex justify-center items-center flex-col mt-5"}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),f("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:f("p",{className:"text-white text-left text-xs",children:"barushesq@gmail.com"})})]}),E=({color:a,title:e,icon:s,subtitle:b})=>t("div",{className:"flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${a}`,children:s}),t("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-1 text-white text-sm md:w-9/12",children:b})]})]}),T0=()=>f("div",{className:"flex w-full justify-center items-center gradient-bg-services",children:t("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[t("div",{className:"flex-1 flex flex-col justify-start items-start",children:[f("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient ",children:"BENEFICIOS"}),f("p",{className:"text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base"})]}),t("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(E,{color:"bg-[#2952E3]",title:"Seguriad garantizada",icon:f(f0,{fontSize:21,className:"text-white"}),subtitle:"La seguridad est\xE1 garantizada. Siempre mantenemos la privacidad y mantenemos la calidad de nuestros productos."}),f(E,{color:"bg-[#8945F8]",title:"Transparencia",icon:f(e0,{fontSize:21,className:"text-white"}),subtitle:"Todas las transacciones realizadas en la cadena de bloques son visibles y accesibles para todos los participantes de la red."}),f(E,{color:"bg-[#F84550]",title:"Tansacciones rapidas",icon:f(t0,{fontSize:21,className:"text-white"}),subtitle:"La eficiencia en la confirmaci\xF3n de transacciones es una meta importante."})]})]})}),C0=({timestamp:a,addressFrom:e,addressTo:s,amount:b,keyword:n,message:c})=>f("div",{className:"bg-[#181918] p-3 rounded-md hover:shadow-2xl w-full border-b border-[#121212] mb-1",children:t("div",{className:"flex flex-col items-start w-full",children:[f("div",{className:"flex justify-between w-full mb-0.5",children:f("p",{className:"text-white text-sm",children:a})}),t("div",{className:"flex justify-between w-full mb-0.5",children:[t("p",{className:"text-white text-sm",children:["DE: ",e]}),t("p",{className:"text-white text-sm",children:["-",b," ETH"]})]}),t("div",{className:"flex justify-between w-full mb-0.5",children:[t("p",{className:"text-white text-sm",children:["PARA: ",s]}),t("p",{className:"text-white text-sm",children:["+",b," ETH"]})]}),n&&f("div",{className:"flex justify-between w-full mb-0.5",children:t("p",{className:"text-white text-sm",children:["CONCEPTO: ",n]})}),f("div",{className:"flex justify-between w-full mb-0.5",children:t("p",{className:"text-white text-sm",children:["MENSAJE: ",c]})})]})}),A0=()=>{const{transactions:a,currentAccount:e}=i.exports.useContext(C),s=a.slice().reverse();return f("div",{className:"flex justify-center items-center w-full gradient-bg-transactions",children:t("div",{className:"flex flex-col md:p-10 py-10 px-2",children:[e?f("h3",{className:"text-white text-3xl text-center my-2",children:"ULTIMAS TRANSACCIONES"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"CONECTA TU CUENTA PARA VER LAS ULTIMAS TRANSACCIONES"}),f("div",{className:"flex flex-col items-center mt-10",children:s.map((b,n)=>f("div",{className:"w-full",children:f(C0,T({},b))},n))})]})})},E0=()=>t("div",{className:"min-h-screen",children:[t("div",{className:"gradient-bg-welcome",children:[f(r0,{}),f(N0,{})]}),f(T0,{}),f(A0,{}),f(v0,{})]});a0.render(f(w0,{children:f(E0,{})}),document.getElementById("root"));
