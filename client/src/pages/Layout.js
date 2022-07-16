import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Body from "../components/Body";

function Layout() {
    return(
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
        >
            <Header/>
            <Body/>
        </Flex>
    );
}

export default Layout;