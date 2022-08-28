import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDishes } from "../../contexts/DishesContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useDishes();

  return (
    <FormControl
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "5px",
        marginTop: "-29px",
        marginBottom: "40px",
      }}
    >
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        style={{
          marginRight: "25px",
          fontSize: "18px",
        }}
      >
        Categories:
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={(e) => {
          fetchByParams("category", e.target.value);
        }}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="Main" control={<Radio />} label="Main" />
        <FormControlLabel value="Soup" control={<Radio />} label="Soup" />
        <FormControlLabel value="Salad" control={<Radio />} label="Salad" />
        <FormControlLabel value="Drinks" control={<Radio />} label="Drinks" />
      </RadioGroup>
    </FormControl>
  );
}
