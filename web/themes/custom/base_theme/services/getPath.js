const getPath = (env, key) => {
    const paths = {
        development: {
            base: '/',
            aliasImages: 'themes/custom/base_theme/assets/images/',
        },
        prod: {
            base: '/themes/custom/base_theme/dist/',
            aliasImages: 'assets/images/',
        },
    }

    return paths[env][key]
}

export default getPath
