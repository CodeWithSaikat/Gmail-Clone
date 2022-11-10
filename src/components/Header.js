import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowDropDown, Search } from "@mui/icons-material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { logout, selectUser } from "../features/mailReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase.js";
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const singOUt = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="Gmail logo"
        />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__input__dropdown" />
      </div>
      <div className="header__right">
        <QuestionMarkIcon />
        <SettingsIcon />
        <AppsIcon />
        <Avatar onClick={singOUt} src={user?.photo} />
      </div>
    </div>
  );
};

export default Header;
