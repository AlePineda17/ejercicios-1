const app = new Vue({
    el: '#app',
    data: {
        patronVotos: /[0-9]+/,
        dataUser: {
            telefono: 0,
            nombre: '',
            apellido:''
        },
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiMSJ9.rMqRXPKRlAuF-GTzrPSoO6uKmDiPU9ft4rly0yFcuk8',
        acta: 0,
        usuario: '',
        urlActa: '',
        recuentos: []
    },
    mounted() {
        this.servirActa()
    },
    methods: {
        servirActa() {
            let self = this;
            $.ajax({
                url: "https://rocky-oasis-90634.herokuapp.com/api/resultados/acta/",
                methods: 'GET',
                headers: {
                    'Authorization': this.token
                },
                dataType: "json",
            }).done(function (data) {
                self.acta = data.id;
                self.urlActa = data.imagen;
                self.creandoEntradas( data.imagen );
            }).fail(function () {
                alert("Algo salió mal");
            })
        },
        enviarData() {
            this.recuentos.forEach(( voto, idx )  => {
                $.ajax({
                    url: "https://rocky-oasis-90634.herokuapp.com/api/resultados/cuenta/",
                    methods: 'POST',
                    data: {
                        usuario: this.usuario,
                        acta: this.acta,
                        campo: idx + 1,
                        total: voto
                    },
                    headers: {
                        'Authorization': this.token
                    },
                    dataType: 'Json',
                }).done(function (data) {
                    console.log(data);
                }).fail(function () {
                    alert("Algo salió mal");
                })
            });
        },
        validarDatos() {
            if ( this.patronVotos.test(this.recuentos.valor) ) {
                alert('Inngrese valores validos');
                return true;
                }
            else {
                this.recuentos.push(this.recuento.valor);
            }
        },
        // elementoReactivo( _idx ) {
        // },
        creandoEntradas( _url) {
            let tipoActa = _url.slice(-7).split('.')[0].slice(-1);
            let entradas = ( tipoActa % 5 == 0)? 30 :
                ( tipoActa % 2 == 0)? 33 : ( tipoActa % 1 == 0)? 26 :
                console.log('El valor no es permitido'); //restringir actas 3 y 4
            console.log(tipoActa);
            for ( let i = 0; i < entradas; i++ ) {
                this.recuentos.push( 
                    { valor: 0});
            }
        },
    },
});