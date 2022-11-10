import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TableSection() {
  const router = useRouter();
  let selectedPlatforms = null;
  let rows = null;
  if (router.query.selectedPlatforms != null) {
    selectedPlatforms = JSON.parse(router.query.selectedPlatforms);
    rows = [
      createData(
        "Pricing",
        selectedPlatforms[0]?.pricing,
        selectedPlatforms[1]?.pricing,
        selectedPlatforms[2]?.pricing
      ),
      createData(
        "Media Type",
        selectedPlatforms[0]?.mediaType,
        selectedPlatforms[1]?.mediaType,
        selectedPlatforms[2]?.mediaType
      ),
      createData(
        "Supported Devices",
        selectedPlatforms[0]?.supportedDevices,
        selectedPlatforms[1]?.supportedDevices,
        selectedPlatforms[2]?.supportedDevices
      ),
      createData(
        "Download",
        selectedPlatforms[0]?.download,
        selectedPlatforms[1]?.download,
        selectedPlatforms[2]?.download
      ),
      createData(
        "Quality",
        selectedPlatforms[0]?.quality,
        selectedPlatforms[1]?.quality,
        selectedPlatforms[2]?.quality
      ),
      createData(
        "Custom profiles",
        selectedPlatforms[0]?.customProfiles,
        selectedPlatforms[1]?.customProfiles,
        selectedPlatforms[2]?.customProfiles
      ),
      createData(
        "Kids content",
        selectedPlatforms[0]?.kidsContent,
        selectedPlatforms[1]?.kidsContent,
        selectedPlatforms[2]?.kidsContent
      ),
      createData(
        "Trial",
        selectedPlatforms[0]?.trial,
        selectedPlatforms[1]?.trial,
        selectedPlatforms[2]?.trial
      ),
    ];
  }

  function createData(rowTitle, platform1, platform2, platform3) {
    return { rowTitle, platform1, platform2, platform3 };
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "95vh" }}>
      <Table stickyHeader aria-label="sticky table" sx={{}}>
        <TableHead>
          <TableRow sx={{ borderBottom: "2px solid #000" }}>
            <TableCell></TableCell>
            {selectedPlatforms?.map((platform) => (
              <TableCell key={platform.id}>
                <Image
                  src={platform.imageUrl}
                  alt={platform.platformName}
                  width={"100%"}
                  height={"100%"}
                  className={"object-contain"}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" sx={{}}></TableCell>
            {selectedPlatforms?.map((platform) => (
              <TableCell component="th" scope="row" key={platform.id}>
                <button
                  type="button"
                  className={
                    " px-2 tw-button my-4 text-center rounded-lg text-sm font-semibold"
                  }
                  onClick={() => {
                    router.push({
                      pathname: platform.signUp,
                    });
                  }}
                >
                  Sign Up
                </button>
              </TableCell>
            ))}
          </TableRow>
          {rows?.map((row) => (
            <TableRow
              key={row.plan}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ wordWrap: "break-word" }}
              >
                {row.rowTitle}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ wordWrap: "break-word" }}
              >
                {row.platform1}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ wordWrap: "break-word" }}
              >
                {row.platform2}
              </TableCell>
              {selectedPlatforms?.length > 2 && (
                <TableCell component="th" scope="row">
                  {row.platform3}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
