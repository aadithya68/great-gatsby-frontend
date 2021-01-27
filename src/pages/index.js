import React from "react";
import HeaderFooterLayout from "../components/header-footer-layout";
import MainLayout from "../components/main-layout";
import GroupsLayout from "../components/groups-layout";
import FeedLayout from "../components/feed-layout";

export default function Home() {
  return (
    <div class="container-fluid">
      <HeaderFooterLayout>
        <div class="row" style={{ textAlign: "center" }}>
          <div class="col-md-12">
            <h3>CELLULOID</h3>
          </div>
        </div>
      </HeaderFooterLayout>
      <MainLayout>
        <GroupsLayout></GroupsLayout>
        <FeedLayout></FeedLayout>
      </MainLayout>
    </div>
  );
}
