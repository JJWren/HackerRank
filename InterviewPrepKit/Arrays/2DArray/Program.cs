using System;
using System.Collections.Generic;

namespace _2DArray
{
    class Program
    {
        static void Main(string[] args)
        {
            // https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

            // There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

            static int hourglassSum(List<List<int>> arr)
            {
                int greatestSum = int.MinValue;

                // For getting each row sums for each hourglass
                for (int i = 0; i < arr.Count - 2; i++) // tracks each row
                {
                    for (int j = 0; j < arr[i].Count - 2; j++)  // tracks each value in row
                    {
                        int sumTop = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

                        int sumMid = arr[i + 1][j + 1];

                        int sumBot = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

                        // Get total sum from each row
                        int sumHG = sumTop + sumMid + sumBot;
                        if (sumHG > greatestSum)
                        {
                            greatestSum = sumHG;
                        }
                    }
                }
                return greatestSum;
            }
        }
    }
}
