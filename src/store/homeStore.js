import { create } from "zustand";

const homeStore = create((set) => ({
  fetchCoins: () => {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => res.json())
      .then((data) => {
        set({ coins: data });
      });
  },
}));

export default homeStore;
