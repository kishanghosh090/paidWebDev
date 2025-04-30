import React from "react";
import Button from "@mui/material/Button";
const api_key = "4c048e2bfd765dd1eb144e543e7c54dc";
function InputBox({ handleClickOpen, setData }) {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold ">Enter Movie Name</h1>
      <div className="flex flex-col gap-3 bg-neutral-950 justify-center items-center p-3">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="p-3"
          placeholder="Enter Movie Name"
        />
        <Button
          onClick={async () => {
            if (inputValue === "") {
              setData("You must enter a movie name");
              handleClickOpen();
              return;
            }
            try {
              const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputValue}`
              );
              const data = await res.json();
              //   console.log(data.results);

              setData(data.results);
              handleClickOpen();
            } catch (error) {
              console.log(error);
              setData(error.message);
              setData(error.message);
              handleClickOpen();
            }
          }}
          variant="contained"
          className="w-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default InputBox;
