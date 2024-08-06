import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PaySlipTemplate from "./paysliptemplate";
import PaySlipFormTemplate from "./paysliptemplateform";
import PayslipNewFormat from "./PayslipNewFormat";
//import { Checkbox, FormControlLabel } from "@material-ui/core";
function Elegant({data}) {
  return (
    <center>
      {" "}
      <PaySlipFormTemplate
      companyname={data.companyName}
      Address1={data.addressLine1}
      Address2={data.addressLine2}
      city={data.city}
      zipcode={data.zipcode}
      Month="August"
      EmpNo={data.employeeCode}
      Name={data.employeeFirstName}
      FathersName="Padmanaban"
      Designation={data.designationName}
      Location={data.city}
      MonthOfPay="August"
      DateOfBirth="1980-09-23"
      ddate = {data.dDate}
      DateOfJoining={data.joiningDate}
      CalcDays={data.calcDays}
      Paiddays={data.paidDays}
      Presentdays={data.presentDays}
      Absentdays={data.absentDays}
      Leavedays={data.totLeaveDays}
      Holidays={data.holidays}
      BasicMR={data.actBasic}
      BasicCM={data.earnedBasic}
      BasicTotal={data.earnedBasic}
      Weekoffdays={data.weekOffDays}
      Allowance1={data.allowance1}
      Allowance2={data.allowance2}
      Allowance3={data.allowance3}
      Allowance4={data.allowance4}
      Allowance5={data.allowance5}
      Allowance6={data.allowance6}
      Allowance7={data.allowance7}
      Allowance8={data.allowance8}
      Allowance9={data.allowance9}
      Allowance10={data.allowance10}
      Value1MR={data.value1}
      Value2MR={data.value2}
      Value3MR={data.value3}
      Value4MR={data.value4}
      Value5MR={data.value5}
      Value6MR={data.value6}
      Value7MR={data.value7}
      Value8MR={data.value8}
      Value9MR={data.value9}
      Value10MR={data.value10}
      Value1CM={data.value1}
      Value2CM={data.value2}
      Value3CM={data.value3}
      Value4CM={data.value4}
      Value5CM={data.value5}
      Value6CM={data.value6}
      Value7CM={data.value7}
      Value8CM={data.value8}
      Value9CM={data.value9}
      Value10CM={data.value10}
      Value1total={data.value1}
      Value2total={data.value2}
      Value3total={data.value3}
      Value4total={data.value4}
      Value5total={data.value5}
      Value6total={data.value6}
      Value7total={data.value7}
      Value8total={data.value8}
      Value9total={data.value9}
      Value10total={data.value10}
      PF={data.epf}
      Deduction1={data.deduction1}
      Deduction2={data.deduction2}
      Deduction3={data.deduction3}
      Deduction4={data.deduction4}
      Deduction5={data.deduction5}
      Deduction6={data.deduction6}
      Deduction7={data.deduction7}
      Deduction8={data.deduction8}
      Deduction9={data.deduction9}
      Deduction10={data.deduction10}
      Deduction1total={data.valueA1}
      Deduction2total={data.valueA2}
      Deduction3total={data.valueA3}
      Deduction4total={data.valueA4}
      Deduction5total={data.valueA5}
      Deduction6total={data.valueA6}
      Deduction7total={data.valueA7}
      Deduction8total={data.valueA8}
      Deduction9total={data.valueA9}
      Deduction10total={data.valueA10}
      GrossEarnings={data.grossSalary}
      NetSalaryPayable={data.netPay}
      />
    </center>
  );
}

function Tabular({ data }) {
  console.log("table ", data);
  return (
    <PaySlipTemplate
      companyname={data.companyName}
      Month="July"
      EmpNo={data.employeeCode}
      Name={data.employeeFirstName}
      FathersName="Pachaiyappan"
      Designation={data.designationName}
      Location={data.city}
      MonthOfPay="July"
      DateOfBirth="2002-08-26"
      DateOfJoining={data.joiningDate}
      CalcDays={data.calcDays}
      Paiddays={data.paidDays}
      Presentdays={data.presentDays}
      Absentdays={data.absentDays}
      Leavedays={data.totLeaveDays}
      Holidays={data.holidays}
      BasicMR={data.actBasic}
      BasicCM={data.earnedBasic}
      BasicTotal={data.earnedBasic}
      Weekoffdays={data.weekOffDays}
      Allowance1={data.allowance1}
      Allowance2={data.allowance2}
      Allowance3={data.allowance3}
      Allowance4={data.allowance4}
      Allowance5={data.allowance5}
      Allowance6={data.allowance6}
      Allowance7={data.allowance7}
      Allowance8={data.allowance8}
      Allowance9={data.allowance9}
      Allowance10={data.allowance10}
      Value1MR={data.value1}
      Value2MR={data.value2}
      Value3MR={data.value3}
      Value4MR={data.value4}
      Value5MR={data.value5}
      Value6MR={data.value6}
      Value7MR={data.value7}
      Value8MR={data.value8}
      Value9MR={data.value9}
      Value10MR={data.value10}
      Value1CM={data.value1}
      Value2CM={data.value2}
      Value3CM={data.value3}
      Value4CM={data.value4}
      Value5CM={data.value5}
      Value6CM={data.value6}
      Value7CM={data.value7}
      Value8CM={data.value8}
      Value9CM={data.value9}
      Value10CM={data.value10}
      Value1total={data.value1}
      Value2total={data.value2}
      Value3total={data.value3}
      Value4total={data.value4}
      Value5total={data.value5}
      Value6total={data.value6}
      Value7total={data.value7}
      Value8total={data.value8}
      Value9total={data.value9}
      Value10total={data.value10}
      PF={data.epf}
      Deduction1={data.deduction1}
      Deduction2={data.deduction2}
      Deduction3={data.deduction3}
      Deduction4={data.deduction4}
      Deduction5={data.deduction5}
      Deduction6={data.deduction6}
      Deduction7={data.deduction7}
      Deduction8={data.deduction8}
      Deduction9={data.deduction9}
      Deduction10={data.deduction10}
      Deduction1total={data.valueA1}
      Deduction2total={data.valueA2}
      Deduction3total={data.valueA3}
      Deduction4total={data.valueA4}
      Deduction5total={data.valueA5}
      Deduction6total={data.valueA6}
      Deduction7total={data.valueA7}
      Deduction8total={data.valueA8}
      Deduction9total={data.valueA9}
      Deduction10total={data.valueA10}
      GrossEarnings={data.grossSalary}
      NetSalaryPayable={data.netPay}
      WorkFromHome="0"
    />
  );
}

function Classic({data}) {
  return (
    <PayslipNewFormat
      companyname={data.companyName}
      Month="AUGUST"
      Address1={data.addressLine1}
      Address2={data.addressLine2}
      city={data.city}
      zipcode={data.zipcode}
      EmpNo={data.employeeCode}
      Name={data.employeeFirstName}
      FathersName="Padmanaban"
      Designation={data.designationName}
      Location={data.city}
      MonthOfPay="AUGUST"
      DateOfBirth="1980-09-23"
      DateOfJoining={data.joiningDate}
      CalcDays={data.calcDays}
      Paiddays={data.paidDays}
      Presentdays={data.presentDays}
      Absentdays={data.absentDays}
      Leavedays={data.totLeaveDays}
      Holidays={data.holidays}
      BasicMR={data.actBasic}
      BasicCM={data.earnedBasic}
      BasicTotal={data.earnedBasic}
      Weekoffdays={data.weekOffDays}
      Allowance1={data.allowance1}
      Allowance2={data.allowance2}
      Allowance3={data.allowance3}
      Allowance4={data.allowance4}
      Allowance5={data.allowance5}
      Allowance6={data.allowance6}
      Allowance7={data.allowance7}
      Allowance8={data.allowance8}
      Allowance9={data.allowance9}
      Allowance10={data.allowance10}
      Value1MR={data.value1}
      Value2MR={data.value2}
      Value3MR={data.value3}
      Value4MR={data.value4}
      Value5MR={data.value5}
      Value6MR={data.value6}
      Value7MR={data.value7}
      Value8MR={data.value8}
      Value9MR={data.value9}
      Value10MR={data.value10}
      Value1CM={data.value1}
      Value2CM={data.value2}
      Value3CM={data.value3}
      Value4CM={data.value4}
      Value5CM={data.value5}
      Value6CM={data.value6}
      Value7CM={data.value7}
      Value8CM={data.value8}
      Value9CM={data.value9}
      Value10CM={data.value10}
      Value1total={data.value1}
      Value2total={data.value2}
      Value3total={data.value3}
      Value4total={data.value4}
      Value5total={data.value5}
      Value6total={data.value6}
      Value7total={data.value7}
      Value8total={data.value8}
      Value9total={data.value9}
      Value10total={data.value10}
      PF={data.epf}
      Deduction1={data.deduction1}
      Deduction2={data.deduction2}
      Deduction3={data.deduction3}
      Deduction4={data.deduction4}
      Deduction5={data.deduction5}
      Deduction6={data.deduction6}
      Deduction7={data.deduction7}
      Deduction8={data.deduction8}
      Deduction9={data.deduction9}
      Deduction10={data.deduction10}
      Deduction1total={data.valueA1}
      Deduction2total={data.valueA2}
      Deduction3total={data.valueA3}
      Deduction4total={data.valueA4}
      Deduction5total={data.valueA5}
      Deduction6total={data.valueA6}
      Deduction7total={data.valueA7}
      Deduction8total={data.valueA8}
      Deduction9total={data.valueA9}
      Deduction10total={data.valueA10}
      GrossEarnings={data.grossSalary}
      NetSalaryPayable={data.netPay}
      ddate = {data.dDate}
    />
  );
}

const Payslipmonthly = () => {
  const location = useLocation();
  console.log(location.state);
  const ddata = location.state || {};
  console.log("ddata", ddata.paym[0]);
  console.log(location.state.paym);
  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const renderUI = (data) => {
    console.log("render ", data);
    if (checked.checkbox1) {
      return <Tabular data={data.paym[0]} />;
    } else if (checked.checkbox2) {
      return <Elegant data={data.paym[0]}/>;
    } else if (checked.checkbox3) {
      return <Classic data={data.paym[0]}/>;
    } else {
      return null;
    }
  };
  const handleCheckboxChange = (event) => {
    setChecked((prevChecked) => {
      const newChecked = { ...prevChecked };
      newChecked[event.target.name] = event.target.checked;
      if (event.target.checked) {
        Object.keys(newChecked).forEach((key) => {
          if (key !== event.target.name) {
            newChecked[key] = false;
          }
        });
      }
      return newChecked;
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.checkbox1}
              onChange={handleCheckboxChange}
              name="checkbox1"
            />
          }
          label="Checkbox 1"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.checkbox2}
              onChange={handleCheckboxChange}
              name="checkbox2"
            />
          }
          label="Checkbox 2"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.checkbox3}
              onChange={handleCheckboxChange}
              name="checkbox3"
            />
          }
          label="Checkbox 3"
        />
      </Grid>
      {renderUI(ddata)}
    </Grid>
  );

  // return (
  //   <TableContainer
  //     component={Paper}
  //     style={{ maxWidth: "1100px", margin: "auto", padding: "10px" }}>
  //     <Box
  //       border={4}
  //       borderColor="black"
  //       borderRadius={1}
  //       style={{ padding: "10px" }}>
  //       <Typography variant="h5" align="center" gutterBottom>
  //         HESPERUS AUTOMATION PVT LTD.
  //       </Typography>
  //       <Typography variant="h6" align="center" gutterBottom>
  //         Payslip for the month of ____________, 2012
  //       </Typography>
  //     </Box>
  //     <Box
  //       marginTop={"20px"}
  //       border={4}
  //       borderColor="black"
  //       borderRadius={1}
  //       style={{ padding: "10px" }}>
  //       <Grid container spacing={2}>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Emp No.: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Gender: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Name: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Grade: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Pan No.: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Department: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong> Att. Branch: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Location: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Att. Brc Code: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Bank A/C No.: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Bank Name: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>LOP Days: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>Standard Days: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong> Refund Days: _______________</strong>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Typography variant="body1">
  //             <strong>PF No.: _______________</strong>
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //     <Table
  //       size="small"
  //       aria-label="earnings and deductions"
  //       style={{ marginTop: "20px" }}>
  //       <TableHead style={{ border: "4px solid black" }}>
  //         <TableRow style={{ border: "4px solid black" }}>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong> Earnings</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Monthly Rate</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Current Month</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Arrears</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Total</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Deductions</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Total</strong>
  //           </TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody style={{ border: "4px solid black" }}>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Basic</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>7500.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>7500.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>7500.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Profession Tax</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>200.00</strong>
  //           </TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Conveyance Allowance</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>800.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>800.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>800.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Group Insurance</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>150.00</strong>
  //           </TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>House Rent Allow.</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Provident Fund</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>900.00</strong>
  //           </TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Fixed Allowance</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>3750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Income Tax</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Leave Travel Allowance</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Medical</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>Superannuation Allowance</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}>
  //             <strong>750.00</strong>
  //           </TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //           <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
  //         </TableRow>
  //         <TableRow style={{ border: "4px solid black" }}>
  //           <TableCell>
  //             <strong>Total</strong>
  //           </TableCell>
  //           <TableCell></TableCell>
  //           <TableCell></TableCell>
  //           <TableCell>
  //             <strong>Gross Earnings</strong>
  //           </TableCell>
  //           <TableCell>
  //             <strong>1250.00</strong>
  //           </TableCell>
  //           <TableCell></TableCell>
  //         </TableRow>
  //         <TableRow style={{ border: "4px solid black" }}>
  //           <TableCell colSpan={4}>
  //             <strong>Net Salary Payable</strong>
  //           </TableCell>
  //           <TableCell>
  //             <strong>17800.00</strong>
  //           </TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell colSpan={8}>
  //             <strong>
  //               {" "}
  //               Net Salary Payable (In words): Seventeen Thousand Eight Hundred
  //               Only
  //             </strong>
  //           </TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //     <Typography variant="body2" align="center" style={{ marginTop: "16px" }}>
  //       <strong>
  //         *Net Salary payable also subject to deductions as per Income Tax Law
  //       </strong>
  //     </Typography>
  //   </TableContainer>
  // );
};

export default Payslipmonthly;
