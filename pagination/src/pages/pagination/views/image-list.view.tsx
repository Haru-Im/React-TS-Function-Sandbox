import { FC } from "react";
import { useFetch } from "../container/hooks";
import { Box, Flex, Image } from "rebass";

type IImageListViewProps = {};

export const ImageListView: FC<IImageListViewProps> = ({}) => {
  const { fetchedData } = useFetch();

  return (
    <Flex flexWrap="wrap">
      {fetchedData.map((e) => {
        return (
          <Box
            key={e.id}
            width={["100%", "50%", "33.33%", "25%", "20%"]}
            p={2}
            style={{ height: "200px" }}
            bg="black"
          >
            <Image
              src={e.url}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        );
      })}
    </Flex>
  );
};
