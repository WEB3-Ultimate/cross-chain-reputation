const fungibleSBTAbi = {"ABIversion":2,"version":"2.2","header":["time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"name","inputs":[],"outputs":[{"name":"value0","type":"string"}]},{"name":"symbol","inputs":[],"outputs":[{"name":"value0","type":"string"}]},{"name":"reputation","inputs":[],"outputs":[{"name":"reputation","type":"uint256"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"reputation","type":"uint256"}]} as const
const nonFungibleSBTAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"setAddress","inputs":[{"name":"value","type":"address"}],"outputs":[]},{"name":"getOwner","inputs":[{"name":"answerId","type":"uint32"},{"name":"errorId","type":"uint32"}],"outputs":[]},{"name":"setNftRootAddr","inputs":[{"name":"nftRoot","type":"address"}],"outputs":[]},{"name":"setOwnerPubkey","inputs":[{"name":"ownerPubkey","type":"uint256"}],"outputs":[]},{"name":"setIcon","inputs":[{"name":"icon","type":"bytes"}],"outputs":[]},{"name":"burn","inputs":[{"name":"dest","type":"address"}],"outputs":[]},{"name":"constructor","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_name","type":"string"},{"name":"_ownerPubkey","type":"uint256"},{"name":"_nftRoot","type":"address"},{"name":"_userAddr","type":"address"},{"name":"_icon","type":"bytes"},{"name":"reputation","type":"uint256"}]} as const

export const factorySource = {
    FungibleSBT: fungibleSBTAbi,
    NonFungibleSBT: nonFungibleSBTAbi
} as const

export type FactorySource = typeof factorySource
export type FungibleSBTAbi = typeof fungibleSBTAbi
export type NonFungibleSBTAbi = typeof nonFungibleSBTAbi
