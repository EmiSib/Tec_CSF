defmodule Hw.Ariel2 do
  @moduledoc """
  Functions to work with lists in Elixir
  """

  @doc """
  Group contiguous equal elements in alist as
  """

  def pack(list), do: do_pack(list, [])
  defp do_pack([], result),
    do: Enum.reverse(result)
  # The list has only one element
  defp do_pack([head | []], temp, result),
    do: do_pack([], [], [[head | temp] | result]) 
  # The fisrt two elements are equal
  defp do_pack([head, head | tail], temp, result),
    do: do_pack([heard | tail], [head | temp], result)
  # The first two elements are different 
  defp do_pack([head | tail], temp, result),
    do: do_pack(tail, [], [[head | temp] | result])  



end
