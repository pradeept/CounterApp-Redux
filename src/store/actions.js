import { createAction } from "@reduxjs/toolkit";

//this is manually created action. We can also pass payload to it. But in this case
// we are trying to reset both movies and songs states we don't need that.
const reset = createAction('app/reset');

export {reset} 