import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard from '../dist/components/index';

const product1 = {
  id: '1',
  title: 'Coffe Mug - Card',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product1}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ isMaxCountReached, count, increaseBy, reset }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
