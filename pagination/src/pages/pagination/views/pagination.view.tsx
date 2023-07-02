import { FC } from "react";
import { useFetch } from "../container/hooks";
import { Flex, Button, Text, Box } from "rebass";

type IPaginationViewProps = {};

export const PaginationView: FC<IPaginationViewProps> = ({}) => {
  const { goPreviousPage, goNextPage, pageIndex } = useFetch();

  return (
    <Flex alignItems="center" justifyContent="space-between" bg="black" p={3}>
      <Button onClick={goPreviousPage} bg="white" color="black" mr={2}>
        Prev
      </Button>
      <Box bg="white" color="black" px={3} py={1}>
        <Text fontSize={4}>{pageIndex + 1}</Text>
      </Box>
      <Button onClick={goNextPage} bg="white" color="black" ml={2}>
        Next
      </Button>
    </Flex>
  );
};
