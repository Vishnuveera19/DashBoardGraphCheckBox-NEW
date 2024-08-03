import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { REPORTS } from '../../serverconfiguration/controllers';
import { Typography } from '@mui/material';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#36BBE3',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#36BBE3',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ChatbotNew = () => {
  const [employeeProfile, setEmployeeProfile] = useState([]);

  useEffect(() => {
    async function getData() {
      const empprofile = await postRequest(ServerConfig.url, REPORTS, {
        query: `select * from paym_employee where EmployeeCode = 'EMP001'`,
      });
      console.log(empprofile.data); 
      setEmployeeProfile(empprofile.data);
    }
    getData();
  }, []);

  const employee = employeeProfile.length > 0 ? employeeProfile[0] : null;


  const steps = [
    {
      id: '1',
      message: `Hi ${sessionStorage.getItem('user')}, How Can I help You?`,
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Employee Profile', trigger: '3' },
        { value: 2, label: 'Salary', trigger: '3' },
        { value: 3, label: 'Leave', trigger: '3' },
      ],
    },
    {
      id: '3',
      message: "HELLO",
      trigger: '2',
    },
    {
      id: '4',
      message: 'Data not available',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
       {employee && (
        <Typography>
          <p>Employee Name: {employee.Employee_Full_Name}</p>
          <p>Employee Code: {employee.EmployeeCode}</p>
          {/* Add more fields as needed */}
        </Typography>
      )}
    </ThemeProvider>
    
  );
};

export default ChatbotNew;
