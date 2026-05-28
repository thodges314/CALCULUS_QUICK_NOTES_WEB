import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import CustomLink from "components/interface/CustomLink";
import CustomTable from "components/interface/CustomTable";
import Typography from "@mui/material/Typography";

const coolPages = [
  [
    <Typography variant="h6" width="100%">
      Interactive Pages
    </Typography>,
  ],
  [
    <CustomLink href="/PreCalculus/ShiftingGraphsWithHAndK">
      Shifting Graphs with h and k
    </CustomLink>,
  ],
  [
    <CustomLink href="/TaylorMaclaurinSeries/TaylorMaclaurinSeries">
      Taylor (Maclaurin) Series
    </CustomLink>,
  ],
  [
    <CustomLink href="/IntegralApplicationsAndMethods/VolumeDiskwasherMethod">
      Volume - Disk/Washer Method
    </CustomLink>,
  ],
  [
    <CustomLink href="/IntegralApplicationsAndMethods/VolumeShellMethod">
      Volume - Shell Method
    </CustomLink>,
  ],
];

const finishedPages = [
  [
    <Typography variant="h6" width="100%">
      Finished Pages
    </Typography>,
  ],
  [
    <CustomLink href="/PreCalculus/ShiftingGraphsWithHAndK">
      Pre-Calculus - Shifting Graphs with h and k
    </CustomLink>,
  ],
  [
    <CustomLink href="/PreCalculus/LogarithmProperties">
      Pre-Calculus - Logarithm Properties
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/ConstantFunction">
      Derivatives - Constant Function Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/ConstantMultiple">
      Derivatives - Constant Multiple Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/SumOrDifferenceRule">
      Derivatives - Sum or Difference Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/PowerRule">
      Derivatives - Power Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/ProductRule">
      Derivatives - Product Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/QuotientRule">
      Derivatives - Quotient Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/ChainRule">
      Derivatives - Chain Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/TrigonometricDerivatives">
      Derivatives - Trigonometric Derivatives
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
      Derivatives - Inverse Trigonometric Derivatives
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/ExponentialFunctions">
      Derivatives - Exponential Functions
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/LogFunctions">
      Derivatives - Log Functions
    </CustomLink>,
  ],
  [
    <CustomLink href="/Derivatives/InverseFunctions">
      Derivatives - Inverse Functions
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/SumOrDifferenceRule">
      Integrals - Sum or Difference Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/ConstantMultipleRule">
      Integrals - Constant Multiple Rule
    </CustomLink>,
  ],
  [<CustomLink href="/Integrals/PowerRule">Integrals - Power Rule</CustomLink>],
  [<CustomLink href="/Integrals/Duu">Integrals - du/u</CustomLink>],
  [
    <CustomLink href="/Integrals/ExponentialRule">
      Integrals - Exponential Rule
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/LogarithmicIntegrals">
      Integrals - Logarithmic Integrals
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/TrigonometricIntegrals">
      Integrals - Trigonometric Integrals
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/InverseTrigonometricIntegrals">
      Integrals - Inverse Trigonometric Integrals
    </CustomLink>,
  ],
  [
    <CustomLink href="/Integrals/IntegrationByParts">
      Integrals - Integration by Parts
    </CustomLink>,
  ],
  [
    <CustomLink href="/IntegralApplicationsAndMethods/VolumeDiskwasherMethod">
      Volume - Disk/Washer Method
    </CustomLink>,
  ],
  [
    <CustomLink href="/IntegralApplicationsAndMethods/VolumeShellMethod">
      Volume - Shell Method
    </CustomLink>,
  ],
  [
    <CustomLink href="/TaylorMaclaurinSeries/TaylorMaclaurinSeries">
      Taylor (Maclaurin) Series
    </CustomLink>,
  ],
];

const Component = () => (
  <>
    <SectionCard>
      <CustomTypography>
        CalculusQuickNotes.com is an ongoing project to bring an Android app
        that I created back in 2016,{" "}
        <CustomLink href="https://play.google.com/store/apps/details?id=com.tutorillinois.android.calculusquicknotes">
          Calculus Quick Notes
        </CustomLink>{" "}
        to a web app format.
      </CustomTypography>
      <CustomTypography>
        I had not yet started working as a professional developer when I created
        this app, but it helped me land my first position. After I got my first
        job, I stopped focusing on the app and did not bring any new content.
        Nor did I update it to the latest Android version. At that time, it had
        over 150K downloads with an overall rating of 4.7 from about 700
        reviews.
      </CustomTypography>
      <CustomTypography>
        It has always been in the back of my mind that I would like to port
        Calculus Quick Notes to a web app format, but I have always been too
        busy or too tired or too unmotivated to take steps towards that. I have
        actually met a few people who, when I told them that I had created that
        app, expressed surprise and appreciation, as they themselves had used it
        to help pass calculus.
      </CustomTypography>
      <CustomTypography>
        In January 2023, I decided to leave what was my present position, and
        take a few months off to pursue my interests in data visualization. I
        wanted to refocus my career towards my passions. For a project, I
        decided to return to Calculus Quick Notes, this time adding
        interactivity in many of the places that were previously static
        diagrams. The wording mostly remains the same at the original app, with
        small changes where I second guessed how I presented a concept, but more
        often to accommodate enhanced interactivity. I'm also adding a few new
        pages based on concepts students frequently encounter that weren't
        previously covered. Finally, anyone familiar with my old app will also
        notice the updated palette to the sort of Solarized/Synthwave look.
      </CustomTypography>
      <CustomTypography>
        Besides porting over all of my old content (which is a long, slow
        process), there are other changes that I want to make including putting
        small summary equations directly in the menu, and possibly putting a
        switch in the menu bar that lets the user switch over to a daylight
        theme. Also, I want to ensure full A11y compliance. This is not a
        profit-generating project, but I still think it's a nice thing to do.
      </CustomTypography>
      <CustomTypography>
        Until then, I hope that you enjoy this app as I update it.
      </CustomTypography>
      <CustomTypography>
        <CustomLink href="https://www.linkedin.com/in/thomas-hodges/">
          - Thomas Hodges
        </CustomLink>
      </CustomTypography>
    </SectionCard>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "flex-start",
        marginTop: "20px",
      }}
    >
      <CustomTable entries={coolPages} />
      <CustomTable entries={finishedPages} />
    </div>
  </>
);

export default Component;
