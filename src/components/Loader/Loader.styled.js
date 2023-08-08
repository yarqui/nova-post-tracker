import styled from "styled-components";
import { PiClockClockwise } from "react-icons/pi";

export const LoaderIcon = styled(PiClockClockwise)`
  animation: rotate 500ms ease-in-out infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
