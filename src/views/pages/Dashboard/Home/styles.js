import Styled from "styled-components";

import Row from "components/Row";
import Panel from "components/Panel";
import Card from "components/Card";

export const Title = Styled.h4`
  color: #4a4e51;
  font-weight: 500;
`

export const Small = Styled.small`
  color: #4a4e51;
  font-weight: 400;
  font-size: .8rem;
`

export const ResumeRow = Styled(Row)`
  @media (min-width: 980px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const PanelPreset = Styled(Panel)`
  h5 {
    color: #989a97;
    /* font-weight: 500; */
    margin-bottom: 1em;
  }

  .subtitle {
    color: #c9c9c9;
    font-size: .6rem;
  }

  .panel-price {
    display: flex;
    align-items: center;
  }

  small {
    color: #c1c1c1;
    font-size: .6rem;
  }
`;

export const PanelTotal = Styled(PanelPreset)`
  .price {
    font-size: 1.9rem;
    font-weight: bold;
  }

  .price span {
    font-size: 1.5rem;
  }
`;

export const PanelResume = Styled(PanelPreset)`
  .price {
      font-weight: 600;
    }
`;

export const RowPanelResume = Styled(Row)`
    display: flex;
    flex-direction: column;

    @media (min-width: 508px) {
      flex-direction: row;
    }
`;

export const Rentability = Styled.div`
  min-width: 200px;
  margin-bottom: 1em;

  @media (min-width: 760px) {
    margin: 0;
    border-right: solid 1px rgba(0,0,0,.2);
    margin-right: 1em;
  }
`;

export const CardChart = Styled(Card)`

  canvas {
    width: 100% !important;
    height: 50% !important;
  }

  @media (min-width: 760px) {
    margin-bottom: 6em;
  }
`

export const CustomCard = Styled(Card)`
  margin-top: 1em;
  background: linear-gradient(to right, #1ebe98, #6aeca4);

  h3 {
    margin-bottom: 1em;
  }

  p {
    color: white;
    margin-bottom: 1em;
  }

  button {
    color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    padding: .8em 2em;
    border: 0;
    border-radius: 4px; 
    background-color: white;
    margin-bottom: 1em;
    width: 100%;

    @media (min-width: 760px) {
      width: auto;
    }
  }

  .picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: 200px;
  }

  .picture img {
    max-width: 120px;

    @media (min-width: 760px) {
      top: -100px;
      left: 50px;
      position: absolute;
    }
  }
`;

export const CustomCardRow = Styled(Row)`
    @media (min-width: 760px) {
      flex-direction: row;
    }
`;

export const Transactions = Styled(Row)`
  h4 {
    margin: 1em 0;
  }

  h5 {
    color: #7f7f7f;
    font-weight: 500;
  }

  small {
    color: #b2b2b2;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: .5em;
  }
  
  .circle {
    width: 15px;
    height: 15px;
    margin: 0 .8em 0 .4em;
    border: solid 2px #34a644;
    border-radius: 10px;
  }

  .line {
    width: 15px;
    height: 2px;
    margin: 0 .8em 0 .4em;
    background-color: #a72122;
  }

  .wrapper {
    width: 100%;
    padding: .6em;
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 1px 9px #f2f2f2;
    border: solid 1px #e8eae7;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
  }

  .badge {
    display:none;
    color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    font-size: .6em;
    padding: .5em;
    border-radius: 4px;
    background-color: #daefde;
    
    position: absolute;
    left: 60%;

    @media screen and (min-width: 600px) {
      display: block;
    }
  }

  .data {
    min-width: 130px;
  }

  button {
    margin-top: 1em;
    align-self: center;
  }
`