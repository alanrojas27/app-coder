const productos = [
    {id: '1', nombre: 'Cerveza', precio: 100, descripcion: 'Bebida para todos los dias', img: 'https://images8.alphacoders.com/413/thumb-1920-413078.jpg'},
    {id: '2', nombre: 'Vino', precio: 50, descripcion: 'El clasico de los domingos al mediodia', img: 'https://images5.alphacoders.com/443/thumb-1920-443997.jpg'},
    {id: '3', nombre: 'Vodka', precio: 300, descripcion: 'Para previar antes de salir bien loco para el baile', img: 'https://images2.alphacoders.com/491/491498.jpg'},
]

export const getProductos = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}