import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LightDarkToggle from '../components/shared/LightDarkToggle'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  const handleThemeChange = (e) => {
    console.log(e);
    if (e === "dark") {
      setTheme("dark");
    } else if (e === "light") {
      setTheme("light");
    } else {
      setTheme(e.target.value);
    }

  };

  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className='absolute right-4 top-24 z-[1]'>
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
      <Header />
      <Outlet />
      <Footer theme={theme} handleThemeChange={handleThemeChange} />
    </>
  )
}

export default MainLayout;
