import styled from "styled-components";
// styles
import colors from "../../styles/settings/colors";
import borders from "../../styles/tools/borders";

export const InputWrapper = styled.div`
  & {
    width: 100%;

    label {
      margin-bottom: var(--gap);
      display: block;
    }

    input {
      display: block;
      width: 100%;

      color: ${colors.neutral.very_dark_blue};
      padding: var(--gap-sm);
      border-radius: ${borders.radius.primary};
    }
  }
`;
