# First functions in Elixir
#
# Emilio Sibaja Villarreal
# 08/04/2022

defmodule Learn
do

    def fact(x)
    do
        if x == 0
        do
            1
            else
                x * fact (x-1)
        end
    end

    def fact(0), do: 1
    def fact(x), do: x * fact(x - 1)

    def fact_tail(x)
    do
        do_fact_tail(x, 1)

    end

    def do_fact_tail(x,a)
    do
        if x == 0 do

        end

    end


end

IO.puts(Learn.fact(5))
