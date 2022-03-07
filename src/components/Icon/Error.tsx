import * as React from "react";
import { IconProps } from "./Icon";

const SvgError = (props: IconProps): React.ReactElement => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      d={
        "m15.465 3.988 7.002 12.105C23.992 18.73 22.061 22 19.002 22H4.998c-3.06 0-4.99-3.27-3.464-5.907l4.248-3.691-2.658 4.596c-.819 1.414.21 3.184 1.874 3.184h14.004c1.663 0 2.693-1.77 1.875-3.184L14.058 5.21l1.407-1.222Z"
      }
      fill={"currentcolor"}
    />
    <path
      d={
        "m14.058 5.21 1.407-1.222c-1.533-2.65-5.397-2.65-6.93 0L1.534 16.093l4.248-3.691 4.343-7.51c.828-1.432 2.921-1.432 3.75 0l.183.318ZM12 7.455c.507 0 .917.407.917.909v5.454c0 .502-.41.91-.917.91a.913.913 0 0 1-.916-.91V8.364c0-.502.41-.91.916-.91ZM12.917 17.455c0-.502-.41-.91-.917-.91a.913.913 0 0 0-.916.91v.009c0 .502.41.909.916.909a.913.913 0 0 0 .917-.91v-.008Z"
      }
      fill={"currentcolor"}
    />
  </svg>
);

export default SvgError;
