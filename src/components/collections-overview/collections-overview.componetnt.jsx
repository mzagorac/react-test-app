import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPriview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overvoew">
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPriview
});

export default connect(mapStateToProps)(CollectionsOverview);
