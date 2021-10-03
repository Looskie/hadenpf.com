// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	alias: {
		$atoms: './src/components/atoms',
		$molecules: './src/components/molecules',
		$organisms: './src/components/organisms',
		$utils: './src/components/utils',
		$layouts: './src/layouts',
		$public: './src/public',
	},
}
