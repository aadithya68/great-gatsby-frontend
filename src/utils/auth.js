const isBrowser = typeof window !== `undefined`;

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

const setUser = (user) =>
  (window.localStorage.gatsbyUser = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;
  console.log(username);
  console.log(password);
  if (username === `gatsby` && password === `karthic`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Karthic`,
      legalName: `Karthic Nallakaruppan`,
      email: `callmekarthic@gmail.com`,
    });
  }
  if (username === `gatsby` && password === `dharaneesh`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Dharaneesh`,
      legalName: `Dharaneesh Venkatesh`,
      email: `dharaneesh27blues@gmail.com`,
    });
  }
  if (username === `gatsby` && password === `aadithya`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Aadithya`,
      legalName: `Aadithya S`,
      email: `aadithya68@gmail.com`,
    });
  }
  if (username === `gatsby` && password === `bharani`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Bharani`,
      legalName: `Bharani Aravind`,
      email: `bharani.aravind93@gmail.com`,
    });
  }
  if (username === `Thilak` && password === `gatsby`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Thilak`,
      legalName: `Thilakaraj kamraj`,
      email: `thilakraj.kamaraj@gmail.com`,
    });
  }
    return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = (callback) => {
  if (!isBrowser) return;

  console.log(`Ensuring the \`gatsbyUser\` property exists.`);
  setUser({});
  callback();
};
