import MazeIcon from "./icons/MazeIcon";
import RBIIcon from "./icons/RBIIcon";
import ThemeController from "./shared/ThemeController";

const Footer = () => {
  return (
    <div className="bg-base-300">
      {/* <footer className="footer relative p-10 text-base-content container mx-auto">
        <div className="absolute right-8 top-8 h-full">
          <ThemeController theme={theme} handleThemeChange={handleThemeChange} />
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer> */}
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300 container mx-auto">
        <aside className="items-center flex flex-col md:flex-row w-full">
          <div className="h-12 w-12">
            <RBIIcon />
          </div>
          <p className="text-center md:text-start">
            <a href="https://www.robotbuildersinc.com">RobotBuildersInc.</a> <br />
              Providing reliable tech since 2006
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end w-full md:w-auto justify-center">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/groups/14472221/">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groups/thecodingchallengedotcom">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
