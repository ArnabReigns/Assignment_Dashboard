import { Icon } from "@iconify/react";
import { Badge } from "@mui/material";
import React from "react";
import { useState } from "react";

const Appbar = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="appbar">
      <div className="top">
        <Icon icon="twemoji:butterfly" />
        <Icon icon="tabler:search" />
      </div>

      <div className="mid">
        <div
          className={`tab ${activeTab == 1 && "active"}`}
          onClick={() => setActiveTab(1)}
        >
          <Icon icon="octicon:home-16" />
        </div>
        <div
          className={`tab ${activeTab == 2 && "active"}`}
          onClick={() => setActiveTab(2)}
        >
          <Icon icon="bx:news" />
        </div>

        <div
          className={`   ${activeTab == 3 && "active"}`}
          onClick={() => setActiveTab(3)}
        >
          <Icon icon="gg:list" />
        </div>
        <div
          className={`tab ${activeTab == 4 && "active"}`}
          onClick={() => setActiveTab(4)}
        >
          <Icon icon="fluent:person-12-regular" />
        </div>
        <div
          className={`tab search ${activeTab == 5 && "active"}`}
          onClick={() => setActiveTab(5)}
        >
          <Icon icon="tabler:search" />
        </div>
      </div>

      <div className="bottom">
        <div className="tab">
          <Badge variant="dot" color="primary">
            <Icon icon="mingcute:notification-line" />
          </Badge>
        </div>
        <div className="tab">
          <Icon icon="mingcute:exit-line" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
