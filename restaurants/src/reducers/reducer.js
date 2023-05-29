export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload;
      if (newItem.picture.length === 0) {
        newItem.picture =
          'https://img.freepik.com/premium-vector/front-view-of-restaurant-exterior-from-street-cafe-building-with-open-glass-door-window-and-furniture-empty-modern-coffeehouse-from-outside-urban-cafeteria-facade-colored-flat-vector-illustration_198278-16999.jpg?w=1380';
      }
      return {...state, list: [...state.list, newItem]};
    }
    case 'DELETE_ITEM': {
      const id = action.payload;
      let reducedList = state.list.filter(el => id !== el.id);
      return {...state, list: reducedList};
    }
    case 'EDIT_ITEM': {
      const editedItem = action.payload;
      let editedList = state.list.map(el => {
        if (editedItem.id === el.id) {
          el.name = editedItem.newName;
          el.picture = editedItem.newPicture;
          el.address = editedItem.newAddress;
          el.website = editedItem.newWebsite;
          el.extra = editedItem.newExtra;
        }
        return {...el};
      });
      return {...state, list: editedList};
    }
    default: {
      return state;
    }
  }
}
