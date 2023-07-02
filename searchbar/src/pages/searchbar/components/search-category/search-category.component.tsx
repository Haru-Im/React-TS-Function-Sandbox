import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ESearchCategories } from "../../../../types";
import { useState } from "react";

export const BasicSelect = ({
  onChangeCategory,
}: {
  onChangeCategory: (category: ESearchCategories) => void;
}) => {
  const [category, setCategory] = useState<ESearchCategories>(
    ESearchCategories.WEB
  );

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as ESearchCategories);
    onChangeCategory(event.target.value as ESearchCategories);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={ESearchCategories.WEB}>{"WEB"}</MenuItem>
          <MenuItem value={ESearchCategories.BLOG}>{"BLOG"}</MenuItem>
          <MenuItem value={ESearchCategories.CAFE}>{"CAFE"}</MenuItem>
          <MenuItem value={ESearchCategories.VCLIP}>{"VCLIP"}</MenuItem>
          <MenuItem value={ESearchCategories.IMAGE}>{"IMAGE"}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
