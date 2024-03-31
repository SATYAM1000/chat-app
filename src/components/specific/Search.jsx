import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";



const SearchDialog = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const [users, setUsers]=useState(sampleUsers)
  const addFriendHandler = (id) => {
    console.log("id ", id);
  };
  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width="25rem">
        <DialogTitle textAlign={"center"}>Fild People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user, index) => {
            return (
              <UserItem
                user={user}
                key={index}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            );
          })}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchDialog;
