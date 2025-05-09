function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAttempt) => {
    attemptCount++;

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Success!";
    } else if (passwordAttempt !== userInfo.password && attemptCount < 3) {
      return "Unsuccessful, try again";
    } else {
      return "You are blocked!";
    }
  };

  return login;
}

const test = createLoginTracker({ username: "user", password: "password" });
console.log(test("pasword"));
console.log(test("pasword"));
console.log(test("passwordd"));
console.log(test("password"));

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
