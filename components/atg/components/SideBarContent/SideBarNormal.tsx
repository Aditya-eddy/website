import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import StepsForRecording from "../../StepTypes/types";
import CloseIcon from "@mui/icons-material/Close";

const stepsRecord = [
  {
    label: "Auto Generate Test",
    steps: [
      { stepName: "Recording" },
      { stepName: "Hitting API's" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Start Recording",
  },
  {
    label: "Remove Duplicate",
    steps: [
      { stepName: "Starting Deduplication" },
      { stepName: "Duplicates removed" },
    ],
    stepName: "Start Deduplication",
  },
  {
    label: "Test Coverage",
    steps: [
      { stepName: "Recording" },
      { stepName: "Hitting API's" },
      { stepName: "Generating Keploy Test Folder" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Get Test Coverage",
  },
];

interface SideBarNormalProps {
  onNext: () => void;
  onReset: () => void;
  stepsForRecording: StepsForRecording;
  removeSideContent:()=>void;
}

export default function SideBarNormal({
  onNext,
  onReset,
  stepsForRecording,
  removeSideContent,
}: SideBarNormalProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStepIndex, setSubStepIndex] = React.useState(-1);
  const [subStepCompleted, setSubStepCompleted] = React.useState(false);
  const [expandedSteps, setExpandedSteps] = React.useState<number[]>([0]);

  React.useEffect(() => {
    if (
      subStepIndex >= 0 &&
      subStepIndex < stepsRecord[activeStep].steps.length
    ) {
      const timer = setTimeout(() => {
        if (subStepIndex === 0 && !stepsForRecording.starting) {
          setSubStepCompleted(false);
        } else if (subStepIndex === 1 && !stepsForRecording.curlApiHitting) {
          setSubStepCompleted(false);
        } else {
          setSubStepCompleted(true);
          setTimeout(() => {
            setSubStepCompleted(false);
            if (subStepIndex + 1 < stepsRecord[activeStep].steps.length) {
              setSubStepIndex(subStepIndex + 1);
            } else {
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
              setSubStepIndex(-1);
              setExpandedSteps((prevExpanded) => [
                ...prevExpanded,
                activeStep + 1,
              ]);
            }
          }, 500);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [subStepIndex, activeStep, stepsForRecording]);

  const handleNext = () => {
    onNext();
    setSubStepIndex(0);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSubStepIndex(-1);
    setSubStepCompleted(false);
    setExpandedSteps([0]);
    onReset();
  };

  const handleAccordionChange = (index: number) => {
    setExpandedSteps((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((step) => step !== index)
        : [...prevExpanded, index]
    );
  };

  React.useEffect(() => {
    console.log("substepIndex: ", subStepIndex);
    console.log("substepcompleted: ", subStepCompleted);
    console.log("expandedSteps: ", expandedSteps);
  }, [subStepIndex, subStepCompleted, expandedSteps]);

  return (
    <Box
      sx={{
        maxWidth: 300,
        backgroundColor: "#f5f5f5",
        height: "70vh",
        overflowY: "auto",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Opera
        },
      }}
    >
       <div className="flex items-center h-14 bg-[#f5f5f5]  justify-between  px-3 py-1  border-b-2 border-gray-300">
      <Typography
        sx={{
          color: "#1f2937", // Tailwind's gray-700 color
          fontWeight: "bold",
          m: 0, // remove margin
        }}
        className="text-gray-700 font-bold"
      >
        Content
      </Typography>
      <button className="text-gray-500 hover:text-gray-700" onClick={()=>{removeSideContent}}>
        <CloseIcon  />
      </button>
    </div>
      {stepsRecord.map((step, index) => (
        <Accordion
          expanded={expandedSteps.includes(index)}
          key={step.label}
          onChange={() => handleAccordionChange(index)}
          sx={{
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&:last-child": {
              borderBottom: "none",
            },
          }}
          className="border border-b-2 border-gray-300"
          disableGutters={true}
          TransitionProps={{ timeout: { appear: 1, enter: 1, exit: 4 } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-gray-700" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#ffffff",
              fontWeight: "bold",
              m: 0, // remove margin
            }}
          >
            <Typography className="text-gray-700 font-bold">{step.label}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              maxHeight: "400px",
              overflowY: "auto",
              m: 0,
              paddingright: "15px",
            }}
          >
            <Box sx={{ mt: 2 }}>
              <Box component="ul" sx={{ listStyleType: "none", pl: 0, ml: 0 }}>
                {step.steps.map((subStep, subIndex) => (
                  <Box
                    component="li"
                    key={subIndex}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <Box
                      sx={{
                        width: 24, // fixed width for icons
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 1,
                      }}
                    >
                      {subStepIndex === subIndex && index === activeStep ? (
                        subStepCompleted ? (
                          <DoneIcon sx={{ color: "green" }} />
                        ) : (
                          <CircularProgress size={14} />
                        )
                      ) : subStepIndex > subIndex || index < activeStep ? (
                        <DoneIcon sx={{ color: "green" }} />
                      ) : null}
                    </Box>
                    <Box
                      component="span"
                      sx={{ fontSize: "0.875rem", fontWeight: "normal" }}
                    >
                      {`${subIndex + 1}. ${subStep.stepName}`}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            {index === activeStep && (
              <Box sx={{ mb: 2 }}>
                <div>
                  <button
                    onClick={handleNext}
                    className="mt-1 mr-1 bg-[#00163D] text-primary-50 hover:bg-secondary-300 px-4 py-2 rounded"
                    disabled={subStepIndex !== -1}
                  >
                    {step.stepName}
                  </button>
                </div>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      {activeStep === stepsRecord.length && (
        <Paper square elevation={0} sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
          <Typography>
            All steps completed - Thank you for using Keploy. Click on the reset
            to start again.
          </Typography>
          <button
            onClick={handleReset}
            className="mt-1 mr-1 bg-[#00163D] text-primary-50 hover:bg-secondary-300 px-4 py-2 rounded"
          >
            Reset
          </button>
        </Paper>
      )}
    </Box>
  );
}
