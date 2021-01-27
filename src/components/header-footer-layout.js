import React from "react";
export default function HeaderFooterLayout({ children }) {
  return (
    <div class="row">
      <div class="col-md-12">{children}</div>
    </div>
  );
}
