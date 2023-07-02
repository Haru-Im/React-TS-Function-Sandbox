import { ChangeEvent, FC, KeyboardEvent } from "react";
import {
  Input,
  SearchBarContainer,
  InputIcon,
  InputContainer,
} from "./search-bar.style";

type ISearchBarViewProps = {
  handleInputValueChange: (text: string) => void;
  handleSubmit: (e: KeyboardEvent) => void;
};

export const SearchBarView: FC<ISearchBarViewProps> = ({
  handleSubmit,
  handleInputValueChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    handleInputValueChange(text);
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
