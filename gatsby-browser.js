require('./src/assets/styles/global.css');

const React =  require('react');
const Layout = require('./src/components/Layout.jsx').default;

module.exports.wrapRootElement = ({element}) => <Layout>{ element }</Layout>