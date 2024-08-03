import {
  TableContainer,
  Paper,
  Box,
  Typography,
  Grid,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Checkbox,
  IconButton,
  Drawer,
  FormControlLabel,
} from "@mui/material";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

export default function PaySlipTemplate(props) {
  const [showName, setShowName] = useState(true);
  const [showDesignation, setShowDesignation] = useState(true);
  const [showcompanyname, setshowcompanyname] = useState(true);
  const [showaddressname, setshowaddressname] = useState(true);
  const [showmonth, setshowmonth] = useState(true);
  const [rollNo, setRollno] = useState(true);
  const [location1, setlocation] = useState(true);
  const [fathersn, setfathersname] = useState(true);
  const [monthofpay, setMonthofpay] = useState(true);
  const [dateofbirth, setDateofbirth] = useState(true);
  const [dateofjoining, setDateofjoining] = useState(true);
  const [calcDays, setCalcdays] = useState(true);
  const [paidDays, setPaiddays] = useState(true);
  const [prsDays, setPrsdays] = useState(true);
  const [absentDays, setAbsentdays] = useState(true);
  const [leavedays, setLeavedays] = useState(true);
  const [Holidays, setHolidays] = useState(true);
  const [weekOffDays, setWeekoffdays] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handlemonthofpay = (event) => {
    setMonthofpay(event.target.checked);
  };

  const handledob = (event) => {
    setDateofbirth(event.target.checked);
  };

  const handledoj = (event) => {
    setDateofjoining(event.target.checked);
  };

  const handlecalcdays = (event) => {
    setCalcdays(event.target.checked);
  };

  const handlepaiddays = (event) => {
    setPaiddays(event.target.checked);
  };

  const handleprsdays = (event) => {
    setPrsdays(event.target.checked);
  };

  const handleAbsdays = (event) => {
    setAbsentdays(event.target.checked);
  };

  const handleleavedays = (event) => {
    setLeavedays(event.target.checked);
  };

  const handleHolidays = (event) => {
    setHolidays(event.target.checked);
  };

  const handleweekoffdays = (event) => {
    setWeekoffdays(event.target.checked);
  };

  const styleobj = {
    header: {
      fontSize: "30px",
      border: "2px solid black",
      width: "990px",
      align: "center",
    },
    container: { maxWidth: "1100px", margin: "auto", padding: "10px" },
    tablecontainer: {
      maxWidth: "1100px",
      margin: "auto",
      padding: "10px",
    },
    tablebox: {
      border: "4px solid black",
      borderRadius: "1px",
      padding: "10px",
    },
    tablecell: { borderRight: "4px solid black" },
    tablebox1: {
      marginTop: "20px",
      border: "4px solid black",
      borderColor: "black",
      borderRadius: "1px",
      padding: "10px",
    },
    table: {
      marginTop: "20px",
    },
    tablehead: {
      border: "4px solid black",
    },
    tablerow: {
      border: "4px solid black",
    },
    tablebody: {
      border: "4px solid black",
    },
    typo: {
      marginTop: "16px",
    },
  };
  return (
    <div style={styleobj.container}>
      <IconButton onClick={handleDrawerToggle} style={{ marginLeft: "1200px" }}>
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
            <Box display="flex" flexDirection="column" alignItems="flex-start">
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
                label="Rollno"
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
                    checked={monthofpay}
                    onChange={handlemonthofpay}
                    name="showMOP"
                  />
                }
                label="MonthofPay"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={dateofbirth}
                    onChange={handledob}
                    name="showDOB"
                  />
                }
                label="DateofBirth"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={dateofjoining}
                    onChange={handledoj}
                    name="showDOJ"
                  />
                }
                label="DateofJoining"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={calcDays}
                    onChange={handlecalcdays}
                    name="showCalcdays"
                  />
                }
                label="Calculated Days"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={paidDays}
                    onChange={handlepaiddays}
                    name="showPaiddays"
                  />
                }
                label="Paid Days"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={prsDays}
                    onChange={handleprsdays}
                    name="showprsdays"
                  />
                }
                label="Present Days"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={absentDays}
                    onChange={handleAbsdays}
                    name="showabsdays"
                  />
                }
                label="Absent Days"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={leavedays}
                    onChange={handleleavedays}
                    name="showleavedays"
                  />
                }
                label="Leave Days"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={Holidays}
                    onChange={handleHolidays}
                    name="showholidays"
                  />
                }
                label="Holidays"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={weekOffDays}
                    onChange={handleweekoffdays}
                    name="showWeekoffdays"
                  />
                }
                label="Weekoffdays"
              />
            </Box>
          </Box>
        </Box>
      </Drawer>

      <TableContainer component={Paper} style={styleobj.container}>
        <Box style={styleobj.tablebox}>
          {showcompanyname && (
            <Typography variant="h5" align="center" gutterBottom>
              {props.companyname}
            </Typography>
          )}
          {showmonth && (
            <Typography variant="h6" align="center" gutterBottom>
              Payslip for the month of {props.Month}, 2012
            </Typography>
          )}
        </Box>
        <Box style={styleobj.tablebox1}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {rollNo && (
                <Typography variant="body1">
                  <strong>Emp No: {props.EmpNo}</strong>
                </Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              {" "}
              {showName && (
                <Typography variant="body1">
                  <strong>Name: {props.Name}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {fathersn && (
                <Typography variant="body1">
                  <strong>Fathers Name: {props.FathersName}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {showDesignation && (
                <Typography variant="body1">
                  <strong>Designation: {props.Designation}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {location1 && (
                <Typography variant="body1">
                  <strong>Location: {props.Location}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {monthofpay && (
                <Typography variant="body1">
                  <strong>Month Of Pay: {props.MonthOfPay}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {dateofbirth && (
                <Typography variant="body1">
                  <strong> Date Of Birth: {props.DateOfBirth}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {dateofjoining && (
                <Typography variant="body1">
                  <strong>Date Of Joining: {props.DateOfJoining}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {calcDays && (
                <Typography variant="body1">
                  <strong>Calc Days: {props.CalcDays}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {paidDays && (
                <Typography variant="body1">
                  <strong>Paid days: {props.Paiddays}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {prsDays && (
                <Typography variant="body1">
                  <strong>Present days: {props.Presentdays}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {absentDays && (
                <Typography variant="body1">
                  <strong>Absent days: {props.Absentdays}</strong>{" "}
                </Typography>
              )}{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              {" "}
              {leavedays && (
                <Typography variant="body1">
                  <strong>Leave days: {props.Leavedays}</strong>{" "}
                </Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              {Holidays && (
                <Typography variant="body1">
                  <strong> Holidays: {props.Holidays}</strong>
                </Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              {weekOffDays && (
                <Typography variant="body1">
                  <strong>Weekoffdays: {props.Weekoffdays}</strong>
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Table
          size="small"
          aria-label="earnings and deductions"
          style={styleobj.table}>
          <TableHead style={styleobj.tablehead}>
            <TableRow style={styleobj.tablerow}>
              <TableCell style={styleobj.tablecell}>
                <strong> Earnings</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>Monthly Rate</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>Current Month</strong>
              </TableCell>
              
              <TableCell style={styleobj.tablecell}>
                <strong>Total</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>Deductions</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>Total</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={styleobj.tablebody}>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>Basic</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.BasicMR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.BasicCM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.BasicTotal}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>PF</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.PF}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Allowance1}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value1MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value1CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value1total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction1}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction1total}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Allowance2}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value2MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value2CM}</strong>
              </TableCell>
              
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value2total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction2}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction2total}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance3}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value3MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value3CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value3total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction3}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction3total}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance4}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value4MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value4CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value4total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction4}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction4total}</strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance5}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value5MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value5CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value5total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction5}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction5total}</strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance6}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value6MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value6CM}</strong>
              </TableCell>
              
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value6total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction6}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction6total}</strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance7}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value7MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value7CM}</strong>
              </TableCell>
              
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value7total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction7}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction7total}</strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance8}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value8MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value8CM}</strong>
              </TableCell>
              
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value8total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction8}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction8total}</strong></TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props. Allowance9}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value9MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value9CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value9total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction9}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction9total}</strong></TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Allowance10}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value10MR}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value10CM}</strong>
              </TableCell>
             
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Value10total}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}>
                <strong>{props.Deduction10}</strong>
              </TableCell>
              <TableCell style={styleobj.tablecell}><strong>{props.Deduction10total}</strong></TableCell>
            </TableRow>

            <TableRow style={styleobj.tablerow}>
              <TableCell>
                
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <strong>Gross Earnings</strong>
              </TableCell>
              <TableCell>
                <strong>{props.GrossEarnings}</strong>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow style={styleobj.tablerow}>
              <TableCell colSpan={4}>
                <strong>Net Salary Payable</strong>
              </TableCell>
              
              <TableCell>
                <strong>{props.NetSalaryPayable}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}>
                <strong>
                  {" "}
                  Net Salary Payable (In words): Seventeen Thousand Eight
                  Hundred Only
                </strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="body2" align="center" style={styleobj.typo}>
          //{" "}
          <strong>
            // *Net Salary payable also subject to deductions as per Income Tax
            Law //{" "}
          </strong>
          //{" "}
        </Typography>
        {" "}
      </TableContainer>
    </div>
  );
}
