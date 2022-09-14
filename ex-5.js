let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(() => reject({
      errorCode: 500,
      message: "👿 Failed to request data from server",
		}), 2000);
  });
};

//start coding here
async function showResult() {
  try {
    await getJohnProfile();
  } catch (error) {
    console.log(error)
  }
}

showResult();