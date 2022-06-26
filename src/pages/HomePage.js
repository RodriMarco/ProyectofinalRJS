const HomePage = (props) => {
    return (
        <div id="grillainicio">
            <section id="inicio">
                <h1>
                    Iron Boxing Club
                </h1>
            </section>
            <div id="div-mapa">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.071938631017!2d-58.44960108419004!3d-34.602342364933705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0ec736c165%3A0x90459508e3cbf126!2sOlaya%201650%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1653265388838!5m2!1sen!2sar"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"/> */}
            </div>
            <div id="div-contacto">
                <h2>Contactate con nosotros:</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
        </div>

    );
}

export default HomePage;