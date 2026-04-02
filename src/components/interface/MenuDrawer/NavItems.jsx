import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, List, ListItemText, ListItemButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";

const NavItems = () => {
  const [openItems, setOpenItems] = useState([]);
  const navigate = useNavigate();
  const isOpen = (item) => openItems.includes(item.name);
  const setOpen = (item) =>
    setOpenItems((openItems) => [...openItems, item.name]);
  const handleClose = (item) =>
    setOpenItems((openItems) => openItems.filter((i) => i !== item.name));
  const handleClick = (item) => () =>
    isOpen(item) ? handleClose(item) : setOpen(item);
  const handleNavigate = (entry, item) => {
    navigate(`/${toPascalCase(entry.name)}/${toPascalCase(item)}`);
    navigate(0);
  };

  const makeNested = (entry, idx) => (
    <Fragment key={idx}>
      <ListItemButton onClick={handleClick(entry)}>
        <ListItemText
          primary={entry.name}
          primaryTypographyProps={{ fontSize: 16 }}
        />
        {isOpen(entry) ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen(entry)} timeout="auto" unmountOnExit>
        {
          <List component="div" disablePadding>
            {entry.items.map((item, idx2) => (
              <ListItemButton
                key={100 * idx + idx2}
                sx={{ pl: 4 }}
                onClick={() => handleNavigate(entry, item)}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
            ))}
          </List>
        }
      </Collapse>
    </Fragment>
  );

  return <List>{items.map(makeNested)}</List>;
};

export default NavItems;
