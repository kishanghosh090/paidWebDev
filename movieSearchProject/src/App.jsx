import React from "react";
import InputBox from "./components/InputBox";
import DilogBox from "./components/DilogBox";

function App() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-slate-950 p-3 flex justify-center items-center ">
      <InputBox handleClickOpen={handleClickOpen} setData={setData} />
      <DilogBox
        data={data}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
