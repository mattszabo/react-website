export default class NavBarData {

  static getBrand() {
    return {id: 0, url: "#", text: "Matt Szabo"};
  }

  static getNavBarList() {
    return [
        {id: 1, url: "#", text: "Home"},
        {id: 2, url: "#", text: "Projects"},
        {id: 3, url: "#", text: "Git"},
        {id: 4, url: "#", text: "Resume"},
        {id: 5, url: "#", text: "Skills"}
    ];
  }
}
