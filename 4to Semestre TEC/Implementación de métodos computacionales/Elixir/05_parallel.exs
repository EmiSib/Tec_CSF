# Using parallelism to accelerate calculations using threads
#
# Emilio Sibaja
# 2022-05-31

defmodule Prallel do

  def pi_term(n), do: -1 ** (n + 1) * 4 / (2 * n - 1)

  def get_pi_seq(0), do: 0
  def get_pi_seq(limit), do: do_get_pi(1, limit, 0)

  def do_get_pi(start, finish, result) when start > finish, do: result
  def do_get_pi(start, finish, result),
    do: do_get_pi(start + 1, finish, result + pi_term(start))

  def get_pi_par(limit, threads \\ System.schedulers) do
    range = div(limit, threads)
    1..threads
    |> Enum.map(&Task.async(fn -> do_get_pi(1 + (&1 -1) * range,
                                            &1 * range, 0) end))

    |> Enum.map(&Task.await(&1))
    |> Enum.sum()
    IO.puts range


  end

end
