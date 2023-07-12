import { ChangeEvent, FC, KeyboardEvent } from "react";
import {
  Input,
  SearchBarContainer,
  InputIcon,
  InputContainer,
} from "./search-bar.style";
import { useRecoilValue } from "recoil";
import { $autoCompleteWords } from "../../searchbar.state";

type ISearchBarViewProps = {
  onInputValueChange: (text: string) => void;
  handleSubmit: (e: KeyboardEvent) => void;
};

export const SearchBarView: FC<ISearchBarViewProps> = ({
  handleSubmit,
  onInputValueChange,
}) => {
  const test = useRecoilValue($autoCompleteWords);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onInputValueChange(text);
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <Input
          onKeyDown={(event: KeyboardEvent) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
          onChange={handleChange}
          placeholder="search..."
        />
        <InputIcon />
      </InputContainer>
    </SearchBarContainer>
  );
};
