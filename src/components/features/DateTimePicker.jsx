import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DateTimePicker() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (date && time) {
      const dateTime = date.hour(time.hour()).minute(time.minute());
      console.log("選択された日時:", dateTime.format("YYYY-MM-DD HH:mm:ss"));
    }
    handleClose();
  };

  console.log("date:", date);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Button variant="contained" onClick={handleOpen}>
            日付と時刻を選択
          </Button>
          <StyledDialog open={open} onClose={handleClose}>
            <DialogTitle>日付と時刻の選択</DialogTitle>
            <DialogContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <DatePicker
                  label="日付"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
                <TimePicker
                  label="時刻"
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>キャンセル</Button>
              <Button onClick={handleSubmit} variant="contained">
                確定
              </Button>
            </DialogActions>
          </StyledDialog>
        </div>
      </LocalizationProvider>
    </>
  );
}
