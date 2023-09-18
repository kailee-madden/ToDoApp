import * as React from 'react';
import * as R from 'ramda'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../models/Todo';


export default function CheckboxList() {
    const [myListItems, setMyListItems] = React.useState<Todo[]>([
        { id: 1, description: 'Task 1', completed: false },
        { id: 2, description: 'Task 2', completed: false },
        { id: 3, description: 'Task 3', completed: false },
        { id: 4, description: 'Task 4', completed: false },
      ]);

  const handleToggle = (currentIndex: number) => () => {
    const updatedList = [...myListItems];
    updatedList[currentIndex].completed = !updatedList[currentIndex].completed;
    setMyListItems(updatedList);
  };

  const handleDelete = (currentIndex: number) => () => {
    const updatedList = R.remove(currentIndex, 1, myListItems);
    setMyListItems(updatedList);
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} data-testid="checkbox-list">
      {myListItems.map((item: Todo, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.description} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}