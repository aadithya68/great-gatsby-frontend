import React from "react";
import Login from "../components/login";

export default function Home() {
  return (
    <div class="container-fluid">
      <Login path="/login" />
    </div>
  );
}
