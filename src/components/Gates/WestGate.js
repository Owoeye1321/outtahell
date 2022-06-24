import React from "react";
import useToggle from "../../Hooks/useToggle";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import "./NorthGate.css";
import { motion } from 'framer-motion/dist/framer-motion'

function WestGate() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <motion.div
    initial = {{width: 0 }}
    animate = {{width: "100%" }}
    exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
    >
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <section className="appie-hero-area">
        <div className="container">
          <div className="grid align-items-center">
            <div className="appie-hero-content">
              <img
                src="https://cdn.punchng.com/wp-content/uploads/2019/01/02162903/FUTA-main-gate.jpg"
                className="img-flu"
              />
              <h1 className="appie-title" style={{ marginTop: "20px" }}>
                Futa WestGate Apartments Futa
              </h1>
            </div>
            <div style={{ marginBottom: "40px" }}></div>
            <div id="card">
              <div className="cardbrket">
                <img
                  src="https://imganuncios.mitula.net/a_room_self_con_for_rent_1670117648473790204.jpg"
                  className="cardbrket__img"
                />
                <div className="cardbrket__text">
                  <h3>Alice Mosunmola hostel</h3>
                  <h5>Price: #130,000</h5>
                </div>
              </div>
              <div className="cardbrket">
                <img
                  src="https://imganuncios.mitula.net/a_room_self_con_for_rent_1670117648473790204.jpg"
                  className="cardbrket__img"
                />
                <div className="cardbrket__text">
                  <h3>Alice Mosunmola hostel</h3>
                  <h5>Price: #130,000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default WestGate;
