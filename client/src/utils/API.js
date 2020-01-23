import axios from "axios";

export default  {

  getProducts: function() {
      return axios.get('/api/products/cart')
  },

  createProduct: function(data) {
      return axios.post('/api/products', data)
  },

  deleteProduct: function(id) {
      return axios.delete('/api/products/' + id)
  }
}


