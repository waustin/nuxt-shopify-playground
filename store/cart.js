import AddToCart from '@/graphql/Shopify/AddToCart.gql'

export const state = () => ({
    cart: null,
    fart: "hello",
})

export const mutations = {
    setCart(state, cart) {
        state.cart = cart;
    }
}

export const actions = {
    async addToCart(vuexContext, variantId, quantity, attributes=[]) {
        const myCartInput = {
            lines: [
                {
                    quantity: 1,
                    merchandiseId: variantId,
                    attributes: [
                        {
                            key: 'line-item-attribute',
                            value: 'this is the line item attribute'
                        }
                    ]
                }
            ],
            attributes: [{
                key: 'cart_attribute',
                value: 'this is my cart attribute',
            }],
        };
        const shopifyClient = this.app.apolloProvider.clients.shopify;
        const result = await shopifyClient.mutate({ 
            mutation: AddToCart, 
            variables: {
                cartInput: myCartInput,
            },
        });
        const cart = result.data.cartCreate.cart;
        vuexContext.commit('setCart', cart);
    }
}

export const getters = {}