window.addEventListener("load", initiateApp());
async function initiateApp() {
  //YOU SHOULD CHANGE THIS TO YOUR API KEY
  const owensApiKey = `fcb34b40-62a9-11ec-88d0-1becdba60906`;

  let apiResponse = await fetch(
    `https://app.zipcodebase.com/api/v1/search?apikey=${owensApiKey}&codes=01073&country=US`
  );
  apiResponse = await apiResponse.json();
  console.log("response", apiResponse);

  let zipCodeResults = apiResponse.results["01073"];
  zipCodeResults = zipCodeResults[0];
  const state = zipCodeResults.state_code;
  //NOW WE HAVE THE STATE ASSOCIATED WITH THE ZIP CODE THAT WE PUT IN THE FETCH REQUEST
  console.log("state", state);
}
