import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList } from "../../store/actions";

export default function FullWidthTextField() {
  const newsState = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  function onChangeHandler() {
    const filteredItems = newsState.filter((item) => {
      return (
        item.title.includes(
          document.querySelector("#fullWidth").value.toUpperCase()
        ) ||
        item.content
          .toLowerCase()
          .includes(document.querySelector("#fullWidth").value.toLowerCase())
      );
    });

    dispatch(setFilteredList(filteredItems));
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        marginBottom: "50px",
      }}
    >
      <TextField
        fullWidth
        label="Поиск по новостям"
        id="fullWidth"
        onChange={onChangeHandler}
      />
    </Box>
  );
}

export { FullWidthTextField };
