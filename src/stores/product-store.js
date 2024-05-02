import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [
    {
      image: 'https://mills.co.id/cdn/shop/products/200910161601_WhatsApp_20Image_202020-09-10_20at_2014.31.19_1__ori.jpg?v=1706094127&width=1445',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7godOCXTJHjEKYqEqT3K4fjmwIVMZNvFXThuSLOON_g&s',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: 'https://laz-img-sg.alicdn.com/p/a66f3978b82a8bd7673f771f7cff6700.jpg',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    }
  ],
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
}))

export default useProductStore;