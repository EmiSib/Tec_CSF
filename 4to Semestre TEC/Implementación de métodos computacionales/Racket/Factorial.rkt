     #|
Factorial

Emilio Sibaja Villarreal
01/03/2022

|#

#lang racket



(require racket/trace)

(define (fact n)
  "Regular recursion for factorial"
  (if (zero? n)
      1
      (* n (fact (- n 1)))))





(define (fact-2 n)
  "Entry function for the tail recursion"
  
  (define (fact-tail n a)
  " Tail recursive version"
  (if (zero? n)
      a
      (fact-tail (- n 1) (* n a))))
  (fact-tail n 1))


(define n 3)

;(trace fact)
;(trace fact-2)



(define (! n)
  " Using a named let for tail recursion "
  (let loop
    ([n n] [a 1])
    (if (zero? n)
        a
        (loop (- n 1) (* n a)))))

(define (fibo-1 n)
  (cond
    [(= n 0) 0]
    [(= n 1) 1]
    [else (+ (fibo-1 (- n 1)) (fibo-1 (- n 2)))]))

(define (fibo-2 n)
  (cond
    [(= n 0) 0]
    [(= n 1) 1]
    [else (let loop
            ([n (- n 1)] [a 0] [b 1])
            (if (zero? n)
                b
                (loop (sub1 n) b (+ a b))))]))
                         