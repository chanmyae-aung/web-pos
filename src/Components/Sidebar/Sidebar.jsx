import { AppShell, Navbar, Header } from "@mantine/core";
import NavBar from "./NavBar";
import SidebarItems from "./SidebarItems";
import Mediapgwpic from "../../Pages/Media/Mediapgwpic";

export default function Sidebar({ children }) {
  return (
    <AppShell
      padding="md"
      //drawer sidebar here
      navbar={
        <Navbar
          width={{ base: 300 }}
          height={1000}
          p="xs"
          bg={"#161618"}
          withBorder={0}
        >
          {<SidebarItems />}
        </Navbar>
      }
      // navbar header here
      header={
        <Header
          style={{
            borderBlockColor: "#3f4245",
          }}
          bg={"#3F4245"}
          height={60}
          p="xs"
        >
          {<NavBar />}
        </Header>
      }
    >
      {/* children components here*/}
      {children}
      <Mediapgwpic/>
    </AppShell>
  );
}
