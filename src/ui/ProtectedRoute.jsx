/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //*1. LOAD AUTHENTICATED USER
  const { isLoading, isAuthenticated } = useUser();

  //*2. IF NO AUTHENTICATED USER REDIRECT TO LOGIN PAGE
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading],
  );

  //*3. LOADING: SHOW SPINNER
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //*4. IF AUTHENTICATED USER, RENDER CHILDREN
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
