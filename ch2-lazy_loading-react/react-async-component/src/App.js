import React, { Suspense } from 'react';


const AsyncComponent = React.lazy(() => import('./AsyncComponent'));

const App = () => {
  const [showAsyncComponent, setShowAsyncComponent] = React.useState(false);

  return (
    <div>
      <h1>Mon application React</h1>
      <button onClick={() => setShowAsyncComponent(true)}>Show and download the aync component</button>
        {showAsyncComponent && (
          <Suspense fallback={<div>Chargement...</div>}>
            <AsyncComponent />
          </Suspense>
        )}
    </div>
  );
};

export default App;
