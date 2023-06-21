import React from "react";
import Styles from "./spinner-styles.scss";

type Props = React.HTMLAttributes<HTMLElement>;

export const Spinner = (props: Props) => (
  <div {...props} className={[Styles.spinner, props.className].join(" ")}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
