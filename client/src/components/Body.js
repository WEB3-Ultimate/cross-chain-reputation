import { useState } from "react";
import { Button, Heading, Box, Stack, Text } from "@chakra-ui/react";
import axios from "axios"

function Body() {

    const [computeButtonTapped, setComputeButtonTapped] = useState(false);
    const [reputation, setReputation] = useState(0);

    async function fetchUserData() {
        await axios({
          method: 'post',
          url: 'https://api.octusbridge.io/v1/transfers/search',
          data: {
            userAddress: "0:08b374020021936f394d67b4cde921c534b3ba3aa79b37febdfa251bf2e9c355",
            limit: 10000,
            offset: 0
          }
        }).then(function (response) {
            const responseData = response.data

            if (responseData.totalCount > 0) {
                const allTransfers = responseData.transfers
                var totalSumUSD = 0

                for (const transfer of allTransfers) {
                    totalSumUSD += Number(transfer.tonEthVolumeUsdtExec)
                }

                setReputation(Math.round(totalSumUSD / response.data.totalCount))
            }
        });
    }

    return(
        <Stack
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center"]}
        >
            <Heading
                as="h1"
                size="xl"
                fontWeight="bold"
                color="primary.800"
                textAlign={["center"]}
            >
                Cross-Chain Reputation
            </Heading>
            
            <Heading
                as="h2"
                size="md"
                color="primary.800"
                opacity="0.8"
                fontWeight="normal"
                lineHeight={1.5}
                textAlign={["center"]}
            >
                {
                    (computeButtonTapped == false) ?
                        "Let's analyze your history in Everscale and compute Reputation!"
                    : "This is your reputation:"
                }
            </Heading>

            {
                computeButtonTapped ?
                    <Box>
                        <Text
                            fontWeight="bold"
                            fontSize="xl"
                            mt={2}
                            textAlign="center"
                            color="primary.800"
                        >
                            {reputation}
                        </Text>
                    </Box>
                :
                 <></>
            }

            {
                (computeButtonTapped == false) ?
                    <Button
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                        onClick={() => {
                            setComputeButtonTapped(true);
                            fetchUserData();
                        }}
                    >
                        Compute
                    </Button>
                :
                    <Stack
                        spacing={4}
                        w={{ base: "80%", md: "40%" }}
                        align={["left", "right"]}
                    >
                        <Button
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                            onClick={() => {
                                
                            }}
                        >
                            Mint Everscsale SBT
                        </Button>

                        <Button
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                            onClick={() => {
                               
                            }}
                        >
                            Mint Ethereum SBT
                        </Button>
                    </Stack>
            }
            
            <Text
                fontSize="xs"
                mt={2}
                textAlign="center"
                color="primary.800"
                opacity="0.6"
            >   
                {

                    (computeButtonTapped == false) ?
                        "It takes about 2 seconds."
                    :
                        "Mint yourself a SBT token!"
                }
            </Text>
        </Stack>
    );
}

export default Body;