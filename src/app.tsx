import { Layout, Toaster } from '@/components';
import { default as Pages } from './pages';
import { default as Providers } from './providers';

function App() {
  return (
    <>
      <Providers>
        <Layout>
          <Pages />
        </Layout>
      </Providers>
      <Toaster
        richColors
        theme="light"
        closeButton
        toastOptions={{
          duration: 4 * 1000,
          classNames: {
            toast: 'group group-[.toaster]:pointer-events-auto'
          }
        }}
      />
    </>
  );
}

export default App;
