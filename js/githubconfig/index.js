const defaultPath = "/react-redux-todo/build/";
const githubRouteConfig = route => window.location.host == "vamosgs.github.io" ? defaultPath+route : `/${route}`;

export default githubRouteConfig;