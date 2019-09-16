import { createAppContainer } from "react-navigation";
//import StackNav from "./StackNav";
import ProfileStack from "./ProfileStack";
import StackNav from "./StackNav";

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
