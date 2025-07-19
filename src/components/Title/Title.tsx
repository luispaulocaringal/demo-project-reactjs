import { Helmet, HelmetProvider } from "react-helmet-async";

function Title({ title }: { title:string }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{ title }</title>
        <meta name="description" content={ title } />
      </Helmet>
    </HelmetProvider>
  )
}

export default Title;