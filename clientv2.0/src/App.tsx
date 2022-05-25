import React from "react";
import { RootRouter } from "./routes";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { SetupInspector } from "./services";
export const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <RootRouter />
    </StoreProvider>
  );
};

SetupInspector(store);
