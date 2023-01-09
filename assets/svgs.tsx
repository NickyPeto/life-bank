import * as React from "react";
import Svg, { SvgProps, Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLogo = (props: SvgProps) => (
  <Svg
    height={props.width}
    width={props.height}
    id="Capa_2"
    data-name="Capa 2"
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 333.68 49.32"
    {...props}
  >
    <Defs></Defs>
    <G id="Capa_1-2" data-name="Capa 1">
      <Path
        stroke={props?.stroke}
        fill={props.fill}
        // className="cls-1"
        d="M32.95 49.32H0V0h12.54v39.2h20.41v10.12ZM38.69 49.32V0h12.54v49.32H38.69ZM58.69 49.32V0h33.56v10.12H71.23v11.21h19.11v9.6H71.23v18.39H58.69ZM131.59 49.32h-33.8V0h33.8v10.12h-21.26v9.81h20v9.23h-20v10.05h21.26v10.12ZM155.67 49.32V0h20.2c8.72 0 14.46 4.85 14.46 12.3 0 5.23-3.83 9.91-8.75 10.73v.27c6.67.75 11.21 5.5 11.21 12.07 0 8.68-6.32 13.95-16.85 13.95h-20.27Zm7.66-28.34h9.06c6.67 0 10.32-2.73 10.32-7.62 0-4.58-3.14-7.11-8.72-7.11h-10.66v14.73Zm11.07 22.08c6.9 0 10.56-2.84 10.56-8.17s-3.79-8.07-11.01-8.07h-10.63v16.23h11.07ZM227 35.99h-18.8l-4.51 13.33h-7.96L213.53 0h8.27l17.81 49.32h-8.1L227 35.99Zm-16.85-6.15h14.9L217.7 8.2h-.21l-7.35 21.64ZM245.05 49.32V0h6.94l25.57 36.37h.27V0h7.45v49.32h-6.9l-25.57-36.33h-.31v36.33h-7.45ZM294.37 49.32V0h7.66v23.48h.31L322.94 0h9.09l-19.55 21.84 21.19 27.48h-9.5L307.08 27.1l-5.06 5.78v16.44h-7.66Z"
      />
    </G>
  </Svg>
);

export default SvgLogo;
