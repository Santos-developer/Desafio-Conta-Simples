import React from "react";
import {
  Title,
  Small,
  ResumeRow,
  PanelTotal,
  PanelResume,
  RowPanelResume,
  Rentability,
  CustomCard,
  CustomCardRow,
  Transactions
} from "./styles";

import Badge from "components/Badge";
import Button from "components/Button";

import Man from "assets/images/man.png";

const Home = () => {
  return (
    <>
      <Title>Resumo de Novembro</Title>
      <Small>Atualizado em 25/11/2019 às 19:27</Small>

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
      <Small>Chart.js aqui.</Small>

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
      <Transactions>
        <Title>Transações</Title>
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
