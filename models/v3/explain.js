"use strict";

import mongoose from "mongoose";
import explainData from "../../InitData/explain";

const Schema = mongoose.Schema;

const explainSchema = new Schema({
  data: Schema.Types.Mixed,
});

const Explain = mongoose.model("Explain", explainSchema);

Explain.findOne().then((res) => {
  Explain.create({ data: explainData });
});

export default Explain;
