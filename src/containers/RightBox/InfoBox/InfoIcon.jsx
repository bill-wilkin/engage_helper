// icon:info-24 | Octicons https://primer.style/octicons/ | Github Primer
import * as React from "react";
import './InfoBox.css'

function IconInfoTwentyFour(props) {
  return (
    <svg
      className="info-icon"
      viewBox="0 0 24 24"
      fill="white"
      height="5vh"
      width="5vw"
      {...props}
    >
      <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
      <path
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
      />
    </svg>
  );
}

export default IconInfoTwentyFour;
