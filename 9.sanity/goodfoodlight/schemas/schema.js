import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import restaurant from "./restaurant";
import picture from "./picture";
import menu from "./menu";
import menuitem from "./menuitem";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([restaurant, picture, menu, menuitem]),
});
