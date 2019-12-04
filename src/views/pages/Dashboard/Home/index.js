import React from "react";
import Styled from "styled-components";

import Title from "components/Title";
import Badge from "components/Badge";
import Row from "components/Row";
import Panel from "components/Panel";
import Card from "components/Card";
import Button from "components/Button";

import Man from "assets/images/man.png";

const ResumeRow = Styled(Row)`
  @media (min-width: 980px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const PanelPreset = Styled(Panel)`
  h5 {
    margin-bottom: 1em;
  }

  small {
    font-size: .6rem;
  }

  .panel-price {
    display: flex;
    align-items: center;
  }

  .subtitle {
    font-size: .6rem;
  }
`;

const PanelTotal = Styled(PanelPreset)`
  .price {
    font-size: 1.9rem;
    font-weight: bold;
  }

  .price span {
    font-size: 1.5rem;
  }
`;

const PanelResume = Styled(PanelPreset)`
  .price {
      font-weight: 600;
    }
`;

const RowPanelResume = Styled(Row)`
    display: flex;
    flex-direction: column;

    @media (min-width: 508px) {
      flex-direction: row;
    }
`;

const Rentability = Styled.div`
  min-width: 200px;
  margin-bottom: 1em;

  @media (min-width: 760px) {
    margin: 0;
    border-right: solid 1px rgba(0,0,0,.2);
    margin-right: 1em;
  }
`;

const CustomCard = Styled(Card)`
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

const CustomCardRow = Styled(Row)`
    @media (min-width: 760px) {
      flex-direction: row;
    }
`;

const Transactions = Styled(Row)`
  h4 {
    margin-bottom: 1em;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: .5em;
  }
  
  .circle {
    width: 15px;
    height: 15px;
    margin: .4em;
    border: solid 2px green;
    border-radius: 50%;
  }

  .line {
    width: 15px;
    height: 5px;
    margin: .4em;
    background-color: red;
    /* border: solid 2px red; */
  }

  .wrapper {
    width: 100%;
    padding: .6em;
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 1px 9px #f2f2f2;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .badge {
    color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    font-size: .6em;
    padding: .5em;
    border-radius: 4px;
    background-color: #daefde;
  }

  button {
    align-self: center;
  }
`

const Home = () => {
  return (
    <>
      <Title>Resumo de Novembro</Title>
      <small>Atualizado em 25/11/2019 às 19:27</small>

      <ResumeRow>
        <PanelTotal>
          <h5>Saldo total</h5>
          <div className="panel-price">
            <p className="price">
              <span>R$</span> 7.359,21
            </p>
            <Badge>15%</Badge>
          </div>
          <small>15% acima do mesmo período do mês anterior</small>
        </PanelTotal>
        <PanelResume>
          <RowPanelResume>
            <Rentability>
              <h5>Rentabilidade CDI</h5>
              <p className="subtitle">ESTE MÊS</p>
              <div className="panel-price">
                <p className="price">+ R$ 202,00</p>
                <Badge>R$ 0,50</Badge>
              </div>
              <small>Ontem meu rendimento foi de R$ 0,50</small>
            </Rentability>
            <div>
              <h5>Últimas entradas</h5>
              <p className="subtitle">ESTE MÊS</p>
              <div className="panel-price">
                <p className="price">+ R$ 12,873,02</p>
                <Badge>33%</Badge>
              </div>
              <small>33% acima do mesmo período do mês anterior</small>
            </div>
          </RowPanelResume>
        </PanelResume>
      </ResumeRow>

      <Title>Fluxo de caixa</Title>
      <small>Chart.js aqui.</small>

      <CustomCard>
        <CustomCardRow>
          <div className="content">
            <h3>Múltiplos cartões virtuais gratuitos e ilimitados</h3>
            <p>
              Evite pausas de campanhas de marketing por conta do bloqueio do
              cartão de crédito. Tenha múltiplos cartões virtuais para cada
              conta ou plataforma.
            </p>
            <button>Ativar cartão virtual</button>
          </div>
          <div className="picture">
            <img src={Man} alt="..." />
          </div>
        </CustomCardRow>
      </CustomCard>
      <Title>Transações</Title>
      <Transactions>
        <ul>
          <li>
            <div className="circle" />
            <div className="wrapper">
              <div className="row">
                <div>
                  <h5>Starbucks Coffe Company</h5>
                  <small>10 de Novemnbro de 2019</small>
                </div>
                <span className="badge">Vendas</span>
                <p className="price">R$19,90</p>
              </div>
            </div>
          </li>
          <li>
            <div className="line" />
            <div className="wrapper">
              <div className="row">
                <div>
                  <h5>Starbucks Coffe Company</h5>
                  <small>10 de Novemnbro de 2019</small>
                </div>
                <span className="badge">Vendas</span>
                <p className="price">R$19,90</p>
              </div>
            </div>
          </li>
        </ul>
        <Button>Ver extrato completo</Button>
      </Transactions>
    </>
  );
};

export default Home;
