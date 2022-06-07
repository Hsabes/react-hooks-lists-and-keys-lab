import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkEle = links.map((link) => {
    return <a key={link} href={ "#" + link }>{link}</a>
  })

  console.log(linkEle);

  return (
    <nav>
      {linkEle}
    </nav>
  )
}

export default NavBar;
