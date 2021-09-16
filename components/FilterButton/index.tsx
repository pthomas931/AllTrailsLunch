import { FormEvent, useState } from "react";

import {
  Button,
  Popover,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  filterButton: {
    color: "#8d8d8d",
    border: "2px solid #f0f0f0",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "lighter",
  },
  filterPopover: { padding: "1em", width: "17em" },
  filterActions: {
    display: "flex",
    justifyContent: "end",
    flexDirection: "row",
  },
}));

interface FilterButtonProps {
  sortVal: string;
  setSortVal: (newVal: string) => void;
}

const FilterButton = ({ sortVal, setSortVal }: FilterButtonProps) => {
  const classes = useStyles();

  const [localSort, setLocalSort] = useState(sortVal);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSortVal(localSort);

    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={classes.filterButton}
        variant="outlined"
        size="large"
      >
        Filter
      </Button>
      <Popover
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <form className={classes.filterPopover} onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="sort"
              name="sort"
              value={localSort}
              onChange={(e) => setLocalSort(e.target.value)}
            >
              <FormControlLabel
                value="highToLow"
                control={<Radio />}
                label="Ratings High to Low"
              />
              <FormControlLabel
                value="lowToHigh"
                control={<Radio />}
                label="Ratings Low to High"
              />
            </RadioGroup>
          </FormControl>
          <div className={classes.filterActions}>
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </Popover>
    </div>
  );
};

export default FilterButton;
