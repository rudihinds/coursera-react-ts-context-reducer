
import * as React from 'react';

const AppCtx = React.createContext({});

const sampleAppContext = {
  name: "Using React Context with Typescript",
  author: "Dr Who",
  url: "http://www.somerandomurl.com",
};

const Application = () => {
  return <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>;
};

export const PostInfo = () => {
  const {name, author, url} = React.useContext(AppCtx);
  return (
    <div>
      Name: {name}, Author: {author}, Url:{' '}
      {url}
    </div>
  );
};

export default Application
