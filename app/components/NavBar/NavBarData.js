export default class NavBarData {

  static getBrand() {
    return {id: 0, url: "/", text: "Matt Szabo"};
  }

  static getNavBarList() {
    return [
        {id: 1, url: "/home", text: "Home"},
        {id: 2, url: "/projects", text: "Projects"},
        {id: 3, url: "/git", text: "Git"},
        {id: 4, url: "/resume", text: "Resume"},
        {id: 5, url: "/skills", text: "Skills"}
    ];
  }
}
