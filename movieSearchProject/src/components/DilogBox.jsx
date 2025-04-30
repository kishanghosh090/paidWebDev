import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function DilogBox({ data, open, setOpen, handleClose }) {
  console.log(typeof data);

  return (
    <div>
      <BootstrapDialog
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
        open={open}
        onClose={handleClose}
        className="bg-slate-950 p-2"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        />
        <h1 className="text-3xl font-bold text-center mt-2 backdrop-filter backdrop-blur-2xl bg-neutral-950/2">
          Search Result
        </h1>
        <div className="p-5  flex flex-col  gap-3 overflow-x-auto  ">
          {typeof data != "string" ? (
            data.map((item, index) => (
              <Card key={index} className="w-72 ">
                <AspectRatio>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </AspectRatio>
                <Typography level="h2" fontSize="md">
                  {item.title}
                </Typography>
                <Typography level="body2">{item.overview}</Typography>
                <List>
                  <ListItem>
                    <Typography>Release Date</Typography>
                    <ListItemContent>{item.release_date}</ListItemContent>
                  </ListItem>
                  <ListDivider />
                </List>
              </Card>
            ))
          ) : (
            <h1 className="text-3xl font-bold text-center mt-2">
              No Result Found
            </h1>
          )}
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default DilogBox;
