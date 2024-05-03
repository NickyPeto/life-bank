import { Transactions, Bills } from "../Redux/types";

//If there is some problem with the database, we'll just show a loading placeholder
export const transactionsValuePlceHolder: Transactions[] = [
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
  {
    name: "",
    description: "",
    amount: "",
    date: undefined,
  },
];

export const billsValePlaceholder: Bills[] = [
  {
    data: {
      name: "",
      description: "",
      amount: "",
      date: "",
    },
    createdAt: {
      type: Date.prototype,
      default: undefined,
    },
  },
  {
    data: {
      name: "",
      description: "",
      amount: "",
      date: "",
    },
    createdAt: {
      type: Date.prototype,
      default: undefined,
    },
  },
  {
    data: {
      name: "",
      description: "",
      amount: "",
      date: "",
    },
    createdAt: {
      type: Date.prototype,
      default: undefined,
    },
  },
  {
    data: {
      name: "",
      description: "",
      amount: "",
      date: "",
    },
    createdAt: {
      type: Date.prototype,
      default: undefined,
    },
  },
  {
    data: {
      name: "",
      description: "",
      amount: "",
      date: "",
    },
    createdAt: {
      type: Date.prototype,
      default: undefined,
    },
  },
];
