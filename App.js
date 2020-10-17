
var height_input=document.getElementById("height_id");
var weight_input=document.getElementById("weight_id");
var submit_input=document.getElementById("submit_id");
var bmi_result=document.getElementById("resut_id");
var feedback_result=document.getElementById("feedback_id");

function Calculate()
{
    var hval=height_input.value;
    var wval=weight_input.value;

    var bmiResult=(wval/(hval*hval)).toFixed(1);
    bmi_result.value=bmiResult;
    //precision of 2 decimal use .toFixed(2) for the precision

    //feedback a genuine feedback

    //normal bmi 18.5 to 24.9

    if (bmiResult>18.5 && bmiResult<24.9) {
        feedback_result.value="normal and fit";
        
    }
    else if(bmiResult<18.5)
    {
        feedback_result.value="Gain sum muscle this is not good you are looking skinny";
    }
    else if(bmiResult>24.9)
    {
        console.log("Loose some fat or muscle start doing cardio sessions");
        feedback_result.value="Loose some fat or muscle start doing cardio sessions";
        
    }
}

function main()
{
    console.log("script is running");
    submit_input.addEventListener('click',function () {
        Calculate();
    });
}

main();
