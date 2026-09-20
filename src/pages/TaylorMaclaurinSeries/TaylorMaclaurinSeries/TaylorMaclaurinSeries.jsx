import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";
import SideNoteCard from "components/interface/SideNoteCard";
import MaclaurenChart from "interactivity/d3Graphs/MaclaurenChart";
import TaylorChart from "interactivity/d3Graphs/TaylorChart";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);

const table1Entries = [
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$n$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$f^{(n)}(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$f^{(n)}(0)$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$2$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$3$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$4$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$5$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$6$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$7$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$8$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
];

const table2Entries = [
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$n$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(n)}(x)$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(n)}(2)$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(0)}(x)=\\ln(x)$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(0)}(2)=\\ln(2)$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(1)}(x)=\\frac{1}{x}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(1)}(2)=\\frac{1}{2}$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$2$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(2)}(x)=\\frac{-1}{x^2}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(2)}(2)=\\frac{-1}{2^2}$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$3$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(3)}(x)=\\frac{1*2}{x^3}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(3)}(2)=\\frac{1*2}{2^3}$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$4$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(4)}(x)=\\frac{-1*2*3}{x^4}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(4)}(2)=\\frac{-1*2*3}{2^4}$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$5$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(5)}(x)=\\frac{1*2*3*4}{x^5}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(5)}(2)=\\frac{1*2*3*4}{2^5}$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$\\ldots$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$\\ldots$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$\\ldots$$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$n$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(n)}(x)=\\frac{(-1)^{n+1}(n-1)!}{x^n}$$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$$f^{(n)}(2)=\\frac{(-1)^{n+1}(n-1)!}{2^n}$$"}
    </DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <CustomTypography>
        A <em>Taylor Series</em> centered around {"$x=a$"} takes the form:
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n=f(a)+\\frac{f^\\prime(a)}{1!}(x-a)+\\frac{f^{\\prime\\prime}(a)}{2!}(x-a)^2+\\frac{f^{\\prime\\prime\\prime}(a)}{3!}(x-a)^3+\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        A <em>Maclaurin Series</em> is a Taylor series centered around {"$x=0$"}
        :
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}(x)^n=f(0)+\\frac{f^\\prime(0)}{1!}x+\\frac{f^{\\prime\\prime}(0)}{2!}x^2+\\frac{f^{\\prime\\prime\\prime}(0)}{3!}x^3+\\ldots$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        A <em>Taylor Series</em> or <em>Maclaurin Series</em> expresses a
        function as an infinite series that is calculated from a function's
        derivatives at a single point.
      </CustomTypography>
      <CustomTypography>
        The interval of convergence of a Taylor or Maclaurin series is the range
        of values for which the series will converge. It can be found by
        applying{" "}
        <CustomLink href="/InfiniteSeries/SeriesTestBattery">
          Infinite Series Convergence Tests
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example of a Maclaurin Series
      </SectionHeading>
      <CustomTypography>
        Suppose that we want to find a Maclaurin Series and interval of
        convergence of this series for the Cosine function. The format of the
        Maclaurin Series is as follows:
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}(x)^n=f(0)+\\frac{f^\\prime(0)}{1!}x+\\frac{f^{\\prime\\prime}(0)}{2!}x^2+\\frac{f^{\\prime\\prime\\prime}(0)}{3!}x^3+\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        Begin by finding the derivatives of the Cosine function, and the value
        of those derivatives at {"$x=0$"}. Our goal is to find a pattern in the
        derivatives, and given that the Cosine function is a transcendental
        function, that shouldn't be too difficult.
      </CustomTypography>
      <SideNoteCard>
        <CustomTypography>
          Here to fit the pattern of the series, we will denote the{" "}
          <em>'zeroth'</em> derivative of a function by {"$f^{(0)}(x)$"}. This
          just means the original function. Also, recall that {"$x^0=1$"} in all
          cases where {"$x\\neq0$"} and that {"$0!=1$"}. Thus, it's the case
          that when {"$x\\neq0$"}, {"$\\frac{f^{(0)}(0)}{0!}(x)^0$"}
          {"$=\\frac{f(0)}{1}*1$"}
          {"$=f(0)$"}. In future examples, we will skip the representation of
          the first term as {"$\\frac{f^{(0)}(0)}{0!}(x)^0$"} and just write{" "}
          {"$f(0)$"}.
        </CustomTypography>
      </SideNoteCard>
      <div
        style={{
          maxWidth: "400px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table1Entries} />
      </div>
      <CustomTypography>
        Plugging these into the format of the Maclaurin Series above, we can see
        that the terms where n is odd make no contribution to this Maclaurin
        Series, and furthermore, that the Maclaurin Series follows the following
        pattern:
      </CustomTypography>
      <DisplayEquation>
        {
          "$$1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        The pattern looks clear, signs alternate between positive and negative,
        and exponents and factorials are increasing by 2. The 1 at the beginning
        is the only anomoly. Express this 1 according to the pattern by writing
        it as {"$\\frac{x^0}{0!}$"} where {"$x^0=1$"} and {"$0!=1$"}.
      </CustomTypography>
      <DisplayEquation>
        {`$$\\frac{x^\\color{${sunsetMagenta}}{0}}{\\color{${sunsetMagenta}}{0}!}\\color{${sunsetYellow}}{-}\\frac{x^\\color{${sunsetMagenta}}{2}}{\\color{${sunsetMagenta}}{2}!}\\color{${sunsetYellow}}{+}\\frac{x^\\color{${sunsetMagenta}}{4}}{\\color{${sunsetMagenta}}{4}!}\\color{${sunsetYellow}}{-}\\frac{x^\\color{${sunsetMagenta}}{6}}{\\color{${sunsetMagenta}}{6}!}\\color{${sunsetYellow}}{+}\\frac{x^\\color{${sunsetMagenta}}{8}}{\\color{${sunsetMagenta}}{8}!}\\color{${sunsetYellow}}{-}\\ldots$$`}
      </DisplayEquation>
      <CustomTypography>
        A Maclaurin Series begins with {"$n=0$"} and increases by units of{" "}
        {"$1$"}. In the above expansion, the exponents and factorials each begin
        with {"$0$"} and increase by units of {"$2$"}. Thus, we can express
        these each in our series as {`$\\color{${sunsetMagenta}}{2n} $`}.
      </CustomTypography>
      <CustomTypography>
        In order to manage the positive and negative signs, we can think of each
        term as being multiplied by {"$1, -1, 1, -1, 1, \\ldots$"}. This is
        represented by {`$\\color{${sunsetYellow}}{(-1)^n} $`} where {"$-1$"}{" "}
        raised to an even power is {"$1$"} and {"$-1$"} raised to an odd power
        is {"$-1$"}.
      </CustomTypography>
      <CustomTypography>
        The Maclaurin series for Cosine becomes:
      </CustomTypography>
      <DisplayEquation>{`$$\\sum_{n=0}^{\\infty}\\color{${sunsetYellow}}{(-1)^n}\\frac{x^{\\color{${sunsetMagenta}}{2n}}}{{\\color{${sunsetMagenta}}{2n}}!}$$`}</DisplayEquation>
      <CustomTypography>
        Since this series contains factorials, it is suggested that we use the{" "}
        <CustomLink href="/InfiniteSeries/RatioTest">
          Ratio Test for Convergence
        </CustomLink>{" "}
        to determine the interval of convergence.
      </CustomTypography>
      <CustomTypography>
        Set up{" "}
        {"$\\lim_{n\\rightarrow \\infty}\\left| \\frac{a_{n+1}}{a_n}\\right|$"}{" "}
        and determine if the limit is greater than, less than, or equal to 1.
      </CustomTypography>
      <DisplayEquation>
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{\\color{${sunsetMagenta}}{a_{n+1}}}{\\color{${sunsetYellow}}{a_n}}\\right|$$`}
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{\\color{${sunsetMagenta}}{(-1)^{n+1}x^{2(n+1)}}\\color{${sunsetYellow}}{2n!}}{\\color{${sunsetMagenta}}{2(n+1)!}\\color{${sunsetYellow}}{(-1)^nx^{2n}}}\\right|$$`}
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{(-1)^{n+1}x^{2n+2}2n!}{(-1)^{n}x^{2n} (2n+2)!}\\right|$$`}
      </DisplayEquation>
      <CustomTypography>
        Break this final step down one piece at a time:
      </CustomTypography>
      <DisplayEquation>
        {`$$\\frac{(-1)^{n+1}}{(-1)^n} = \\frac{\\color{${sunsetViolet}}{(-1)^{n}}*(-1)}{\\color{${sunsetViolet}}{(-1)^{n}}}=-1$$`}
        {`$$\\frac{x^{2n+2}}{x^{2n}} = \\frac{\\color{${sunsetViolet}}{x^{2n}}*x^2}{\\color{${sunsetViolet}}{x^{2n}}}=x^2$$`}
        {`$$\\frac{2n!}{(2n+2)!}=\\frac{\\color{${sunsetViolet}}{2n!}}{\\color{${sunsetViolet}}{2n!}(2n+1)(2n+2)}=\\frac{1}{(2n+1)(2n+2)}=\\frac{1}{4n^2+6n+2}$$`}
      </DisplayEquation>
      <CustomTypography>This leaves us with:</CustomTypography>
      <DisplayEquation>{`$$\\lim_{\\color{${sunsetViolet}}{n}\\rightarrow \\infty}\\left|\\frac{-x^2}{4\\color{${sunsetViolet}}{n}^2+6\\color{${sunsetViolet}}{n}+2}\\right|=\\left|\\frac{x^2}{\\infty}\\right|=0$$`}</DisplayEquation>
      <CustomTypography>
        Since there is no value of {"$x$"} that can make the limit be greater
        than {"$1$"}, we know that this Maclaurin series converges for all
        values of {"$x$"}.
      </CustomTypography>
      <CustomTypography>
        Play with the interactive demo below to see how the graphs of the finite
        expansions of this Maclaurin Series compare to the graph of the Cosine
        function:
      </CustomTypography>
      <MaclaurenChart />
      <CustomTypography>
        The more terms that we add to the series, the closer that we come to the
        cosine function. With an infinite number of terms, we would
        theoretically have a perfect polynomial model of a transcendental
        function.
      </CustomTypography>
      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/InfiniteSeries/RatioTest">
          Ratio Test for Convergence
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example of a Taylor Series
      </SectionHeading>
      <CustomTypography>
        Let's create a Taylor Series for {"$f(x)=\\ln(x)$"} around {"$x=2$"}. A
        Taylor Series takes the form
        {"$\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n$"}.
      </CustomTypography>
      <CustomTypography>
        Start by writing out the derivatives of {"$f(x)$"}, and the results of
        those derivatives applied to{"$x=2$"}. When computing the derivatives,
        look for a pattern to emerge, and try to write them in a way that
        demonstrates that pattern.
      </CustomTypography>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table2Entries} />
      </div>
      <CustomTypography>
        We used a similar trick with the last example to get alternating
        positive and negative signs, but since, in this case, the odd terms are
        positive and the even terms are negative, we have to raise {"$-1$"} to
        the {"$n+1$"} power.
      </CustomTypography>
      <CustomTypography>
        When looking at the transition from {"$f^{(1)}(x)$"} to {"$f^{(2)}(x)$"}
        , as it pertains to our pattern, recall that {"$0!=1!=1$"}.
      </CustomTypography>
      <CustomTypography>
        The {"$0^{th}$"} term does not fit the pattern of the other terms. This
        is sometimes inevitable. We will have to begin our series from {"$n=1$"}
        , and add {"$\\ln(2)$"} as a separate term.
      </CustomTypography>
      <CustomTypography>
        Put the findings into the Taylor Series form and simplify:
      </CustomTypography>
      <DisplayEquation>{`$$\\sum_{n=0}^{\\infty}\\frac{\\color{${sunsetMagenta}}{f^{(n)}(2)}}{n!}(x-2)^n$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\frac{\\color{${sunsetMagenta}}{f^{(0)}(2)}}{0!}(x-2)^0 +\\sum_{n=1}^{\\infty}\\frac{\\color{${sunsetMagenta}}{f^{(n)}(2)}}{n!}(x-2)^n$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\frac{\\color{${sunsetMagenta}}{\\ln(2)}}{0!}(x-2)^0 +\\sum_{n=1}^{\\infty}\\frac{\\color{${sunsetMagenta}}{(-1)^{n+1}(n-1)!}}{{\\color{${sunsetMagenta}}{2^{n}}}n!}(x-2)^n$$`}</DisplayEquation>
      <CustomTypography>
        Using{" "}
        {`$\\frac{(n-1)!}{n!}=\\frac{\\color{${sunsetViolet}}{1*2*\\ldots*(n-2)*(n-1)}}{\\color{${sunsetViolet}}{1*2*\\ldots*(n-2)*(n-1)}*n}=\\frac{1}{n}$`}
        :
      </CustomTypography>
      <DisplayEquation>{`$$\\frac{\\ln(2)}{1}1 +\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}{\\color{${sunsetViolet}}{(n-1)!}}}{2^{n}{\\color{${sunsetViolet}}{n!}}}(x-2)^n$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\ln(2) +\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{2^{n}{\\color{${sunsetViolet}}{n}}}(x-2)^n$$`}</DisplayEquation>
      <CustomTypography>
        Note that the {"$\\ln(2)$"} being a part of our series is OK, because
        the Taylor Series uses the fact that we know {"$\\ln(2)$"} in order to
        find the values of natural logs near {"$x=2$"}.
      </CustomTypography>
      <CustomTypography>
        To find the interval of convergence, let's return to the{" "}
        <CustomLink href="/InfiniteSeries/RatioTest">
          Ratio Test for Convergence
        </CustomLink>
        . Because the first term, {"$\\ln(2)$"} is finite, it can be ignored and
        the ratio test need only be performed on the infinite series.
      </CustomTypography>
      <CustomTypography>
        Set up{" "}
        {"$\\lim_{n\\rightarrow \\infty}\\left| \\frac{a_{n+1}}{a_n}\\right|$"}:
      </CustomTypography>
      <DisplayEquation>{`$$\\lim_{n\\rightarrow\\infty}\\left | \\frac{{\\color{${sunsetMagenta}}{(-1)^{n+2}(x-2)^{n+1}}}{\\color{${sunsetYellow}}{2^n*n}}}{{\\color{${sunsetYellow}}{(-1)^{n+1}(x-2)^{n}}}{\\color{${sunsetMagenta}}{2^{n+1}*(n+1)}}}\\right |$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\lim_{n\\rightarrow\\infty}\\left | \\frac{(-1)(x-2)n}{2(n+1)}\\right |$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\lim_{n\\rightarrow\\infty}\\left | \\frac{n(x-2)}{2n+2}\\right |$$`}</DisplayEquation>
      <CustomTypography>
        The highest power of {"$n$"} in the numerator and denominator of this
        function is 1. The coefficients of {"$n$"} in the numerator and {"$n$"}{" "}
        in the denominator are {"$(x-2)$"} and {"$2$"} respectively. In order
        for the limit at infinity to be less than 1, we need{" "}
        {"$\\left | \\frac{(x-2)}{2}\\right | < 1$"}.
      </CustomTypography>
      <DisplayEquation>{"$$-1<\\frac{(x-2)}{2}<1$$"}</DisplayEquation>
      <DisplayEquation>{"$$-2<x-2<2$$"}</DisplayEquation>
      <DisplayEquation>{"$$0<x<4$$"}</DisplayEquation>
      <CustomTypography>
        We can expect that {"$x$"} must be greater than {"$0$"} for the function
        to converge because we know that we can't take the natural logarithm of{" "}
        {"$0$"}. However, there is nothing forbidding us from taking the natural
        logarithm of {"$4$"}. Since the{" "}
        <CustomLink href="/InfiniteSeries/RatioTest">Ratio Test</CustomLink> is
        inconclusive when the limit at infinity equals {"$1$"}, we don't know
        for sure that {"$4$"} cannot be used as a value in the Taylor Series. In
        other words, we don't know wheather the interval of convergence is{" "}
        {"$(0,4)$"} or {"$(0,4]$"}.
      </CustomTypography>
      <CustomTypography>
        Plugging {"$4$"} into our taylor series gives us
      </CustomTypography>
      <DisplayEquation>{`$$\\ln(2) +\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}{(2)^n}}{2^{n}n}$$`}</DisplayEquation>
      <CustomTypography>
        Once again, we can ignore the finite {"$\\ln(2)$"}.
      </CustomTypography>
      <CustomTypography>
        The {"$(-1)^{n+1}$"} gives us the advantage that we can apply the fairly
        straightforward{" "}
        <CustomLink href="/InfiniteSeries/AlternatingSeriesTest">
          Alternating Series Test for Convergence
        </CustomLink>
        .
      </CustomTypography>
      <SideNoteCard>
        <CustomTypography>
          {"$\\sum^{\\infty}(-1)^n a_n$"} converges if {"$a_{n+1}<a_n$"} and{" "}
          {"$\\lim_{n\\rightarrow\\infty}a_n=0$"}
        </CustomTypography>
      </SideNoteCard>
      <CustomTypography sx={{ mt: "25px" }}>
        In this case, {"$a_n=\\frac{2^n}{2^n*n}=\\frac{1}{n}$"}. It is clear
        that {"$\\frac{1}{n+1}<\\frac{1}{n}\\forall n~$"}and that{" "}
        {"$\\lim_{n\\rightarrow\\infty}\\frac{1}{n}=0$"}. Therefore, this Taylor
        Series converges at {"$x=4$"}, and the interval of convergence is{" "}
        {"$(0,4]$"}.
      </CustomTypography>
      <CustomTypography>
        Plotting this Taylor Series over {"$(0,5)$"}, it follows the form of the
        natural log exactly, but cuts off after {"$x=4$"}.
      </CustomTypography>
      <TaylorChart />
    </SectionCard>
  </>
);

export default Component;
