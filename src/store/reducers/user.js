const INITIAL_STATE = {
  name: "Leonardo Ribeiro",
  account: {
    digit: "0001",
    agency: "43322-1",
    total: 7.359,
    rentability: 202,
    entries: 12.873
  },
  transactions: [
    {
      type: "VENDAS",
      name: "Starbucks Coffe Company",
      date: Date.now(),
      value: 19.9,
      deposit: true
    },
    {
      type: "MARKETING",
      name: "Starbucks Coffe Company",
      date: Date.now(),
      value: 799.9,
      deposit: false
    },
    {
      type: "MARKETING",
      name: "Facebook Business tecnologia e marketing LTDA.",
      date: Date.now(),
      value: 7830.9,
      deposit: false
    },
    {
      type: "FINANCEIRO",
      name: "Loggi logistica",
      date: Date.now(),
      value: 7.13,
      deposit: true
    },
    {
      type: "TECNOLOGIA",
      name: "AWS - Amazon web service tecnologia",
      date: Date.now(),
      value: 2009.55,
      deposit: false
    },
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return state;
    default:
      return state;
  }
};
