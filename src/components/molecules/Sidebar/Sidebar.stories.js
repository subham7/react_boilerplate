import React from "react"
import { storiesOf } from "@storybook/react"
import Sidebar from "./Sidebar.molecule"
import {
  MdHome,
  MdPerson,
  MdWork,
  MdInsertChart,
  MdForum
} from "react-icons/md"

storiesOf("Sidebar", module).add("Sidebar with element", () => {
  const sidebarElement = [
    {
      icon: <MdHome />,
      text: "Home",
      url: "/dashboard/drives"
    },
    {
      icon: <MdPerson />,
      text: "Profile",
      url: "/dashboard/profile"
    },
    {
      icon: <MdWork />,
      text: "Drives",
      url: "/dashboard/drives"
    },
    {
      icon: <MdForum />,
      text: "Notice",
      url: "/dashboard/notice"
    },
    {
      icon: <MdInsertChart />,
      text: "Analytics",
      url: "Home"
    }
  ]

  return <Sidebar element={sidebarElement} />
})
