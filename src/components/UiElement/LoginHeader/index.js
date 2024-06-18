import React, { useState, useEffect, memo } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import userRoutesMap from "routeControl/userRouteMap";
import { logger, modalNotification } from "utils";
import { UserAuthServices } from "services/User";
import { logout, selectUserData } from "redux/AuthSlice/index.slice";
import SweetAlert from "../SweetAlert";
import { ImageElement } from "../..";

function LoginHeader({ setMenuToggle, menuToggle }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const userStatus = useSelector(
    (state) =>
      state?.chat?.onlineUsers?.[userData?.id] ??
      state?.auth?.userData?.chatStatus?.status ??
      "offline",
  );

  const [, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [userOnlineStatus, setUserOnlineStatus] = useState(
    localStorage.getItem?.("online_status")
      ? JSON.parse(localStorage.getItem("online_status"))?.status
      : userStatus,
  );
  const userRole = userData?.userRole?.role?.role;

  // const accountLogout = async () => {
  //   try {
  //     const response = await UserAuthServices.userLogout()
  //     if (response?.success) {
  //       modalNotification({
  //         type: 'success',
  //         message: response?.message
  //       })
  //       dispatch(logout(navigate, userRole))
  //       setLoading(false)
  //     }
  //   } catch (error) {
  //     logger(error)
  //   }
  //   setLoading(false)
  // }

  const showSweetAlert = () => {
    setIsAlertVisible(true);
  };

  const onConfirmAlert = async () => {
    try {
      const response = await UserAuthServices.userLogout();
      if (response?.success) {
        modalNotification({
          type: "success",
          message: response?.message,
        });
        dispatch(logout(navigate, userRole));
        setLoading(false);
      }
    } catch (error) {
      logger(error);
    }
    setLoading(false);
    setIsAlertVisible(false);
    return true;
  };

  useEffect(() => {
    if (userStatus) {
      setUserOnlineStatus(userStatus);
    }
  }, [userStatus]);

  return (
    <>
      <header className="loginHeader">
        <Navbar bg="light" fixed="top">
          <div className="navIcon me-3 me-xl-0">
            <Link
              to="#"
              onClick={() => setMenuToggle(!menuToggle)}
              className="menuIcon d-xl-none"
            >
              <span className="icon-menu-bar" />
            </Link>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul className="list-inline d-flex align-items-center mb-0">
                <li className="navIcon searchIcon">
                  <Link to="#" onClick={() => setSearchOpen(true)}>
                    <span className="icon-search" />
                  </Link>
                </li>
                <li>
                  <Dropdown className="profile">
                    <Dropdown.Toggle
                      as="a"
                      className="d-flex align-items-center"
                      id="dropdown-basic"
                    >
                      <div className="profile_blk position-relative">
                        <div className="profile_blk_img">
                          <ImageElement
                            previewSource={userData?.profileImageUrl}
                            className="img-fluid"
                            alt="profile"
                            origin="anonymous"
                            crossOrigin="anonymous"
                          />
                        </div>
                        <span
                          className={`status ${userOnlineStatus ?? "online"}`}
                        >
                          <em className="icon-check" />
                        </span>
                      </div>
                      <span>
                        {`${userData?.firstName ? userData?.firstName : ""} ${
                          userData?.lastName ? userData?.lastName : ""
                        }`?.replace(/\b\w/g, (match) => match.toUpperCase())}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      {/* <div className="tooltip__arrow"></div> */}
                      <div className="userInfo d-flex align-items-center">
                        <div className="userAvatar userAvatar-lg">
                          <ImageElement
                            previewSource={userData?.profileImageUrl}
                            className="img-fluid"
                            alt="profile"
                            origin="anonymous"
                            crossOrigin="anonymous"
                          />
                        </div>
                        <div className="userInfo_cnt">
                          <h3>
                            <span>
                              {`${
                                userData?.firstName ? userData?.firstName : ""
                              } ${
                                userData?.lastName ? userData?.lastName : ""
                              }`?.replace(/\b\w/g, (match) =>
                                match.toUpperCase(),
                              )}
                            </span>
                          </h3>
                          {userData?.email && <p>{userData.email}</p>}
                        </div>
                      </div>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        onClick={document.body.click()}
                        to={userRoutesMap.PROFILE.path}
                      >
                        <span className="icon-user">
                          <em className="path1" />
                          <em className="path2" />
                        </span>
                        My Profile
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={userRoutesMap.LOGIN.path}
                        onClick={(e) => {
                          e.preventDefault();
                          showSweetAlert();
                        }}
                      >
                        <span className="icon-logout">
                          <em className="path1" />
                          <em className="path2" />
                        </span>
                        Logout
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <SweetAlert
        reverseButtons
        title={t("text.common.wantToLogout")}
        text={t("text.common.areYouSureLogout")}
        show={isAlertVisible}
        icon="warning"
        showCancelButton
        cancelButtonText={t("text.common.no")}
        confirmButtonText={t("text.common.yes")}
        setIsAlertVisible={setIsAlertVisible}
        showLoaderOnConfirm
        loading={loading}
        onConfirmAlert={onConfirmAlert}
      />
    </>
  );
}

export default memo(LoginHeader);
