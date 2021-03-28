import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, Nav } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenu from "./submenu/submenu";
import firebase from "../../../firebase";
import { useToasts } from "react-toast-notifications";

const SideBar = ({ isOpen, toggle }) => {
  const router = useRouter();
  const { addToast } = useToasts();
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        addToast("Logged Out", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((error) => {
        // An error happened.
        addToast("Failed", {
          appearance: "error",
          autoDismiss: true,
        });
      });
    router.push("/login");
  };
  return (
    <>
      <div className={["sidebar", isOpen ? "is-open" : ""].join(" ")}>
        <div className="sidebar-header">
          <span color="info" onClick={toggle} style={{ color: "#fff" }}>
            &times;
          </span>
          <h3>Article App</h3>
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
            <NavItem>
              <div style={{ padding: ".5rem 1rem" }}>
                <Link href={"/dashboard"}>
                  <a>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Home
                  </a>
                </Link>
              </div>
            </NavItem>
            <SubMenu title="Articles" icon={faCopy} items={submenus[1]} />
            <NavItem>
              <div style={{ padding: ".5rem 1rem" }}>
                <Link href={"/faq"}>
                  <a>
                    <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                    Settings
                  </a>
                </Link>
              </div>
            </NavItem>

            <div style={{ padding: ".5rem 1rem" }} onClick={handleLogout}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Logout
            </div>
          </Nav>
        </div>
      </div>
    </>
  );
};

const submenus = [
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
  [
    {
      title: "Create Article",
      target: "article/create",
    },
    {
      title: "All Articles",
      target: "article/all",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
];

export default SideBar;
