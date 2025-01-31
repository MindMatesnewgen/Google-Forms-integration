window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

// Get the variables from Storyline
var userRole = player.GetVar("UserExperience"); // This stores the user role (e.g., Intern, Sales, etc.)
var commScore = player.GetVar("Intern_Communication_Score");
var commExpected = player.GetVar("Intern_Communication_Score_User");
var commNotes = player.GetVar("Communication_User_Notes");

var devScore = player.GetVar("Intern_Development_Score");
var devExpected = player.GetVar("Intern_Development_Score_User");
var devNotes = player.GetVar("Development_User_Notes");

var ethicsScore = player.GetVar("Intern_Ethics_Score");
var ethicsExpected = player.GetVar("Intern_Ethics_Score_User");
var ethicsNotes = player.GetVar("Ethics_User_Notes");

var totalScore = player.GetVar("Total_Score_intern");
var totalExpected = player.GetVar("Total_Score_Intern_User");
var totalNotes = player.GetVar("Total_User_Notes");

// Build the Google Form URL with Entry IDs
var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScuwYQejiUrDC8y1CsbmunLKaeaL0kBHehr5k8cHM3JX-R3Kw/formResponse?"
    + "entry.1550226125=" + userRole
    + "&entry.452241153=" + commScore // Actual Communication Score
    + "&entry.817022977=" + commExpected // User’s Expected Communication Score
    + "&entry.165947924=" + commNotes // User Notes for Communication
    + "&entry.1088754204=" + ethicsScore // Actual Ethics Score
    + "&entry.47076502=" + ethicsExpected // User’s Expected Ethics Score
    + "&entry.360810027=" + ethicsNotes // User Notes for Ethics
    + "&entry.1866544570=" + devScore // Actual Development Score
    + "&entry.1551281480=" + devExpected // User’s Expected Development Score
    + "&entry.1270300422=" + devNotes // User Notes for Development
    + "&entry.1332821887=" + totalScore // Total Actual Score
    + "&entry.1934983026=" + totalExpected // Total User-Expected Score
    + "&entry.2046968527=" + totalNotes; // General Notes

// Open the Google Form in a new tab to submit the data
window.open(formUrl, "_blank");
}

window.Script2 = function()
{
  var player = GetPlayer();

// Get the variables from Storyline
var userRole = player.GetVar("UserExperience"); // This stores the user role (e.g., Intern, Sales, etc.)
var engagScore = player.GetVar("Sales_Engagement_Score");
var engagExpected = player.GetVar("Sales_Engagement_Score_User");
var engagNotes = player.GetVar("Engagement_User_Comments");

var confScore = player.GetVar("Sales_conflict_Score");
var confExpected = player.GetVar("Sales_conflict_Score_User");
var confNotes = player.GetVar("Conflict_User_Comments");

var transpScore = player.GetVar("Sales_transparency_Score");
var transpExpected = player.GetVar("Sales_transparency_Score_User");
var transpNotes = player.GetVar("Transparency_User_Comments");

var totalScore = player.GetVar("Total_Score_sales");
var totalExpected = player.GetVar("Total_Score_sales_User");
var totalNotes = player.GetVar("Sales_User_Comments");

// Build the Google Form URL with Entry IDs
var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdkCtfXCcrgH_tJhTQI3abGoeYeOHtaLxxAETmuwWQMXvYqpw/formResponse?"
    + "entry.1701755831=" + userRole
    + "&entry.1268603501=" + engagScore // Actual Engagement Score
    + "&entry.1877828856=" + engagExpected // User’s Expected Engagement Score
    + "&entry.1779274256=" + engagNotes // User Notes for Engagement
    + "&entry.162092374=" + confScore // Actual Conflict Score
    + "&entry.1083698451=" + confExpected // User’s Expected Conflict Score
    + "&entry.212032305=" + confNotes // User Notes for conflict
    + "&entry.2077633464=" + transpScore // Actual Development Score
    + "&entry.24001945=" + transpExpected // User’s Expected Development Score
    + "&entry.1212157478=" + transpNotes // User Notes for Development
    + "&entry.42922219=" + totalScore // Total Actual Score
    + "&entry.1758035332=" + totalExpected // Total User-Expected Score
    + "&entry.1089648334=" + totalNotes; // General Notes

// Open the Google Form in a new tab to submit the data
window.open(formUrl, "_blank");
}

window.Script3 = function()
{
  var player = GetPlayer();
// Get the variables from Storyline
var userRole = player.GetVar("UserExperience"); // This stores the user role (e.g., Intern, Sales, etc.)
var leadScore = player.GetVar("Manager_Leadership_score");
var leadExpected = player.GetVar("Manager_Leadership_score_User");
var leadNotes = player.GetVar("Leadership_feedback");

var deciScore = player.GetVar("Manager_Decision_score");
var deciExpected = player.GetVar("Manager_Decision_score_User");
var deciNotes = player.GetVar("Decision_feedback");

var ethicScore = player.GetVar("Manager_ethics_score");
var ethicExpected = player.GetVar("Manager_ethics_score_User");
var ethicNotes = player.GetVar("Ethics_Feedback");

var totalScore = player.GetVar("Total_Score_manager");
var totalExpected = player.GetVar("Total_Score_manager_User");
var totalNotes = player.GetVar("Manager_general_comments");

// Build the Google Form URL with Entry IDs
var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeYoy8lsGOA43HT9dfxd6gH9N1UqOapR00q4vw_zzZ9DRZBsQ/formResponse?"
    + "entry.600047336=" + userRole
    + "&entry.2104574234=" + leadScore // Actual Engagement Score
    + "&entry.417967659=" + leadExpected // User’s Expected Engagement Score
    + "&entry.156117040=" + leadNotes // User Notes for Engagement
    + "&entry.2111824145=" + deciScore // Actual Conflict Score
    + "&entry.800718153=" + deciExpected // User’s Expected Conflict Score
    + "&entry.477822754=" + deciNotes // User Notes for conflict
    + "&entry.363599241=" + ethicScore // Actual Development Score
    + "&entry.250678503=" + ethicExpected // User’s Expected Development Score
    + "&entry.1781186314=" + ethicNotes // User Notes for Development
    + "&entry.1101068088=" + totalScore // Total Actual Score
    + "&entry.257404510=" + totalExpected // Total User-Expected Score
    + "&entry.795414188=" + totalNotes; // General Notes

// Open the Google Form in a new tab to submit the data
window.open(formUrl, "_blank");
}

};
