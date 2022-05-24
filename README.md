# EG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Fernando Herrera

## Ejemplo

```
import {ProductCard} from 'eg-product-card';

```

```
<ProductCard
  product={product}
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
```
# eg-product-card
