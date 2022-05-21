
#|

Emilio Sibaja Villarreal
A01025139

|#


(provide C->F F->C)

(define (C->F cel)
  (+ (* cel 1.8) 32))


(define (F->C fah)
  (/(- fah 32) 1.8))
  