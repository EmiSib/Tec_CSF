#|
Exercise 15

Emilio Sibaja Villarreal

08/03/2022


|#


#lang racket



(define (dot-product a b)
  (cond
    [(null? a) 0]
    [(null? b) 0]
    (else
    (+(* (car a) (car b))
     (dot-product (cdr a) (cdr b))))))
    
   



