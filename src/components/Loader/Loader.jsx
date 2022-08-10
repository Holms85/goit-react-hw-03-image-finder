import React from 'react';

import { ThreeDots } from 'react-loader-spinner';

import css from "components/Loader/Loader.module.css";


function preLoader() {
  return (
    <div className={css.loader}>
      <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
  )
}

export default preLoader;