import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('dark');

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setText('light');
      document.body.style.backgroundColor = '#404040';
      showAlert("dark mode activated", "success")
    } else {
      setTheme('light');
      setText('dark');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode activated", "success");
    }
  }
  return (
    <> 
      {/* <Navbar></Navbar> */}
      <Sidebar></Sidebar>
    </>
  )
}
