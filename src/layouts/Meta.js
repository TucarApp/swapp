import Head from "next/head";
import { useRouter } from "next/router";

function Meta({ children, title, ...customMeta }) {
  const router = useRouter() || { asPath: "/" }; 
  const cdnUrl = process.env.NEXT_PUBLIC_CDN || "https://storage.googleapis.com/tucar-dev-bucket/public";

  const meta = {
    title: title ? `${title} | Tucar` : "Swapp",
    type: "website",
    description:
      "Swapp revoluciona la movilidad sostenible con su innovador sistema de arriendo de motos y autos eléctricos. Con una red de estaciones de intercambio de baterías y una plataforma digital intuitiva, Swapp ofrece una alternativa eficiente y ecológica para moverte por la ciudad. Sin emisiones, sin esperas, solo recargas instantáneas y máxima autonomía. Descubre la nueva forma de conducir con Swapp: flexible, accesible y 100% eléctrica.",
    image: `${cdnUrl}/isotipo/isotipo.svg`,
    keywords:
      "Arriendo de autos Swapp, Arriendo de auto en Santiago con Swapp, Arriendo de vehículos Swapp, Alquiler de autos Swapp, Alquiler de vehículos Swapp, Arriendo de autos económicos Swapp, Arriendo de autos baratos Swapp, Autos para Uber en arriendo con Swapp, Arriendo de autos para Uber con Swapp, Mejores autos para Uber en Swapp, Arriendo de autos sin depósito con Swapp, Arriendo de autos flexibles Swapp, Suscripción de autos con Swapp, Arriendo de autos por día con Swapp, Arriendo de autos por mes con Swapp, Alquiler de autos a largo plazo con Swapp, Arriendo de autos con entrega a domicilio Swapp, Arriendo de autos sin compromiso con Swapp, Arriendo de autos sin tarifas ocultas con Swapp, Arriendo de autos sin fianza con Swapp",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={`https://tucar.app${router.asPath}`} />
        <link rel="canonical" href={`https://tucar.app${router.asPath}`} />
        <link rel="icon" href={`${cdnUrl}/favicon.ico`} />

        <meta charSet="UTF-8" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Tucar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rentacapp" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:secure_url" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
    </>
  );
}

export default Meta;
