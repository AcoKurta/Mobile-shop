<template>
  <div class="bg-gray-300">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- Filters Brands -->
      <div class="filters-container w-full bg-white rounded p-2 flex">
        <div>
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-44 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
            @click="brandsShow = !brandsShow"
          >
            Brands
            <div>
              <div class="" v-if="!brandsShow" id="close">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div v-if="brandsShow" id="open">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div
            class="w-44 mt-2 p-4 bg-white shadow rounded absolute z-10"
            v-if="brandsShow"
            id="dropdown"
          >
            <div>
              <div id="sublist3">
                <div
                  v-for="(brand, brandIndex) in brands"
                  :key="brandIndex"
                  id="sublist3"
                  class="flex items-center justify-between"
                >
                  <div class="flex items-center">
                    <div
                      class="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
                    >
                      <input
                        type="checkbox"
                        class="focus:opacity-100 checkbox"
                        :value="brand"
                        v-model="checkedBrands"
                        @change="filterProducts(brand)"
                      />
                      <div
                        class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                      >
                        <svg
                          class="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p
                      id="usa3"
                      tabindex="0"
                      class="focus:outline-none text-sm leading-normal ml-2 text-gray-800 py-2"
                    >
                      {{ brand }}
                    </p>
                  </div>
                  <!-- <p
                    tabindex="0"
                    class="focus:outline-none w-8 text-xs leading-3 text-right text-indigo-700"
                  >
                    2,381
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-2">
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-32 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
            @click="fiveGShow = !fiveGShow"
          >
            5G
            <div>
              <div class="" v-if="!fiveGShow" id="close">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div v-if="fiveGShow" id="open">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div
            class="w-32 mt-2 p-4 bg-white shadow rounded absolute z-10"
            v-if="fiveGShow"
            id="dropdown"
          >
            <div>
              <div id="sublist3">
                <div
                  v-for="(fiveGOption, fiveGOptionIndex) in fiveGOptions"
                  :key="fiveGOptionIndex"
                  id="sublist3"
                  class="flex items-center justify-between"
                >
                  <div class="flex items-center">
                    <div
                      class="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
                    >
                      <input
                        aria-labelledby="usa3"
                        type="checkbox"
                        class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div
                        class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                      >
                        <svg
                          class="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p
                      id="usa3"
                      tabindex="0"
                      class="focus:outline-none text-sm leading-normal ml-2 text-gray-800 py-2"
                    >
                      {{ fiveGOption.label }}
                    </p>
                  </div>
                  <!-- <p
                    tabindex="0"
                    class="focus:outline-none w-8 text-xs leading-3 text-right text-indigo-700"
                  >
                    2,381
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-2">
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-32 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
            @click="eSimShow = !eSimShow"
          >
            E-sim
            <div>
              <div class="" v-if="!eSimShow" id="close">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div v-if="eSimShow" id="open">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div
            class="w-32 mt-2 p-4 bg-white shadow rounded absolute z-10"
            v-if="eSimShow"
            id="dropdown"
          >
            <div>
              <div id="sublist3">
                <div
                  v-for="(eSimOption, eSimOptionIndex) in eSimOptions"
                  :key="eSimOptionIndex"
                  id="sublist3"
                  class="flex items-center justify-between"
                >
                  <div class="flex items-center">
                    <div
                      class="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
                    >
                      <input
                        aria-labelledby="usa3"
                        type="checkbox"
                        class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div
                        class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                      >
                        <svg
                          class="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p
                      id="usa3"
                      tabindex="0"
                      class="focus:outline-none text-sm leading-normal ml-2 text-gray-800 py-2"
                    >
                      {{ eSimOption.label }}
                    </p>
                  </div>
                  <!-- <p
                    tabindex="0"
                    class="focus:outline-none w-8 text-xs leading-3 text-right text-indigo-700"
                  >
                    2,381
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-2">
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-32 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
            @click="refurbishedShow = !refurbishedShow"
          >
            Refurbished
            <div>
              <div class="" v-if="!refurbishedShow" id="close">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div v-if="refurbishedShow" id="open">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div
            class="w-32 mt-2 p-4 bg-white shadow rounded absolute z-10"
            v-if="refurbishedShow"
            id="dropdown"
          >
            <div>
              <div id="sublist3">
                <div
                  v-for="(
                    refurbishedOption, refurbishedOptionIndex
                  ) in refurbishedOptions"
                  :key="refurbishedOptionIndex"
                  id="sublist3"
                  class="flex items-center justify-between"
                >
                  <div class="flex items-center">
                    <div
                      class="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
                    >
                      <input
                        aria-labelledby="usa3"
                        type="checkbox"
                        class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div
                        class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                      >
                        <svg
                          class="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p
                      id="usa3"
                      tabindex="0"
                      class="focus:outline-none text-sm leading-normal ml-2 text-gray-800 py-2"
                    >
                      {{ refurbishedOption.label }}
                    </p>
                  </div>
                  <!-- <p
                    tabindex="0"
                    class="focus:outline-none w-8 text-xs leading-3 text-right text-indigo-700"
                  >
                    2,381
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Filters Brands -->

      <!-- Products -->
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in productsList"
          :key="product.id"
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
      productsList: [],
      brandsShow: false,
      fiveGShow: false,
      eSimShow: false,
      refurbishedShow: false,
      brands: [],
      fiveGOptions: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      eSimOptions: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      refurbishedOptions: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
      checkedBrands: [],
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
          this.productsList = this.products;
          console.log("this.productsList", this.productsList);

          this.brands = Array.from(
            new Set(
              this.products.map((product) => {
                return product.manufacturer;
              })
            )
          );
        })
        .catch((err) => console.log("err", err));
    },
    filterProducts() {
      if (this.checkedBrands.length) {
        this.productsList = this.products.filter((product) =>
          this.checkedBrands.includes(product.manufacturer)
        );
      }

      if (!this.checkedBrands.length) {
        this.productsList = this.products;
      }
    },
  },
};
</script>
