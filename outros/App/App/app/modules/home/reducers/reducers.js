export function fetchClasses(state, action) {
  return state
    .set('classesList', action.payload)
    .set('isClassesLoading', false);
}
