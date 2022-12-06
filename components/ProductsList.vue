<template>
  <div class="bg-gray-300">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(product, i) in products"
          :key="i"
          class="group relative bg-white rounded"
        >
          <div
            class="min-h-80 py-4 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          >
            <img
              src="https://www.kpn.com/shop/cdn/products/_/product_11573016_main.webp"
              class="h-full w-full object-contain object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between p-3">
            <div>
              <p class="my-2 text-base text-gray-500">
                {{ product.manufacturer }}
              </p>
              <h3 class="text-base text-gray-700 font-semibold">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$axios
        .get("http://localhost:8000/api/phones")
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => console.log("err", err));
    },
  },
};
</script>
