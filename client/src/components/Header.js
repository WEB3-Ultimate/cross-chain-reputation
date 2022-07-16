import { useState, useEffect } from "react";
import { ProviderRpcClient } from "everscale-inpage-provider";

import { Box, Flex, Text, Button } from "@chakra-ui/react";

function Header() {

    const ever = new ProviderRpcClient();

    const [address, setAddress] = useState("");

    const connect = async () => {
        await ever.requestPermissions({
            permissions: ["basic", "accountInteraction"]
        }); 

        checkConnect();
    }

    const checkConnect = async () => {
        const fetchProviderState = async () => {
            const providerState = await ever.getProviderState()
            
            if (providerState != null) {
                setAddress(String(providerState.permissions.accountInteraction.address).substring(0, 8))
            }
        }

        fetchProviderState()
            .catch(console.error);
    }
    
    useEffect(() => {
        checkConnect();
    });

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
        >
            <Flex align="center">
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    display="block"
                >
                    W3U
                </Text>
            </Flex>

            <Box
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align={["center", "center", "center", "center"]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <Text
                        mb={{ base: 8, sm: 0 }}
                        mr={{ base: 0, sm: 8 }}
                        display="block"
                    >
                        <Button
                            size="sm"
                            rounded="md"
                            _hover={{
                                bg: [
                                    "primary.100",
                                    "primary.100",
                                    "primary.600",
                                    "primary.600"
                                ],
                            }}
                            onClick={connect}
                        >
                            {address !== "" ? address : "Connect Wallet"}
                        </Button>
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Header;