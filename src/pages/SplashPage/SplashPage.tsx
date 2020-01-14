import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button, Typography, Box, TextField } from "@material-ui/core";
import AjaxService from "../../services/AjaxService";
import { useHistory, useParams } from "react-router-dom";
import { useUserMedia } from "../../services/MediaService";
import ChineseTitleCard from "../../components/ChineseTitleCard";
import MainTitleCard from "../../components/MainTitleCard";
import TextInputScroll from "../../components/TextInputScroll";
import { COLORS } from "../../theme";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "./../../game/GameService";
import queryString from "query-string";
import CryptoService from "./../../services/CryptoService";
import PLACEHOLDER_CHAR from "./../../common/placeholderChar";

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
  const params = useParams<{ tableId?: string }>();
  const history = useHistory();
  const gameService = useDependency(GameService);
  // console.log(gameService);

  const [isConnecting, setConnecting] = React.useState(false);
  const [tableId, setTableId] = React.useState("");

  // console.log([...Array(100)].map((_, idx) => `${idx} ${CryptoService.encrypt(`Table ${idx}`)}`))

  React.useEffect(() => {
    // Check for URL params
    const tryLogin = async (encryptedTableId: string) => {
      const decryptedTableId = CryptoService.decrypt(encryptedTableId);
      const result = await AjaxService.submitTableId(
        decryptedTableId,
        "create"
      );
      if (result) {
        localStorage.setItem("CNYTable", JSON.stringify(AjaxService.jwtHeader));
        gameService.setUsername(decryptedTableId);
        history.push("/lobby");
      } else {
        const loginResult = await AjaxService.submitTableId(
          decryptedTableId,
          "login"
        );
        if (loginResult) {
          // Existing logged in user error
          if (loginResult === 1) {
            window.alert("This Table ID is currently logged in!");
          } else {
            gameService.setUsername(decryptedTableId);
            localStorage.setItem(
              "CNYTable",
              JSON.stringify(AjaxService.jwtHeader)
            );
            history.push("/lobby");
          }
        } else {
          window.alert("Table ID has already been used or does not exist!");
        }
      }
    };

    const tableIdFromParams = params.tableId;
    if (tableIdFromParams) {
      tryLogin(tableIdFromParams);
      return;
    }

    // Otherwise, try to find local JWT
    const jwtToken = localStorage.getItem("CNYTable");

    if (jwtToken) {
      AjaxService.jwtHeader = JSON.parse(jwtToken);

      if (!AjaxService.jwtHeader.Authorization) {
        localStorage.removeItem("CNYTable");
      } else {
        gameService.getCurrentGameState().then(res => {
          if (res) {
            gameService.setUsername(PLACEHOLDER_CHAR);
            history.push("/lobby");
          } else {
            localStorage.removeItem("CNYTable");
            window.alert("Please login again.");
          }
        });
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableId(e.target.value);
  };

  const handleSubmit = async () => {
    if (isConnecting) return;
    setConnecting(true);
    const prefixedTableId = `Table ${tableId}`;
    const result = await AjaxService.submitTableId(prefixedTableId, "create");
    setConnecting(false);
    if (result) {
      localStorage.setItem("CNYTable", JSON.stringify(AjaxService.jwtHeader));
      gameService.setUsername(prefixedTableId);
      history.push("/lobby");
    } else {
      const loginResult = await AjaxService.submitTableId(
        prefixedTableId,
        "login"
      );
      if (loginResult) {
        // Existing logged in user error
        if (loginResult === 1) {
          window.alert("This Table ID is currently logged in!");
        } else {
          gameService.setUsername(prefixedTableId);
          localStorage.setItem(
            "CNYTable",
            JSON.stringify(AjaxService.jwtHeader)
          );
          history.push("/lobby");
        }
      } else {
        window.alert("Table ID has already been used or does not exist!");
      }
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
