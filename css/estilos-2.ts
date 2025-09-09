body {
    background: #000000;
    margin: 0;
}

.estructura {
    /* PASO 1 - CREAMOS EL FORMATO */
    width: 100vw;
    height: 100vh;

    /* PASO 2 - CREAMOS LA ESTRUCTURA */
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 10px;
}

    .poster .date {
            display: grid;

    color: red;
      font-size: 1.5rem;

      grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    }
    .poster .tagline {
            display: grid;

    color: red;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      grid-template-columns: repeat(5, 1fr);
     grid-template-rows: repeat(5, 1fr);
    }

#inicio {
    background:  url("../Imagenes/72ppi/FNAF\ fONDO.jpg");
    background-size: cover;
    background-position: center;

}

#titulo {
    grid-column: 3/8;
    grid-row: 2/5;
    
        
 }
