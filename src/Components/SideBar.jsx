import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { motion } from "framer-motion";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { categories2 } from "../utils/constants";

const SideBar = ({
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
  selectedCategory,
  setSelectedCategory,
}) => {
  const sidebarWidth = isHovered ? "14em" : "5em";
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <>
      {!isMobile && (
        <motion.div
          layout
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Drawer
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                marginTop: "4em",
                backgroundColor: "#0F0F0F",
                width: sidebarWidth,
                overflow: "hidden",
                transition: "width 0.5s",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            {categories2.map((category) => (
              <button
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  paddingBottom: "25px",
                  paddingTop: "5px",
                  border: "none",
                  background:
                    category.name === selectedCategory ? "#FC1503" : "#0F0F0F",
                  backgroundColor: "#0F0F0F",
                  cursor: "pointer",
                }}
                key={category.name}
              >
                <span
                  style={{
                    color:
                      category.name === selectedCategory ? "#141414" : "red",
                    marginRight: "15px",
                  }}
                >
                  {category.icon}
                </span>
                {isHovered && (
                  <motion.span
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{
                      opacity: category.name === selectedCategory ? "1" : "0.8",
                      marginRight: "40px",
                      fontSize: "1.2em",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {category.name}
                  </motion.span>
                )}
              </button>
            ))}
          </Drawer>
        </motion.div>
      )}

      {isMobile && (
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            top: "auto",
            bottom: 0,
            overflowX: "auto",
            backgroundColor: "#0F0F0F",
          }}
        >
          <Toolbar sx={{ overflowX: "auto", touchAction: "auto" }}>
            {" "}
            {categories2.map((category) => (
              <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  border: "none",
                  marginLeft: -15,
                  marginRight: 40,
                  background:
                    category.name === selectedCategory ? "#FC1503" : "#0F0F0F",
                  color: "white",
                }}
                key={category.name}
              >
                <span
                  style={{
                    color: category.name === selectedCategory ? "white" : "red",
                    marginRight: "15px",
                  }}
                >
                  {category.icon}
                </span>
              </button>
            ))}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default SideBar;
