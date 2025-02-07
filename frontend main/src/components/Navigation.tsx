import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (path, sectionId) => {
    navigate(path, { replace: true });

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-primary sticky">
      <Navbar fluid rounded className="lg:mx-32 bg-primary">
        <Navbar.Brand onClick={() => handleNavigateToSection("/", "home")}>
          <span className="self-center text-xl font-semibold dark:text-white">
            Stone Detector
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={() => navigate("/")}>Contact</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            onClick={() => handleNavigateToSection("/", "contact")}
            active
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            onClick={() => handleNavigateToSection("/", "prediction")}
          >
            Prediction
          </Navbar.Link>
          <Navbar.Link onClick={() => handleNavigateToSection("/", "faq")}>
            FAQ
          </Navbar.Link>
          <Navbar.Link onClick={() => handleNavigateToSection("/", "contact")}>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
