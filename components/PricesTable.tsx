import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type RowData = { serviceName: string; servicePrice: string };

type Rows = {
  rows: RowData[];
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#554366",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PricesTable(props: Rows) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="таблиця цін на послуги">
        <TableHead>
          <TableRow>
            <StyledTableCell>НАЗВА ПОСЛУГИ</StyledTableCell>
            <StyledTableCell align="right">ВАРТІСТЬ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.serviceName}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ maxWidth: 700 }}
              >
                {row.serviceName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.servicePrice}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
