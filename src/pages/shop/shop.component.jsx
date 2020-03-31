import React from "react";
import { Route } from "react-router-dom";

import CollectonOverview from "../../components/collections-overview/collections-overview.componetnt";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectonOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
