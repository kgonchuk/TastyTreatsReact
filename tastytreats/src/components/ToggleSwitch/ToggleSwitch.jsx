// import { useState } from "react";
// import { HiddenCheckbox, Inner, StyledLabel,  Switch,  SwitchWrapper, ToggleSwitchContainer } from "./ToggleSwitch.styled";

// export const ToggleSwitch = ({ label }) => {
  
//      const [isChecked, setIsChecked] = useState(false);

//   const toggleSwitch = () => {
//     setIsChecked(!isChecked);
//   };
//   return (
//      <ToggleSwitchContainer>
    
//       <SwitchWrapper>
  
//         <HiddenCheckbox
//           type="checkbox"
//           className="checkbox"
//           id={label}
//           checked={isChecked}
//           onChange={toggleSwitch}
//         />
      
//         <StyledLabel htmlFor={label} className="label">
//           <Inner className="inner" />
//      <Switch ischecked={isChecked} />

//         </StyledLabel >
       
//       </SwitchWrapper>
//     </ToggleSwitchContainer>
//   );
// }   

// // import { useDispatch } from "react-redux";
// // import { toggleTheme } from "../../redux/themeSlice/themeSlice";
// // import { HiddenCheckbox, Inner, StyledLabel,  Switch,  SwitchWrapper, ToggleSwitchContainer } from "./ToggleSwitch.styled";

// // export const ToggleSwitch = () => {
// //   const dispatch = useDispatch();

// //   return (
// //     <ToggleSwitchContainer>
// //       <SwitchWrapper>
// //     <button onClick={() => dispatch(toggleTheme())}>
// //       Toggle
// //     </button>
// //     </SwitchWrapper>
// //     </ToggleSwitchContainer>
// //   );
// // };

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice/themeSlice";
import {
  HiddenCheckbox,
  Inner,
  StyledLabel,
  Switch,
  SwitchWrapper,
  ToggleSwitchContainer,
} from "./ToggleSwitch.styled";

export const ToggleSwitch = ({ label }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const isChecked = theme === "dark";

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleSwitchContainer>
      <SwitchWrapper>
        <HiddenCheckbox
          type="checkbox"
          id={label}
          checked={isChecked}
          onChange={handleToggle}
        />

        <StyledLabel htmlFor={label}>
          <Inner />
          <Switch ischecked={isChecked ? 1 : 0} />
        </StyledLabel>
      </SwitchWrapper>
    </ToggleSwitchContainer>
  );
};