import { ChangeEvent, FC, FormEvent, KeyboardEvent, memo } from "react";
type ISearchBarComponentProps = {
  onChangeInputValue: (text: string) => void;
  handleSubmit: (e: KeyboardEvent) => void;
};

export const SearchBarComponent = memo<ISearchBarComponentProps>(
  ({ onChangeInputValue, handleSubmit }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      onChangeInputValue(text);
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
  }
);
