import React, { Component, createContext } from "react";

const AppContext = createContext();

class ContextProvider extends Component {
  state = {
    theme: {
      primaryColor: "#fff",
      secondaryColor: "#f6f5f5"
    }
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          theme: this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
