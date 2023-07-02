import { ChangeEvent, FC, KeyboardEvent } from "react";

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
    <input
      onKeyDown={(event: KeyboardEvent) => {
        if (event.key === "Enter") {
          handleSubmit(event);
        }
      }}
      style={{
        flexGrow: 1,
        padding: "0.5em",
        border: "1px solid #ddd",
      }}
      onChange={handleChange}
    />
  );
};
