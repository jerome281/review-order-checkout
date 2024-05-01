import { FC, useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Typography from '@/components/Typography';
import Stack from './Stack';
import { Input } from './forms/Input';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface StyledButtonProps {
  isOrange?: boolean;
  isGreen?: boolean;
  isRed?: boolean;
  alignRight?: boolean;
}

const initialProducts: Product[] = [
  { id: 99991, name: 'Apple', price: 0.52, quantity: 2 },
  { id: 599999, name: 'Banana', price: 0.67, quantity: 3 },
];

const StyledBasketHeading = styled(Typography)`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.large} 0;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid ${colors.grey};
  `};
`;

const StyledSummary = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const StyledSummaryHeading = styled(Typography)`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.xxSmall} ${space.small};
    background-color: ${colors.grey};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: ${colors.black};
  `};
`;

const StyledSummaryContainer = styled.div`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.small};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid ${colors.grey};
  `};
`;

const StyledTable = styled.table`
  ${({ theme: { maxMedia } }) => css`
    width: 100%;
    border-collapse: collapse;
    @media (max-width: ${maxMedia.medium}) {
      border: 0;
    }
  `};
`;

const StyledTableTh = styled.th`
  ${({ theme: { space } }) => css`
    padding: ${space.xSmall};
    text-align: left;
  `};
`;

const StyledTableThead = styled.thead`
  ${({ theme: { colors, maxMedia } }) => css`
    background-color: ${colors.lightGrey};
    @media (max-width: ${maxMedia.medium}) {
      //border: none;
      // clip: rect(0 0 0 0);
      //height: 1px;
      //margin: -1px;
      overflow: hidden;
      //padding: 0;
      position: absolute;
      width: 1px;
    }
  `};
`;

const StyledTableTbody = styled.tbody`
  ${({ theme: { space, colors } }) => css``};
`;

const StyledTableTr = styled.tr`
  ${({ theme: { space, colors, maxMedia } }) => css`
    &:nth-child(even) {
      background-color: ${colors.lightGrey};
    }
    @media (max-width: ${maxMedia.medium}) {
      display: block;
      &:nth-child(even) {
        margin-top: ${space.small};
      }
    }
  `};
`;

const StyledTableTd = styled.td`
  ${({ theme: { space, colors, maxMedia } }) => css`
    padding: ${space.xSmall};
    @media (max-width: ${maxMedia.medium}) {
      border-bottom: 1px solid ${colors.grey};
      display: flex;
      justify-content: space-between;
      gap: ${space.small};
      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        font-size: 0.875rem;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  `};
`;

const StyledTableFlexRow = styled.span`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.small};
  `};
`;
const StyledTableBtnsWrap = styled.span`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.xxSmall};
  `};
`;

const StyledCostWrap = styled.span`
  ${({ theme: { media } }) => css`
    @media (min-width: ${media.medium}) {
      min-width: 70px;
    }
  `};
`;

const StyledBtn = styled.button<StyledButtonProps>`
  ${({ theme: { space, colors }, isGreen, isOrange, isRed, alignRight }) => css`
    color: ${colors.white};
    border: none;
    padding: ${space.xxxSmall} ${space.xSmall};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    ${alignRight &&
    css`
      margin-left: auto;
    `};

    ${isGreen &&
    css`
      background-color: ${colors.green};
      &:hover {
        background-color: ${colors.darkGreen};
      }
    `};

    ${isOrange &&
    css`
      background-color: ${colors.orange};
      &:hover {
        background-color: ${colors.darkOrange};
      }
    `};

    ${isRed &&
    css`
      background-color: ${colors.red};
      &:hover {
        background-color: ${colors.darkRed};
      }
    `};
  `};
`;

const StyledSubTotal = styled(Stack)`
  ${({ theme: { space, colors } }) => css`
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
    padding: ${space.medium} 0;
  `};
`;

const StyledTotalItem = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTotal = styled.div`
  ${({ theme: { space, colors } }) => css`
    border-bottom: 1px solid ${colors.grey};
    padding: 0 0 ${space.medium} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;

const StyledSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const StyledSubmitBtn = styled.button`
  ${({ theme: { space, colors } }) => css`
    background-color: ${colors.lightBlue};
    color: ${colors.white};
    border: none;
    padding: ${space.xSmall} ${space.medium};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.darkBlue};
    }
    &:disabled {
      background-color: ${colors.lightGrey};
      cursor: not-allowed;
    }
  `};
`;

const StyledEmptyBasket = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: ${space.xSmall};
  `};
`;

const Basket: FC = (...rest) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Update quantity of product in basket
  const handleQuantityChange = useCallback(
    (productId: number, newQuantity: number) => {
      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      setProducts(updatedProducts);
    },
    [products]
  );

  // Delete product from basket
  const handleDelete = useCallback(
    (productId: number) => {
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    },
    [products]
  );

  // Create a function handleRefreshPage that will refresh the page
  const handleRefreshPage = () => {
    window.location.reload();
  };

  // Calculate totals
  const subtotal = products.reduce(
    (acc, product) => acc + Number(product.price) * Number(product.quantity),
    0
  );
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  // Click handler for Buy Now button
  const handleBuyNow = () => {
    const postData = {
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      subtotal: subtotal,
      vat: vat,
      total: total,
    };

    // Simulate AJAX call
    setTimeout(() => {
      alert(
        'AJAX call complete. JSON data sent:\n' +
          JSON.stringify(postData, null, 2)
      );
    }, 1000);
  };

  return (
    <Stack gap="medium" {...rest}>
      <StyledBasketHeading component="h2" variant="headingMedium">
        Review Your Order & Complete Checkout
      </StyledBasketHeading>
      <StyledSummary>
        <StyledSummaryHeading component="h3" variant="bodyMedium">
          Review Your Order
        </StyledSummaryHeading>
        <StyledSummaryContainer>
          {products.length > 0 ? (
            <StyledTable>
              <StyledTableThead>
                <StyledTableTr>
                  <StyledTableTh scope="col">Product</StyledTableTh>
                  <StyledTableTh scope="col">Price</StyledTableTh>
                  <StyledTableTh scope="col">Quantity</StyledTableTh>
                  <StyledTableTh scope="col">Cost</StyledTableTh>
                </StyledTableTr>
              </StyledTableThead>
              <StyledTableTbody>
                {products.map((product) => (
                  <StyledTableTr key={product.id}>
                    <StyledTableTd data-label="Product">
                      {product.name}
                    </StyledTableTd>
                    <StyledTableTd data-label="Price">
                      £{product.price.toFixed(2)}
                    </StyledTableTd>
                    <StyledTableTd data-label="Quantity">
                      <StyledTableFlexRow>
                        <Input
                          id={product.id.toString()}
                          type="number"
                          label="Quantity"
                          value={product.quantity}
                          min={1}
                          max={100}
                          htmlFor={product.id.toString()}
                          hideLabel
                          compact
                        />
                        <StyledTableBtnsWrap>
                          <StyledBtn
                            isOrange
                            onClick={() =>
                              handleQuantityChange(
                                product.id,
                                Math.max(product.quantity - 1, 1)
                              )
                            }
                          >
                            -
                          </StyledBtn>
                          <StyledBtn
                            isGreen
                            onClick={() =>
                              handleQuantityChange(
                                product.id,
                                Math.min(product.quantity + 1, 99)
                              )
                            }
                          >
                            +
                          </StyledBtn>
                        </StyledTableBtnsWrap>
                      </StyledTableFlexRow>
                    </StyledTableTd>
                    <StyledTableTd data-label="Cost">
                      <StyledTableFlexRow>
                        <StyledCostWrap>
                          £{(product.price * product.quantity).toFixed(2)}{' '}
                        </StyledCostWrap>
                        <StyledBtn
                          isRed
                          alignRight
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </StyledBtn>
                      </StyledTableFlexRow>
                    </StyledTableTd>
                  </StyledTableTr>
                ))}
              </StyledTableTbody>
            </StyledTable>
          ) : (
            <StyledEmptyBasket>
              <Typography component="h3" variant="bodyMediumBold">
                Your basket is empty.
              </Typography>
              <StyledBtn isGreen onClick={() => handleRefreshPage()}>
                Continue shopping
              </StyledBtn>
            </StyledEmptyBasket>
          )}
        </StyledSummaryContainer>
      </StyledSummary>
      <StyledSubTotal gap="small">
        <StyledTotalItem variant="bodyMedium">
          Subtotal <span>£{subtotal.toFixed(2)}</span>
        </StyledTotalItem>
        <StyledTotalItem variant="bodyMedium">
          VAT @20% <span>£{vat.toFixed(2)}</span>
        </StyledTotalItem>
      </StyledSubTotal>
      <StyledTotal>
        <StyledTotalItem variant="bodyLarge">
          Total <span>£{total.toFixed(2)}</span>
        </StyledTotalItem>
      </StyledTotal>
      <StyledSubmitContainer>
        <StyledSubmitBtn
          disabled={products.length === 0}
          onClick={handleBuyNow}
        >
          Buy Now
        </StyledSubmitBtn>
      </StyledSubmitContainer>
    </Stack>
  );
};

export default Basket;
