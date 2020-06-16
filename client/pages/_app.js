import Header from '../components/header';
import buildClient from '../api/build-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};

  // make sure to only invoke `getInitialProps` for pages that have it defined
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  console.log(data);
  return {
    pageProps,
    currentUser: data.currentUser,
  };
};

export default AppComponent;
