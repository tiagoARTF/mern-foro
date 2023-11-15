import {} from 'react';
import '../css/Home.css'


const PrincipalPage = () => {
    return (
        <div>
            <main>
            <div className="lg:flex lg:justify-center">
      {/* Imagen principal con fondo oscuro y borroso */}
      <div className="imagen-principal-container">
  <div className="imagen-principal">
    <img src="../src/assets/img/l.jpg" alt="Imagen Principal" />
  </div>
  <div className="descripcion-superpuesta">
    <h1 className="text-5xl lg:text-8xl font-semibold" style={{ fontSize: '5vw' }}>
      ¡Bienvenido a nuestro apasionante rincón literario!
    </h1>
    <p className="" style={{ fontSize: '2vw' }}>
      Descubre un mundo de lectura y conecta con amantes de los libros como tú.
    </p>
    <button
      className="btn-link"
      style={{ padding: '1vw 3vw' }}
      onClick={() => (window.location.href = '/book')}
    >
      Ingresar
    </button>
  </div>
</div>

    </div>

    <section className="contenido" id="acerca-de">
      <div className="acerca-de p-4 md:p-8 lg:flex lg:justify-between">
        <div className="md:w-1/2 lg:w-3/5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Acerca de Nosotros
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Bienvenido a LitSphere, el refugio virtual para todos aquellos que encuentran en las páginas de un libro un mundo infinito de posibilidades. En LitSphere, hemos creado un espacio digital donde los amantes de la lectura pueden reunirse, conectarse y celebrar la belleza de las palabras impresas.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Nuestra historia comenzó con una pasión compartida por la literatura. Un grupo de ávidos lectores se unió con el deseo de crear un lugar en línea donde la magia de los libros pudiera ser compartida, debatida y celebrada. Desde entonces, LitSphere ha crecido hasta convertirse en una comunidad literaria diversa y vibrante, uniendo a personas de todos los rincones del mundo en una conversación global sobre la literatura.
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 lg:w-2/5">
          <img
            className="w-full h-48 object-cover md:h-64 lg:w-auto lg:h-auto"
            src="../src/assets/img/about.jpg"
            alt="Imagen Derecha"
          />
        </div>
      </div>
    </section>

    <section className="soporte" id="soporte">
      <div className="p-4 lg:flex lg:justify-between">
        <div className="lg:w-3/5">
          <h2 className="text-2xl lg:text-3xl">Soporte</h2>
          <p className="text-base lg:text-lg">
            Ofrecemos soporte para nuestros usuarios. Si tienes preguntas o necesitas ayuda, contáctanos.
          </p>
          <p className="text-base lg:text-lg">Correo: soporte@turedsocial.com</p>
          <p className="text-base lg:text-lg">
            Redes Sociales: <a href="#">Facebook</a>, <a href="#">Twitter</a>
          </p>
          <p className="text-base lg:text-lg">Teléfono: +123456789</p>
        </div>
      </div>
    </section>
  </main>
</div>

      );
    }
    
export default PrincipalPage;