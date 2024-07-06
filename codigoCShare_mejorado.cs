using System;
using System.Linq;

class Program
{
    const int MAX = 100;

    /// <summary>
    /// Calculates the sum of elements in an array.
    /// </summary>
    /// <param name="arr">Array of integers.</param>
    /// <returns>The sum of the array elements.</returns>
    static int Sum(int[] arr)
    {
        return arr.Sum();
    }

    /// <summary>
    /// Validates and parses user input to an integer.
    /// </summary>
    /// <param name="prompt">Prompt to display to the user.</param>
    /// <param name="min">Minimum valid value.</param>
    /// <param name="max">Maximum valid value.</param>
    /// <returns>Parsed integer.</returns>
    static int GetValidatedInteger(string prompt, int min, int max)
    {
        Console.Write(prompt);
        int input;
        while (!int.TryParse(Console.ReadLine(), out input) || input < min || input > max)
        {
            Console.WriteLine($"Invalid input. Please provide a digit ranging from {min} to {max}.");
        }
        return input;
    }

    static void Main()
    {
        var n = GetValidatedInteger("Enter the number of elements (1-100): ", 1, MAX);

        var arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for (var i = 0; i < n; i++)
        {
            arr[i] = GetValidatedInteger($"Enter integer #{i + 1}: ", int.MinValue, int.MaxValue);
        }

        var total = Sum(arr);
        Console.WriteLine($"Sum of the numbers: {total}{Environment.NewLine}");
    }
}