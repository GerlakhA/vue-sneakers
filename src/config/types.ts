export interface ISneakers {
  id: number
  title: string
  price: number
  imageUrl: string
}

export interface ISneakerById {
  id: number
  title: string
  price: number
  imageUrl: string
  isFavorite: boolean
  favoriteId: number | null
  isAdded: boolean
}
