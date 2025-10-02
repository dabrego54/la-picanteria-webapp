import { create } from "zustand"

interface FilterStore {
  categories: string[]
  heatLevels: number[]
  priceRange: [number, number]
  toggleCategory: (category: string) => void
  toggleHeatLevel: (level: number) => void
  setPriceRange: (range: [number, number]) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  categories: [],
  heatLevels: [],
  priceRange: [0, 10000],

  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),

  toggleHeatLevel: (level) =>
    set((state) => ({
      heatLevels: state.heatLevels.includes(level)
        ? state.heatLevels.filter((l) => l !== level)
        : [...state.heatLevels, level],
    })),

  setPriceRange: (range) => set({ priceRange: range }),

  resetFilters: () =>
    set({
      categories: [],
      heatLevels: [],
      priceRange: [0, 10000],
    }),
}))
