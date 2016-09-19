function filteredList() {
  return function (items, filter) {

  return items.filter(function(item){


    return item.name === filter
  })

  }



}

angular   
  .module('app')
  .filter('filteredList', filteredList)