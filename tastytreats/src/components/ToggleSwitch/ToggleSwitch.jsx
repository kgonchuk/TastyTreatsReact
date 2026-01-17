import { useState } from "react";
import { HiddenCheckbox, Inner, StyledLabel,  Switch,  SwitchWrapper, ToggleSwitchContainer } from "./ToggleSwitch.styled";

export const ToggleSwitch = ({ label }) => {
     const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
     <ToggleSwitchContainer>
    
      <SwitchWrapper>
        {/* The actual checkbox input, hidden visually */}
        <HiddenCheckbox
          type="checkbox"
          className="checkbox"
          id={label}
          checked={isChecked}
          onChange={toggleSwitch}
        />
        {/* The label acts as the visible switch UI */}
        <StyledLabel htmlFor={label} className="label">
          <Inner className="inner" />
     <Switch ischecked={isChecked} />

        </StyledLabel >
       
      </SwitchWrapper>
    </ToggleSwitchContainer>
  );
}   