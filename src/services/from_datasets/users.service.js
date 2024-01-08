const users = [
  {
    _id: 1,
    firstname: "John",
    lastname: "DOE",
    email: "admin@fastnfabulous.com",
    password: "admin",
    role: "ROLE_ADMIN",
  },
];

async function getUser(email, password) {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setTimeout(() => resolve(user), 1000);
    } else {
      reject(new Error("User not found"));
    }
  });
}

async function setLocale(userId, locale) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user._id === userId);
    if (user) {
      user.locale = locale;
      setTimeout(() => resolve(user), 1000);
    } else {
      reject(new Error("User not found"));
    }
  });
}

async function updateUser(userObject) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user._id === userObject._id);
    if (user) {
      Object.assign(user, userObject);
      setTimeout(() => resolve(user), 1000);
    } else {
      reject(new Error("User not found"));
    }
  });
}

module.exports = {
  getUser,
  setLocale,
  updateUser
};
