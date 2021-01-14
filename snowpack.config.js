module.exports = {
  mount: {
    public: {
      static: true,
      url: '/'
    },
    src: {
      url: '/dist'
    }
  },
  plugins: [
    '@snowpack/plugin-react-refresh'
  ]
};
