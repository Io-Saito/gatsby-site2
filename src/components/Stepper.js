import React from 'react';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 75,
      fontFamily:"quicksand",
      fontWeight: "bold"
    },
  h4:{
    fontSize: 30,
    fontFamily:"quicksand",
    fontWeight:"bold"
  }},
  palette: {
    primary: {
      main: '#0a6788'
    },
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


function getSteps(props) {
    const TitleList = props.map(x=> x.title)
  return TitleList;
}

function getStepContent(props,r) {
    return props[r].description
}

function getStepDate(props,r) {
    return props[r].date
}

const VerticalLinearStepper=(props)=> {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(props);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepDate(props,index)}</Typography>
              <Typography>{getStepContent(props,index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      </ThemeProvider>
    </div>
  );
}
export default VerticalLinearStepper