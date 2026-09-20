import SummaryCard from "components/interface/SummaryCard";
import SummaryTable from "components/interface/SummaryTable";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  anotherLightPink,
  synthSunsetMagenta,
  synthSunsetOrange,
  synthSunsetYellow,
  synthSunsetViolet,
  synthSunsetPink,
  synthCyberLightBlue,
  synthCyberPink,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetOrange = hexToRgba(synthSunsetOrange, 1);
const sunsetPink = hexToRgba(synthSunsetPink, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);
const cyberPink = hexToRgba(synthCyberPink, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);
const cyberLightBlue = hexToRgba(synthCyberLightBlue, 1);
const lightPink = hexToRgba(anotherLightPink, 1);

const entries = [
  [
    <DisplayEquation>{`$$ \\int sin(u)du = -cos(u) + C $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ \\int sec(u)du = ln \\left | tan(u)+sec(x)\\right | + C $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\int cos(u)du = sin(u) + C $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ \\int csc(u)du = -ln \\left | cot(u)+csc(x)\\right | + C $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\int tan(u)du = -ln \\left | cos(u) \\right | + C $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ \\int cot(u)du = ln \\left |  sin(u)\\right | + C $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryTable entries={entries} />
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        One set of trig integrals given in many textbooks and tables are the{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        performed backwards (<em>for example:</em>{" "}
        {`$ \\int{sec^2(u)du} = tan(u) + C $`}
        ). It is suggested that you look at the table of{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        if you want those.
      </CustomTypography>
      <CustomTypography>
        The integreals of Sine and Cosine are the easiest to remember, so if you
        are at minimal capacity, commit those to memory. If you already know the{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Derivaties of Sine and Cosine
        </CustomLink>{" "}
        then you are set in that department (they are the derivatives in
        reverse, just keep track of when the +/- signs reverse).
      </CustomTypography>
      <CustomTypography>
        If you know the{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Derivaties of Sine and Cosine
        </CustomLink>
        ,{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Trigonometric Identities
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Integrals/Duu">
          Integral of {`$\\frac{du}{u} $`}
        </CustomLink>
        , you can find the Integrals of Tangent and Cotangent. I will show you
        an example.
      </CustomTypography>
      <CustomTypography>
        The integrals of Secant and Cosecant are a little bit harder to derrive.
        I will show you an example for one of them (the other follows a similar
        pattern). If you are on a test and you don't have them committed to
        memory (or on a formula card) then do your best to remember the gist of
        the derrivation, and good luck.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Derivation
      </SectionHeading>
      <DisplayEquation>{`$$ \\int{tan(x)dx} $$`}</DisplayEquation>
      <CustomTypography>
        To find the integal of the Tangent function, use{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Trigonometric Identities
        </CustomLink>{" "}
        to rewrite the Tangent function in terms of Sine and Cosine.
      </CustomTypography>
      <DisplayEquation>{`$$ \\int{tan(x)dx} = \\int{\\frac{sin(x) \\,dx}{cos(x)}} $$`}</DisplayEquation>
      <CustomTypography>
        Compare this to the{" "}
        <CustomLink href="/Integrals/Duu">
          Integral of {`$\\frac{du}{u} $`}
        </CustomLink>
        :
      </CustomTypography>
      <DisplayEquation>
        {`$$\\int \\frac{\\color{${sunsetMagenta}}{\\mathrm{d}u}}{\\color{${sunsetYellow}}{u}} = \\ln{\\left |\\color{${sunsetYellow}}{u}\\right |}+C$$`}
      </DisplayEquation>
      <CustomTypography>
        If we set{" "}
        {`$ {\\color{${sunsetYellow}}{u}} = {\\color{${sunsetYellow}}{cos(x)}}$`}
        , then{" "}
        {`$ {\\color{${sunsetMagenta}}{du}} = {\\color{${sunsetMagenta}}{-sin(x)\\,dx}}$`}
        . We don't have a negative in the numerator, but we can put one there
        with the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        .
      </CustomTypography>
      <DisplayEquation>{`$$ -1 * -1\\int{\\frac{sin(x) \\,dx}{cos(x)}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ -\\int{\\frac{\\color{${sunsetMagenta}}{-sin(x) \\,dx}}{\\color{${sunsetYellow}}{cos(x)}}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ -ln \\left | \\color{${sunsetYellow}}{cos(x)} \\right | + C$$`}</DisplayEquation>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Derivation
      </SectionHeading>
      <DisplayEquation>{`$$ \\int{sec(x)dx} $$`}</DisplayEquation>
      <CustomTypography>
        This one is a little tricker. If one were to try to rewrite this as{" "}
        {`$\\int\\frac{dx}{cos(x)}$`}, they'll find themselves stuck. We are
        still going to use the{" "}
        <CustomLink href="/Integrals/Duu">{`$\\frac{du}{u} = ln|u|+C$`}</CustomLink>{" "}
        pattern, though. Let's try to leave Secant in the numerator. So that
        means it has to be part of a derivative.
      </CustomTypography>
      <CustomTypography>
        If you stare at the{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        long enough, you'll notice that Secant appears in the derivatives of
        Secant and of Tangent. Specifically:
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <DisplayEquation>{`$$ \\frac{d}{du}sec(u)=sec(u)tan(u)\\frac{du}{dx}$$`}</DisplayEquation>
        <DisplayEquation>{`$$ \\frac{d}{du}tan(u)=sec(u)sec(u)\\frac{du}{dx}$$`}</DisplayEquation>
      </div>
      <CustomTypography>
        I wrote {`$sec^2(u)$`} as {`$sec(u)sec(u)$`} to increase the likelyhood
        of you noticing the pattern that we can use here:
      </CustomTypography>
      <DisplayEquation>{`$$\\frac{sec(x)+tan(x)}{sec(x)+tan(x)} \\int{sec(x)dx}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\int{\\frac{\\left ( sec(x)+tan(x) \\right ) sec(x)dx}{sec(x)+tan(x)}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$\\int{\\frac{\\color{${sunsetMagenta}}{\\left ( sec^2(x)+sec(x)tan(x) \\right ) dx}}{\\color{${sunsetYellow}}{tan(x) + sec(x)}}} $$`}</DisplayEquation>
      <CustomTypography>
        Where, according to our{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Derivatives/SumOrDifferenceRule">
          Sum or Difference Rule
        </CustomLink>
        , if{" "}
        {`$ {\\color{${sunsetYellow}}{u}} = {\\color{${sunsetYellow}}{tan(x) + sec(x)}}$`}
        , then{" "}
        {`$ {\\color{${sunsetMagenta}}{du}} = {\\color{${sunsetMagenta}}{\\left (sec^2(x)+sec(x)tan(x) \\right ) dx}}$`}{" "}
        and we can use{" "}
        {`$\\int \\frac{\\color{${sunsetMagenta}}{\\mathrm{d}u}}{\\color{${sunsetYellow}}{u}} = \\ln{\\left |\\color{${sunsetYellow}}{u}\\right |}+C$`}
      </CustomTypography>
      <DisplayEquation>{`$$\\int{\\frac{\\color{${sunsetMagenta}}{\\left ( sec^2(x)+sec(x)tan(x) \\right ) dx}}{\\color{${sunsetYellow}}{tan(x) + sec(x)}}} = ln \\left |\\color{${sunsetYellow}}{tan(x) + sec(x)} \\right | + C$$`}</DisplayEquation>
    </SectionCard>
    <SideNoteCard>
      I recommend repeating both of these, except for Cotangent and Cosecant.
      They follow the same patterns as the examples, and replicating them on
      your own might give you a better intuitive sense of the patterns.
    </SideNoteCard>
  </>
);

export default Component;
