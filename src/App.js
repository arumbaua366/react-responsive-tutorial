import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    // functions to manage app's main colors and opacities
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
    };

    // menu items added here to use in the sidebar for larger screen sizes
    const menuItems = [
      { icon: `😀`, text: "Item 1" },
      { icon: `😉`, text: "Item 2" },
      { icon: `😎`, text: "Item 3" },
      { icon: `🤔`, text: "Item 4" },
      { icon: `😛`, text: "Item 5" }
    ];

    return(
      <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}
    >
      <TopBar styles={styles} />
      <Content styles={styles} />
      <FooterMenu menuItems={menuItems} styles={styles} />
    </div>
    );
  }
}

export default App;