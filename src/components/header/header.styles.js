import css from "@emotion/core";
import { func } from "prop-types";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = () =>
  css`
    width: 52%;
    text-align: center;
    color: var(--main-black-color);
    font-size: 3.6rem;
    font-family: "Homemade Apple", sans-serif;
    text-transform: lowercase;
  `;
