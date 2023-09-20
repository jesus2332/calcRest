# Desarollo basado en plataformas 8CC2
## Autor: Jesús Manuel Calleros Vazquez


# Calculadora API
Esta es una pequeña API de calculadora construida con Express.js que realiza diversas operaciones matemáticas. La API permite realizar sumas, multiplicaciones, divisiones, potenciaciones y restas entre dos números proporcionados como entrada. A continuación, se detalla cómo utilizarla y las operaciones disponibles.

# Uso
Asegúrese de tener Node.js y npm instalados en su sistema antes de ejecutar esta API.

Clone o descargue este repositorio en su máquina local.

### Abra una terminal en la ubicación del proyecto y ejecute el siguiente comando para instalar las dependencias necesarias:
npm install

### Inicie la API ejecutando el siguiente comando:

node app.js


# Rutas
## Suma
Método: GET
Ruta: /results/:n1/:n2
Descripción: Calcula la suma de dos números.
Ejemplo de solicitud: /results/5/3
Ejemplo de respuesta: El resultado es: 8

## Multiplicación
Método: POST
Ruta: /results/
Descripción: Calcula el producto de dos números proporcionados en el cuerpo de la solicitud.
Cuerpo de la solicitud (JSON):
json
{
    "n1": 4,
    "n2": 7
}
Ejemplo de respuesta: El resultado es: 28
## División
Método: PUT
Ruta: /results/
Descripción: Realiza una división entre dos números proporcionados en el cuerpo de la solicitud.
Cuerpo de la solicitud (JSON):
json
{
    "n1": 10,
    "n2": 2
}
Ejemplo de respuesta: El resultado es: 5
## Potenciación
Método: PATCH
Ruta: /results/
Descripción: Calcula la potencia de un número (n1) elevado a la potencia de otro número (n2) proporcionados en el cuerpo de la solicitud.
Cuerpo de la solicitud (JSON):
json
{
    "n1": 2,
    "n2": 3
}
Ejemplo de respuesta: El resultado es: 8
## Resta
Método: DELETE
Ruta: /results/:n1/:n2
Descripción: Realiza una resta entre dos números.
Ejemplo de solicitud: /results/10/4
Ejemplo de respuesta: El resultado es: 6