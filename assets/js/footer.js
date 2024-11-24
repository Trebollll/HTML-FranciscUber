$( document ).ready(function() {
    let navbar = ` <footer>
                        <h1 class="text-bg-warning text-white text-center mt-2">
                            FranciscUber <a href="http://localhost:8900/portal-web" target="_blank"> <!-- <a href="https://www.amazon.com/.... es para refenciar algo o un link-->
                                <i><img src="./assets/img/icon/vehiculo.png" alt="" width="70"></i>
                        </h1>
                        <h1 class="text-center mt-2">
                            <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a> 
                            <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a> 
                        </h1> <!--para colocar un fondo de color al titulo --><!--text center para centra-->
                    </footer>`;          
    $("#pie-pagina").html(navbar);
});