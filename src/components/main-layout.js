import React from "react";
export default function MainLayout({ children }) {
  const style = {
    backgroundImage: `linear-gradient(to bottom, #eeeeee 0%,#eeeeee 100%)`,
  };
  return (
    <div class="row" style={style}>
      {children}
    </div>
  );
}
