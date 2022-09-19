import * as React from "react";
import data from "../../public/data/data.json";
const TopHeader = () => {

  return (
    <div class="container">
      <div class="row justify-content-md-center"></div>
      <div class="row">
        <div class="col">{data.mini_header_data.country_name} | {data.mini_header_data.language}</div>
        <div class="col">{data.mini_header_data.banner_data}</div>
        <div class="col-md-auto">{data.mini_header_data.distributor_text}</div>
        <div class="col-md-auto">{data.mini_header_data.sign_in}</div>
      </div>
    </div>
  );
};
export default TopHeader;
