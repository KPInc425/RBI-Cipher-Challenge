import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LightDarkToggle from '../components/shared/LightDarkToggle'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/shared/ScrollToTop'

function MainLayout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "business");

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
      <ScrollToTop />
      <Header theme={theme} handleThemeChange={handleThemeChange} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout;
