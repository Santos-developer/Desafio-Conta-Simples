import PropTypes from "prop-types";
import React from "react";
import {
  Title,
  Small,
  ResumeRow,
  PanelTotal,
  PanelResume,
  RowPanelResume,
  Rentability,
  CardChart,
  CustomCard,
  CustomCardRow,
  Transactions
} from "./styles";

import { connect } from "react-redux";

import { Line } from "react-chartjs-2";

import Badge from "components/Badge";
import Button from "components/Button";

import Man from "assets/images/man.png";

const RenderTransactions = ({ transactions }) => {
  return transactions.map((transaction, index) => {
    const date = new Date(transaction.date);
    const day = date.getDate();
    let month = date.toLocaleString("pt-br", {
      month: "long"
    });

    month = month.replace(month[0], month[0].toUpperCase());

    const year = date.getFullYear();

    const customDate = `${day} de ${month} de ${year}`;

    return (
      <li key={index}>
        <div className={transaction.deposit ? "circle" : "line"} />
        <div className="wrapper">
          <div className="row">
            <div className="data">
              <h5>{transaction.name}</h5>
              <small>{customDate}</small>
            </div>
            <span className="badge">{transaction.type}</span>
            <p className="price">R${transaction.value}</p>
          </div>
        </div>
      </li>
    );
  });
};

const Home = ({ user }) => {
  return (
    <>
      <Title>Resumo de Novembro</Title>
      <Small>Atualizado em 25/11/2019 às 19:27</Small>

      <ResumeRow>
        <PanelTotal>
          <h5>Saldo total</h5>
          <div className="panel-price">
            <p className="price">
              <span>R$</span> {user.total}
            </p>
            <Badge>0%</Badge>
          </div>
          <small>0% acima do mesmo período do mês anterior</small>
        </PanelTotal>
        <PanelResume>
          <RowPanelResume>
            <Rentability>
              <h5>Rentabilidade CDI</h5>
              <p className="subtitle">ESTE MÊS</p>
              <div className="panel-price">
                <p className="price">+ R$ {user.rentability}</p>
                <Badge>R$ 0,00</Badge>
              </div>
              <small>Ontem meu rendimento foi de R$ 0,00</small>
            </Rentability>
            <div>
              <h5>Últimas entradas</h5>
              <p className="subtitle">ESTE MÊS</p>
              <div className="panel-price">
                <p className="price">+ R$ {user.entries}</p>
                <Badge>0%</Badge>
              </div>
              <small>0% acima do mesmo período do mês anterior</small>
            </div>
          </RowPanelResume>
        </PanelResume>
      </ResumeRow>

      <Title>Fluxo de caixa</Title>
      <CardChart>
        <Line
          data={{
            labels: ["JAN", "MAR", "MAI", "JUL", "NOV"],
            datasets: [
              {
                label: "Fluxo de caixa",
                data: [0, 0, 0, 0, 0],
                borderColor: "#46b64a"
              }
            ],
            options: {
              responsive: false,
              maintainAspectRatio: false
            }
          }}
        />
      </CardChart>

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
          <RenderTransactions transactions={user.transactions} />
        </ul>
        <Button>Ver extrato completo</Button>
      </Transactions>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

Home.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Home);
