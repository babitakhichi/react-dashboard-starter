import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import userRoutesMap from "routeControl/userRouteMap";
import { logger, modalNotification, setLocalStorageToken } from "utils";
import { UserSignUpForm } from "components/Form";
import { selectUserData, updateUserData } from "redux/AuthSlice/index.slice";
import { UserAuthServices } from "services";

function Signup() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSignUP = async (value) => {
    try {
      setLoader(true);
      const newUserData = {
        ...value,
        firstName: value?.firstName?.replace(/\b\w/g, (match) =>
          match.toUpperCase(),
        ),
        lastName: value?.lastName?.replace(/\b\w/g, (match) =>
          match.toUpperCase(),
        ),
      };
      let bodyData = {
        userId: userData?.userId,
        email: userData?.email,
        deviceId: "web",
        deviceType: "web",
        countryCode: "1",
        ...newUserData,
      };
      if (bodyData.termAndCondtion) delete bodyData.termAndCondtion;

      const response = await UserAuthServices.userSignUp(bodyData);
      if (response?.success) {
        modalNotification({
          type: "success",
          message: response?.message,
        });
        setLocalStorageToken(response?.data?.token);
        dispatch(updateUserData(response?.data));
        navigate(userRoutesMap.PROFILE.path, "_self");
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      logger(error);
    }
  };

  return (
    <>
      <section className="authPage">
        <Row className="g-0 h-100 justify-content-center">
          <Col className="authPage_form h-100">
            <div className="d-flex h-100 justify-content-start align-items-center flex-column authPage_form_form">
              <UserSignUpForm onSubmit={handleSignUP} loading={loader} />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Signup;
