import React from "react";
import HeaderFooterLayout from "../components/header-footer-layout";
import MainLayout from "../components/main-layout";
import GroupsLayout from "../components/groups-layout";
import FeedLayout from "../components/feed-layout";
import LoginButtonLayout from "../components/login-button-layout";

export default function Home() {
  return (
    <div class="container-fluid">
      <HeaderFooterLayout>
        <div class="row" style={{ textAlign: "center" }}>
          <div class="col-md-10">
            <h3>CELLULOID</h3>
          </div>
          <div class="col-md-2">
            <LoginButtonLayout></LoginButtonLayout>
          </div>
        </div>
      </HeaderFooterLayout>
      <MainLayout>
        <FeedLayout></FeedLayout>
      </MainLayout>
    </div>
  );
}
