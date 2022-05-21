#|
Ejemplos de funciones en racket

Emilio Sibaja Villarreal
22-02-2022

|#

; Se usa ";" para hacer comentarios de una sola linea

;Se determina el lenguaje para interpretar este archivo
#lang racket

(provide triangle-area)


; Creamos la función triangle-area para calcular el area del triangulo

(define (triangle-area base height) (/ (* base height) 2.0 ))

; Se llama a la función

(triangle-area 6 9)



(define (tiempo edad year) (+ (- year edad) 100))

(tiempo 10 2021)



