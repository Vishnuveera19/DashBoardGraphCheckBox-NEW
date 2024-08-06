import {
  Container,
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Grid,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableContainer,
  FormControlLabel,
  Checkbox,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import { Fragment } from "react";

export default function PaySlipFormTemplate(props) {
  const [showName, setShowName] = useState(true);
  const [showDesignation, setShowDesignation] = useState(true);
  const [showcompanyname, setshowcompanyname] = useState(true);
  const [showaddressname, setshowaddressname] = useState(true);
  const [showmonth, setshowmonth] = useState(true);
  const [rollNo, setRollno] = useState(true);
  const [location1, setlocation] = useState(true);
  const [fathersn, setfathersname] = useState(true);
  const [Dateofjoining, setdoj] = useState(true);
  const [DateofBirth, setdob] = useState(true);
  const [payperiod, setpayperiod] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNameChange = (event) => {
    setShowName(event.target.checked);
  };

  const handleDesignationChange = (event) => {
    setShowDesignation(event.target.checked);
  };

  const handlecompanynamechange = (event) => {
    setshowcompanyname(event.target.checked);
  };

  const handleadressname = (event) => {
    setshowaddressname(event.target.checked);
  };

  const handlemonthname = (event) => {
    setshowmonth(event.target.checked);
  };

  const handlerollno = (event) => {
    setRollno(event.target.checked);
  };

  const handlelocation = (event) => {
    setlocation(event.target.checked);
  };

  const handlefn = (event) => {
    setfathersname(event.target.checked);
  };

  const handledoj = (event) => {
    setdoj(event.target.checked);
  };

  const handledob = (event) => {
    setdob(event.target.checked);
  };

  const handlepayperiod = (event) => {
    setpayperiod(event.target.checked);
  };

  const styleobj = {
    container: {
      fontSize: "14px",
    },

    card: {
      padding: "20px",
    },

    header: {
      fontSize: "16px",
    },

    body: {
      fontSize: "20px",
    },
    empnetpay: {
      fontSize: "20px",
      marginLeft: "32px",
    },

    head: {
      fontSize: "30px",
    },

    divider: {
      backgroundColor: "#2E8AB1",
      marginTop: "10px",
      height: "2px",
    },

    tablecellhead: {
      fontSize: "18px",
      border: "2px solid black",
      width: "33.33%",
    },

    emppaysummary: {
      fontSize: "26px",
    },

    netpay: {
      fontSize: "30px",
      marginLeft: "38px",
    },

    tablecell: {
      border: "2px solid black",
    },

    typo: {
      fontSize: "20px",
    },
  };
  return (
    <center>
      <div style={styleobj.container}>
        <IconButton
          onClick={handleDrawerToggle}
          style={{ marginLeft: "1200px" }}>
          <Typography
            variant="subtitle-1"
            color={"black"}
            style={{ fontSize: "18px" }}>
            Preference
          </Typography>
          <MenuIcon color="blue" style={{ marginLeft: "5px" }} />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box width={250} role="presentation">
            <Box mb={2} mt={2}>
              <Typography variant="subtitle1" align="left" mt={1}>
                Choose Headers
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showName}
                      onChange={handleNameChange}
                      name="showName"
                    />
                  }
                  label="Name"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showDesignation}
                      onChange={handleDesignationChange}
                      name="showDesignation"
                    />
                  }
                  label="Designation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showcompanyname}
                      onChange={handlecompanynamechange}
                      name="showCompanyName"
                    />
                  }
                  label="CompanyName"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showaddressname}
                      onChange={handleadressname}
                      name="showaddressName"
                    />
                  }
                  label="AddressName"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showmonth}
                      onChange={handlemonthname}
                      name="showMonthYearName"
                    />
                  }
                  label="MonthYear"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rollNo}
                      onChange={handlerollno}
                      name="showrollno"
                    />
                  }
                  label="EmployeeCode"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={location1}
                      onChange={handlelocation}
                      name="showlocation"
                    />
                  }
                  label="Location"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fathersn}
                      onChange={handlefn}
                      name="showfathersn"
                    />
                  }
                  label="Fathers Name"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Dateofjoining}
                      onChange={handledoj}
                      name="showdoj"
                    />
                  }
                  label="Date Of Joining"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={DateofBirth}
                      onChange={handledob}
                      name="showdob"
                    />
                  }
                  label="Date Of Birth"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={payperiod}
                      onChange={handlepayperiod}
                      name="showpayperiod"
                    />
                  }
                  label="Pay Period"
                />
              </Box>
            </Box>
          </Box>
        </Drawer>
        <Container maxWidth="md" style={styleobj.container}>
          <Card style={styleobj.card}>
            <CardContent>
              <Box textAlign="left" marginLeft={"20px"} mb={2}>
                {showcompanyname && (
                  <Typography
                    variant="h5"
                    color="primary"
                    style={styleobj.head}>
                    {props.companyname}
                  </Typography>
                )}
                {showaddressname && (
                  <Typography variant="subtitle1">{props.Address1}, {props.Address2}, {props.city}, {props.zipcode}</Typography>
                )}
                <Divider style={styleobj.divider} />
              </Box>
              <Box textAlign="left" marginLeft={"20px"} mb={2}>
                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item xs={12}>
                    {showmonth && (
                      <Typography variant="h6" gutterBottom>
                        Payslip for the month of {props.Month}, 2020
                      </Typography>
                    )}
                    <Typography
                      variant="h6"
                      color="primary"
                      align="left"
                      style={styleobj.emppaysummary}>
                      EMPLOYEE PAY SUMMARY
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {showName && (
                      <Typography
                        variant="body1"
                        align="left"
                        style={styleobj.typo}>
                        <strong>Employee Name:</strong> {props.Name}
                      </Typography>
                    )}
                    {rollNo && (
                      <Typography
                        variant="body1"
                        align="left"
                        style={styleobj.typo}>
                        <strong>Employee Code:</strong> {props.EmpNo}
                      </Typography>
                    )}
                    {showDesignation && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong>Designation:</strong> {props.Designation}
                      </Typography>
                    )}
                    {fathersn && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong>FathersName:</strong> {props.FathersName}
                      </Typography>
                    )}
                    {Dateofjoining && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong> Date of Joining:</strong> {formatDate(props.DateOfJoining)}
                      </Typography>
                    )}
                    {DateofBirth && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong> Date of Birth:</strong> {formatDate(props.DateOfBirth)}
                      </Typography>
                    )}
                    {payperiod && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong> Pay Period:</strong> {formatDate(props.ddate)}
                      </Typography>
                    )}
                    {location1 && (
                      <Typography variant="body1" style={styleobj.typo}>
                        <strong> Location:</strong> {props.Location}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" style={styleobj.empnetpay}>
                      Employee Net Pay
                    </Typography>
                    <Typography variant="h6" style={styleobj.netpay}>
                      <strong>₹{props.NetSalaryPayable}</strong>
                    </Typography>
                    <Typography variant="body1" style={styleobj.body}>
                      Paid Days: <strong>{props.Paiddays}</strong> | LOP Days:{" "}
                      <strong>{props.Absentdays}</strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Divider style={styleobj.divider} />
              </Box>
              <Box textAlign="left" marginLeft={"20px"} mb={2}>
                <Fragment>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={styleobj.tablecellhead}>
                            <strong>Earnings</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecellhead}>
                            <strong> Amount</strong>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>Basic</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.BasicMR}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance1}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value1CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance2}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong> ₹{props.Value2CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance3}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong> ₹{props.Value3CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance4}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value4CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance5}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value5CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance6}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value6CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance7}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value7CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance8}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value8CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance9}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value9CM}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Allowance10}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value10CM}</strong>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>Gross Earnings</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong> ₹{props.GrossEarnings}</strong>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <TableContainer
                    component={Paper}
                    style={{ marginTop: "20px" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={styleobj.tablecellhead}>
                            <strong>Deductions</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecellhead}>
                            <strong>Amount</strong>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>PF</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.PF}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction1}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Value1total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction2}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction2total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction3}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction3total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction4}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction4total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction5}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction5total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction6}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction6total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction7}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction7total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction8}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction8total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction9}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction9total}</strong>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={styleobj.tablecell}>
                            <strong>{props.Deduction10}</strong>
                          </TableCell>
                          <TableCell style={styleobj.tablecell}>
                            <strong>₹{props.Deduction10total}</strong>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Fragment>
                <Box mt={4}>
                  <Typography variant="body1">
                    NET PAY (Gross Earnings - Total Deductions)
                  </Typography>
                  <Typography variant="h6">₹{props.NetSalaryPayable}</Typography>
                  <Typography variant="body1">
                    Total Net Payable: <strong>₹{props.NetSalary}</strong>{" "}
                    (Rupees )
                  </Typography>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Typography variant="body2" align="center">
                  - This is a system generated payslip -
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </div>
    </center>
  );
}
