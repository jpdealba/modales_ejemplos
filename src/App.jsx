import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import BrekenButton from "./components/BrekenButton";
import BrekenDiv from "./components/BrekenDiv";
import MiniDrawer from "./components/BrekenDrawer";
import BrekenIconButton from "./components/BrekenIconButton";
import Modal from "./components/BrekenModal";
import BrekenSelect from "./components/BrekenSelect";
import Table from "./components/BrekenTable";
import BrekenTextInput from "./components/BrekenTextInput";
import Title from "./components/BrekenTitle";
// Crear un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: "#415364",
    },
    secondary: {
      main: "#DF854F",
    },
    white: {
      main: "#FFFFF",
    },
    contrato: {
      main: "#005FD7",
    },
    red: {
      main: "#B74E48",
    },
    green: {
      main: "#7DC65B",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer />
      <div className="ml-16">
        <Examples />
      </div>
    </ThemeProvider>
  );
}

const Examples = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");

  const data = [
    { id_cuenta: "123-abc-123", status: "Cobrado", fecha: new Date() },
    { id_cuenta: "abc-123-abc", status: "No Cobrado", fecha: new Date() },
    //...
  ];

  const fields = [
    { label: "ID Cuenta", value: "id_cuenta", type: "string" },
    { label: "Status", value: "status", type: "string" },
    { label: "Fecha", value: "fecha", type: "date" },
    { label: "Detalles", value: "details", type: "details" },
  ];
  return (
    <>
      <div className="">
        <div className="px-10 mt-10">
          <Title title={"Ejemplos de Componentes"} />
          <Stack direction="row" spacing={1} sx={{ mb: 2, mt: 5 }}>
            <BrekenButton
              title={"Iniciar Sesión"}
              handleClick={() => {}}
              color={"primary"}
              classes={{
                width: "50%",
              }}
              variant={"contained"}
            />
            <BrekenButton
              title={"Registrarse"}
              handleClick={() => {}}
              color={"secondary"}
              classes={{
                width: "50%",
              }}
              variant={"contained"}
            />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <BrekenButton
              title={"Inicia Sesión aquí"}
              handleClick={() => {}}
              color={"secondary"}
              variant={"text"}
            />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <BrekenIconButton handleClick={() => {}} Icon={AddIcon} />
            <BrekenButton
              title={"Abrir Modal"}
              handleClick={() => setIsOpen(true)}
              variant={"contained"}
            />
            <BrekenButton
              title={"Ver Contrato"}
              Icon={ArticleIcon}
              handleClick={() => {}}
              color={"contrato"}
              variant={"contained"}
            />
            <BrekenButton
              title={"Archivos"}
              handleClick={() => {}}
              Icon={CloudUploadIcon}
              variant={"contained"}
            />
            <BrekenButton
              title={"Cerrar Sesión"}
              handleClick={() => {}}
              Icon={LogoutIcon}
              color={"secondary"}
              variant={"text"}
            />
            <BrekenIconButton
              handleClick={() => {}}
              Icon={DeleteIcon}
              color={"#B74E48"}
            />
            <BrekenIconButton
              handleClick={() => {}}
              Icon={SaveIcon}
              color={"#7DC65B"}
            />
            <BrekenIconButton
              handleClick={() => {}}
              Icon={AddIcon}
              classes={{ borderRadius: "30%" }}
            />
          </Stack>
        </div>

        <BrekenDiv className="flex w-full mt-36">
          <div className="w-full bg-white mb-10 p-3 rounded-xl space-x-5 items-center flex">
            <div className={`${!(selectedOption && text) && "invisible"}`}>
              <BrekenIconButton
                handleClick={() => {
                  setSelectedOption("");
                  setText("");
                }}
                Icon={CloseIcon}
                color={"#B74E48"}
              />
            </div>

            <BrekenSelect
              handleChange={(e) => setSelectedOption(e)}
              selected={selectedOption}
              options={fields}
              label={"Filtro"}
              classes={"w-1/4"}
            />
            {selectedOption && (
              <BrekenTextInput
                handleChange={(e) => setText(e.target.value)}
                value={text}
                placeholder={"Buscar"}
                classes={"w-1/4"}
              />
            )}
          </div>
          <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
            <Table data={data} fields={fields} />
          </Modal>

          <Table data={data} fields={fields} />
        </BrekenDiv>
      </div>
    </>
  );
};

export default App;
