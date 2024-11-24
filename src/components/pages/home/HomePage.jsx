import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import SelectAnimation from "../../features/SelectAnimation";
import DateTimePicker from "../../features/DateTimePicker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        <Item>
          <SelectAnimation />
        </Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <Item>
          <DateTimePicker />
        </Item>
      </Grid>
    </Grid>
  );
};
export default HomePage;
