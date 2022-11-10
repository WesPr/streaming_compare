import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100",
  bgcolor: "#18181c",
  border: "2px solid rgb(128, 84, 255)",
  boxShadow: 24,
  p: 4,
  borderRadius: "5%",
};

export default function PlatformModal({ open, handleClose, item }) {
  const plans = item.pricing.split(/, (?=[^,]+:)/).map((s) => s.split(": "));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: "90%", border: "2px solid rgb(255, 152, 152)" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #000" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Plan</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plans.map((row) => (
                <TableRow
                  key={row[0]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell align="right">{row[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button
          className={
            " px-3 tw-button mt-5 ml-16 rounded-lg text-sm font-semibold"
          }
        >
          Sign Up
        </button>
      </Box>
    </Modal>
  );
}
