import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button, Typography, Box, TextField } from "@material-ui/core";
import AjaxService from "../../services/AjaxService";
import { useHistory } from "react-router-dom";
import { useUserMedia } from "../../services/MediaService";
import ChineseTitleCard from "../../components/ChineseTitleCard";
import MainTitleCard from "../../components/MainTitleCard";
import TextInputScroll from "../../components/TextInputScroll";
import { COLORS } from "../../theme";
import { useDependency } from "../../services/DependencyInjector";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%"
  },
  title: {
    fontSize: "40px"
  }
});

interface Props {}

const SplashPage: React.FC<Props> = () => {
  const classes = useStyles({});
  const history = useHistory();
  // const mediaStream = useUserMedia({
  //   audio: false,
  //   video: { facingMode: "environment" }
  // });
  // console.log(mediaStream)
  const [isConnecting, setConnecting] = React.useState(false);
  const [tableId, setTableId] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableId(e.target.value);
  };

  const handleSubmit = async () => {
    if (isConnecting) return;
    setConnecting(true);
    const result = await AjaxService.submitTableId(tableId);
    setConnecting(false);
    if (result) {
      history.push("/lobby");
    } else {
      window.alert("Table ID has already been used or does not exist!");
    }
  };

  return (
    <div>
      <MainTitleCard />
      <Box display="flex" flexDirection="column" padding="24px">
        <div>Enter your Table ID:</div>
        <TextInputScroll placeholder="Table ID" onChange={handleInputChange} />
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ background: COLORS.accent }}
        >
          Enter
        </Button>

        {/* <Typography variant="h1">
        Or, you can scan the QR code at the table:
      </Typography> */}
      </Box>
    </div>
  );
};

export default SplashPage;
