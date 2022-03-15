import React, { useState } from "react";
import {  Container,Tab, Tabs } from "react-bootstrap";
import AllImages from "../MasterPlans/AllImages"
import FourBR from "../MasterPlans/FourBR"
import ThreeBR from "../MasterPlans/ThreeBR"
import SitPlan from "../MasterPlans/SitPlan"
import TypicalFloorPlan from "../MasterPlans/TypicalFloorPlan"

const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary text-uppercase">
        Master & Floor Plans
      </h2>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 text-dark"
        >
        <Tab eventKey="all" title="All">
          {<AllImages />}
        </Tab>
          <Tab eventKey="site-plan" title="Site Plan" className="text-dark">
            <SitPlan />
          </Tab>
          <Tab
            eventKey="floor-plan"
            title="Floor Plan"
            className="text-dark"
          >
            <TypicalFloorPlan />
          </Tab>
          <Tab eventKey="3br" title="3 BR">
            {<ThreeBR />}
          </Tab>
          <Tab eventKey="4br" title="4 BR">
            {<FourBR />}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default MasterPlan;
