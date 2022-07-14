require('./src/assets/sass/all.scss');

const React =  require('react');
const Layout = require('./src/components/Layout.jsx').default;

module.exports.wrapRootElement = ({element}) => <Layout>{ element }</Layout>