import React, { useState } from 'react';
import Preloaders from './components/Preloaders';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <Preloaders onComplete={handleComplete} />}
      {!loading && (
        <div style={styles.content}>
          <h1>Welcome to the App!</h1>
        </div>
      )}
    </div>
  );
};

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
