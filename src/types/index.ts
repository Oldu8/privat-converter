import { ICurrency } from "../interfaces";

export type ItemListFunc = (props: { data: ICurrency }) => JSX.Element;
export type TableFunc = (props: { data: ICurrency[] }) => JSX.Element;
