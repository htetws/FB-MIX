"use client";

import { act, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import TabTitle from "@/Components/Coupon/TabTitle";
import { AccountTab } from "@/Data/TabTitleListData";
import UserGeneral from "./_components/General";
import UserTransaction from "./_components/Transaction";
import UserBetslip from "./_components/Betslip";
import Report from "./_components/Report";

const UserDetail = ({ params }) => {
  const [activeTab, setActiveTab] = useState("1");
  const filterValue = () => [...AccountTab];

  return (
    <div className="inside-horizontal-tabs mt-0">
      <TabTitle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleList={filterValue() || []}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {activeTab === "1" && <UserGeneral {...{ params, activeTab }} />}
        </TabPane>
        <TabPane tabId="2">
          {activeTab === "2" && <UserTransaction {...{ params, activeTab }} />}
        </TabPane>
        <TabPane tabId="3">
          {activeTab === "3" && <UserBetslip {...{ params, activeTab }} />}
        </TabPane>
        <TabPane tabId="4">
          {activeTab === "4" && <Report {...{ params, activeTab }} />}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default UserDetail;
