new Vue ({
    el:'#app',
    data: {
        valor:'',

        peliculas:[
            {nombre:'Acorralado,Rambo'},
            {nombre:'El ultimo mohicano'},
            {nombre:'Rocky'},
            {nombre:'Indiana Jones, en busca del arca perdida'},
            {nombre:'jumanji'},
            {nombre: 'Acordes y desacuerdos'},
            {nombre: 'El exorcista'},
            {nombre:'La momia'},
            {nombre:'Vertigo'},
            {nombre:'2001 una odisea en el espacio'},
            {nombre:'Batman begins'},
            {nombre:'Habanna Blues'},

            


            
        ],
        
    },
    methods: {
        busqueda(peli){
            
            return peli.nombre.toLocaleLowerCase().indexOf(this.valor.toLocaleLowerCase())>=0
            
            
        }
         
    }

})