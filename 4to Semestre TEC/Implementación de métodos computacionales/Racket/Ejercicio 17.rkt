#|
Exercise 17

Emilio Sibaja Villarreal


08/03/2022
|#


#lang racket

(define (len lst)
  (length lst))

(define (sum lst)
  (apply + lst))

(define (mean lst)
  (/ (sum lst) (len lst)))

(define (lst2 lst)
  (map (lambda (x) (- x (mean lst))) lst))

(define (sqrlst lst)
  (map (lambda (x) (* x x)) (lst2 lst)))

(define (sum_sqrlst lst)
  (apply + (sqrlst lst)))

(define (div lst)
  (/ (sum_sqrlst lst) (len lst)))

(define (sqrt_lst lst)
  (sqrt (div lst)))

   
(define (standard-deviation lst)
  (if (empty? lst)
      0
  (sqrt_lst lst)
  ))
           


                  
     




  

  
     


